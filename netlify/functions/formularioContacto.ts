import { Resend } from "resend";
import type { APIRoute } from "astro";

// import SampleEmail from "../../emails/sampleEmail";
// import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_APIKEY);

export const handler = async (event: any, context: any) => {
  // const emailContent = SampleEmail({ username: "Chris" });
  // const html = await render(emailContent);
  // const text = await render(emailContent, { plainText: true });
  const formData = new URLSearchParams(event.body);
  const nombre = formData.get("nombre");
  const email = formData.get("mail");
  const comentarios = formData.get("comentarios");

  const formUrl = { nombre: nombre, email: email ,comentarios: comentarios };
if (event.httpMethod === "POST") {
  try {
    // Parse form data from event.body (assuming application/x-www-form-urlencoded)
    const formData = new URLSearchParams(event.body);
    const nombre = formData.get("nombre");
    const email = formData.get("mail");
    const comentarios = formData.get("comentarios");
    // Do something with the data
    if (typeof nombre !== "string" || nombre.length < 1) {
      formUrl.nombre += "Please enter a nombre. ";
    }
   
    if (typeof comentarios !== "string" || comentarios.length < 1) {
      formUrl.comentarios += "Please enter a comment. ";
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
  // Envía un correo electrónico utilizando Resend
  const { data, error } = await resend.emails.send({
    from: "Richard <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "Nuevo mensaje de contacto",
    html: `
      <p><strong>Nombre:</strong> ${nombre ?? ""}</p>
      <p><strong>Email:</strong> ${email ?? ""}</p>
      <p><strong>Comentarios:</strong> ${comentarios ?? ""}</p>
    `,
  });

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
 
  return {
    statusCode: 200,
    body: JSON.stringify({ data , formUrl }),
    headers: {
      Location: "/success",
    },
  };
  // retorna una respuesta de redirección
  // return {
  //   statusCode: 302, 
  //   headers: {
  //     Location: "/success",
  //   },
  //   body: "",
  // };

};