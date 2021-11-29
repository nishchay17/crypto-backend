import { redisClient } from "../index.js";
import CryptoService from "../service/cryptoService.js";
import cryptoValidator from "../validator/cryptoValidator.js";

export async function allCrypto(req, res) {
  const page = req.query.page || 1;
  const crypto = await CryptoService.getCurrencies(page);
  const cleanCrypto = crypto.map((curr) => {
    return cryptoValidator(curr);
  });
  redisClient.set(`allcrypto-${page}`, JSON.stringify(cleanCrypto));
  return res.json({ status: true, crypto: cleanCrypto });
}
