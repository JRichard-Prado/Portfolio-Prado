import { Resend } from "resend";
import type { APIRoute } from "astro";

// import SampleEmail from "../../emails/sampleEmail";
// import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_APIKEY);

export const handler = async (event: any, context: any) => {
  // const emailContent = SampleEmail({ username: "Chris" });
  // const html = await render(emailContent);
  // const text = await render(emailContent, { plainText: true });

  const { data, error } = await resend.emails.send({
    from: "Richard <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "It works!",
    html: `<p>Correo desde  contacto bootstrap modo static!</p>`,
  });

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
// retorna un redirect a la página de éxito
  return {
    statusCode: 302, 
    headers: {
      Location: "/success",
    },
    body: "",
  };


  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({ data }),
  // };
};