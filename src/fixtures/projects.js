const { ObjectId: ObjectId} = require("mongodb");

module.exports = [
    {
        title: "Création dépliant dartagnant",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
            "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
            "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum " +
            "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui " +
            "officia deserunt mollit anim id est laborum",
        type: "Print",
        images: [{
                path: "images/projets/print1.jpg",
                mime: "image/jpeg",
            },
            {
                path: "images/projets/print2.jpg",
                mime: "image/jpeg",
            },
            {
                path: "images/projets/print3.jpg",
                mime: "image/jpeg",
            },
            {
                path: "images/projets/print4.jpg",
                mime: "image/jpeg",
            }],
        principalImage: {
            path: "images/projets/print1.jpg",
            mime: "image/jpeg",
        },
        videoLink: "https://www.youtube.com/watch?v=LH5ay10RTGY",
        workState: ['photoshop', 'instagram', 'google analytics', 'facebook', 'création charte graphique' ],
    }/*,
    {
        title: "Identité visuel GlouGlou market",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
            "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
            "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum " +
            "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui " +
            "officia deserunt mollit anim id est laborum",
        type: "Identité de marque",
        images: ['logo1.jpg', 'logo2.jpg', 'logo3.jpg', 'logo4.jpg'],
        principalImage: "logo1.jpg",
        videoLink: "https://www.youtube.com/watch?v=LH5ay10RTGY",
        workState: ['photoshop', 'instagram', 'google analytics', 'facebook', 'création charte graphique' ]
    }*/
];