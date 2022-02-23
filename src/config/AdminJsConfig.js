// import all models
const ProjectModel = require('../models/project');
const MessageModel = require('../models/message');
const ServiceModel = require('../models/service');

function ReturnAdminJSConfig(mongooseDb) {
    return {
        resources: [
            {
                resource: ProjectModel,
                options: {
                    properties: {
                        _id:{
                            isVisible: { list: false, filter: false, show: false, edit: false },
                        },
                        title: {
                            isVisible: { list: true, filter: true, show: true, edit: true },
                        },
                        description: {
                            isVisible: { list: false, filter: false, show: true, edit: true },
                        },
                        objectif: {
                            isVisible: { list: false, filter: false, show: true, edit: true },
                        },
                        workState: {
                            isVisible: { list: false, filter: false, show: true, edit: true },
                        },
                        type: {
                            isVisible: { list: true, filter: true, show: true, edit: true },
                        },
                        images: {
                            isVisible: { list: false, filter: false, show: true, edit: true },
                        },
                        principalImage: {
                            isVisible: { list: true, filter: false, show: true, edit: true },
                        },
                        videoLink: {
                            isVisible: { list: false, filter: false, show: true, edit: false },
                        },
                        createdAt: {
                            isVisible: { list: true, filter: true, show: true, edit: false },
                        }
                    }
                },
            },
            {
                resource: MessageModel,
                options: {
                   /* listProperties: ['name', 'email', 'devis', 'message', 'createdAt'],
                    showProperties: ['name', 'email', 'object', 'devis', 'message', 'createdAt'],
                    filterProperties: ['name', 'email', 'object', 'devis', 'message', 'createdAt'],*/
                    properties: {
                        _id:{
                            isVisible: { list: false, filter: false, show: false, edit: false },
                        },
                        name: {
                            isVisible: { list: true, filter: true, show: true, edit: false },
                        },
                        email: {
                            isVisible: { list: true, filter: true, show: true, edit: false },
                        },
                        object: {
                            isVisible: { list: false, filter: true, show: true, edit: false },
                        },
                        message: {
                            isVisible: { list: true, filter: true, show: true, edit: false },
                        },
                        devis: {
                            isVisible: { list: true, filter: true, show: true, edit: false },
                        },
                        createdAt: {
                            isVisible: { list: true, filter: true, show: true, edit: false },
                        }
                    }
                }
            },
            {
                resource: ServiceModel,
                options: {
                    properties: {
                        _id:{
                            isVisible: { list: false, filter: false, show: false, edit: false },
                        },
                        title: {
                            isVisible: { list: true, filter: true, show: true, edit: true },
                        },
                        subTitle: {
                            isVisible: { list: false, filter: true, show: true, edit: true },
                        },
                        description: {
                            isVisible: { list: false, filter: false, show: true, edit: true },
                        },
                        image: {
                            isVisible: { list: false, filter: false, show: true, edit: true },
                        },
                        url: {
                            isVisible: { list: false, filter: false, show: false, edit: false },
                        }
                    }
                }
            }
        ],

        databases: [mongooseDb],
        branding: {
            companyName: "Yo Portfolio",
            softwareBrothers: false,
        },
        rootPath: '/admin',
    }
}

module.exports = ReturnAdminJSConfig;