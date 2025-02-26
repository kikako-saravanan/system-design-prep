# Load Balancer App with Nginx, Docker, Prometheus, and Grafana

## Overview
This project demonstrates how to set up a **load balancer** using **Nginx**, **Docker**, and **Docker Compose** while integrating **Prometheus** for monitoring and **Grafana** for visualization. The system ensures high availability, fault tolerance, and observability for a scalable backend application.

## Features
- **Load balancing** using Nginx
- **Docker-based deployment** for easy setup
- **Monitoring and logging** with Prometheus and Grafana
- **Health checks** for backend services
- **Scalability** with multiple backend instances

## Architecture
- **Nginx** acts as a reverse proxy and load balancer
- **Backend services** run in separate Docker containers
- **Prometheus** scrapes metrics from backend services
- **Grafana** visualizes the metrics collected by Prometheus

## Setup and Installation

### Prerequisites
Ensure you have the following installed:
- **Docker** & **Docker Compose**

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd load-balancer-app
   ```
2. Start the application:
   ```bash
   docker-compose up --build -d
   ```
3. Verify if the load balancer is working:
   ```bash
   curl http://localhost
   ```
4. Check logs for debugging:
   ```bash
   docker logs nginx
   ```

## Monitoring Setup

### Prometheus Setup
To restart all containers and apply changes:
```bash
docker-compose down
docker-compose up --build -d
```

To enter a backend container:
```bash
docker exec -it server1 /bin/sh
```

Check if the `/metrics` endpoint is running inside the container:
```bash
curl http://localhost:3001/metrics
```

### Grafana Setup
To connect **Prometheus** to **Grafana**:
1. Log into Grafana at `http://<your-ip>:3000/`
2. Navigate to **Configuration > Data Sources**
3. Click **Add Data Source**
4. Select **Prometheus**
5. Set the **URL** to `http://prometheus:9090`
6. Click **Save & Test**

## Useful Commands

### Docker Commands
| Command | Description |
|---------|-------------|
| `docker-compose up --build` | Builds and starts the containers |
| `docker-compose down` | Stops and removes all containers |
| `docker logs nginx` | Shows logs for the Nginx container |

### Prometheus Commands
| Command | Description |
|---------|-------------|
| `docker-compose down` | Stops and removes all containers |
| `docker-compose up --build -d` | Rebuilds and starts all containers in detached mode |
| `docker exec -it server1 /bin/sh` | Enters the `server1` container for debugging |
| `curl http://localhost:3001/metrics` | Checks if the `/metrics` endpoint is available inside the container |

### Grafana Configuration
| Step | Action |
|------|--------|
| 1 | Log into Grafana at `http://<your-ip>:3000/` |
| 2 | Go to **Configuration > Data Sources** |
| 3 | Click **Add Data Source** |
| 4 | Select **Prometheus** |
| 5 | Set **URL** to `http://prometheus:9090` |
| 6 | Click **Save & Test** |

## Conclusion
This project showcases how to set up a scalable backend system with load balancing, monitoring, and observability using Nginx, Docker, Prometheus, and Grafana. This setup is useful for high-availability applications requiring performance tracking and resilience.

---
**Next Steps:** Implement alerts in Grafana to get notified of critical events in real-time!

