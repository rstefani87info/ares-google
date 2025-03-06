/** 
* @author Roberto Stefani 
**/ 
import {encrypt} from '@ares/core/security.js';
import {getMD5Hash} from '@ares/core/crypto.js';
import {getFileContent, setFileContent} from '@ares/files';
  const k59870WWW = getMD5Hash('k59870WWW');
 export function encryptGoogleServiceAccountKey(absKeyFilePath, password) {
  const file = JSON.parse(getFileContent(absKeyFilePath));
  const encryptedFile = encryptObject(file, `${password}${k59870WWW}`);
  setFileContent(absKeyFilePath, JSON.stringify(encryptedFile));
 }