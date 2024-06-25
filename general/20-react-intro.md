# REACT INTRO

Per utilizzare gli strumenti di React è necessario avere installati `Node` (ambiente di esecuzione di JavaScript fuori dal browser) ed `npm` (gestore di pacchetti JavaScript).
Si possono installare dal sito (installate sempre l'ultima versione LTS).
Dopo l'installazione verificare che sia andato tutto bene **_<u>APRENDO UN NUOVO TERMINALE</u>_** e lanciando:

```
node --version
```

```
npm -v
```

Se i comandi rispondo con le versioni dei programmi senza errori vuol dire che tutto è apposto.

Installare il pacchetto che verrà utilizzato per inizializzare i progetti React (operazione da fare una sola volta):

```
npm i -g create-react-app
```

Ora è possibile inizializzare un progetto React:

1. create la cartella del progetto (usate solo caratteri minuscoli, numeri, - o \_, **_NO spazi_**, **_NO caratteri speciali_**, **_NON mettete la cartella all'interno di cartelle sincronizzate_** come OneDrive, GoogleDrive ...)
1. aprite la cartella in vs-code o in un terminale
1. lanciate il comando di inizializzazione del progetto React (il punto finale è importante e sta ad indicare che il progetto deve essere inizializzato nella cartella in cui vi trovate):

```
npx create-react-app .
```
