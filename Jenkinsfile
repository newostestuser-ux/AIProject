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
            echo WEB_DB_URL=%WEB_DB_URL%
            echo WEB_APP_URL=%WEB_APP_URL%
            echo WEB_APP_REG_URL=%WEB_APP_REG_URL%
            ) > .env
            '''
        }
    }
}
        stage('Debug') {
    steps {
        bat 'dir'
    }
}

        stage('Build Docker Image') {
            steps {
                bat 'docker compose build --no-cache'
            }
        }

    stage('Clean Reports') {
    steps {
        deleteDir()
    }
}
stage('Debug Workspace') {
    steps {
        bat '''
        echo WORKSPACE=%WORKSPACE%
        cd
        dir
        '''
    }
}
        stage('Run Playwright Tests') {
    steps {
        dir("${WORKSPACE}") {
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

            bat 'docker compose down --remove-orphans || exit /b 0'
        }

        success {
            echo '✅ Playwright suite passed successfully.'
        }

        failure {
            echo '❌ Playwright suite failed. Check Test Results and archived artifacts.'
        }
    }
}