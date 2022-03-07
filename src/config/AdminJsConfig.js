// import all models
const ProjectModel = require('../models/project');
const MessageModel = require('../models/message');
const ServiceModel = require('../models/service');
const uploadFeature = require('@adminjs/upload');

function ReturnAdminJSConfig(mongooseDb) {
    return {
        resources: [
            {
                resource: ProjectModel,
                options: {
                 //   listProperties: ['title', 'type', 'createdAt', 'principalImage.path'],
                    /*  editProperties: ['title', 'description', 'objectif', 'workState',
                          'type', 'images','videoLink'],
                       showProperties: ['title', 'description', 'objectif', 'workState',
                          'type', 'principalImage','images' ,'videoLink', 'createdAt'],
                      filterProperties: ['title', 'objectif', 'workState',
                          'type', 'createdAt'],*/
                  /*  properties: {
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
                        },*/
                    properties: {
                        /*mimeType:{
                            isVisible: { list: false, filter: false, show: false, edit: false }
                        },*/
                        images:{
                            isVisible: { list: false, filter: false, show: true, edit: true }
                        },
                    }
                },
                features: [
                   /* uploadFeature({
                        provider: {local: { bucket: 'public/images/projets'}},
                        properties: {
                            file: 'Image Principal',
                         //   bucket: 'principalImage.bucket',
                            key: 'principalImage',
                            mimeType: 'mimeType'
                        },
                        validation: {
                            mimeTypes: ['image/jpeg', 'image/png']
                        }
                    }),*/
                    uploadFeature({
                        provider: {local: { bucket: 'public/images/projets'}},
                        multiple: true,
                        properties: {
                            file: 'images',
                            filePath: 'images.file',
                            filesToDelete: 'images.filesToDelete',
                            key: 'images.key',
                            mimeType: 'images.mimeType',
                            size: 'images.size',
                            bucket: 'images.bucket'
                        },
                        validation: {
                            mimeTypes: ['image/jpeg', 'image/png']
                        }
                    })
                ]
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