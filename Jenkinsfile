pipeline {
    agent any

    environment {
        IMAGE_NAME = "toll-dashboard"
        IMAGE_TAG = "v1"
        CONTAINER_NAME = "toll-dashboard-app"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                git url: 'https://github.com/Samudini-Chamodya/toll-dashboard.git', branch: 'main'
            }
        }

        stage('Install Node.js and Build App') {
            steps {
                echo 'Installing Node.js dependencies and building the React app...'
                bat '''
                    node -v
                    npm -v
                    npm install
                    npm run build
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t %IMAGE_NAME%:%IMAGE_TAG% .'
            }
        }

        stage('Stop Existing Container') {
            steps {
                echo 'Stopping existing container (if any)...'
                bat '''
                    docker stop %CONTAINER_NAME% || exit 0
                    docker rm %CONTAINER_NAME% || exit 0
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying container...'
                bat '''
                    docker run -d -p 3000:80 --name %CONTAINER_NAME% %IMAGE_NAME%:%IMAGE_TAG%
                '''
            }
        }

        stage('Health Check') {
            steps {
                echo 'Running health check...'
                bat 'powershell -Command "Invoke-WebRequest -Uri http://localhost:3000 -UseBasicParsing | Out-Null" || exit 1'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
        failure {
            echo 'Pipeline failed!'
            bat 'docker logs %CONTAINER_NAME% || exit 0'
        }
    }
}