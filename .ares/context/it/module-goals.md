# Obiettivi del modulo @ares/google

## Introduzione

`@ares/google` è il modulo per la gestione delle credenziali e dei service account Google nel framework aReS. Fornisce funzioni per leggere, cifrare e decifrare chiavi service account Google, e per ottenere token di accesso OAuth2.

Modulo ESM con entrypoint `index.js` (non definito esplicitamente) e file principali `service-account.js` e `service-account-dev.js`.

## Obiettivi principali

- Gestire le chiavi service account Google: lettura, cifratura, decifratura.
- Ottenere token di accesso OAuth2 dai service account (JWT signing → token exchange).
- Effettuare richieste HTTP autenticate verso le API Google.
- Fornire strumenti di sviluppo per la gestione sicura delle chiavi (criptografia reversibile).

## Responsabilità

- `getGoogleServiceAccountKey(absKeyFilePath, password)` — legge e decifra una chiave service account Google.
- `ServiceAccount` — classe con metodi `getServiceAccountAccessToken(scopes)` e `makeServiceAccountAuthenticatedRequest(url, scopes)`.
- `encryptGoogleServiceAccountKey(absKeyFilePath, password)` — cifra una chiave service account su file (dev tool).
- `decryptGoogleServiceAccountKey(absKeyFilePath, password)` — decifra una chiave service account su file (dev tool).

## Cosa NON fa

- Non ha CLI binaria (`package.json` senza `bin`).
- Non gestisce OAuth2 utente (solo service account).
- Non fornisce client API Google completi (Maps, Drive, ecc.): è un modulo di basso livello per le credenziali.
