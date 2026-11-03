# Happy Birthday, Marklie! ♡

A responsive two-page birthday surprise made with plain HTML, CSS, and JavaScript. The site includes an animated cake, a candle that can be blown out and relit, the two supplied Cinnamoroll PNGs embedded directly in the HTML (with matching asset-file copies), and four individually themed letter previews.

## Preview locally

1. Extract the ZIP.
2. Open the `cinnamoroll-birthday-site` folder in VS Code.
3. Open `index.html` with Live Server, or open it directly in a browser.
4. Click **Make a wish & blow out** to extinguish the candle. Click it again to relight it.
5. Click **Open your birthday letters**, then select Sean, Stephanie, Carryl, or Nissi to preview each stationery design.

No database, PHP, Node.js, or build command is required.

## Letter design status

The four stationery designs are ready to preview:

- **Sean:** blue envelope and clean, boyish blue stationery.
- **Stephanie:** red-and-white polka-dot envelope and letter.
- **Carryl:** violet stationery with silver chain details.
- **Nissi:** green meadow stationery with bee and grass details.

Sean, Stephanie, Carryl, and Nissi each contain the personal birthday message supplied for Marklie. The messages are editable in the `BIRTHDAY.letters` array at the top of `script.js`.

## Assets

The Cinnamoroll images are stored in `assets/` and also embedded directly in `index.html`, so they remain visible even if a deployment accidentally omits the separate assets folder. The copies are kept at:

- `assets/cinnamoroll-cloud-hug.png`
- `assets/cinnamoroll-bow-star.png`

Keep the filenames and folder structure unchanged when uploading the site.

## Publish or update on Vercel

For a static HTML site, upload the **contents** of this project folder (not an extra nested copy of the folder) to the repository or deployment root. The top level should contain:

```text
index.html
styles.css
script.js
assets/
  cinnamoroll-cloud-hug.png
  cinnamoroll-bow-star.png
```

Then redeploy the project on Vercel. The package includes root-level `index.html`, `styles.css`, `script.js`, and `assets/`; set the Vercel project root to the folder containing those items (not its parent folder). If using a GitHub-connected project, commit and push the updated files so Vercel creates a new deployment. In Vercel project settings, use the **Other** framework preset, leave the Build Command empty, and use `.` as the Output Directory if it is requested.

## Notes

- This is a static website and is suitable for Vercel static hosting.
- Google Fonts are optional; system font fallbacks are included.
- The website does not play music or request microphone access.
- The candle and letter previews work with mouse, keyboard, and touch.
- This is a personal fan-made birthday page and is not an official Sanrio website.
