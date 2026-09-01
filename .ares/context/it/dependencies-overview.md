# Dipendenze — @ares/google

## Dipendenze @ares/* usate

| Modulo | Perché |
|---|---|
| `@ares/core` | Fornisce `security.js` (`encrypt`/`decrypt`) per la cifratura/decifratura delle chiavi service account e `crypto.js` (`getMD5Hash`) per la generazione di hash nelle operazioni di sicurezza. |

## Dipendenze @ares/* (dev)

| Modulo | Perché |
|---|---|
| `@ares/files` | Utility file: `getFileContent`, `setFileContent` per leggere/scrivere chiavi service account su file (devDependency). |
| `@ares/scd` | Strumenti SCD per analisi/generazione documentazione. |

## Dipendenze esterne rilevanti

- `jsonwebtoken` — signing JWT per l'autenticazione OAuth2 dei service account.

## Chi dipende da questo modulo

| Modulo | Come lo usa |
|---|---|
| `@ares/ecosystem-microservices-geo` | Dichiarato come dipendenza per l'integrazione credenziali/service account Google nell'ecosistema applicativo. |
