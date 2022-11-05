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

CLIENT_URL=
MONGODB_URI=
# PORT=
####### MAIL AUTHENTIFICATION

# see more : https://nodemailer.com/smtp/#authentication

# AWS BUCKET
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
S3_BUCKET=

```

### Run the server

Then, you can run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:9000](http://localhost:9000) with your browser to see the running server.

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

