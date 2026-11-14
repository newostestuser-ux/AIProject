pipeline {
    agent any
    
    options {
    timestamps()
    timeout(time: 45, unit: 'MINUTES')
    buildDiscarder(logRotator(numToKeepStr: '10'))
    }
    
    environment {
        CI = 'true'
    }
    
    stages {
    
    stage('Checkout') {
        steps {
            checkout scm
        }
    }
    
    stage('Verify Docker') {
        steps {
            bat 'docker --version'
            bat 'docker compose version'
        }
    }
    
    stage('Create Env File') {
        steps {
            withCredentials([
            string(credentialsId: 'WEB_DB_URL', variable: 'WEB_DB_URL'),
            string(credentialsId: 'WEB_APP_URL', variable: 'WEB_APP_URL'),
            string(credentialsId: 'WEB_APP_REG_URL', variable: 'WEB_APP_REG_URL')
            ]) {
        
            bat '''
                (
                echo APP_ENV=qa
                echo WEB_DB_URL=%WEB_DB_URL%
                echo WEB_APP_URL=%WEB_APP_URL%
                echo WEB_APP_REG_URL=%WEB_APP_REG_URL%
                ) > .env
                '''
        }
        }
    }
    
    stage('Debug Workspace') {
        steps {
            bat '''
            echo ===== WORKSPACE =====
            cd
            echo.
            dir
            '''
        }
    }
    
    stage('Build Docker Image') {
        steps {
            bat 'docker compose build --no-cache'
        }
    }
    
    stage('Clean Reports') {
        steps {
            bat '''
            if exist allure-report rmdir /s /q allure-report
            if exist reports rmdir /s /q reports
            if exist test-results rmdir /s /q test-results
            '''
        }
    }
    
    stage('Run Playwright Tests') {
        steps {
            bat 'docker compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from playwright-tests'
            }
        }
    }
    
    post {
    
    always {
        
        junit(
        testResults: 'reports/results.xml',
        allowEmptyResults: true
        )
    
    archiveArtifacts(
        artifacts: '''
        allure-results/**/*,
        allure-report/**/*,
        reports/**/*,
        custom-reports/**/*,
        test-results/**/*,
        traces/**/*,
        trace/**/*
        ''',
        allowEmptyArchive: true
    )
    
         bat 'docker compose down --remove-orphans'
         }
    
        success {
            echo 'Playwright suite passed successfully.'
            }
        
        failure {
            echo 'Playwright suite failed. Check reports and artifacts.'
            }
    }
}