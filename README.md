# 🧠 ex-react-usememo-politici

Una semplice app React che mostra una lista di politici, ottimizzata con `useMemo` e `React.memo` per migliorare le performance durante la ricerca e il filtraggio.

---

## 🚀 Obiettivo

Visualizzare una lista di politici, ottimizzando il rendering e la ricerca per evitare calcoli e aggiornamenti inutili.

---

## 📦 Installazione

1. Clona la repo:

```bash
git clone https://github.com/tuo-utente/ex-react-usememo-politici.git
cd ex-react-usememo-politici
```

2. Installa le dipendenze:

```bash
npm install
```

3. Avvia il **Server API Locale** (se non ancora fatto):

```bash
npx json-server --watch db.json --port 3333
```

> Assicurati che il file `db.json` contenga un array di politici all'interno della proprietà `politicians`.

4. Avvia l'app React:

```bash
npm run dev
```

---

## 🔗 API

L'app utilizza come endpoint locale:

```
http://localhost:3333/politicians
```

---

## 🧩 Funzionalità

### ✅ Milestone 1: Visualizzazione Politici
- Recupero dati da API
- Visualizzazione in card con:
  - Nome
  - Immagine
  - Posizione
  - Biografia

### ✅ Milestone 2: Ricerca Ottimizzata
- Campo input per cercare politici per nome o biografia
- Uso di `useMemo` per evitare ricalcoli non necessari

### ✅ Milestone 3: Ottimizzazione Rendering
- Le card sono memorizzate con `React.memo`
- Evita il re-rendering delle card invarianti durante la ricerca
- Uso di `console.log()` per debug visivo del rendering

### 🎯 Bonus: Filtro per Posizione
- Dropdown dinamico con tutte le posizioni politiche (senza duplicati)
- Filtro combinato con la ricerca testuale

---

## 🧠 Tecnologie usate

- React 18+
- Vite (per ambiente di sviluppo veloce)
- JavaScript (ES6+)
- `useState`, `useEffect`, `useMemo`, `React.memo`

---

## 📁 Struttura dei file principali

```
src/
│
├── components/
│   └── PoliticianCard.jsx      // Card con React.memo
├── App.jsx                     // Logica principale: fetch, filtri, rendering
├── styles.css                  // Stili base
├── main.jsx                    // Entry point
```

---

## 🧪 Debug

Per controllare quali card vengono renderizzate, guarda il log in console:
```js
console.log(`Rendering: ${name}`);
```

---

## 📌 Note

- Assicurati che il server JSON sia attivo su `http://localhost:3333`
- L'app è progettata per evitare uso non necessario di `useEffect` per il filtraggio

---

## 👨‍💻 Autore

Progetto realizzato per esercizio didattico su ottimizzazione in React (Boolean - Frontend).
