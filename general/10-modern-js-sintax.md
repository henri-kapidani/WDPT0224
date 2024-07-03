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
Potete esportare più cose dallo stesso file usando `export` da solo (senza il default):

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

## Objects

## Arrow functions
