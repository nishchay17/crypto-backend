import sgMail from "@sendgrid/mail";
import BaseError from "../error/BaseError.js";

class EmailService {
  static async sendEmail({
    to,
    subject,
    html,
  }) {
    sgMail.setApiKey(process.env.EMAIL_KEY);
    const msg = {
      from: "nishchayt9@gmail.com",
      to,
      subject,
      html
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
