# Avanceret Strings

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

_For at få resultatet af `characters`, kan du prøve selv og evt. `console.log` det_

**Metoder og funktioner** fortæller jeg om næste gang, på dag 2, men hvis i gerne vil dykke lidt dybere ned i strings, og fx. bruge funktioner som `split, slice, substring, toLowerCase, toUpperCase`, så er den store forskel at funktioner skal "kaldes"/"eksekveres", før man får sit resultat.

Hvis vi tager en funktion som `toUpperCase`, så er den rimelig intuitiv i hvad den gør, den laver alle bogstaverne til store bogstaver.

```js
const myName = "Mathias Nielsen";
const upperCased = myName.toUpperCase();
```

_For at se resultatet af `upperCased`, kan du prøve selv._

Men her er det vigtigste at ligge mærke til, de parenteser `()` efter `toUpperCase`, som er det der gør at vi eksekverer funktionen.

I kan læse mere om [Strings](https://www.w3schools.com/js/js_strings.asp)
og [String metoder](https://www.w3schools.com/js/js_string_methods.asp) og Løse opgaverne til:

1. [String](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_strings1)
2. [String metoder](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_string_methods1)

# Strings metoder

1. Givet følgende stykke kode, skal du ved hjælp af `slice` udskrive "lange string".
   ```js
   let langString = "Min lange string er lang";
   ```
2. Givet følgende stykke kode skal du ved hjælp af `slice, toUpperCase, og toLowerCase` udskrive følgende: "Hej med dig, hvordan har du det?"
   ```js
   let langString = "hej med DIG, HVoRdan hAR du DET?";
   ```

## Template Strings (Template literals)

Dette er et mere moderne alternativ til concatenation.

Laves med backtics: `, Shift + den knap lige til venstre for backspace.

som eksempel kan vi oprette et navn:

```js
const myName = "Mathias";
```

og så indsætte det et i fx. en velkomstbesked:

```js
const welcome = `Welcome ${myName}, enjoy your stay.`;
```

og få resultat:

```js
Welcome Mathias, enjoy your stay.
```

Øvelse

1. Lav jeres velkomst besked om til at bruge template literals.
