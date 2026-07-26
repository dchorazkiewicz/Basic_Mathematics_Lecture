# Plan realizacyjny wykładu 01 — Cartesian Geometry and Coordinates

## Funkcja wykładu

Wykład ma ustanowić podstawową zasadę całego kursu:

> Obiekt matematyczny i jego reprezentacja nie są tym samym.

Student ma zobaczyć, że geometria istnieje przed współrzędnymi, a układ współrzędnych jest świadomie zbudowanym mechanizmem kodowania punktów i relacji za pomocą liczb.

Zakładany czas: około \(2\times45\) minut.

## Hierarchia treści

### Poziom A — rozwijane w całości

1. Geometria przed współrzędnymi.
2. Układ współrzędnych jako wybór początku, kierunków, orientacji i skali.
3. Rozróżnienie punktu i jego współrzędnych.
4. Odległość jako pierwszy przykład przejścia od geometrii do obliczenia.
5. Równanie jako generator zbioru punktów.

### Poziom B — rozwinięcie sterowane

1. Ten sam punkt w dwóch układach współrzędnych.
2. Wykres funkcji jako zbiór generowanych punktów.
3. Przecięcie dwóch obiektów jako jednoczesne spełnienie warunków.

### Poziom C — sygnalizacja i kontynuacja w workbooku

1. Relacje, których nie można globalnie zapisać jako \(y=f(x)\).
2. Opis parametryczny krzywej.
3. Nierówności jako opis obszarów.

### Poziom D — opcjonalne rozszerzenie

Geometryczne wyprowadzenie wybranej tożsamości trygonometrycznej. Może pozostać na stronie HTML jako przykład działania metody, ale nie powinno być warunkiem realizacji głównej narracji.

## Proponowany przebieg czasowy

### Część I — geometria i kodowanie, około 20 minut

- pokaz prostych konstrukcji geometrycznych bez osi;
- pytanie, czego brakuje, aby wykonywać systematyczne obliczenia;
- stopniowa konstrukcja układu współrzędnych;
- zapis jednego punktu jako pary liczb.

### Część II — obiekt a reprezentacja, około 15 minut

- ten sam punkt pokazany w dwóch układach;
- zmiana współrzędnych bez zmiany punktu;
- sformułowanie głównej zasady wykładu.

### Część III — pierwsza korzyść rachunkowa, około 20 minut

- dwa punkty i odcinek;
- dobudowanie trójkąta prostokątnego;
- wyprowadzenie wzoru na odległość;
- jeden przykład liczbowy z małymi współrzędnymi.

### Część IV — równania generują geometrię, około 25 minut

- ruch punktu spełniającego prosty warunek;
- przejście od pojedynczego punktu do zbioru punktów;
- wykres prostej funkcji;
- krótkie pokazanie przecięcia dwóch zbiorów.

### Część V — przekazanie do ćwiczeń, około 10 minut

- pokaz okręgu jako obiektu, którego nie opisuje jedna globalna funkcja \(y=f(x)\);
- sygnalizacja relacji i parametryzacji;
- przedstawienie zadań workbookowych.

## Główna wizualizacja HTML

Jedna scena powinna zawierać nieruchomy obiekt geometryczny oraz zmienny układ współrzędnych.

Student może zmieniać:

- położenie początku;
- kierunki osi;
- orientację;
- skalę.

Na ekranie jednocześnie widoczne są:

- punkt geometryczny;
- jego aktualne współrzędne;
- odcinki odpowiadające składowym;
- informacja, że punkt nie poruszył się mimo zmiany liczb.

Ta sama scena może następnie przejść do dwóch punktów i trójkąta prostokątnego użytego do wyprowadzenia odległości.

## Didaskalia

### Sekwencja 1 — geometria istnieje przed osiami

**Co student widzi:** punkty, prostą, okrąg, przecięcie i odcinek bez układu współrzędnych.

**Co robi prowadzący:** pyta, które własności już potrafimy rozpoznać oraz czego nie potrafimy łatwo obliczać lub porównywać.

**Co student ma powiedzieć:** obiekty istnieją i mają relacje, ale brakuje jednolitego zapisu liczbowego.

**Moment formalizacji:** dopiero po tej odpowiedzi pojawia się układ współrzędnych.

### Sekwencja 2 — budowa kodu

**Co student widzi:** kolejno dodawany początek, pierwszą oś, drugą oś, orientację i skalę.

**Co robi prowadzący:** przy każdym elemencie pyta, jaka informacja byłaby nieokreślona bez tego wyboru.

**Minimalny zapis:** układ współrzędnych jest wyborem punktu odniesienia, kierunków, orientacji i skali.

### Sekwencja 3 — punkt i współrzędne

**Co student widzi:** układ przesuwa się lub zmienia skalę, a punkt pozostaje nieruchomy.

**Co robi prowadzący:** zatrzymuje animację w dwóch stanach i prosi o porównanie współrzędnych.

**Wniosek studenta:** zmienia się opis, nie obiekt.

### Sekwencja 4 — odległość

**Co student widzi:** dwa punkty, różnice współrzędnych i trójkąt prostokątny.

**Co robi prowadzący:** nie podaje od razu wzoru; pyta, jakie długości mają przyprostokątne i które twierdzenie łączy je z odcinkiem.

**Moment formalizacji:** po odpowiedzi pojawia się

\[
d(P,Q)=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
\]

### Sekwencja 5 — równanie jako zbiór

**Co student widzi:** punkt sterowany suwakiem, który porusza się tak, aby spełniać \(y=2x+1\).

**Co robi prowadzący:** pyta, czy równanie opisuje jedną parę liczb, czy wszystkie pary spełniające warunek.

**Wniosek:** równanie generuje zbiór punktów.

## Minimalna notatka studenta

Notatka po wykładzie powinna zawierać:

1. zdanie: „Współrzędne są reprezentacją punktu zależną od wybranego układu”;
2. schemat elementów układu współrzędnych;
3. wyprowadzenie wzoru na odległość z jednego rysunku;
4. jeden przykład równania interpretowanego jako zbiór punktów;
5. pytanie otwierające opis parametryczny: co zrobić z krzywą, która nie jest wykresem jednej funkcji \(y=f(x)\)?

## Punkt przekazania do ćwiczeń

Prowadzący powinien jawnie powiedzieć:

> Na wykładzie zbudowaliśmy język kodowania i zobaczyliśmy, jak równanie generuje geometrię. Na ćwiczeniach sprawdzicie, jak zmieniają się współrzędne przy zmianie układu, samodzielnie odtworzycie wyprowadzenie odległości oraz porównacie opis funkcyjny, relacyjny i parametryczny.

## Bloki zadań do przyszłego workbooku

### Zadanie 1 — ten sam obiekt, dwa opisy

**Typ:** I + W.

**Cel:** rozróżnić punkt od jego współrzędnych.

**Dane:** trzy punkty na prostym rysunku oraz dwa układy współrzędnych różniące się początkiem lub skalą.

**Czynności:**

1. odczytaj współrzędne każdego punktu w obu układach;
2. przygotuj jeden rysunek z obiema reprezentacjami;
3. wskaż, które liczby się zmieniły, a które relacje geometryczne pozostały niezmienne;
4. napisz trzy zdania wyjaśniające różnicę między obiektem a reprezentacją.

**Rezultat w `solution.md`:** tabela współrzędnych, rysunek oraz krótki wniosek.

**Weryfikacja:** oblicz jedną odległość w obu układach o tej samej skali albo wyjaśnij wpływ zmiany skali na wartości liczbowe.

### Zadanie 2 — od rysunku do wzoru na odległość

**Typ:** R + A.

**Cel:** samodzielnie odtworzyć argument Pitagorasa.

**Dane:** dwa punkty \(P=(1,2)\) i \(Q=(5,5)\).

**Czynności:**

1. narysuj punkty i dobuduj trójkąt prostokątny;
2. wyznacz długości przyprostokątnych;
3. zastosuj twierdzenie Pitagorasa;
4. zapisz ogólny wzór;
5. sprawdź wynik na rysunku.

**Rezultat:** rysunek, rachunek i jedno zdanie interpretacji różnic współrzędnych.

### Zadanie 3 — równanie generuje zbiór

**Typ:** I + W.

**Cel:** czytać równania jako warunki na punkty.

**Dane:** \(x+y=3\), \(x^2+y^2=4\), \(x+y\leq3\).

**Czynności:**

1. znajdź po kilka punktów spełniających każdy warunek;
2. przygotuj wykres każdego zbioru;
3. opisz słowami, jaki obiekt powstał;
4. wskaż różnicę między równaniem i nierównością.

**Rezultat:** trzy rysunki i krótka tabela „warunek — zbiór — interpretacja”.

### Zadanie 4 — funkcja, relacja i parametryzacja

**Typ:** I + A + W.

**Cel:** zrozumieć ograniczenie zapisu \(y=f(x)\).

**Dane:** okrąg jednostkowy.

**Czynności:**

1. wyjaśnij, dlaczego całego okręgu nie da się opisać jedną funkcją \(y=f(x)\);
2. zapisz relację \(x^2+y^2=1\);
3. użyj parametryzacji \(x=\cos t\), \(y=\sin t\);
4. przygotuj rysunek pokazujący kilka wartości parametru i odpowiadające im punkty;
5. porównaj, jaką informację daje każdy opis.

**Rezultat:** rysunek, trzy reprezentacje i porównanie w 4–6 zdaniach.

### Zadanie 5 — krótkie wystąpienie

**Typ:** prezentacyjne.

Student wybiera jedno z zadań 1–4 i przygotowuje wystąpienie trwające około trzech minut:

1. formułuje pytanie;
2. pokazuje jeden rysunek;
3. zapisuje jeden wzór;
4. wypowiada główny wniosek;
5. odpowiada na pytanie: „co w tym przykładzie jest obiektem, a co reprezentacją?”.

## Kryterium zakończenia wykładu

Wykład jest zrealizowany poprawnie, jeżeli student potrafi bez długiego rachunku odpowiedzieć:

- dlaczego współrzędne zależą od wyboru układu;
- jak geometria prowadzi do wzoru na odległość;
- dlaczego równanie może oznaczać cały zbiór punktów;
- po co potrzebne będą relacje i parametryzacje.
