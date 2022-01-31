# WeGuideYou - Server

---

## 🤗 Getting Started

### Get the project

First, you need to download the project in your computer and install all the dependencies:

```bash
git clone https://github.com/GrandvauxClement/YoPortoflio-BackEnd.git Back-end
cd Back-end
npm install
```

### Add environment variables

You have to create a .env file at the root of the project (directly under the server folder) :

```dotenv
####### COMMUNICATION WITH THE CLIENT

# the URL of the client (webapp)
# we need it to communicate with the client with socket.io
# we also need it to send mails with links to the client

CLIENT_URL=http://localhost:3000

####### MAIL AUTHENTIFICATION

# see more : https://nodemailer.com/smtp/#authentication

# the sender's mail
SENDER_MAIL=bot@lesageolivier.fr

# the sender's password
SENDER_PSW=***

```

### Manage the database

For the application to work correctly, you need to have a database.
A MongoDB database, to be more precise.

We recommend you to use a local database.

You can follow the following tutorial :
[https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials)

If you don't want to manage a local database, you can use a Cloud database instead.

For now, our recommandation is to use : [MongoDB Atlas](https://www.mongodb.com/).

Once you get your account, you have to update some files :

**package.json**

```
{
  ...
  "scripts": {
    ...
    "fixtures-load": "mongodb-fixtures load -u \"mongodb+srv://<username>:<password>@cluster0.gil2n.mongodb.net/<database>?retryWrites=true&w=majority\" --path ./src/fixtures/"
  },
}
```

**src/config/config.json**

```json
{
  "dev": {
    "port": 9000,
    "db": "mongodb+srv://<username>:<password>@cluster0.gil2n.mongodb.net/<database>?retryWrites=true&w=majority"
  },
  "production": {
    "port": 9000,
    "db": "mongodb+srv://<username>:<password>@cluster0.gil2n.mongodb.net/<database>?retryWrites=true&w=majority"
  }
}
```

If you want the database to be filled like ina real-life scenario, you can run the following command in your terminal :

```
npm run fixtures-load
```

### Run the server

Then, you can run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:9000](http://localhost:9000) with your browser to see the running server.

## 🤔 Understanding the architecture

```
public/
   img/
   # contains all the images that are used by the users

src/
   app/
   # initialize all the middlewares (including socket.io)
   
   auth/
   # define the strategy used by passport
   
   config/
   # the configuration used by the server (port, database) + adminBro options
   
   controllers/
   # define all the controllers (actions with the database)
   
   fixtures/
   # the data which can fill the database using the command 'npm run fixtures-load'
   
   mails/
   # define the structure of each mail which will be send to the users
   
   models/
   # define the structure of each table in our database
   # those models are used by the controllers
   
   multer/
   # multer basic configuration (where the files should be stored, ...)
   
   routes/
   # for each request, define what the server should do (call a controller? send back a websocket?)
   
   utils/
   # custom functions
   
package.json
# define all the dependencies + scripts that you can use (command: npm run <script-name>)
   
server.js
# entry point of our application
# make it all work together
# run the application once everything is initialized
   
mongoose.js
# the configuration of mongoose (MongoDB ORM)
```

## 📖 Tutorials


## 📚 Learn More

To learn more about the technologies, take a look at the following resources:

- [Node.js Documentation](https://nodejs.org/api/all.html) - learn about Node.js.
- [Express.js Documentation](https://expressjs.com) - learn about Express.js.
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html) - learn about Mongoose, the ORM we used to manage our MongoDB database.
- [Socket.io Documentation](https://socket.io/) - learn about Socket.io, used for real time communication with the client.
- [Nodemailer Documentation](https://nodemailer.com/about/) - learn about Nodemailer, used to send mails.
- [Passport Documentation](http://www.passportjs.org/) - learn about Passport, which manage authentification.
- [Sharp Documentation](https://sharp.pixelplumbing.com/) - learn about Sharp, used to optimize image processing
- [AdminBro Documentation](https://adminbro.com/) - learn about AdminBro, the technology we used to generate the Admin panel.


## 📝 Contributors

Some people have contributed to the project.

* 🧑 Clément GRANDVAUX
  - [GitLab](https://gitlab.com/) - [GitHub](https://github.com/)
* 🧑 Yohan FRANZETTI
  - [Facebook]

