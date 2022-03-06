# Lecture 1 exercises: Variables

## Declaration (Erklæring)

1. Hvad er forskellen på `let` og `const`?

## Strings

1. Opret tre forskellige konstante variabler og assign string værdier med jeres fornavn, efternavn og email.
2. Lav en fjerde variabel med jeres fulde navn, på baggrund af de 2 foregående
3. Skriv en velkomst besked fx. til et nyhedsbrev:

   > 'Hej *Mathias*, velkommen til og tak fordi du har skrevet dig op til mit nyhedsbrev, håber du kommer til at nyde mit indhold.’

   1. Hvor i indsætter jeres eget navn ved brug af concatenation

### Template literals (Template strings)

1. Ret jeres velkomst besked til at bruge template literals

## Numbers

Lad os regne på hvor meget jeres SU ville være i hhv. euro og usd.

1. Opret 2 konstante variabler, assign number værdier med kursværdien på euro og dollars.

   > Hvis du ikke gider finde den rigtige kurs, kan du blot nøjes med euro: 7,45 og usd: 6,55

2. Opret en tredje number variabel med jeres udbetalte SU.
3. Lav nu udregning fra jeres SU i dkk til hhv. usd og eur. og assign resultaterne til nye variabler
4. Udskriv i konsollen: "Min SU i eur: {indsæt nr} og min SU i usd: {indsæt nr}"

## Booleans

1. Opret variabler og besvar med enten "true" eller "false" på følgende udsagn:
   1. I like cats
   2. Cats can fly
   3. I do not like dogs
2. Lav en udregning på om du må købe alcohol
   1. Opret en variabel med jeres alder
   2. Opret en ny variabel "isAllowed" og assign den resultatet om jeres alder er over 18.
   3. Udskriv resultatet i consolen.

## Objects

1. Lav jeres information om, fra individuelle konstante variabler, til et objekt.
2. Tilføj nogle nye værdier, som fx. uddannelses institutions navn, gymnasiel uddannelse
3. Tilgå jeres fornavn og efternavn print i consolen
4. Ændre jeres fornavn til også at indeholde jeres mellemnavn.
   > hvis i ikke har et mellemnavn, kan i finde på et nyt :)

## Arrays

1. Opret et array indeholdende navne/emner på jeres flows sidste semester
2. Opret et array med favorit film/tv-shows titler
3. Print et af film navnene.

## Arrays <-> Objects

1. Opret et Array indeholdende mindst 2 objekter med information om 2 forskellige personer
2. Tilføj et Array til jeres eget person objekt
   Fx med yndlings serier

# Indtil næste gang / Selvstudie

Løs disse 3 kapitel opgaver på W3Schools:

1. [JS Data Types](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_datatypes1)
2. [JS Objects](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_objects1)
3. [JS Arrays](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_arrays1)

## Valgfrit: Avanceret Strings

Som nævnt i undervisningen kan man mange ting med Strings.

Jeg fik blandt andet nævnt:

> split, length, toLowerCase, includes, substring, og mange flere

Nogle af disse er funktioner/metoder, og nogle af dem er attributer/properties på string objektet.

Hvis det ikke giver nogen mening, så er properties ligesom når vi henter en værdi fra et objekt, fx.

```js
const name = person.myName;
```

Her kan vi på en string så tage fx. length:

```js
const myName = "Mathias Nielsen";
const characters = myName.length;
```

_For at få resultatet af `characters`, kan du prøve selv._

**Metoder og funktioner** fortæller jeg om næste gang i jeres undervisningsgang 2, men hvis i gerne vil dykke lidt dybere ned i strings, og fx. bruge funktioner som `split, slice, substring, toLowerCase, toUpperCase`, så er den store forskel at funktioner skal "kaldes"/"eksekveres", før man får sit resultat.

Hvis vi tager en funktion som `toUpperCase`, så er den rimelig intuitiv i hvad den gør, den laver alle bogstaverne til store bogstaver.

```js
const myName = "Mathias Nielsen";
const upperCased = myName.toUpperCase();
```

_For at få resultatet af `upperCased`, kan du prøve selv._

Men her er det vigtigste at ligge mærke til `()`, som er det der gør at vi eksekverer funktionen.

I kan læse mere om [Strings](https://www.w3schools.com/js/js_strings.asp)
og [String metoder](https://www.w3schools.com/js/js_string_methods.asp)

og Løse opgaverne til:

1. [String](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_strings1)
2. [String metoder](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_string_methods1)

hvis i vil.

### Flere opgaver: Avanceret Strings

1. Givet følgende stykke kode, skal du ved hjælp af `slice` skal du skal du udskrive "lange string".
   ```js
   var langString = "Min lange string er lang";
   ```
2. Givet følgende stykke kode skal du ved hjælp af `slice, toUpperCase, og toLowerCase` udskrive følgende: "Hej med dig, hvordan har du det?"
   ```js
   var langString = "hej med DIG, HVoRdan hAR du DET?";
   ```
