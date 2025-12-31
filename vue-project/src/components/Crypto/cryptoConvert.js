import CryptoConvert from "crypto-convert";

const convert = new CryptoConvert();
let isReady = false;

export async function getConverter() {
  if (!isReady) {
    await convert.ready();
    isReady = true;
  }
  return convert;
}
