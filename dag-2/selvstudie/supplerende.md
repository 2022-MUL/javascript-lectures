# Lightbox

Ved hjælp af alle vores evner erhvervet indtil nu, skal vi nu forbedre vores Lightbox funktionalitet, til at understøtte flere billeder end blot ét.

1. Tilføj et nyt billede ved siden af det eksisterende
2. Giv det `onclick`
3. Udvid `openModal` til at tage imod et argument `imgUrl`
   1. Tilføj `img.src = imgUrl`

# Lav en BMI udregner

Givet BMI projektet, færdiggør metoden `calculate`, så den:

1. henter værdierne fra de 2 inputs med Id `weight` og `height`
   1. Hint: Brug `document.getElementById("id").value` for at få fat i værdien
2. skriver resultatet i title'
   1. Hint: Brug `document.getElementById("id").innerText` for at rette title teksten
