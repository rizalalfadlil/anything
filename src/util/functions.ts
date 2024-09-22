import CryptoJS from 'crypto-js';
export function getIntFromString(str: string, offset = 0, min = 0, max = 100) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }

  const randomInt = (Math.abs(hash) + offset) % (max - min + 1) + min;
  return randomInt;
}
  
export function isValidString(input:string) {
  // Menghilangkan spasi di awal dan akhir string
  const trimmedInput = input.trim();

  // Memeriksa apakah string kosong setelah di-trim
  if (trimmedInput.length === 0) {
    return false;
  }

  // Memeriksa apakah string hanya mengandung huruf dan angka
  const alphanumericRegex = /^[a-zA-Z0-9]*$/;
  return alphanumericRegex.test(trimmedInput);
}
// Fungsi untuk membuat Base64 URL-safe (mengganti karakter yang tidak aman di URL)
function base64UrlEncode(str: string) {
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// Fungsi untuk mengembalikan Base64 dari URL-safe string
function base64UrlDecode(str: string) {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) {
    str += '=';
  }
  return str;
}

// Fungsi untuk mengenkripsi string
export function encryptString(plainText:any, secretKey = 'abc') {
  const encrypted = CryptoJS.AES.encrypt(plainText, secretKey).toString();
  const base64Encoded = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encrypted));
  return base64UrlEncode(base64Encoded);
}

// Fungsi untuk mendekripsi string
export function decryptString(encryptedText:any, secretKey = 'abc') {
  const base64Decoded = base64UrlDecode(encryptedText);
  const decryptedBase64 = CryptoJS.enc.Base64.parse(base64Decoded).toString(CryptoJS.enc.Utf8);
  const decrypted = CryptoJS.AES.decrypt(decryptedBase64, secretKey);
  return decrypted.toString(CryptoJS.enc.Utf8);
}