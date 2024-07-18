# React router

## Installazione della libreria

```
npm install react-router-dom
```

## Creazione delle pagine

Creare la cartella `src/pages` e all'interno creare un componente per ciascuna pagina (ad esempio `Home.jsx`, `About.jsx`, `Contacts.jsx`, ...)

## Inpostazione del router in `App.jsx`

Ci servono i componenti `BrowserRouter`, `Route` e `Routes` della libreria, poi generiamo una struttura come la seguente per definire tutte le rotte che vogliamo avere, specificando per ciascuna il percorso che verrà utilizzato per accedere alla pagina (prop `path`) e il componente che verrà montato (prop `element`):

```jsx
function App() {
    return (
        <BrowserRouter>
            {/* Parte fissa delle pagine */}

            {/* Parte che differisce tra le varie pagine */}
            <Routes>
                {/* Verrà renderizzato uno solo di questi componenti */}
                {/* in base all'indirizzo in cui ci troviamo */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/posts" element={<PostList />} />

                <Route path="/posts/:id" element={<Post />} />
                {/* esempi di indirizzi che vengono catturati da questa Route:s
                    /posts/2
                    /posts/10
                    /posts/ciao
                */}

                <Route path="/404" element={<NotFound />} />
                <Route path="/*" element={<Navigate to="/404" />} />
            </Routes>

            {/* Parte fissa delle pagine */}
        </BrowserRouter>
    );
}
```

## Aggiunta dei collegamenti nei contenuti

I collegamenti tra le varie pagine non verranno più effettuati con il tag `<a src="indirizzo">Testo</a>` (perchè questo di default carica una nuova pagina), ma con il componente `<Link to="indirizzo">Testo</Link>`, che verrà renderizzato come un normale tag `<a>` al quale è stato però disattivato il comportamento di default e sono state aggiunte altre funzionalità.

## Rotte con parametri

Una rotta con parametri si definisce con:

```jsx
<Route to="/posts/:id" element={<Post />} />
```

Il valore del parametro si può recuperare nel componente `Post` con un hook fornito dalla libreria:

```js
const { id } = useParams();
// il nome "id" usato per recuperare il valore è lo stesso
// del parametro usato nella definizione della rotta (/posts/:id)
```

## Pagina 404

Una rotta "cattura tutto" si può definire con la wildcard `*`:

```js
<Route path="/*" element={<NotFound />} />
```

Si può gestire la pagina not found anche ridirezionando a un indirizzo dedicato (ad esempio /404) usando il componente `Navigate`:

```jsx
<Route path="/404" element={<NotFound />} />
<Route path="/*" element={<Navigate to="/404" />} />
```

## Navigazione programmatica

Se dovesse servire far navigare l'utente in una rotta diversa ma senza la sua interazione (non aspettiamo il suo click su un link) possiamo usare l'hook `useNavigate` che ci restituisce una funzione (a cui in genere si dà il nome `navigate`) che ci permette di ridirezionare alla rotta passata come argomento:

```js
const navigate = useNavigate();

// altro codice

navigate('/about'); // ridireziona in /about
```

Se fosse necessario usare un componente (come ad esempio nella prop `element` di `Route`) possiamo usare il componente `<Navigate to="indirizzo" />`:

```jsx
<Route path="/404" element={<NotFound />} />
<Route path="/*" element={<Navigate to="/404" />} />
```

## Dettagli
