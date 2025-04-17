## Research Summary

**What is a Cloudflare Worker?**  
Cloudflare Workers is a serverless platform that runs JavaScript at the edge, enabling developers to build applications without traditional servers.

**How does a Worker handle HTTP requests and return responses?**  
Workers use the `fetch` event to intercept and respond to HTTP requests, returning a `Response` object with appropriate headers and content.

**What is Cloudflare D1? What are some pros and cons of using it?**  
Cloudflare D1 is a distributed, edge-hosted SQLite database. Pros: familiar SQL syntax, edge-speed access; Cons: still in beta, potential for write conflicts in highly concurrent apps.

**How does client-side JavaScript call an external API?**  
Client-side JS uses `fetch()` or XMLHttpRequest to send requests to external APIs and handles responses with promises or async/await.

**What is the benefit of deploying APIs to the edge instead of traditional servers?**  
Edge APIs reduce latency by serving requests closer to users and improve scalability without managing physical servers.
