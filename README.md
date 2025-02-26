# system-design-prep
This repo will be single source of truth for System Design.

# Load balancing app

docker-compose up --build
curl http://localhost

docker logs nginx

# Prometheus
1️⃣ Restart all containers:

docker-compose down
docker-compose up --build -d

2️⃣ Enter the server1 container:

docker exec -it server1 /bin/sh

3️⃣ Inside the container, check if the /metrics endpoint is running:

curl http://localhost:3001/metrics