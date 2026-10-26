# Dinner Deck v1.3 — Personal Dinner Diary & Recommendations

An offline-capable, GitHub Pages-hosted Progressive Web App for weekly dinner planning, personal recipes, and practical shopping lists.

## What's new in v1.3

- Removed the **Upcoming** planner button. Use the left/right week arrows to navigate; the initial view still defaults to next Monday.
- **Rate recipes (1–5 stars)** by opening any recipe card. Tap your selected rating again to clear it. Ratings are preserved when editing a recipe and in JSON backups.
- **Personalised dinner selection** considers your star ratings, favourites, cooked-meal history, variety, recent plans, quick dinner nights, and ingredient overlaps. Ratings are a preference, not a guarantee; the generator still introduces variety.
- **Recipes filters** now include Top rated and Not yet cooked.
- The **History tab** includes most-cooked meals, recipes you haven't cooked in a while, an actual cooked-meal diary, and three suggested dinners that can be assigned to a day of your current week.
- Added **plan a suggested meal** flow: choose a day; a locked dinner cannot be overridden.
- Added two controls in Plan options: boost highly-rated/favourite meals and encourage trying uncooked recipes.
- Retained all v1.2.1 shopping refinements, your horizontal planner, reroll-one-day, recipes, notes, ingredient consolidation, leftovers, six themes, and app installation.

## Deploy to GitHub Pages

Extract this ZIP and upload **everything inside**, not the enclosing folder, into the root of your existing Dinner Deck repository (replacing older files). Commit. GitHub Pages uses the `main` branch and `/ (root)` via **Settings → Pages**.

The `sw.js` cache is versioned and uses network-first fetching so deployed changes update promptly when online. If an installed mobile app appears stale, reconnect and reload/close-reopen it.

## Data / upgrading

**Export a JSON backup under Settings before updating.** The localStorage key remains `dinner-deck-v1-data`. Existing v1.0–v1.2.1 saved recipes, notes, plans, pantry items and shopping customisations are kept. Old recipes default to unrated. Import/export JSON includes all ratings and saved preferences. The app is local-only and does not synchronise between devices.

## Offline

The app runs after initial online loading with the service worker; sharing through the device's share sheet depends on browser support and connection to the target app.

## Notes

Meal history counts dinners **marked cooked** in the Planner. It is not automatically inferred from the passage of time. Historical meal frequency includes previously marked days even if subsequently re-used in a different saved week.
