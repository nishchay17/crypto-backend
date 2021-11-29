import userValidator from "../validator/userValidator.js";
import EmailService from "../service/emailService.js";
import BaseError from "../error/BaseError.js";

export async function allUsers(req, res) {
  return res.json({
    status: true,
    message: [{ data: "list of all users" }],
  });
}

export async function addUser(req, res) {
  const user = userValidator(req.body);

  return res.json({
    status: true,
    message: user,
  });
}
export async function sendEmail(req, res) {
  try {
    const emailData = {
      to: "nishchayt9@gmail.com",
      template_id: "d-e08707dad1714583860019f66c84bfb8",
      dynamic_template_data: {
        name: "Nishchay Trivedi",
        otp: "19321",
      },
    };
    await EmailService.sendEmail(emailData);
    return res.json({
      status: true,
      message: "sent",
    });
  } catch (error) {
    throw new BaseError(500, "Can't send email " + error);
  }
}
