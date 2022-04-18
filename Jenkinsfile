pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('deploy') {
            steps {
                sh 'export JENKINS_NODE_COOKIE=dontKillMe && npm run serve >> ./output.logs &'
            }
        }
    }
}
