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
                bat 'copy .env.example .env'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker compose build --no-cache'
            }
        }

        sstage('Clean Reports') {
    steps {
        deleteDir()
    }
}
        stage('Run Playwright Tests') {
            steps {
                bat 'docker compose up --abort-on-container-exit --exit-code-from playwright-tests'
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