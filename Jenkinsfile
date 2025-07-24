pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'toll-dashboard'
        DOCKER_TAG = "${BUILD_NUMBER}"
        GITHUB_REPO = 'https://github.com/Samudini-Chamodya/toll-dashboard.git'
        CONTAINER_NAME = 'toll-dashboard-app'
        PORT = '3000'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                git branch: 'main', url: "${GITHUB_REPO}"
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                    docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Stop Existing Container') {
            steps {
                echo 'Stopping and removing existing container...'
                script {
                    bat '''
                        @echo off
                        for /f "tokens=*" %%i in ('docker ps -q -f name=%CONTAINER_NAME%') do (
                            docker stop %CONTAINER_NAME%
                        )
                        for /f "tokens=*" %%i in ('docker ps -aq -f name=%CONTAINER_NAME%') do (
                            docker rm %CONTAINER_NAME%
                        )
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                script {
                    bat """
                        docker run -d --name %CONTAINER_NAME% -p %PORT%:80 --restart unless-stopped %DOCKER_IMAGE%:latest
                    """
                }
            }
        }

        stage('Health Check') {
            steps {
                echo 'Performing health check...'
                script {
                    bat '''
                        timeout /t 10
                        curl -f http://localhost:%PORT% || exit /b 1
                        echo Application is running successfully!
                    '''
                }
            }
        }

        stage('Cleanup') {
            steps {
                echo 'Cleaning up old Docker images...'
                script {
                    bat '''
                        docker image prune -f
                        for /f "skip=3 tokens=3" %%i in ('docker images %DOCKER_IMAGE% ^| findstr /v latest') do (
                            docker rmi %%i
                        )
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
            echo "Application deployed at: http://localhost:${PORT}"
        }
        failure {
            echo 'Pipeline failed!'
            script {
                bat '''
                    for /f "tokens=*" %%i in ('docker ps -q -f name=%CONTAINER_NAME%') do (
                        docker logs %CONTAINER_NAME%
                    )
                '''
            }
        }
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}
