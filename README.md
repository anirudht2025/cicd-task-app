Project Title: End-to-End CI/CD Pipeline with Monitoring on AWS

I designed and implemented a production-style DevOps workflow that automates the application lifecycle from code commit to deployment and infrastructure monitoring.

The project begins with a Node.js application hosted in a GitHub repository. GitHub Webhooks are configured to trigger a Jenkins Declarative Pipeline automatically on every code push. This eliminates manual intervention and ensures continuous integration.

The Jenkins pipeline performs the following stages:
1. Source Code Checkout – Jenkins pulls the latest code from the GitHub repository.
2. Dependency Installation – Required Node.js packages are installed using npm.
3. Build and Containerization – A Docker image is built using a Dockerfile, packaging the application and its runtime environment.
4. Image Versioning – The image is tagged dynamically using Jenkins build numbers to ensure traceable and reproducible builds.
5. Image Push – The validated Docker image is pushed securely to Docker Hub using stored credentials.

For deployment, the application is executed as a Docker container on an AWS EC2 instance. Kubernetes manifests (Deployment and Service YAML files) were also created and tested in a Minikube environment to demonstrate understanding of container orchestration concepts such as replicas, rolling updates, health checks, and service exposure.

Infrastructure observability was implemented using a monitoring stack:
- Node Exporter was installed on the EC2 instance to expose system-level metrics including CPU, memory, disk, and network usage.
- Prometheus was configured to scrape these metrics at regular intervals.
- Grafana was integrated with Prometheus as a data source to visualize real-time dashboards, enabling infrastructure health monitoring.

Throughout the project, real-world troubleshooting scenarios were handled, including disk space exhaustion, networking configuration, port exposure, and container image pull failures. This provided practical experience in cloud infrastructure debugging and system reliability practices.

Key Technologies Used:
AWS EC2, Jenkins, GitHub Webhooks, Docker, Docker Hub, Kubernetes (Minikube), Prometheus, Grafana, Node Exporter, Linux.

Skills Demonstrated:
CI/CD pipeline automation, containerization, image versioning, cloud infrastructure setup, monitoring and observability, DevOps troubleshooting, and basic Kubernetes orchestration concepts.
