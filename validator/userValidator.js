import BaseError from "../error/BaseError.js";
import { isEmail } from "./isEmail.js";

export default function ({ name, email, password }) {
  const baseErrorMessage = "User must have a valid ";
  if (!name || typeof name !== "string" || name.length < 2)
    throw new BaseError(400, baseErrorMessage + "name");

  if (
    !email ||
    typeof email !== "string" ||
    email.length < 5 ||
    !isEmail(email)
  )
    throw new BaseError(400, baseErrorMessage + "email");

  if (!password || typeof password !== "string" || password.length < 7)
    throw new BaseError(400, baseErrorMessage + "password");

  const validatedUser = { name, email, password };

  return Object.freeze(validatedUser);
}
