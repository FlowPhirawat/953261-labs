
// 953261 Lab 1 — My first Node.js server
// Run: npm start then open http://localhost:3000

import http from "node:http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  // 1. GET / - Home page
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    res.end("<h1>Hello, Flow</h1><p>My student ID is 692115033</p>");
    return;
  }

  // 2. GET /api/me - Return JSON
  if (req.method === "GET" && req.url === "/api/me") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
      name: "Flow",
      studentId: "692115033",
      favouriteLanguage: "JavaScript"
    }));
    return;
  }

  // 3. Any other path - 404 Not Found
  res.writeHead(404, {
    "Content-Type": "text/html; charset=utf-8"
  });
  res.end("<h1>404 Not Found</h1><p>Page not found.</p>");
});

server.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});