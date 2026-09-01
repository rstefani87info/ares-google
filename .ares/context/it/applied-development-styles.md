# Stili di sviluppo applicati — @ares/google

## Standard di programmazione

- Modulo **ESM** (`"type": "module"`) con file principali `service-account.js` e `service-account-dev.js`.
- Codice documentato con commenti `@author`.
- Utilizzo di `@ares/core/security.js` (`encrypt`/`decrypt`) e `@ares/core/crypto.js` (`getMD5Hash`) per la gestione sicura delle chiavi.
- Utilizzo di `@ares/files` per operazioni file (lettura/scrittura chiavi).
- Nessuno strumento di build/transpile: JS nativo ESM.

## Contratto directory / file

```text
google/
├─ service-account.js       # MANUALE  — lettura chiave + ServiceAccount class
├─ service-account-dev.js   # MANUALE  — tools cifratura/decifratura (dev)
├─ package.json             # MANUALE
├─ README.md                # MANUALE
├─ .gitignore               # MANUALE
├─ .git/                    # GENERATO (locale)
└─ .ares/
   ├─ context/              # MANUALE   — doc di contesto (prodotto)
   ├─ docs/{en,it}          # MANUALE   — documentazione
   └─ tasks/                # MANUALE   — task canonici
```

## Generato automaticamente vs Manuale

### Generato automaticamente (non committare)

- `.git/` (locale).

### Manuale (scritto a mano, NON rigenerare/sovrascrivere)

- `service-account.js`, `service-account-dev.js` (codice sorgente da conservare).
- `package.json`, `README.md`, `.gitignore`.
- Tutti i file dentro `.ares/` (context, docs, tasks).

Nessuna directory di build/dist; le dipendenze sono risolte a livello monorepo.
