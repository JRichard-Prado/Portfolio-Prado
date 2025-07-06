const { config } = require("dotenv");
const nodemailer = require("nodemailer");
config();

// // variables de entorno para el correo
// const transport = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: 587, // Puerto SMTP TLS
//     secure: false,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   function enviarMail(mail) {
//     return new Promise((resolve, reject) => {
//       transport.sendMail(mail,
//         (error, _) => {
//           error
//             ? reject({
//                 statusCode: 500,
//                 body: error,
//               })
//             : resolve({
//                 statusCode: 200,
//                 body: "Email enviado con éxito a " + mail.to,
//               });
//         }
//       );
//     });
//   }


// function generarCuerpoMensaje(params) {
// return `Formulario de contacto enviado por ${params.nombre} - ${params.email}.
// El mensaje es el siguiente:
// ${params.mensaje}
// `;
//   }

exports.handler = async (event, context)=> {
    switch(event.httpMethod){
        case "POST":
            const params = JSON.parse(event.body);
            console.log("RECIBÍ UNA SOLICITUD",params)
             return ;
            
        default:
            return{
                statusCode: 405,
                message: "Método no soportado"
            }
    }
}

