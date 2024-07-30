# Guida backend Node

[Node.js](https://nodejs.org/en/) è un ambiente di esecuzione per il linguaggio `javascript` che non richiede un browser, quindi utilizzabile per costruire un backend (originariamente `javascript` si poteva usare solo nel browser e quindi solo per costruire il frontend).

## Inizializzare il progetto

```
npm init -y
```

Questo comando genera il file `package.json` nella cartella in cui è stato eseguito.
Il flag `-y` server a rispondere con il default a tutte le domande, così il comando va a termine senza la nostra interazione (le risposte possono sempre essere cambiate dopo).

## Attivare la sintassi moderna degli `import`

Aprite `package.json` e aggiungete `"type": "module",`, non importa dove ma in genere si mette nella parte alta del json, magari sotto la chiave `main`. Il default per l'importazione di moduli (quindi senza l'indicazione del `type`) è il `require`.

## Creare i file base

Abbiamo bisogno dei file:

-   `readme.md` per documentare e presentare il nostro progetto al pubblico
-   `.gitignore` per definire cosa non va pushato nella repo del progetto
-   `.env` e `.env.example` per contenere i valori di configurazione del progetto e i valori sensibili (quali password)
-   un punto di ingresso per il server. Al file in genere viene dato il nome `index.js` oppure `server.js` oppure `app.js`. Una volta creato questo file andate nel `package.json` e assicuratevi che alla chiave `main` sia associato il nome che avete scelto per il file di ingresso (di default troverete `index.js`).

## Sistemare il file `.gitignore`

Nel file `.gitignore` aggiungete queste righe:

```
node_modules
.env
```

`node_modules` non va pushato perchè contiene le librerie e può essere sempre rigenerato a partire da un `package.json` valido con il comando `npm install`.
Il file `.env` non va pushato perchè contiene impostazioni e dati sensibili, al suo posto viene invece pushato il file `.env.example` che contiene solo la struttura del file. Un altro developer che clona il nostro progetto farà la copia di `.env.example` rinominandolo in `.env` e popolando le chiavi con i suoi valori e le sue password.

**_MANTENETE SEMPRE SINCRONIZZATI I DUE FILE, SE AGGIUNGETE UNA CHIAVE IN `.env` RICORDATEVI DI AGGIUNGERLA ANCHE NEL FILE `.env.example` (CON UN VALORE FINTO NATURALMENTE)._**

Ad esempio, nel file `.env`

```
PORT=5000
MONGODB_CONNECTION_URI=mongodb+srv://asdf:password@cluster0.ctqpex0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster
```

nel file `.env.example`

```
PORT=5000
MONGODB_CONNECTION_URI=string_from_atlas
```

## Installare le librerie base

Abbiamo bisogno di alcune librerie:

```
npm i express mongoose dotenv
npm i -D nodemon
```

Questa è una lista di librerie molto usate:

<table>
<thead>
<tr>
<th>Nome libreria</th>
<th>A cosa serve</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`express`

</td>
<td>

permette di creare un web server capace di rispondere alle richieste HTTP

</td>
</tr>

<tr>
<td>

`mongoose`

</td>
<td>

permette di connettersi e lavorare con il database `MongoDB`

</td>
</tr>

<tr>
<td>

`dotenv`

</td>
<td>

legge i valori presenti nel file `.env`, che possono poi essere recuperati nel codice da `process.env.NOME_CHIAVE`

</td>
</tr>

<tr>
<td>

`cors`

</td>
<td>

permette di gestire l'accesso agli endpoints del server da parte del frontend e risolvere i prblemi di CORS

</td>
</tr>

<tr>
<td>

`helmet`

</td>
<td>

setta alcuni header nelle risposte HTTP in maniera da rendere il server più sicuro

</td>
</tr>

<tr>
<td>

`morgan`

</td>
<td>

è un logger che permette di visualizzare cosa avviene nel server con diversi livelli di dettaglio

</td>
</tr>

<tr>
<td>

`http-errors`

</td>
<td>

permette di generare in maniera semplice e standardizzata risposte HTTP con un codice di errore (4xx e 5xx)

</td>
</tr>

<tr>
<td>

`nodemailer`

</td>
<td>

permette di inviare emails

</td>
</tr>

<tr>
<td>

`multer`

</td>
<td>

permette di caricare files sul server

</td>
</tr>

<tr>
<td>

`nodemon`

</td>
<td>

fa il watch dei file e riavvia il server automaticamente dopo qualsiasi modifica

</td>
</tr>

<tr>
<td>

`swagger-ui-express`
<br>
`swagger-autogen`

</td>
<td>

permettono di creare la documentazione [swagger](https://swagger.io/) dell'api

</td>
</tr>

<tr>
<td>

`express-list-endpoints`

</td>
<td>

crea una tabella in console con la lista di tutti gli endpoints della nosta api

</td>
</tr>

</tbody>
</table>

## Settare `nodemon`

Per evitare di riavviare manualmente il server ad ogni modifica anzichè avviarlo con il comando `node server.js` lo avviamo con `nodemon server.js`, però se `nodemon` non è installato globalmente il comando non verrà trovato (perchè l'eseguibile si trova in `node_modules/.bin` che non è un percorso registrato nella variabile di sistema `PATH` usata per cercare gli eseguibili). Per risolvere si può optare per una delle seguenti soluzioni:

-   scrivere il percorso completo all'eseguibile di `nodemon`, così che il comando da scrivere in console diventa:

    ```
    ./node_modules/.bin/nodemon server.js
    ```

-   installare `nodemon` globalmente con `npm i -g nodemon` (in questo caso l'eseguibile verrà messo in una cartella presente in `PATH`), così che il comando da scrivere in console è:

    ```
    nodemon server.js
    ```

-   aggiungere uno script nel `package.json` (gli script dichiarati in `package.json` cercano automaticamente gli eseguibili anche nella cartella `node_modules/.bin` del progetto), nella sezione scripts aggiungere `"dev": "nodemon server.js"`:

    ```
    "scripts": {
        "dev": "nodemon server.js"
    },
    ```

    il nome dello script non deve essere necessariamente `dev`. Dopo aver definito lo script, il server può essere avviato con il comando:

    ```
    npm run dev
    ```

    Notate che se allo script avete dato il nome `start` allora è sufficente scrivere `npm start` per lanciarlo.

Vi ricordate l'opzione `main` nel `package.json`? Se avete messo il nome corretto del file di ingresso potete ometterlo quando lanciate `nodemon` (sia negli script che da terminale). Quindi se sul terminale lanciate `./node_modules/.bin/nodemon` oppure `nodemon` oppure definite lo script come `"dev": "nodemon"` senza specificare il nome del file da eseguire, verrà eseguito il `main` dichiarato nel `package.json`.

**_IMPORTANTE: `nodemon` è pensato per rendere lo sviluppo più comodo e va usato solo durante la fase di sviluppo. In produzione ricordatevi di NON avviare il server con `nodemon` ma con il comando `node` o con altri strumenti pensati per la fase di produzione (ad esempio `pm2`)._**

Può essere utile creare uno script in `package.json` per avviare il server in modalità produzione:

```
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
},
```

## Testare gli endpoints

Per testare gli endpoints creati può essere utile usare strumenti come:

-   [Postman](https://www.postman.com/)
-   [Insomnia](https://insomnia.rest/)
-   [Hoppscotch](https://hoppscotch.io/)
-   Thunder Client (estensione per VS Code)
-   Rest Client (estensione per VS Code) e permette di salvare le richieste in file con estensione `.http`
