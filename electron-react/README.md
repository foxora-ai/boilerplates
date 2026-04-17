# Electron + React Boilerplate

Cross-platform desktop app with Electron, React 19, TypeScript, and Tailwind v4.

## Stack

- **Electron 33** — desktop shell
- **electron-vite** — fast build + HMR
- **React 19** — UI
- **TypeScript 5** — strict mode
- **Tailwind CSS v4** — styling

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev with hot reload |
| `npm run build` | Production build |
| `npm run package` | Package to distributable |

## Project Structure

```
src/
  main/
    index.ts       # Electron main process
  preload/
    index.ts       # Context bridge (IPC bridge)
  renderer/
    index.html
    src/
      App.tsx      # React UI
      main.tsx     # React entry
      index.css    # Tailwind
electron.vite.config.ts
```

## IPC Pattern

Main process exposes APIs via `ipcMain.handle`, preload bridges them via `contextBridge`, renderer calls via `window.api.*`.
