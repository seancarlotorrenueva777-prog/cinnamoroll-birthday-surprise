# Cinnamoroll Birthday Surprise

A two-page, responsive birthday website made with plain HTML, CSS, and JavaScript. It uses the two Cinnamoroll PNG images supplied for this project.

## Preview locally

1. Extract the project folder if it is inside a ZIP file.
2. Open `index.html` in a browser, or use the **Live Server** extension in Visual Studio Code.
3. Click **Light your candle**, then **Open your birthday mail**.
4. Select each envelope to read the four birthday letters. Use the previous/next controls to move between letters.

No database, PHP, Node.js, or build command is required.

## Personalize the website

Open `script.js` and edit the `BIRTHDAY` object at the top:

- `celebrantName`: the name shown on the first page.
- `signature`: a default sign-off.
- `letters`: the four letter titles and messages. Edit the `body` text while keeping the quotation marks and commas in place.

You can replace the two PNG images in the `assets` folder. Keep the same filenames, or update the `src` values in `index.html` to match your new filenames.

## Publish with Vercel

### Option A — GitHub (recommended)

1. Create a new GitHub repository, for example `birthday-surprise`.
2. Upload **all files and folders inside this project**. The `index.html` file must be at the repository's top level.
3. Sign in to Vercel and choose **Add New → Project**.
4. Import your `birthday-surprise` GitHub repository.
5. For Framework Preset, select **Other**. Leave the Build Command empty and set the Output Directory to `.` if Vercel asks for it.
6. Click **Deploy**. Vercel will give you a public `.vercel.app` link.
7. Share that link with the celebrant. Future pushes to the connected GitHub repository will redeploy the site.

### Option B — Vercel CLI

If you already have Node.js installed, open a terminal in this project folder and run:

```bash
npx vercel
```

Follow the prompts. To publish a production deployment, run:

```bash
npx vercel --prod
```

## Notes

- This is a static website, so it can be hosted on Vercel's free Hobby tier for a personal project, subject to Vercel's current plan and usage terms.
- The Google Fonts link is optional. If the font service is unavailable, the site falls back to system fonts.
- The website does not play music or request microphone access. The candle and letter interactions work with mouse, keyboard, and touch.
- This is a personal fan-made birthday page and is not an official Sanrio website.
