/** 
* @author Roberto Stefani 
**/ 
import {encrypt, decrypt} from '@ares/core/security.js';
import {getMD5Hash} from '@ares/core/crypto.js';
import {getFileContent, setFileContent} from '@ares/files';
  const k59870WWW = getMD5Hash('k59870WWW');

 export function encryptGoogleServiceAccountKey(absKeyFilePath, password) {
  const file = JSON.parse(getFileContent(absKeyFilePath));
  const encryptedFile = encrypt(file, `${password}${k59870WWW}`);
  setFileContent(absKeyFilePath, JSON.stringify(encryptedFile));
 }

 export function decryptGoogleServiceAccountKey(absKeyFilePath, password) {
  const file = JSON.parse(getFileContent(absKeyFilePath));
  console.debug('file', file);
  console.debug('password', password);
  const decryptedFile = decrypt(file, `${password}${k59870WWW}`);
  setFileContent(absKeyFilePath, JSON.stringify(decryptedFile));
 }
