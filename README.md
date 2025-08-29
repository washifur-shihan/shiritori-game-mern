# Shiritori Multiplayer (MERN)

## Setup
```bash
git clone <repo>
cd shiritori-mern
```

### Backend
```bash
cd server
npm install
# add .env file with MONGO_URI and PORT
npm run dev
```

### Frontend
```bash
cd client
npm install
npm start
```

## Gameplay
- Players take turns entering words.
- Each word must start with the **last letter** of the previous word.
- Min 4 letters, must be valid English word, cannot repeat.
- If invalid/timeout → -1 point. Valid word → +1 point.
- 15s timer each turn.