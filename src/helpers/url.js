import CryptoJS from 'crypto-js';

export const getEncryptData = (plain) => {
  const secretKey = 'mySecretKey';
  const encryptedId = CryptoJS.AES.encrypt(plain.toString(), secretKey).toString();
  return encodeURIComponent(encryptedId);
};
