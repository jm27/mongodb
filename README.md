# Mongodb-News-Scraper
* An application where you can search for news and store them in mongo database!

## Getting Started
## Prerequisites for development

1.  MongoDB instance installed on your local machine or a MongoDB instance deployed to a remote server (i.e. mLab MongoDB on Heroku)
2.  Node and NPM installed on your local machine

## Installing

Follow the instructions in this section to get the app setup to run on your machine.

1.  Clone the git project to your machine (example below is using ssh)
    ``` bash
    git clone 'git@github.com:jm27/mongodb.git'
    ```

2.  Install the node module dependencies from the package.json file
    ``` bash
    npm install
    ```

3.  Startup your MongoDB instance.  There is a line in the `server.js` file that defines the URL of the MongoDB that will default to the environment variable value in MONGODB_URI if it is set.  If it isn't set, it'll fall back to your localhost instance of MongoDB: 
```// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
```

# Running the app

There is a start script in the package.json file that starts up the server and connects to the MongoDB database.  If you're deploying the app to Heroku, part of the deployment will automatically call this script to start the server.  If you're running this on a local machine, navigate to the project folder and run the command:
``` bash
npm start
```

During development, you can take advantage of nodemon to detect changes and restart the app.  There is a `watch` script that invokes nodemon instead of node by running the command:
``` bash
npm run watch
```

## Demo

There is a demo of this app available on Heroku.  You can interact with the app and see the full functionality.  Some examples of the app's functionality:
1.  Scrape new articles by clicking on the "re-scrape" button in the navbar.
2.  Save an article by clicking on the save button on any of the article.
3.  View only the saved articles by clicking on the "Saved Articles" button in the navbar.
4.  Delete articles from saved articles by clicking the red 'X' on them.
3.  Clear all articles by clicking on clear button.

[News-Scrapper-APP DEPLOYED LINK](https://still-scrubland-67036.herokuapp.com/ "Homepage")
======

## Built With

* HTML.
* CSS.
* BOOTSTRAP.
* JAVASCRIPT.
* JQUERY.
* Express.
* Morgan.
* Mongo Database.
* Axios.
* Cheerio.

* News are getting scrape from http://www.echojs.com/ website.

## Versioning
News-Scraper V1.1

## Authors

* **Jesus Esquer** - *Main Contributor* - [jm27](https://github.com/jm27)


## Acknowledgments

* Thanks to Classmates, Instructors, and TA's 
* Bootcamp 2019-2020
