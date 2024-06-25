## import / export

Potete importate in un file js codice presente in un altro file usando l'`import`:

```
import foo from './percorso/file/da/importare';
```

è necessario però che cio' che state importando sia stato esportato dal file originale:

```
function foo() {.........}

export default foo;
```

con `export default` potete esportare una sola cosa, se volete esportare più cose dallo stesso file potete farlo usando `export` da solo (senza il default):

```
export function foo() {.........}

export function myFunc() {........}

export const greet() => {.........}
```

Così facendo potete decidere cosa importare in questo modo:

```
import {foo, greet} from './percorso/file/da/importare';
```

## Spread operator

Potete "esplodere" gli elementi di dati di tipo lista (ad esempio array) oppure oggetti con l'operatore `...`

```
const myArr = [1, 2, 3, 4];
```

`...myArr` e come se fosse `1, 2, 3, 4` sparsi pronti per essere raggruppati in un nuovo array ad esempio

```
const myArr2 = [...myArr, 5];
```

`myArr2` ora contiene `[1, 2, 3, 4, 5]`

## Destructoring

Considerando objPerson questo oggetto:

```
const objPerson = {
    firstName: 'Pinco',
    lastName: 'Pallino',
    age: 30,
};
```

la sintassi

```
const { firstName, lastName, age } = objPerson;
```

equivale a scrivere:

```
const firstName = objPerson.firstName;
const lastName = objPerson.lastName;
const age = objPerson.age;
```
