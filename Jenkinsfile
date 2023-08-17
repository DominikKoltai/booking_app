pipeline {
    agent any

    triggers {
        pollSCM '*/5 * * * *'
    }

    environment {
        MONGO = credentials('MONGO')
        JWT = credentials('JWT')
    }

    stages {
        stage('Client Tests') {
            steps {
                dir('client') {
                    sh 'npm install'
                    sh 'npm run test'
                }
            }
        }
        stage('Server Tests') {
            steps {
                dir('api') {
                    sh 'npm install'
                    sh 'export MONGO=$MONGO'
                    sh 'export JWT=$JWT'
                    sh 'npm run test'
                }
            }
        }
        stage('Build Images') {
            steps {
                sh 'docker build -t dominikkoltai/booking_app_client:latest client'
                sh 'docker build -t dominikkoltai/booking_app_api:latest api'
            }
        }
        stage('Push Images to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'PASSWORD_VAR', usernameVariable: 'USERNAME_VAR')]) {
                    sh "docker login -u $USERNAME_VAR -p $PASSWORD_VAR"
                    sh 'docker push dominikkoltai/booking_app_client:latest'
                    sh 'docker push dominikkoltai/booking_app_api:latest'
                }
            }
        }
    }
}