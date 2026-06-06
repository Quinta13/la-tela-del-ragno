# La Tela del Ragno

La Tela del Ragno è un sito statico con una redazione immaginaria che indaga sulle fake news su Spider-Man, verifica i fatti e racconta le proprie scoperte in modo chiaro e creativo.

Il progetto ospita anche quattro siti indipendenti, uno per ciascun articolo della redazione. Ogni cartella contiene un template molto semplice con `index.html` e `style.css`.

## A chi è rivolto

Questo repository è pensato per chi vuole costruire pagine web statiche con strumenti accessibili:

* HTML5
* CSS3
* Bootstrap 5.3 da CDN
* JavaScript vanilla

L'obiettivo non è solo scrivere codice, ma capire come si organizza un piccolo progetto web, come si presentano i contenuti e come si pubblica un sito su GitHub Pages.

## Struttura

```text
.
├── index.html
├── style.css
├── script.js
├── config.js
├── README.md
├── .env.example
├── .gitignore
├── .github/workflows/deploy.yml
├── site1/
│   ├── index.html
│   └── style.css
├── site2/
│   ├── index.html
│   └── style.css
├── site3/
│   ├── index.html
│   └── style.css
└── site4/
	├── index.html
	└── style.css
```

## Home page

La pagina principale è la redazione della Tela del Ragno. All'apertura compare una schermata di accesso scenografica a tema giornalistico. Dopo aver inserito la password corretta, il sito si sblocca e mostra:

* un grande header principale
* una breve introduzione alla redazione e al suo scopo educativo
* la sezione "Ultime indagini"
* quattro card cliccabili verso i siti degli articoli

Le card puntano a:

* `site1/` - Articolo 1 - Il caso della ragnatela scomparsa
* `site2/` - Articolo 2 - Avvistamenti sospetti in città
* `site3/` - Articolo 3 - Verità o fake news?
* `site4/` - Articolo 4 - La voce della redazione

## Template dei siti

Ogni cartella `site1`, `site2`, `site3`, `site4` contiene un template molto semplice. Il modello è volutamente essenziale per facilitare la modifica in autonomia.

Ogni sito include:

* un `index.html` semplice
* un `style.css` separato
* commenti nel codice per indicare dove scrivere titolo, testo, immagini e sezioni
* un pulsante per tornare alla home

I siti funzionano anche se aperti in modo indipendente, aprendo direttamente il loro `index.html`.

## Password di accesso

La schermata di login è solo scenografica e avviene lato client. Serve per dare un effetto da redazione e per creare un momento di gioco, ma non è una protezione reale.

Questo punto è importante: su GitHub Pages non esiste una vera autenticazione sicura lato server. Chi conosce gli strumenti del browser può comunque vedere il codice sorgente e la password.

### Password di default

Il file `config.js` contiene una password di default:

* `spiderman`

Se il file non viene rigenerato durante il deploy, il sito usa comunque questa password di fallback.

### File `.env`

Per lavorare in locale puoi creare un file `.env` partendo da `.env.example`:

```text
SITE_PASSWORD=spiderman
```

Il file `.env` è ignorato da Git grazie a `.gitignore`.

## GitHub Secrets

Se vuoi cambiare la password durante il deploy, aggiungi un secret al repository:

1. Vai su `Settings` del repository.
2. Apri `Secrets and variables`.
3. Entra in `Actions`.
4. Crea un nuovo secret chiamato `SITE_PASSWORD`.
5. Inserisci la password che vuoi usare.

La workflow inclusa in `.github/workflows/deploy.yml` genera automaticamente `config.js` usando quel secret. Se il secret non esiste, usa il valore di default `spiderman`.

## Pubblicazione su GitHub Pages

Il progetto è compatibile con GitHub Pages pubblicando la branch `main` dalla root del repository. In alternativa, puoi usare la workflow inclusa per generare `config.js` durante il deploy.

Per la pubblicazione classica da branch:

1. Vai nelle impostazioni del repository.
2. Apri `Pages`.
3. Seleziona la sorgente `Deploy from a branch`.
4. Scegli `main` e la cartella `/ (root)`.
5. Salva.

Se invece vuoi usare la workflow:

1. Imposta la source di Pages su `GitHub Actions`.
2. Aggiungi il secret `SITE_PASSWORD`.
3. Fai un push su `main`.

## Come modificare i quattro siti

Ogni ragazzo può lavorare solo nella propria cartella:

* `site1/index.html`
* `site1/style.css`
* `site2/index.html`
* `site2/style.css`
* `site3/index.html`
* `site3/style.css`
* `site4/index.html`
* `site4/style.css`

Per modificare un sito basta sostituire il testo dei segnaposto e personalizzare il CSS. Il template è volutamente semplice, così è facile imparare a leggere e cambiare il codice senza troppa complessità.

## Limitazione importante

La password su GitHub Pages è solo scenografica e non garantisce vera sicurezza. È utile per il gioco e per l'effetto narrativo, ma non sostituisce una protezione lato server.

## Tecnologie usate

* HTML5
* CSS3
* Bootstrap 5.3 da CDN
* JavaScript vanilla

## Uso del progetto

Il sito è pensato come materiale educativo. Non contiene immagini o asset protetti da copyright e usa solo grafiche CSS, emoji, gradienti e componenti Bootstrap.

Buona navigazione e buona caccia alle fake news.
