## import / export

Potete importate in un file js codice presente in un altro file usando l'`import`:

```javascript
import foo from './percorso/file/da/importare';
```

è necessario però che cio' che state importando sia stato esportato dal file originale:

```javascript
function foo() {.........}

export default foo;
```

con `export default` potete esportare una sola cosa, se volete esportare più cose dallo stesso file potete farlo usando `export` da solo (senza il default):

```javascript
export function foo() {.........}

export function myFunc() {........}

export const greet = () => {.........}
```

Così facendo potete decidere cosa importare, in questo modo:

```javascript
import { foo, greet } from './percorso/file/da/importare';
```

## Spread operator

Potete "esplodere" gli elementi di dati di tipo lista (ad esempio array) oppure oggetti con l'operatore `...`

```javascript
const myArr = [1, 2, 3, 4];
```

`...myArr` e come se fosse `1, 2, 3, 4` sparsi pronti per essere raggruppati in un nuovo array ad esempio

```javascript
const myArr2 = [...myArr, 5];
```

`myArr2` ora contiene l'array `[1, 2, 3, 4, 5]`

## Destructoring

Considerando objPerson questo oggetto:

```javascript
const objPerson = {
    firstName: 'Pinco',
    lastName: 'Pallino',
    age: 30,
};
```

la sintassi

```javascript
const { firstName, lastName, age } = objPerson;
```

equivale a scrivere:

```javascript
const firstName = objPerson.firstName;
const lastName = objPerson.lastName;
const age = objPerson.age;
```
