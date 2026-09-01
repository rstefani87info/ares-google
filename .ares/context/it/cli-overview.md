# Panoramica CLI — @ares/google

## Stato

Questo modulo **non ha una CLI binaria** (`package.json` senza `bin`). È una libreria importabile per la gestione credenziali Google.

## Comandi (npm scripts)

| Comando | Scopo |
|---|---|
| `npm test` | Placeholder (nessun test definito, ritorna errore). |

## API runtime (import)

```js
import { getGoogleServiceAccountKey, ServiceAccount } from "@ares/google";

// Lettura chiave service account
const sa = getGoogleServiceAccountKey("/path/to/key.json", "password");

// Ottenere token di accesso
const token = await sa.getServiceAccountAccessToken(["https://www.googleapis.com/auth/cloud-platform"]);

// Richiesta autenticata
const data = await sa.makeServiceAccountAuthenticatedRequest(url, scopes);

// Dev tools: cifratura/decifratura chiavi
import { encryptGoogleServiceAccountKey, decryptGoogleServiceAccountKey } from "./service-account-dev.js";
encryptGoogleServiceAccountKey(absKeyFilePath, password);
decryptGoogleServiceAccountKey(absKeyFilePath, password);
```
