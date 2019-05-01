pipeline {
  agent {
    docker {
      image 'node:10.6-alpine'
    }

  }
  stages {
    stage('Setup') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
  environment {
    NODE_ENV = 'development'
  }
}
