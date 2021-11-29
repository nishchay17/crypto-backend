export default function cryptoValidator(crypto) {
  const cleanCrypto = {};
  cleanCrypto.currency = crypto.currency;
  cleanCrypto.name = crypto.name;
  cleanCrypto.logo_url = crypto.logo_url;
  cleanCrypto.price = crypto.price;
  cleanCrypto.rank = crypto.rank;
  cleanCrypto.rank = crypto.rank;
  cleanCrypto.one_day = crypto["1d"];
  cleanCrypto.one_hour = crypto["1h"];
  return cleanCrypto;
}
