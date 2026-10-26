# Dinner Deck v1.4 — Theme Studio & About/Help

Local-first dinner planner, personal recipes, shopping lists, history, and 30 radically different UI themes. GitHub Pages-ready, offline-friendly Progressive Web App.

## New in v1.4

- **30 themes in 5 categories:** six original classics plus Pastel Playground, Neon & Digital, Retro & Experimental, and Atmospheres. Beyond colours: different fonts, border styles, cards, background patterns, radii, gradients and glow effects.
- **Theme Studio** is available in Settings and from the small sun icon at the top on every page. Switching themes changes presentation only; recipes and plans are unaffected.
- **About & Help** page on desktop sidebar and through Settings on mobile. Includes a getting-started walkthrough, each tab explained, data storage and backups, offline/PWA installation instructions, FAQ, and troubleshooting tips.
- All v1.3 planner, individual meal rerolls, leftover handling, ratings, history, recipes, shopping, pantry, sharing, backup/restore, and data format retained.

## Updating GitHub Pages

1. In your currently installed Dinner Deck, **Settings → Export JSON**. Keep that backup.
2. Extract the ZIP, and upload all contained files/folders to the **root** of your existing GitHub repository, replacing old files. Commit.
3. Ensure GitHub Pages uses `main` and `/ (root)` under **Settings → Pages**.
4. Reload the website once online. The service worker cache name changed so the updated app files are fetched and cached. If your home-screen app shows old files, restart/reopen it online.

## Your data, accurately explained

Recipes, notes, photos, meal plans, personal preferences, pantry and shopping state are saved in this browser's **localStorage** (key `dinner-deck-v1-data`). There are no accounts, cloud databases or device syncing. Data is stored separately for each website origin/browser/profile; clearing site data can erase it. Export a JSON backup before updates, moving devices or clearing browser data. Import JSON **replaces** the receiving browser's current cookbook after confirmation. Themes are saved per device and included in backups. Shopping shares are snapshots, not live collaborations.

Offline works after initial online loading and service worker cache installation. Offline install/availability depends on supported browsers and secure HTTPS hosting. Photo-heavy libraries may approach browser storage limits; back up regularly.

## Theme collections

- Classics: Sage, Midnight, Peach, Lavender, Forest, Slate
- Pastel Playground: Candyfloss, Pistachio, Lemonade, Cloud Nine, Rose Quartz, Sakura
- Neon & Digital: Neon Circuit, Synthwave, Acid Lime, Cyberpunk, Terminal, Ultraviolet
- Retro & Experimental: Retro Diner, Polaroid, Blueprint, Newspaper, Comic Book, Brutalist
- Atmospheres: Deep Sea, Ember, Solar Flare, Moonstone, Aurora, Candy Pop

## Navigation

Planner, Recipes, Shopping, History, Settings remain the five bottom tabs on phones. **About & Help** is linked from Settings and appears as a sixth item in the desktop sidebar to keep mobile navigation uncluttered.

No new permissions, subscriptions, fonts, networks, or external services are required.
