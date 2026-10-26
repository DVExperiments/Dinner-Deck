# Dinner Deck v1.2.1 — interface and usability refinement

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
- **Shopping**: ingredients from all seven planned meals are combined automatically. Add items using the quick-add bar above the list; expand optional quantity, unit or aisle fields. Tick off items; edit shopping quantities; mark items you have at home; send a list from your phone or choose text/CSV/PDF from the export dropdown.
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

Dinner Deck v1.2.1, built as a framework-free, static HTML/CSS/JavaScript Progressive Web App.

## v1.1 smarter scheduling

- **Quick nights**: Choose weekdays when the generator should favour meals under a time limit. Default: Tuesday and Thursday, 30 minutes.
- **Avoid repetition**: Recently planned dinners from older weeks receive a substantial penalty, with more category diversity in the current week.
- **Ingredient overlap**: When reasonable, prioritise recipes using ingredients already required by another meal; this is a preference rather than an absolute rule.
- **Leftovers**: Choose a leftovers night (Thursday by default). The generator uses the preceding day's recipe again as a linked leftovers meal. When making shopping totals, Dinner Deck calculates ingredients for *both nights* under one cooking session, taking household servings into account. You can also choose leftovers manually for any night except Monday when the prior night has a cooked-from-scratch recipe.
- **Independent reroll**: Changing one dinner never changes the recipe shown on other dinner cards. If you reroll the source for a linked leftovers night, the old leftovers card becomes an independent dinner (no longer linked), so check its ingredients before shopping.
- **Existing data**: v1.1 deliberately uses the same browser storage key as v1.0.0. Your saved recipes, notes, themes and plans are retained on the same website origin/path. A JSON backup before updating is still recommended.

To apply smart planning settings, save them in **Plan options**, then tap **Generate my week**. This will regenerate unlocked nights; locked dinners will remain.

## New in v1.2 — The shopping workspace

- **At-a-glance statuses:** count what remains to buy, what you have bought, and what is already at home. Filter to All items, To buy, Bought, At home or Removed.
- **Edit a shopping item:** use the pencil icon to adjust its name, amount, unit, shop category, or note for the shopper **for this week only**. The original recipe is unchanged. Reset that item's override from its edit window.
- **Add custom items** with an optional amount, unit and category. Existing v1.0/v1.1 simple extra items continue to work.
- **Remove for this week:** use the X beside an item; retrieve it from the **Removed** filter. This does not remove the ingredient from the recipe.
- **Manage pantry:** mark ingredients you have at home with the box icon, including an editable pantry staple list and quick-add suggestions. Use the **At home** filter to see or undo pantry exclusions; toggle hiding from the main list. Pantry is an on/off flag, not a live inventory count.
- **Better exports:** choose **Only still to buy** (default; excludes bought, pantry and removed items) or **Full list** (includes bought/pantry with labels). Share via the device's share menu or fallback copy; download text or CSV; use your browser's **Print / Save as PDF** option. The person receiving a list does not need an app.
- **Quantities:** merge exact ingredient names with compatible units and standardise kg→g / litres→ml before totalling. Handles fraction notation such as 1/2 cup and compact units such as 500g. Rounded whole groceries (tins, onions) are practical shopping estimates. Unknown unit conversions or ingredient synonyms are deliberately **not** guessed; adjust those entries manually.
- **Existing data:** the app keeps the **same** `dinner-deck-v1-data` localStorage key. Existing recipes, notes, themes, plans, basic pantry entries and check marks are preserved. A new `shopEdits`/`shopHidden` map is added to each week's plan when used. Reimporting a v1.1 backup is supported.

**Tip:** Make a JSON backup under Settings before overwriting files on GitHub. On mobile, reload the live site after deployment to update the offline app cache. Export uses the week currently selected in Planner.

## New in v1.2.1 — UX refinement and small functional fixes

This is a drop-in refinement of v1.2, **not a reset or a new cookbook**. Existing saved recipes, personal notes, chosen meals, pantry flags, bought status and all six themes remain in the same `dinner-deck-v1-data` storage. Export a JSON backup before updating your repository.

- The decorative **“A fresh week, a full plate”** banner has moved into the Planner's top navigation bar. The vertical whitespace above the weekly calendar is significantly reduced. The calendar now uses shorter cards on desktop and mobile, with its controls retained.
- The previous bulky “smart planning” callout has become a one-line preferences summary with an Edit preferences link.
- **Add item to list** is now a prominent, fast form at the top of the actual shopping checklist. One name + Add is enough; expand **Specify quantity, unit or aisle** if you need more detail. Suggested aisle categories are detected for simple extra items.
- The **Share or print** area now has one primary Share button, an export-scope selector, and one **Other export options** dropdown for copy, TXT, CSV, and browser print/save-as-PDF. The old duplicated export-button stack has been removed.
- Shopping checklist updates preserve the browser scroll position, avoiding jumps to the top after ticking an item, editing a quantity, or marking items as at home.
- Improved conservative consolidation for common singular/plural groceries such as *carrot/carrots*, *onion/onions* and *tomato/tomatoes*. Older shopping checkboxes and edits from v1.2 continue to be interpreted when those items merge. Ambiguous ingredients are kept separate.
- Fixed food aisle recognition for dried herbs, tomato paste, pesto, and common fruits. Full-list printing now marks already bought items as checked.
- The service worker cache name was bumped to `dinner-deck-v1-2-1` so existing installations can pick up the updated static files. Reopen or refresh your PWA after deployment.

### Known limits

- Grocery category guesses are convenience labels; you can edit any item’s section manually. The pantry is a **have/don't have list**, not a stock-quantity tracker.
- Data remains **per browser/device**; it does not sync to another phone or computer. Use Settings → Export / Import backup.
- Browser **Print / Save as PDF** uses the print dialog; it doesn't silently create a PDF file. The phone's native Share button requires a compatible HTTPS browser.
- The app saves ingredient amounts and personal notes locally. Clearing site storage removes them unless you have a backup.
