# Documentazione @ares/google

## Scopo

Descrizione e obiettivi del modulo `@ares/google`.

## Installazione

```bash
yarn add @ares/google
```

In un monorepo Yarn Workspaces:

```bash
yarn workspace <app> add @ares/google
```

## Quickstart

Esempio minimale:

```js
import * as mod from "@ares/google";
```

## API pubbliche (exports)

Questa sezione documenta la superficie pubblica reale a livello di entrypoint e simboli principali.

Entrypoint root:

- `@ares/google`

File principali nel root del package (indicativi):

- `service-account-dev.js`
- `service-account.js`

## Configurazione (appSetup / config / policies)

Attenzione: questo modulo gestisce credenziali e integrazioni Google.

- non committare mai service account o chiavi
- preferire variabili d’ambiente e secret manager
- validare la presenza delle chiavi a startup e fallire in modo esplicito

## Test

Esecuzione test del modulo (se presenti):

```bash
yarn workspace @ares/google test
```

## Note

- Questo documento è mantenuto in parallelo ai ticket del modulo.
