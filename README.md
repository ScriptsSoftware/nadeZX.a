┌──────────────────────────────┐
│       GitHub Repository      │
└──────────────┬───────────────┘
               ↓
┌──────────────────────────────┐
│ Cloudflare Pages Deployment  │
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


API Endpoints
