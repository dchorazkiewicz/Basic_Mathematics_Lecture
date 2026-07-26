# Plan realizacyjny wykładu 03 — Lines and Planes

## Funkcja wykładu

Wykład łączy dwa wcześniejsze języki:

- punkt jako opis stanu;
- wektor jako opis dozwolonej zmiany.

Główna idea:

> Obiekt geometryczny można opisać przez sposób jego generowania z punktu i dozwolonych kierunków.

Prosta jest głównym obiektem rozwijanym w pełni. Płaszczyzna ma pojawić się jako naturalne rozszerzenie tej samej konstrukcji, a nie jako drugi, równorzędny katalog wzorów.

Zakładany czas: około \(2\times45\) minut.

## Hierarchia treści

### Poziom A — rozwijane w całości

1. Prosta jako punkt i jeden niezerowy kierunek.
2. Równanie parametryczne jako instrukcja generowania punktów.
3. Różne reprezentacje tej samej prostej.
4. Opis normalny i znaczenie współczynników równania kartezjańskiego.
5. Przecięcie jako wspólny punkt i jednoczesne spełnienie warunków.

### Poziom B — rozwinięcie sterowane

1. Nachylenie \(m=\tan\alpha\) i jego geometryczne znaczenie.
2. Odległość punktu od prostej jako długość najkrótszego, prostopadłego przesunięcia.
3. Płaszczyzna jako punkt i dwa niezależne kierunki.
4. Normalna do płaszczyzny jako ten sam schemat co normalna do prostej.

### Poziom C — sygnalizacja i kontynuacja w workbooku

1. Pełna klasyfikacja wzajemnego położenia prostych.
2. Płaszczyzna przez trzy punkty.
3. Wyznaczanie normalnej przez iloczyn wektorowy.
4. Wzajemne położenie prostej i płaszczyzny oraz dwóch płaszczyzn.
5. Większa liczba przekształceń między postaciami równań.

### Poziom D — opcjonalne rozszerzenie

Rozbudowane zagadnienia trójwymiarowe, odległości i kąty między obiektami w przestrzeni oraz pełny katalog przypadków. Mogą pozostać w HTML jako materiał rozszerzający.

## Zasada ograniczająca przeciążenie

Wykład nie ma omawiać kolejno wszystkich postaci równań. Ma prowadzić jedną prostą przez trzy reprezentacje:

1. generowanie z punktu i kierunku;
2. odczyt nachylenia;
3. opis przez wektor normalny.

Dopiero na tej jednej prostej pokazujemy przecięcie i odległość. Płaszczyzna pojawia się na końcu jako uogólnienie schematu.

## Proponowany przebieg czasowy

### Część I — generowanie prostej, około 20 minut

- punkt \(P_0\) i wektor \(v\);
- zmiana parametru \(t\);
- ruch punktu po prostej;
- zapis \(P(t)=P_0+tv\);
- jeden przykład współrzędnościowy.

### Część II — reprezentacje tej samej prostej, około 20 minut

- inny punkt początkowy i wielokrotność kierunku;
- przejście do postaci współrzędnościowej;
- nachylenie jako stosunek zmian i tangens kąta;
- normalna jako kierunek prostopadły.

### Część III — przecięcie, około 20 minut

- dwie proste na rysunku;
- definicja wspólnego punktu;
- zapis warunków;
- jeden kompletny, książkowy przykład rozwiązany etapami;
- krótkie porównanie przecięcia, równoległości i zgodności.

### Część IV — odległość, około 15 minut

- punkt poza prostą;
- kilka możliwych odcinków łączących punkt z prostą;
- wybór najkrótszego odcinka;
- prostopadłość i rzut na normalną;
- jeden prosty rachunek.

### Część V — płaszczyzna jako rozszerzenie, około 15 minut

- punkt i dwa kierunki;
- dwa suwaki \(s,t\);
- niezależność kierunków;
- krótka sygnalizacja opisu normalnego i dalszej pracy na ćwiczeniach.

## Główna wizualizacja HTML

Jedna scena powinna umożliwiać przełączanie między trzema opisami tej samej prostej:

- parametrycznym;
- kierunkowym lub nachyleniowym;
- normalnym.

Na ekranie pozostają widoczne:

- punkt \(P_0\);
- wektor kierunkowy;
- wektor normalny;
- ruchomy punkt \(P(t)\);
- równania aktualnej reprezentacji.

Zmiana reprezentacji nie może zmieniać położenia prostej. To ma być główny dowód wizualny, że wzory są różnymi opisami jednego obiektu.

Druga faza tej samej sceny dodaje drugą prostą i pozwala obserwować wspólny punkt lub jego brak.

## Didaskalia

### Sekwencja 1 — punkt i dozwolony kierunek

**Co student widzi:** punkt \(P_0\), wektor \(v\) i punkt poruszający się po \(P_0+tv\).

**Co robi prowadzący:** zatrzymuje suwak dla wartości dodatnich, ujemnych i zera; pyta, co oznacza parametr.

**Wniosek studenta:** parametr mówi, jak daleko i w którą stronę poruszamy się wzdłuż wybranego kierunku.

**Moment formalizacji:**

\[
P(t)=P_0+tv.
\]

### Sekwencja 2 — różne dane, ten sam obiekt

**Co student widzi:** zmienia się punkt początkowy na inny punkt prostej, a kierunek zastępuje \(2v\) lub \(-v\).

**Co robi prowadzący:** pyta, czy zmienił się zbiór generowanych punktów.

**Wniosek:** reprezentacja nie jest jednoznaczna, ale obiekt może pozostać ten sam.

### Sekwencja 3 — nachylenie

**Co student widzi:** trójkąt zmiany zaczepiony w \(P_0\) na badanej prostej.

**Co robi prowadzący:** pyta o stosunek zmiany pionowej do poziomej i o jego związek z kątem.

**Moment formalizacji:** \(m=\tan\alpha\), jeśli opis przez nachylenie jest dopuszczalny.

### Sekwencja 4 — normalna

**Co student widzi:** wektor \(n\) obracany do położenia prostopadłego do prostej; dla punktów prostej wyświetla się \(n\cdot(P-P_0)\).

**Co robi prowadzący:** pyta, kiedy wartość jest równa zero.

**Wniosek:** równanie normalne wybiera punkty, których przesunięcie od \(P_0\) nie ma składowej w kierunku normalnym.

### Sekwencja 5 — przecięcie

**Co student widzi:** dwie proste oraz dwa ruchome punkty generowane niezależnymi parametrami.

**Co robi prowadzący:** nie zaczyna od układu równań; najpierw pyta, co musi być prawdziwe w punkcie przecięcia.

**Wniosek:** oba opisy muszą wygenerować ten sam punkt.

### Sekwencja 6 — odległość

**Co student widzi:** punkt \(Q\) i kilka odcinków do prostej; jeden odcinek zmniejsza się do ustawienia prostopadłego.

**Co robi prowadzący:** pyta, dlaczego właśnie ten odcinek jest najkrótszy i jaki kierunek mierzy potrzebną zmianę.

**Punkt przekazania:** ogólną technikę i kilka wariantów studenci rozwijają w workbooku.

### Sekwencja 7 — płaszczyzna

**Co student widzi:** punkt \(P_0\), dwa wektory \(u,v\) i powierzchnię generowaną przez dwa suwaki.

**Co robi prowadzący:** ustawia wektory równolegle i pyta, dlaczego powierzchnia znika do prostej.

**Wniosek:** potrzebne są dwa niezależne kierunki.

## Minimalna notatka studenta

1. Rysunek prostej generowanej przez \(P_0+tv\).
2. Jedno zdanie o niejednoznaczności reprezentacji.
3. Znaczenie nachylenia i wektora normalnego.
4. Cztery kroki znajdowania przecięcia.
5. Rysunek odległości jako prostopadłego przesunięcia.
6. Zapis \(P(s,t)=P_0+su+tv\) z informacją o niezależności kierunków.

## Punkt przekazania do ćwiczeń

> Na wykładzie zbudowaliśmy prostą z punktu i kierunku, porównaliśmy jej reprezentacje oraz zinterpretowaliśmy przecięcie i odległość. Na ćwiczeniach przeprowadzicie pełne przekształcenia między opisami, rozwiążecie kilka przypadków wzajemnego położenia i samodzielnie rozwiniecie analogiczne konstrukcje dla płaszczyzny.

## Bloki zadań do przyszłego workbooku

### Zadanie 1 — jedna prosta, trzy reprezentacje

**Typ:** R + I + W.

**Cel:** zobaczyć równoważność opisów.

**Dane:** punkt \(P_0=(1,2)\), kierunek \(v=(2,1)\).

**Czynności:**

1. zapisz równanie parametryczne;
2. wygeneruj pięć punktów dla wybranych wartości \(t\);
3. wyznacz nachylenie;
4. znajdź prosty wektor normalny;
5. zapisz równanie normalne i kartezjańskie;
6. narysuj wszystkie dane na jednym wykresie;
7. sprawdź, że wybrane punkty spełniają każdą reprezentację.

**Rezultat:** rachunki, jeden wspólny rysunek i tabela reprezentacji.

### Zadanie 2 — czy to ta sama prosta?

**Typ:** A + R.

**Cel:** porównywać obiekt, a nie wygląd wzorów.

**Dane:** trzy różne opisy parametryczne, z których dwa opisują tę samą prostą.

**Czynności:**

1. porównaj kierunki;
2. sprawdź, czy punkt jednego opisu należy do drugiej prostej;
3. sklasyfikuj pary jako zgodne, równoległe różne albo przecinające się;
4. uzasadnij każdą decyzję.

**Rezultat:** tabela kryteriów i krótkie uzasadnienia.

### Zadanie 3 — przecięcie wykonane książkowo

**Typ:** R + A.

**Cel:** utrwalić logiczną strukturę metody.

**Dane:** dwie proste o małych współczynnikach.

**Czynności obowiązkowe:**

1. zapisz oba opisy;
2. sformułuj warunek wspólnego punktu;
3. rozwiąż równania;
4. podaj punkt;
5. sprawdź jego przynależność do obu prostych;
6. dołącz rysunek;
7. opisz w dwóch zdaniach, dlaczego rozwiązanie układu oznacza przecięcie.

### Zadanie 4 — odległość jako rzut

**Typ:** R + W + I.

**Cel:** samodzielnie rozwinąć częściowo pokazany temat.

**Dane:** punkt \(Q=(3,4)\) i prosta o prostym równaniu normalnym.

**Czynności:**

1. zaznacz wektor normalny;
2. wybierz punkt \(P_0\) na prostej;
3. zbuduj wektor \(Q-P_0\);
4. oblicz jego składową w kierunku normalnym;
5. wyznacz odległość;
6. narysuj punkt najbliższy na prostej;
7. sprawdź prostopadłość.

**Rezultat:** pełny rysunek konstrukcyjny, rachunek i sprawdzenie.

### Zadanie 5 — płaszczyzna z dwóch kierunków

**Typ:** W + I + R.

**Cel:** rozwinąć uogólnienie pokazane pod koniec wykładu.

**Dane:** punkt \(P_0\in\mathbb R^3\) oraz dwa proste wektory \(u,v\).

**Czynności:**

1. zapisz \(P(s,t)=P_0+su+tv\);
2. wygeneruj tabelę punktów dla kilku par \((s,t)\);
3. przygotuj prosty rysunek lub wizualizację;
4. zmień jeden wektor tak, aby był równoległy do drugiego;
5. opisz, co dzieje się ze zbiorem generowanych punktów;
6. sformułuj znaczenie niezależności kierunków.

**Rezultat:** tabela, wizualizacja i komentarz.

### Zadanie 6 — płaszczyzna przez trzy punkty

**Typ:** R + A; temat przekazany z poziomu C.

**Cel:** samodzielnie zbudować procedurę z wcześniej poznanych elementów.

**Dane:** trzy niewspółliniowe punkty o małych współrzędnych.

**Czynności:**

1. wybierz punkt początkowy;
2. zbuduj dwa wektory różnicowe;
3. sprawdź ich niezależność;
4. zapisz równanie parametryczne płaszczyzny;
5. opcjonalnie użyj podanej procedury do znalezienia normalnej;
6. sprawdź, że wszystkie trzy punkty należą do otrzymanej płaszczyzny.

### Zadanie 7 — prezentacja jednej reprezentacji

**Typ:** prezentacyjne + AI kontrolowane.

Student przygotowuje 3–4 minutowe wyjaśnienie, dlaczego postać parametryczna albo normalna jest użyteczna. Materiał musi zawierać:

1. jedno pytanie motywujące;
2. rysunek lub animację;
3. wzór;
4. przykład;
5. sprawdzenie;
6. porównanie z drugą reprezentacją.

Jeśli użyto AI do przygotowania wizualizacji, student dołącza opis wykonanej kontroli matematycznej.

## Kryterium zakończenia wykładu

Student powinien umieć wyjaśnić:

- jak punkt i kierunek generują prostą;
- dlaczego różne równania mogą opisywać ten sam obiekt;
- co oznacza przecięcie;
- dlaczego odległość jest związana z prostopadłością;
- jak idea prostej rozszerza się do płaszczyzny.
