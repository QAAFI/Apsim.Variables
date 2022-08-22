# [ApsimX Variable](https://QAAFI.github.io/Apsim.Variables) 

ApsimX Variable is an application which can be used to create a NextGen Variable in JSON file format. The user can create a JSON file by parsing their own variables or using a template which provide the basic variable to effectively create a NextGen Variable file. Besides that they can also view their variable in their file.

## How to run ApsimX Variable Application
```
npm i
npm run dev
```

## How to deploy Github Pages
```
npm run deploy
```

## Important Settings

Before deploying the ApsimX Variable, here are the configurations which are required in order to deploy the application to Github Pages 


1. package.json
   - `homepage` - to set up the url on remote Github Pages
   - `npm run deploy` - to deploy the static files to Github Pages
      - `npm run build` - to build and create production static files to `out` folder
      - `touch ./out/.nojekyll` - create `.nojekyll` file, to tell Github to ignore the directory start with `_`, for example `_next` 
      - `git add out/ -f` - to add `./out` folder which is where production static files are created to git
      - `git commit -m \"Deploy gh-pages\"`
      - `git subtree push --prefix out origin gh-pages` - to push `out` local folder to remote gh-pages branch 

2. next.config.mjs
   - distDir - to tell NextJS where it should create the production file to.
   - assetPrefix - to tell NextJS to add this prefix to every assets path. Github Pages requires this setting to map the asset to the application

3. .env 
   - NEXT_BACKEND_URL - to change the domain of routing inside the components. Default value: `/Apsim.Variables`
   
### Informations
- [Github settings for Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Basic Github Pages set up for React Application](https://github.com/gitname/react-gh-pages)
- [Github pages settings for NextJS Application](https://medium.com/@anotherplanet/git-tips-next-js-github-pages-2dbc9a819cb8)

---
## Project structure
- ### `build` - store production file which are gerenated by `next build`. NextJS will use to serve the application
- ### `out` - store production static file which are generated `next export`. It will be used to serve as github pages
- ### `public` - contain the static file such as image, template file. NextJS will store it as assets at build time
- ### `src` - contain all the codes of this application
   - ### `pages` - all the pages of the application will be located here. File name will be used as application route path
