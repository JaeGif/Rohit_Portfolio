If you want to edit the publications, you need to directly edit the publications.json file.
URL: src/data/publications.json

----- INSTALL FILES -----
You need to have Node.js installed with the npm package manager
Instructions for installation:
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm

After you have Node installed:

1. Pull the files to your machine
2. In the command line type: npm i
3. To run the site locally: npm run dev
4. The command line will print the port it is being served from and you can either click the hyperlink from the command line
   or you can go to your browser and navigate to localhost:<PORT> where <PORT> is the port it is served from. Next.js defaults to port 3000. If 3000 is busy, it will likely use 3001 and on and on until there is an open port.

After you make any changes, run the site locally before committing to see if it displays how you want it to.

----- ADD A NEW ENTRY -----

1. Place your thumbnail image\* in public/assets
2. Open src/data/publictions.json
3. Copy/Paste a previous entry, and edit the fields appropriately for your new entry
4. Save the file
5. Check local site before committing

- any normal image-type will work (even gifs), but jpg or webp is recommended for smaller file size and load times

----- DELETE AN ENTRY -----

1. Delete the item from publications.json
2. If you're permanently removing it, you should also delete the thumbnail image
3. Save changes and check the site locally

----- FIELD TYPES -----
You can only edit publications.json with the correct field types. If you enter a number in a string field it will break
Types can be found at src/types/data.d.ts
The type file is READ ONLY
Do not edit the type file without consulting me first, the site will not compil
If you want to add new fields, that can be done, but multiple files will need changing so please consult me first

----- ALWAYS VIEW SITE LOCALLY BEFORE COMMITTING!!! -----
