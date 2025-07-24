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
                    sh '''
                        if [ $(docker ps -q -f name=${CONTAINER_NAME}) ]; then
                            docker stop ${CONTAINER_NAME}
                        fi
                        if [ $(docker ps -aq -f name=${CONTAINER_NAME}) ]; then
                            docker rm ${CONTAINER_NAME}
                        fi
                    '''
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                script {
                    sh """
                        docker run -d \
                        --name ${CONTAINER_NAME} \
                        -p ${PORT}:80 \
                        --restart unless-stopped \
                        ${DOCKER_IMAGE}:latest
                    """
                }
            }
        }
        
        stage('Health Check') {
            steps {
                echo 'Performing health check...'
                script {
                    sh '''
                        sleep 10
                        curl -f http://localhost:${PORT} || exit 1
                        echo "Application is running successfully!"
                    '''
                }
            }
        }
        
        stage('Cleanup') {
            steps {
                echo 'Cleaning up old Docker images...'
                script {
                    sh '''
                        docker image prune -f
                        docker images | grep ${DOCKER_IMAGE} | grep -v latest | awk '{print $3}' | head -n -3 | xargs -r docker rmi
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
                sh '''
                    if [ $(docker ps -q -f name=${CONTAINER_NAME}) ]; then
                        docker logs ${CONTAINER_NAME}
                    fi
                '''
            }
        }
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}