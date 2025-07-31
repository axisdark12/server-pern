import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options : swaggerJSDoc.Options
={
    swaggerDefinition:{
        openapi:'3.0.2',
        tags:[
            {
            name:'Products',
            desciption: 'Operaciones de API PERN con productos'
        },
          {
            name:'Usuarios',
            desciption: 'Operaciones de API PERN con productos'
        }
        ],
        info:{
            title: 'REST API Node.js / Express / Typescript ',
            version:"1.0.0",
            description:"API Documentacion para productos"
        }
    },
    apis:['./src/router.ts']
}
const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions : SwaggerUiOptions = {
    customCss : `
        .topbar-wrapper .link {
            content: url('https://files.catbox.moe/nw4tw7.webp');
            height: auto;
            width: auto;
        }
        .swagger-ui .topbar {
            background-color: #060344;
        }
    `,
    customSiteTitle: 'Documentación REST API Express / TypeScript'
}

export default swaggerSpec
export{
    swaggerUiOptions
}