pipeline {
    agent any
    tools {
        nodejs "NodeJS" // Assumes a Node.js installation named "NodeJS" in Jenkins global configuration
    }
    environment {
        // Define environment variables if needed (e.g., for deployment)
        APP_NAME = "toll-admin"
        BUILD_DIR = "build"
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from SCM (e.g., Git)
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Run tests defined in package.json
                sh 'npm test -- --passWithNoTests'
            }
        }
        stage('Build') {
            steps {
                // Build the React app for production
                sh 'npm run build'
            }
        }
        stage('Archive Artifacts') {
            steps {
                // Archive the build artifacts
                archiveArtifacts artifacts: "${BUILD_DIR}/**", allowEmptyArchive: true
            }
        }
        stage('Deploy') {
            when {
                // Only deploy on main branch
                branch 'main'
            }
            steps {
                // Placeholder: Add deployment steps (e.g., AWS S3, Netlify, or server deployment)
                echo 'Deploying to production...'
                // Example for AWS S3:
                // sh 'aws s3 sync ./build/ s3://your-bucket-name --delete'
            }
        }
    }
    post {
        success {
            echo 'Build and deployment completed successfully!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
        always {
            // Clean up workspace after build
            cleanWs()
        }
    }
}