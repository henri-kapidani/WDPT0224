# Javascript cheat sheet

-   [Statements vs expression](#statements-vs-expressions)
-   [import / export](#import--export)
-   [Spread operator](#spread-operator)
-   [Destructoring](#destructoring)
-   [Oggetti](#oggetti)
-   [Arrow functions](#arrow-functions)
-   [Tabelle riassuntive](#tabelle-riassuntive)

## Statements vs expressions

**_Una `statement` sono istruzioni che non ritornano un valore (ad esempio i costrutti `if`, `for`, `while`)._**<br>
**_Una `espression` è un'istruzione che ritorna un valore (ad esempio il ternario, i vari operatori matematici)._**

Una `statement` non può essere assegnata ad una variabile:

```js
const myVar = if (x > 10) {
        console.log('maggiore');
    } else {
        console.log('minore');
    }
```

**_<u>QUESTO NON SI PUO' FARE!</u>_**<br>
Il ternario invece è una `expression` quindi:

```js
const myVar = x > 10 ? 'maggiore' : 'minore';
```

**_<u>QUESTO SI CHE SI PUO' FARE!</u>_**

## import / export

Potete importate in un file js codice presente in un altro file usando l'`import`:

```js
import foo from './percorso/file/da/importare';

// ora posso usare foo
```

è necessario però che cio' che state importando sia stato esportato dal file originale:

```js
function foo() {.........}

export default foo;
```

con `export default` potete esportare una sola cosa alla quale potete dare il nome che volete quando la importate (in questo caso potevate importare foo come altroNome `import altroNome from './percorso/file/da/importare';`).
Potete esportare più cose dallo stesso file usando `export` da solo (senza il `default`):

```js
export function foo() {.........}

export function myFunc() {........}

export const greet = () => {.........}
```

Così facendo potete decidere cosa importare usando lo stesso nome con cui sono state definite (potete cambiare il nome usando `as`), in questo modo (**_notare la necessià delle parentesi graffe in questo caso_**):

```js
import { foo, greet as saluto } from './percorso/file/da/importare';

// ora posso usare foo e saluto (NON greet perchè è stato rinominato in saluto)
```

## Spread operator

Potete "esplodere" gli elementi di dati di tipo lista (ad esempio array) oppure oggetti con l'operatore `...`

```js
const myArr = [1, 2, 3, 4];
```

`...myArr` è come se fosse `1, 2, 3, 4` sparsi pronti per essere raggruppati in un nuovo array ad esempio

```js
const myArr2 = [...myArr, 5];
```

`myArr2` ora contiene l'array `[1, 2, 3, 4, 5]`
In maniera simile con gli oggetti:

```js
const myObj = {
    firstName: 'Pinco',
    lastName: 'Pallino',
    age: 30,
};

const myObj2 = {
    ...myObj,
    age: 35,
    profession: 'developer',
};
```

`myObj2` ora contiene:

```js
{
    firstName: 'Pinco',
    lastName: 'Pallino',
    age: 35, // ha sovrascritto age: 30
    profession: 'developer', // è stata aggiunta
}
```

<u>**_notate come per chiavi con lo stesso nome prevale il valore dell'ultima_**</u>. Definendo `myObj2` in quest'altra maniera:

```js
const myObj2 = {
    age: 35,
    ...myObj,
    profession: 'developer',
};
```

avrebbe prodotto:

```js
{
    firstName: 'Pinco',
    lastName: 'Pallino',
    age: 30, // il valore 35 è stato sovrascritto dal 30 presente in myObj
    profession: 'developer', // è stata aggiunta come prima
}
```

## Destructoring

Considerando objPerson questo oggetto:

```js
const objPerson = {
    firstName: 'Pinco',
    lastName: 'Pallino',
    age: 30,
};
```

la sintassi

```js
const { firstName, lastName, age } = objPerson;
```

equivale a scrivere:

```js
const firstName = objPerson.firstName; // 'Pinco'
const lastName = objPerson.lastName; // 'Pallino'
const age = objPerson.age; // 30
```

Una cosa simile si può fare con gli array, considerando arrPerson questo array:

```js
const arrPerson = ['Pinco', 'Pallino', 30];
```

la sintassi

```js
const [firstName, lastName, age] = arrPerson;
```

equivale a scrivere:

```js
const firstName = arrPerson[0]; // 'Pinco'
const lastName = arrPerson[1]; // 'Pallino'
const age = arrPerson[2]; // 30
```

## Oggetti

In genera per accedere ad una proprietà di un oggetto si usa il `dot operator`, ma se la chiave contiene dei caratteri speciali (come spazi, `-`, `+`, `*`, ...) allora si deve usare la sintassi con parentesi quadre (e nella definizione dell'oggetto la chiave deve essere scritta tra virgolette):
Considerando il seguente oggetto:

```js
const myObj = {
    'chiave con spazi': 'un valore',
    'anno-di-nascita': 1990,
    chiaveBella: true,
};
```

possiamo accedere ai suoi valori in questa maniera:

```js
myObj['chiave con spazi'];
myObj['anno-di-nascita'];
myObj.chiaveBella; // ma funziona anche myObj['chiaveBella'];
```

La sintassi a parentesi quadre è utile anche quando la chiave è contenuta in una variabile:

```js
const myKey = 'chiaveBella';

myObj[myKey]; // verrà interpretato come myObj['chiaveBella'];
```

### Chiavi dinamiche

```js
const myKey = 'firstName';

const myObj = {
    [myKey]: 'un valore',
};
```

`myObj` verrà interpretato come:

```js
{
    firstName: 'un valore',
}
```

## Arrow functions

**_In generale arrow functions e funzioni tradizionali sono equivalenti e quindi si può usare l'una o l'altra sintassi indifferentemente <u>ECCETTO nel caso in cui si ha la necessità di utilizzare la variabile speciale `this` nel corpo della funzione.</u>_**

### Forma

```js
(arg1, arg2) => {
    // corpo della funzione
};
```

Se la funzione riceve un solo argomento si possono omettere le parentesi tonde, anche se ci sono alcune regole di stile che preferiscono includerle sempre.

```js
(arg1) => {
    /* corpo della funzione */
};

// può essere scritto senza parentesi tonde:
// arg1 => { /* corpo della funzione */ };
```

### Return implicito

Se il corpo della funzione è costituito da <u>**_UNA SOLA expression_**</u> di cui vogliamo ritornare il risultato, si può evitare di scrivere la parola `return` semplicemente omettendo le parentesi graffe:

```js
(x) => x * 2; // oppure x => x * 2
```

equivale a:

```js
(x) => {
    return x * 2;
};
```

Notare come:

```js
(x) => {
    x * 2;
};
```

non ritorna il valore `x * 2` ma `undefined` visto che manca il `return` (e il return implicito non è attivato a causa della presenza delle parentesi graffe).

```js
(x) => {
    const multiplier = 5;
    return multiplier * 2;
};
```

In questo caso non si può usare il return implicito dato che il corpo della funzione è composto da più di una istruzione.

## Tabelle riassuntive

<table>
<thead>
<tr>
<th>La sintassi</th>
<th>equivale a</th>
</tr>
</thead>
<tbody>
<tr>
<td>

```js
const { firstName, lastName, age } = myObj;
```

</td>
<td>

```js
const firstName = myObj.firstName;
const lastName = myObj.lastName;
const age = myObj.age;
```

</td>
</tr>

<tr>
<td>

```js
const [firstName, lastName, age] = myArr;
```

</td>
<td>

```js
const firstName = myArr[0];
const lastName = myArr[1];
const age = myArr[2];
```

</td>
</tr>

<tr>
<td>

```js
(x) => x * 2;
```

</td>
<td>

```js
(x) => {
    return x * 2;
};
```

</td>
</tr>

</tbody>
</table>
