pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'echo new buildpipe =D'
                sh 'docker ps'
                sh 'npm install' 
            }
        }
    }
}
