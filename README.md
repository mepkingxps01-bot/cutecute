# 💝 Gift Website — Setup Guide

A romantic interactive website for your girlfriend. She opens an animated gift box, sees your Instagram photos, solves a love quiz, and gets a personal love letter at the end.

---

## What's inside

| File | What to do |
|------|-----------|
| `index.html` | The website — **don't touch this** |
| `config.js` | **Edit this** to add your photos, quiz, and love letter |
| `photos/` | **Drop your photos here** |

---

## Step 1 — Add your photos

1. Download your Instagram photos:
   - **On phone:** Open the post → three dots (⋯) → **Save**
   - **On desktop:** Right-click the photo → **Save image as...**

2. Copy the files into the `photos/` folder and rename them:
   ```
   photos/
     photo1.jpg
     photo2.jpg
     photo3.jpg
     ...
     us.jpg     ← special photo shown in the love letter
   ```

---

## Step 2 — Edit config.js

Open `config.js` in any text editor (Notepad, VS Code, etc.) and fill in:

- **photos** — update the `url` and `caption` for each photo
- **quiz** — write your own questions about your relationship (change `correct` to the index of the right answer: 0 = first, 1 = second, etc.)
- **loveMessage** — write your love letter
- **signature** — your sign-off
- **finalPhoto** — path to the special photo shown at the end

---

## Step 3 — Push to GitHub

```bash
# In the gift-website folder:
git init
git add .
git commit -m "my gift website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/gift-website.git
git push -u origin main
```

---

## Step 4 — Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder → **Save**
5. Wait ~1 minute, then your site is live at:

```
https://YOUR-USERNAME.github.io/gift-website
```

Send her that link! 💕

---

## Quiz answer guide

`correct` is the **index** (position) of the right answer, starting from 0:

```js
options: ["First", "Second", "Third", "Fourth"]
//           0        1         2        3
```

So if the right answer is "Third", set `correct: 2`.

---

## Tip — test locally

Just double-click `index.html` to open it in your browser and check everything looks right before sending.
