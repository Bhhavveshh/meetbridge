# MeetBridge

A browser-based video meeting demo with WebRTC peer connections, Socket.IO signaling, room chat, and MongoDB-backed accounts and meeting history.

## What it includes

- Account registration and login, plus guest room entry.
- Meeting links, microphone/camera controls, and screen sharing.
- Room chat delivered through Socket.IO.
- Meeting history associated with signed-in users.

## Architecture

```text
frontend/  React + Material UI + socket.io-client       localhost:3000
backend/   Express + Socket.IO + Mongoose              localhost:8000
media      Browser-to-browser WebRTC connections
```

The backend relays signaling messages; it is not a media server. Room membership and chat are held in memory and reset when the backend restarts.

## Requirements

- Node.js 24 and npm (the local verification environment uses Node.js 24.14.1).
- Your own MongoDB instance, either local or MongoDB Atlas.
- Separate terminal windows for the frontend and backend processes.

Commands below work in PowerShell. If PowerShell blocks `npm.ps1`, use `npm.cmd` in place of `npm`.
Copy the supplied `.env.example` files to `.env` before starting. Never commit `.env` files.
Frontend environment variables are public build-time settings: put only service URLs in them, never passwords or API keys.

## Run locally

Backend:

```powershell
cd backend
npm install
Copy-Item .env.example .env
# Set MONGODB_URI to your own database URI.
npm start
```

Frontend, in another terminal:

```powershell
cd frontend
npm install
Copy-Item .env.example .env
npm start
```

The backend loads `.env` through Node's built-in environment-file support. `REACT_APP_API_URL` controls both HTTP API calls and Socket.IO signaling. The previous external backend URL has been removed.

## Demo flow

1. Open two browser windows and allow camera/microphone access.
2. Enter the same room link in both windows.
3. Test mute, camera toggle, screen sharing, chat, and leaving the call.
4. Register/login separately to explore meeting history.

These are manual validation steps, not a claim that a two-device media call was tested in this edition.

## Build

Run `npm run build` in `frontend`; output is `build/`.

## Before public hosting

Camera and microphone access require HTTPS outside localhost. The current ICE configuration has a public STUN server but no TURN relay, so restrictive networks can prevent calls. Use a backend host that supports persistent WebSocket connections. Room access and token lifecycle need a security review before use with private meetings.

## Deployment status

Hosting is a separate next step. No live application URL or successful cloud deployment is claimed here.
Use your own database and service accounts. Set the frontend API URL to your deployed backend URL, then rebuild the frontend.
See [SETUP.md](SETUP.md) for service configuration and [VERIFICATION.md](VERIFICATION.md) for the checks actually performed.

## Source and licensing

Adapted from an educational source project; the imported implementation is not claimed as original work.
See [ATTRIBUTION.md](ATTRIBUTION.md) for the source URL, exact imported revision, and licensing notes.
