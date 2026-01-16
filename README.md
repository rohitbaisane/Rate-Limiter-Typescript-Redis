# 🚦 Rate Limiter Simulation (Redis + TypeScript)

A basic rate limiter simulation service built using **TypeScript**, **Express**, and **Redis**.

This project demonstrates how rate limiting works internally using atomic Redis operations and allows developers to simulate request limits without forwarding traffic to a backend service.

## 📌 Project Overview

This project implements a **fixed-window rate limiting strategy** backed by Redis.

- ✅ Requests tracked **per IP address**
- ✅ Redis used as **centralized counter store**
- ✅ Service **does NOT proxy/forward requests**
- ✅ Responds with **allow/block status only**
- ✅ Perfect for **learning & demonstration**


## 🔌 API Endpoint

`GET /check`

Simulates a rate-limited request.

### ✅ Allowed Request

```json
{
	"message": "Request is allowed"
}
```

### ❌ Rate-Limited Request

```json
{
    "message": "Too Many Requests",
    "retryAfterSeconds": 37
}
```

> The response does not forward the request to any backend service.
> It only indicates whether the request would be allowed under the current rate-limit rules.

## ⚙️ Environment Configuration

Create a .env file with the following variables:

```
PORT=3000
MAX_LIMIT=10
```

PORT = port in which server runs.
MAX_LIMIT = maximum number of requests allowed per IP within the time window.

> Default window duration is 60 seconds.

## How to Run project locally 

```
npm i 

npm start
```

> Redis must be installed locally and running on 6379.

## 🚀 Future Improvements

- Sliding window rate limiting
- Token bucket / leaky bucket algorithms
- Redis Lua scripts for fully atomic execution
- Middleware-based implementation