import axios from "axios";

class CryptoService {
  //this will return top 10 crypto and their 1h and 1day states
  static async getCurrencies(page) {
    const interval = "1h,1d",
      convert = "INR";
    return await axios
      .get(
        `${process.env.CRYPTO_API}/currencies/ticker?key=${process.env.CRYPTO_KEY}&per-page=10`,
        {
          params: { interval, convert, page },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default CryptoService;
