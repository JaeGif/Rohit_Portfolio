If you want to edit the publications, you need to directly edit the publications.json file.
URL: src/data/publications.json

----- INSTALL FILES -----
You need to have Node.js installed with the npm package manager
Instructions for installation:
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm

After you have Node installed:

1. Pull the files to your machine
2. In the command line type: `npm i`
3. To run the site locally: `npm run dev`
4. The command line will print the port it is being served from and you can either click the hyperlink from the command line
   or you can go to your browser and navigate to localhost:<PORT> where <PORT> is the port it is served from. Next.js defaults to port 3000. If 3000 is busy, it will likely use 3001 and on and on until there is an open port.

After you make any changes, run the site locally before committing to see if it displays how you want it to.

### ----- ADD A NEW ENTRY -----

1. Place your thumbnail image\* in public/assets
2. Open src/data/publictions.json
3. Copy/Paste a previous entry, and edit the fields appropriately for your new entry
4. Save the file
5. Check local site before committing

- any normal image-type will work (even gifs), but jpg or webp is recommended for smaller file size and load times

### ----- DELETE AN ENTRY -----

1. Delete the item from publications.json
2. If you're permanently removing it, you should also delete the thumbnail image
3. Save changes and check the site locally

### ----- EDIT GALLERY -----

The gallery component breaks up your photos by thirds. The first third of photos in about.json are designated to the under layer, and will display in 2 columns, larger than the foreground. The rest of the photos will display in the upper layer in a smaller size.

To add new photos:

1. Place your photo into public/assets/gallery
2. Name it whatever you'd like
3. Open src/data/about.json
4. Add a new entry to about.json (photos are rendered in order, so if you want a photo higher in the gallery reorder about.json)
5. Entries follow the format: {"src": <URL>}, <URL> ===> "/assets/gallery/<FILENAME>" Every field except the laast field needs a comma after it.
6. Save changes, run the site locally to make sure it looks how you'd like it to

----- FIELD TYPES -----
You can only edit publications.json with the correct field types. If you enter a number in a string field it will break
Types can be found at src/types/data.d.ts
The type file is READ ONLY
Do not edit the type file without consulting me first, the site will not compil
If you want to add new fields, that can be done, but multiple files will need changing so please consult me first

# ----- ALWAYS VIEW SITE LOCALLY BEFORE COMMITTING!!!

### ----- PUSH CHANGES LIVE -----

Once you've made your local changes and it looks good, you'll need to commit the changes to GitHub for the changes to take effect in your live site.

# ALWAYS VIEW SITE LOCALLY BEFORE COMMITTING!!!

## ALWAYS VIEW SITE LOCALLY BEFORE COMMITTING!

### ALWAYS VIEW SITE LOCALLY BEFORE COMMITTING!

#### ALWAYS VIEW SITE LOCALLY BEFORE COMMITTING

Anyway if you've viewed your site locally before committing, go ahead and commit using the commands in the terminal

`git commit -a -m "COMMENT TO DESCRIBE THE INTENTION OF THE COMMIT"`

type your commit message and save the message, finally type in the terminal:

`git push origin main`

After this is complete, your site will rebuild automatically. Changes to the main git branch will be reflected on your site in ~ 2mins. If it's been a while (~1hr) and the changes are not reflected, first try emptying youur cache, then contact me as there may have been a problem with your commit and I will handle it.

\*\* Please don't use other git commands. If you run into an issue, or want to roll-back changes either contact me, or edit the files again and make a new commit. It's very easy to completely nuke a project by using git commands if you don't understand what you're doing.
