import CryptoJS from 'crypto-js';

// Define a secret key for encryption and decryption (make sure to keep this key secure)
const SECRET_KEY = process.env.NEXT_CRYPTOJS_AES_ENCRYPTION_KEY || "secret_key"; // Use an environment variable or a more secure way to store this in production

// Safely parse data with a try-catch block
const safeParseJSON = (data) => {
    try {
      return JSON.parse(data);  // Attempt to parse the stringified data
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return null;  // Return null or some fallback value if JSON parsing fails
    }
};

// Encrypt data
export const encryptData = (data) => {
 if (!data) return null;
  const stringifiedData = JSON.stringify(data); // Convert the data to a string
  const encryptedData = CryptoJS.AES.encrypt(stringifiedData, SECRET_KEY).toString();
  return encryptedData;
};

// Decrypt data
export const decryptData = (encryptedData) => {
  if (!encryptedData) return null;
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return safeParseJSON(decryptedData); // Convert back to the original data format
};
