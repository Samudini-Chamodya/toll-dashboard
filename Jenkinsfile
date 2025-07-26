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
                echo 'Installing Node.js and building the React app...'
                sh '''
                    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                    sudo apt-get install -y nodejs
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
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Stop Existing Container') {
            steps {
                echo 'Stopping existing container (if any)...'
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying container...'
                sh '''
                    docker run -d -p 3000:80 --name $CONTAINER_NAME $IMAGE_NAME:$IMAGE_TAG
                '''
            }
        }

        stage('Health Check') {
            steps {
                echo 'Running health check...'
                sh 'curl -f http://localhost:3000 || exit 1'
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
            sh 'docker logs $CONTAINER_NAME || true'
        }
    }
}
