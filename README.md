# End-to-End CI/CD Pipeline with Monitoring on AWS

## Overview
Designed and implemented a production-style DevOps workflow that automates the application lifecycle from code commit to container deployment and infrastructure monitoring.

## Continuous Integration (CI)
- Source code hosted on GitHub.
- GitHub Webhooks configured to automatically trigger Jenkins on every code push.
- Jenkins Declarative Pipeline stages:
  - Code checkout from GitHub  
  - Dependency installation using npm  
  - Application build  
  - Docker image creation using a Dockerfile  
  - Dynamic image tagging using Jenkins build numbers  
  - Secure push of Docker images to Docker Hub  

## Containerization and Deployment
- Application packaged as a Docker container to ensure consistent runtime environments.
- Docker container deployed on AWS EC2 for application hosting.
- Kubernetes manifests (Deployment and Service YAML files) created and tested in a Minikube setup to demonstrate understanding of:
  - Pod replicas  
  - Rolling updates  
  - Liveness and readiness probes  
  - Service exposure using NodePort  

## Monitoring and Observability
- Node Exporter installed on EC2 to expose system-level metrics.
- Prometheus configured to scrape infrastructure metrics such as CPU, memory, disk, and network usage.
- Grafana integrated with Prometheus to visualize real-time dashboards for infrastructure health monitoring.

## Troubleshooting and Reliability
- Handled real-world infrastructure issues including disk space exhaustion, container image pull failures, and network port configuration.
- Gained practical experience in Linux system management, cloud resource handling, and DevOps troubleshooting.

## Technologies Used
AWS EC2, Jenkins, GitHub Webhooks, Docker, Docker Hub, Kubernetes (Minikube), Prometheus, Grafana, Node Exporter, Linux.

## Skills Demonstrated
CI/CD automation, containerization, cloud deployment, monitoring setup, infrastructure troubleshooting, and Kubernetes orchestration fundamentals.
