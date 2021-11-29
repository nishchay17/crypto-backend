import sgMail from "@sendgrid/mail";
import BaseError from "../error/BaseError.js";

class EmailService {
  static async sendEmail({
    to,
    subject,
    text,
    html,
    dynamic_template_data,
    template_id,
  }) {
    sgMail.setApiKey(process.env.EMAIL_KEY);
    const msg = {
      from: "nishchay13971@gmail.com",
      to,
      subject,
      text,
      html,
      dynamic_template_data,
      template_id,
    };
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.log(error);
      throw new BaseError(400, error);
    }
  }
}

export default EmailService;
