<H1 align ="center" > BLOG Management </h1>
<h5  align ="center"> 
Fullstack open source blogging application made with MongoDB, Express, React & Nodejs (MERN) </h5>
<br/>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [📸 Screenshots](#screenshots)
  * [Author](#author)
  * [License](#license)


## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the Client on one terminal and the Server on the other terminal)

In the first terminal

```
$ cd client
$ npm install (to install client-side dependencies)
$ npm run  start (to start the client)
```

In the second terminal

- cd server and Set environment variables in config.env under ./config
- Create your mongoDB connection url, which you'll use as your MONGODB_URL
- Supply the following credentials

```
#  ---  Config.env  ---


MONGODB_URL =
ACCESS_SECRET_KEY =
REFRESH_SECRET_KEY =
 

```


```
# --- Terminal ---

$ npm install (to install server-side dependencies)
$ node index.js (to start the server)
```

##  Key Features

- User registration and login
- Authentication using JWT Tokens
- CRUD operations (Blog create, read, update and delete)
- Upload Blog ımages  to the server
- Commenting  on the Blog
- Responsive Design

<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend 

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - For User Interface
- [Material icons](https://mui.com/material-ui/getting-started/) -
 Small library that helps you add icons  to your react apps.

####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - For data encryption
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [multer](https://www.npmjs.com/package/multer) - Node.js middleware for uploading files 
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware


####  Database 

 - [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.
 
 ##  Screenshots
 --- -
 ![1](https://github.com/RahulSharma-1799/CodeClause_Blog_Management/assets/110728597/a6bc39fc-817e-4275-8f9d-a96031a57376)
 --- -
![2](https://github.com/RahulSharma-1799/CodeClause_Blog_Management/assets/110728597/83520dbb-42a3-483b-98d4-f3335e30885c)
--- -
![3](https://github.com/RahulSharma-1799/CodeClause_Blog_Management/assets/110728597/0f12e60b-085d-46f3-a21b-27a99ec5fd06)
--- -
![4](https://github.com/RahulSharma-1799/CodeClause_Blog_Management/assets/110728597/c609a151-cba2-4fde-9ea9-216a2c430724)
--- -

![5](https://github.com/RahulSharma-1799/CodeClause_Blog_Management/assets/110728597/924374eb-62d7-44d9-adbd-a8613c003271)


## Author
- Github: [RahulSharma](https://github.com/RahulSharma-1799)
- Linkedin: [RahulSharma](https://www.linkedin.com/in/rahul011/)
- Email: [142002rahulsharma@gmail.com](mailto:142002rahulsharma@gmail.com)

## License
