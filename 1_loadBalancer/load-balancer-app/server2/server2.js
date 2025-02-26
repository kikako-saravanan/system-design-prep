const express = require("express");
const client = require('prom-client'); // Prometheus client library

const app = express();
const PORT = 3002;


// Create a Prometheus registry
const register = new client.Registry();
if (!register.getSingleMetric('process_cpu_user_seconds_total')) {
    client.collectDefaultMetrics({ register });
}


// Create a metric to measure HTTP request duration
const httpRequestDuration = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 0.3, 0.5, 1, 1.5, 2, 3] // Buckets for response time
  });

// Register the metric
register.registerMetric(httpRequestDuration);



// Middleware to measure request duration
app.use((req, res, next) => {
    const end = httpRequestDuration.startTimer();
    res.on('finish', () => {
      end({ method: req.method, route: req.url, status_code: res.statusCode });
    });
    next();
  });
  
  // Metrics endpoint for Prometheus to scrape
  app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  });

app.get("/", (req, res) => {
    res.send("Response from Server 2");
});

app.listen(PORT, () => {
    console.log(`Server 2 is running on port ${PORT}`);
});
