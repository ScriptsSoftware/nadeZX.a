nadeZX.a

API powered by Cloudflare Pages Functions.

Architecture

┌──────────────────────────────┐
│       GitHub Repository      │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│  Cloudflare Pages Deployment │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────────────────────┐
│       nadeZX.a Functions by ScriptsSoftware  │
│              Cloudflare Pages API            │
└──────────────┬───────────────────────────────┘
               │
      ┌────────┼────────┐
      │        │        │
      ▼        ▼        ▼

GET /api/data
└── API Status

{
  "api": "nadeZX.a",
  "message": "API working"
}

POST /api/data
└── Receives JSON and responds with data

POST /api/key/create
└── Generates API Key
    NZXA-xxxxxxxx

Base URL

https://nadezxa.pages.dev

API Endpoints

Method| Endpoint| Description
GET| /api/data| Check API status
POST| /api/data| Send JSON data
POST| /api/key/create| Generate API Key

Examples

Check API status

curl https://nadezxa.pages.dev/api/data

Send JSON data

curl -X POST https://nadezxa.pages.dev/api/data \
-H "Content-Type: application/json" \
-d '{"name":"Example","message":"Hello"}'

Generate an API Key

curl -X POST https://nadezxa.pages.dev/api/key/create

Documentation

- Tutorial-for-using-nadeZX.md

License

MIT
