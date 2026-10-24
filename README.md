# Al-Wallet

A React + Vite frontend for the Al-Wallet smart account dashboard. The UI currently uses local mock data and is organized so backend API calls can be added through the service layer.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

The dashboard uses mock data while no backend is configured. The API boundary is in `src/services/api.js`; example data is in `src/data/mockData.js`. When backend integration begins, create a local `.env` with `VITE_API_BASE_URL`. Environment files are excluded by `.gitignore`.

## Production build

```bash
npm run build
npm run preview
```

## Push to GitHub

Create an empty repository on GitHub, then run these commands from the project folder (replace the URL with your repository URL):

```bash
git add .
git commit -m "Set up Al-Wallet dashboard"
git branch -M main
git remote add origin https://github.com/<your-account>/<your-repository>.git
git push -u origin main
```

If this local repository already has an `origin` remote, update it with `git remote set-url origin <repository-url>` instead of adding it again.
