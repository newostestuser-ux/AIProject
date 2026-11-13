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
        stage('Clean Reports') {
            steps {
            bat '''
            if exist reports rmdir /s /q reports
            if exist allure-results rmdir /s /q allure-results

            mkdir reports
            mkdir allure-results
            '''
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
            bat 'docker compose down --remove-orphans || exit /b 0'
            archiveArtifacts(
                artifacts: 'allure-results/**/*, allure-report/**/*, reports/**/*, custom-reports/**/*, test-results/**/*, traces/**/*',
                allowEmptyArchive: true
            )
        }

        success {
            echo 'Playwright suite passed successfully.'
        }

        failure {
            echo 'Playwright suite failed. Check the logs and generated artifacts.'
        }
    }
}