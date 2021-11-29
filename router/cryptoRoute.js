import { Router } from "express";
import { allCrypto } from "../controller/cryptoController.js";
import { allCryptoCache } from "../middleware/cryptoCache.js";

const cryptoRouter = Router();

cryptoRouter.get("/", allCryptoCache, allCrypto);

export default cryptoRouter;
