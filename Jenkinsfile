pipeline {
    agent {
        label 'docker'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.tobycm.systems/', 'TobyRegistry') {
                        def dockerImage = docker.build("registry.tobycm.systems/vsus-landing-page", "-f Dockerfile .")
                        dockerImage.push()
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
