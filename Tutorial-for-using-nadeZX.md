# Tutorial for using nadeZX.a

# install nadeZX.a

npm install nadezx

## Introduction

nadeZX.a is an API powered by Cloudflare Pages Functions.

## API Status

Check if the API is online:

```bash
curl https://nadezxa.pages.dev/api/data
```

Response:

```json
{
  "api": "nadeZX.a",
  "message": "API working"
}
```

## Send Data

Send JSON data to the API:

```bash
curl -X POST https://nadezxa.pages.dev/api/data \
-H "Content-Type: application/json" \
-d '{"name":"Example","message":"Hello"}'
```

Response:

```json
{
  "received": {
    "name": "Example",
    "message": "Hello"
  }
}
```

## Create API Key

Generate a new API key:

```bash
curl -X POST https://nadezxa.pages.dev/api/key/create
```

Response:

```json
{
  "api": "nadeZX.a",
  "key": "NZXA-xxxxxxxx"
}
```

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/data` | Check API status |
| POST | `/api/data` | Send JSON data |
| POST | `/api/key/create` | Generate API Key |
