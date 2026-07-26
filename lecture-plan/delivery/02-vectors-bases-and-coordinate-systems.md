# Plan realizacyjny wykładu 02 — Vectors, Bases, and Coordinate Systems

## Funkcja wykładu

Wykład ma przeprowadzić studenta od opisu stanu do opisu zmiany.

Główna zasada:

> Punkt opisuje położenie, a wektor opisuje zmianę położenia.

Druga zasada:

> Zmiany można składać, skalować, mierzyć i rozkładać na prostsze kierunki.

Zakładany czas: około \(2\times45\) minut.

## Hierarchia treści

### Poziom A — rozwijane w całości

1. Wektor jako zmiana między dwoma punktami.
2. Ten sam wektor reprezentowany w różnych miejscach.
3. Dodawanie jako składanie zmian.
4. Mnożenie przez skalar jako zmiana wielkości i zwrotu.
5. Długość oraz kierunek.
6. Kombinacja liniowa i baza jako zestaw podstawowych kierunków.

### Poziom B — rozwinięcie sterowane

1. Iloczyn skalarny jako liczbowy pomiar zgodności kierunków.
2. Prostopadłość jako przypadek zerowego iloczynu skalarnego.
3. Rzut jako część zmiany odbywająca się w zadanym kierunku.
4. Współrzędne wektora zależne od bazy.

### Poziom C — sygnalizacja i kontynuacja w workbooku

1. Pełna technika wyznaczania rzutów.
2. Porównywanie opisów wektora w dwóch niekanonicznych bazach.
3. Zastosowania iloczynu skalarnego do kąta i odległości.

### Poziom D — opcjonalne rozszerzenie

Uogólnienia trójwymiarowe, iloczyn wektorowy oraz ogólna teoria przestrzeni liniowych. Nie są potrzebne do realizacji głównej idei wykładu.

## Zasada ograniczająca przeciążenie

Nie należy prowadzić osobnych miniwykładów o każdej operacji. Wszystkie działania powinny wynikać z jednej animowanej historii ruchu punktu:

- przejście z \(P\) do \(Q\);
- powtórzenie tej samej zmiany w innym miejscu;
- wykonanie dwóch zmian kolejno;
- zwiększenie lub odwrócenie zmiany;
- rozłożenie zmiany na podstawowe kierunki.

## Proponowany przebieg czasowy

### Część I — od dwóch punktów do zmiany, około 15 minut

- punkty \(P\) i \(Q\);
- strzałka jako przejście;
- zapis \(Q-P\);
- przesuwanie tej samej strzałki w inne miejsce.

### Część II — algebra zmian, około 20 minut

- dodawanie dwóch przesunięć;
- wektor przeciwny;
- skalowanie suwakiem;
- jeden elementarny przykład liczbowy.

### Część III — długość i wzajemne ustawienie, około 20 minut

- długość z twierdzenia Pitagorasa;
- dwa wektory o zmiennym kącie;
- iloczyn skalarny jako liczba zależna od ustawienia;
- prostopadłość jako przypadek zerowy.

### Część IV — podstawowe kierunki, około 25 minut

- rozkład jednej strzałki na dwa kierunki;
- kombinacja liniowa;
- baza jako wystarczający zestaw niezależnych kierunków;
- współrzędne tej samej strzałki w dwóch bazach.

### Część V — rzut i przekazanie do ćwiczeń, około 10 minut

- wizualne wydzielenie składowej w jednym kierunku;
- zapis idei rzutu bez rozwijania wszystkich rachunków;
- przedstawienie zadań workbookowych.

## Główna wizualizacja HTML

Jedna scena zawiera punkt, strzałkę zmiany oraz dwa wektory bazowe.

Student może:

- przesuwać początek i koniec strzałki;
- przenosić strzałkę bez zmiany jej składowych;
- dodawać drugą zmianę;
- zmieniać skalar;
- obracać drugi wektor i obserwować iloczyn skalarny;
- zmieniać bazę i obserwować współrzędne tej samej strzałki.

Wizualizacja ma konsekwentnie oddzielać:

- wektor jako obiekt;
- konkretną strzałkę jako reprezentację;
- współrzędne jako zapis względem wybranej bazy.

## Didaskalia

### Sekwencja 1 — różnica punktów

**Co student widzi:** punkty \(P\) i \(Q\), a następnie strzałkę od \(P\) do \(Q\).

**Co robi prowadzący:** pyta, jaką informację trzeba podać, aby z \(P\) dojść do \(Q\).

**Wniosek studenta:** potrzebna jest zmiana każdej współrzędnej, a nie tylko nowe położenie.

**Moment formalizacji:**

\[
\overrightarrow{PQ}=Q-P.
\]

### Sekwencja 2 — ten sam wektor w różnych miejscach

**Co student widzi:** identyczna strzałka przesuwana po płaszczyźnie.

**Co robi prowadzący:** pyta, które cechy pozostały niezmienne.

**Wniosek:** wektor nie jest przywiązany do jednego punktu zaczepienia.

### Sekwencja 3 — dodawanie zmian

**Co student widzi:** pierwsze przesunięcie prowadzi do punktu pośredniego, drugie do końcowego; obok pojawia się zmiana całkowita.

**Co robi prowadzący:** prosi o przewidzenie końca ruchu przed pokazaniem wektora sumy.

**Minimalny zapis:** dodawanie wektorów oznacza wykonanie zmian kolejno.

### Sekwencja 4 — skalar

**Co student widzi:** suwak \(\lambda\), wektor \(u\) oraz \(\lambda u\).

**Co robi prowadzący:** zatrzymuje animację dla \(\lambda=0\), \(0<\lambda<1\), \(\lambda>1\) i \(\lambda<0\).

**Wniosek:** skalar steruje intensywnością i zwrotem zmiany.

### Sekwencja 5 — iloczyn skalarny

**Co student widzi:** dwa wektory o stałych długościach i zmiennym kącie; obok aktualna wartość \(u\cdot v\).

**Co robi prowadzący:** pyta o znak liczby dla kąta ostrego, prostego i rozwartego.

**Moment formalizacji:** wzór współrzędnościowy pojawia się dopiero po geometrycznej obserwacji.

### Sekwencja 6 — baza

**Co student widzi:** wektor \(w\) oraz dwa kierunki bazowe; suwaki zmieniają współczynniki \(a,b\) w zapisie \(w=au+bv\).

**Co robi prowadzący:** pyta, czy każdy dobór dwóch kierunków pozwala zbudować każdą strzałkę.

**Wniosek:** kierunki muszą być niezależne.

### Sekwencja 7 — zmiana bazy

**Co student widzi:** wektor pozostaje nieruchomy, zmieniają się wektory bazowe i liczby opisujące wektor.

**Co robi prowadzący:** wraca do zasady z wykładu pierwszego: zmiana reprezentacji nie zmienia obiektu.

## Minimalna notatka studenta

1. Rozróżnienie punktu i wektora.
2. Rysunek dodawania jako składania zmian.
3. Interpretacja mnożenia przez skalar.
4. Wzór na długość i iloczyn skalarny wraz z jednym zdaniem interpretacji.
5. Zapis \(w=au+bv\) oraz definicja bazy w wymiarze dwa.
6. Jeden rysunek pokazujący tę samą strzałkę w dwóch bazach.

## Punkt przekazania do ćwiczeń

> Na wykładzie zbudowaliśmy algebrę zmian i zobaczyliśmy, że bazowe kierunki pozwalają kodować każdą zmianę. Na ćwiczeniach przećwiczycie rachunki, samodzielnie zbudujecie rzut oraz przygotujecie porównanie współrzędnych tego samego wektora w dwóch bazach.

## Bloki zadań do przyszłego workbooku

### Zadanie 1 — punkt, odcinek i wektor

**Typ:** I + W.

**Cel:** rozróżnić trzy bliskie, ale różne obiekty.

**Dane:** punkty \(P=(1,1)\), \(Q=(4,3)\) oraz drugi punkt początkowy \(R=(-2,0)\).

**Czynności:**

1. oblicz \(Q-P\);
2. narysuj odcinek \(PQ\);
3. przenieś otrzymany wektor tak, aby zaczynał się w \(R\);
4. wyznacz nowy punkt końcowy;
5. wyjaśnij różnicę między punktem, odcinkiem i wektorem.

**Rezultat:** jeden rysunek i krótka tabela porównawcza.

### Zadanie 2 — składanie zmian

**Typ:** R + I.

**Cel:** rozumieć dodawanie wektorów operacyjnie.

**Dane:** \(u=(2,1)\), \(v=(-1,3)\), punkt początkowy \(P=(0,0)\).

**Czynności:**

1. wykonaj ruch \(u\), a następnie \(v\);
2. wykonaj ruch \(v\), a następnie \(u\);
3. porównaj punkt końcowy;
4. narysuj oba przebiegi;
5. zapisz wektor zmiany całkowitej.

**Weryfikacja:** sprawdź rachunkiem współrzędnych, że wynik jest zgodny z rysunkiem.

### Zadanie 3 — iloczyn skalarny jako informacja o kierunku

**Typ:** R + I + W.

**Cel:** powiązać znak iloczynu skalarnego z kątem.

**Dane:** jeden wektor \(u=(1,0)\) oraz kilka wektorów \(v\) o małych współrzędnych.

**Czynności:**

1. oblicz \(u\cdot v\) dla każdego przypadku;
2. narysuj wektory;
3. sklasyfikuj kąt jako ostry, prosty lub rozwarty;
4. porównaj klasyfikację z wartością iloczynu;
5. sformułuj regułę własnymi słowami.

**Rezultat:** tabela „wektory — iloczyn — ustawienie — wniosek”.

### Zadanie 4 — rzut jako składowa zmiany

**Typ:** W + A + R.

**Cel:** samodzielnie opracować pojęcie tylko z krótkiej sygnalizacji wykładowej.

**Dane:** wektor \(w=(3,2)\) oraz kierunek osi \(x\), a następnie kierunek \(u=(1,1)\).

**Czynności:**

1. narysuj wektor i zadany kierunek;
2. zaznacz prostopadłą prowadzącą do rzutu;
3. oblicz składową na osi \(x\);
4. z pomocą podanego wzoru oblicz rzut na kierunek \(u\);
5. sprawdź, czy wektor różnicy jest prostopadły do kierunku;
6. wyjaśnij, co oznacza „część zmiany w zadanym kierunku”.

**Rezultat:** dwa rysunki, rachunek i kontrola prostopadłości.

### Zadanie 5 — ta sama zmiana w dwóch bazach

**Typ:** R + I + A.

**Cel:** utrwalić zależność współrzędnych od bazy.

**Dane:** wektor \(w=(3,1)\), baza standardowa oraz baza \(u=(1,1)\), \(v=(1,-1)\).

**Czynności:**

1. zapisz współrzędne \(w\) w bazie standardowej;
2. znajdź \(a,b\), dla których \(w=au+bv\);
3. narysuj oba rozkłady;
4. sprawdź wynik przez ponowne złożenie wektorów;
5. napisz, co się zmieniło, a co pozostało niezmienne.

**Rezultat:** dwa zapisy, rysunek i wniosek.

### Zadanie 6 — przygotowanie krótkiej prezentacji

**Typ:** prezentacyjne + AI kontrolowane.

Student przygotowuje wizualne wyjaśnienie jednego z pojęć: dodawania wektorów, iloczynu skalarnego, rzutu albo zmiany bazy.

Może użyć AI do przygotowania pierwszej wersji rysunku lub kodu, ale musi:

1. sprawdzić materiał na dwóch przykładach;
2. wskazać jedną możliwą nieścisłość;
3. poprawić wyjaśnienie;
4. zapisać własny komentarz;
5. przedstawić wynik w czasie 3–4 minut.

## Kryterium zakończenia wykładu

Student powinien potrafić odpowiedzieć:

- dlaczego wektor opisuje zmianę, a nie położenie;
- dlaczego dodawanie odpowiada składaniu zmian;
- co mierzy iloczyn skalarny;
- po co wprowadza się bazę;
- dlaczego współrzędne wektora mogą się zmienić bez zmiany wektora.
