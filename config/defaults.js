module.exports = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4000, //heroku will automatically give you the PORT
};

/*
can use .env file to set up your environment instead of this.
.env file is where you can hide keys. Format them as
NAME=value pairs. The .env file will be in .gitignore.
Documentation for more info:
https://www.npmjs.com/package/dotenv
*/