pipeline {
    agent {
        label 'builtin'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.tobycm.systems/', 'TobyRegistry') {
                        def dockerImage = docker.build("registry.tobycm.systems/vsus-landing-page", "-f Dockerfile .")
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Verify') {
            steps {
                sh 'echo $REGISTRY_BUILD_OUTPUT_DIGEST'
            }
        }
    }
}