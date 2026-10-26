# Dinner Deck v1.1 — personal dinner planner

Your recipe collection, an intelligent horizontal weekly calendar, and a consolidated shopping list in one installable web app.

## Publish to GitHub Pages

1. Create a public GitHub repository (for example `Dinner-Deck`).
2. Upload **the contents of this ZIP** to the repository root: `index.html`, `app.js`, `styles.css`, `sw.js`, `manifest.webmanifest`, `assets/` and this README.
3. In **Settings → Pages**, choose **Deploy from a branch**, `main`, `/ (root)` and save.
4. Open `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/` after Pages finishes deploying.
5. On Android, open the site in Chrome and choose **Install app** or **Add to Home screen**. On iPhone, open in Safari, tap **Share → Add to Home Screen**. The app will then open like a standalone phone app. Installation must use HTTPS or localhost.

## How to use

- **Recipes**: add a meal, give it an emoji/photo, ingredients (one per line), optional cooking directions and private notes. Edit/remove any recipe, including starter examples.
- **Planner**: Monday–Sunday spans horizontally. Scroll the calendar sideways on smaller screens. Tap a dinner card to open its full recipe and cooking notes, use ↻ to replace only that night, lock meals during whole-week generation, or choose a dinner manually. Mark dinners cooked for History. Smart planning options let you select quick nights, leftovers nights, recent-meal avoidance, and optional ingredient reuse.
- **Shopping**: ingredients from all seven planned meals are combined automatically. Tick off items; add extra purchases; hide items you already have in the pantry; share using your phone's share sheet, copy, or download a `.txt` list.
- **History**: see cooked dinners and past plans; reuse a previous week's plan.
- **Settings**: choose from six themes, set servings, configure quick dinners, leftover nights and ingredient-overlap suggestions, and export/import a JSON backup.

## Ingredient entry examples

```
500 g beef mince
2 onions
1 tin chopped tomatoes
1 tbsp olive oil
salt & pepper
```

The app understands simple numbered ingredients and consolidates matching names and units (including g/kg and ml/l). Different descriptions or units remain separate to avoid incorrect totals. A few useful starter meals are included only as examples; you can replace them with your own. Shopping quantities are scaled by the recipe's portions and your household serving setting.

## Privacy, storage and important limitations

All personal content is stored **locally in this device's browser**, not in a server or GitHub repository. The app has **no account, tracking, external APIs or subscription**. Clearing browser site data or using a different browser/device will not carry your data across. **Back up your cookbook from Settings regularly**, and import the JSON backup on a new device. Photos are resized before saving; very large recipe collections with many photos may reach browser storage limits. Local data can sometimes be cleared by the OS under storage pressure. If storage is full, new changes cannot be saved until space is freed.

The shopping list share button uses your device's native Web Share API when supported; elsewhere it copies to clipboard where available. Exporting a `.txt` file always remains available. The browser's offline cache covers app files after the first successful load; your own recipe data is stored locally. GitHub Pages can host the app without any server-side processing.

## Version

Dinner Deck v1.1.0, built as a framework-free, static HTML/CSS/JavaScript Progressive Web App.

## v1.1 smarter scheduling

- **Quick nights**: Choose weekdays when the generator should favour meals under a time limit. Default: Tuesday and Thursday, 30 minutes.
- **Avoid repetition**: Recently planned dinners from older weeks receive a substantial penalty, with more category diversity in the current week.
- **Ingredient overlap**: When reasonable, prioritise recipes using ingredients already required by another meal; this is a preference rather than an absolute rule.
- **Leftovers**: Choose a leftovers night (Thursday by default). The generator uses the preceding day's recipe again as a linked leftovers meal. When making shopping totals, Dinner Deck calculates ingredients for *both nights* under one cooking session, taking household servings into account. You can also choose leftovers manually for any night except Monday when the prior night has a cooked-from-scratch recipe.
- **Independent reroll**: Changing one dinner never changes the recipe shown on other dinner cards. If you reroll the source for a linked leftovers night, the old leftovers card becomes an independent dinner (no longer linked), so check its ingredients before shopping.
- **Existing data**: v1.1 deliberately uses the same browser storage key as v1.0.0. Your saved recipes, notes, themes and plans are retained on the same website origin/path. A JSON backup before updating is still recommended.

To apply smart planning settings, save them in **Plan options**, then tap **Generate my week**. This will regenerate unlocked nights; locked dinners will remain.
