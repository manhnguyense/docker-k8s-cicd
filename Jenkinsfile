pipeline {
    agent { dockerfile true }
    stages {
        stage('Build') {
            steps {
                echo 'Docker build...'
                sh 'docker build -t docker-react -f Dockerfile.dev .'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'docker run -e CI=true docker-react npm run test -- --coverage'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
