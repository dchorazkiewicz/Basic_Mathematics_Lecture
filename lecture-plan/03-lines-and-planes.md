# Wykład 03 — Lines and Planes

## Rola wykładu w całym kursie

Pierwszy wykład dał liczbowy opis punktów. Drugi dał algebraiczny opis zmian i kierunków. Trzeci łączy te dwa języki.

> Obiekt geometryczny można opisać przez sposób jego generowania z punktu i dozwolonych kierunków.

Prosta jest głównym obiektem rozwijanym w pełni. Płaszczyzna pojawia się na końcu jako bezpośrednie uogólnienie tej samej idei, a nie jako drugi katalog wzorów do opanowania podczas jednego spotkania.

## Główne pytanie

> Jak opisać cały zbiór punktów, jeżeli znamy punkt początkowy i kierunki, w których wolno się poruszać?

## Zakładany czas

Około $2\times45$ minut. Trzy główne idee wykładu to:

1. prosta jest zbiorem generowanym przez punkt i kierunek;
2. różne równania mogą opisywać ten sam obiekt;
3. przecięcie i odległość wynikają z geometrycznych relacji między zbiorami i kierunkami.

Pełna technika przestrzenna, płaszczyzna przez trzy punkty, iloczyn wektorowy oraz katalog wzajemnych położeń zostają rozwinięte na ćwiczeniach.

## Liniowy plan wykładu i ćwiczeń

### 1. Prosta jako punkt i dozwolony kierunek — około 18 minut

#### Na wykładzie

Zaczynamy od punktu $P_0$ i niezerowego wektora kierunkowego $v$. Punkt porusza się od $P_0$ wzdłuż kierunku $v$, a jego położenie opisuje

$$
P(t)=P_0+tv.
$$

Parametr $t$ nie jest abstrakcyjną literą. Określa:

- stronę ruchu przez znak;
- odległość w jednostkach wektora $v$ przez wartość bezwzględną;
- punkt początkowy dla $t=0$.

Dopiero potem zapisujemy postać współrzędnościową

$$
x=x_0+tv_1,\qquad y=y_0+tv_2.
$$

#### Wizualizacja HTML

Punkt $P_0$, wektor $v$, suwak $t$ i poruszający się punkt $P(t)$. Na ekranie jednocześnie zmieniają się:

- wartość parametru;
- współrzędne punktu;
- długość i kierunek przesunięcia $tv$.

Prowadzący zatrzymuje animację dla $t=0$, $t=1$, $t=-1$ i jednej wartości ułamkowej.

#### Minimalny przykład

$$
P_0=(1,2),\qquad v=(2,1).
$$

Wyznaczamy punkty dla $t=0,1,-1,2$ i zaznaczamy je na jednej prostej.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student ma:

1. generować punkty prostych dla podanych wartości parametru;
2. odtwarzać równanie parametryczne z punktu i kierunku;
3. sprawdzać, czy dany punkt należy do prostej;
4. znaleźć parametr odpowiadający podanemu punktowi;
5. porównać równania używające różnych punktów początkowych i wielokrotności tego samego kierunku;
6. zbudować przykład dwóch różnych zapisów tej samej prostej.

W `solution.md` muszą pozostać: tabela wartości parametru, rysunek generowania prostej, sprawdzenie przynależności punktu i krótki wniosek o niejednoznaczności reprezentacji.

---

### 2. Różne reprezentacje tej samej prostej — około 22 minut

#### Na wykładzie

Na jednej konkretnej prostej przechodzimy kolejno przez trzy opisy.

#### Opis parametryczny

$$
P(t)=P_0+tv.
$$

Pokazuje, jak generować punkty.

#### Nachylenie

Jeżeli $v=(v_1,v_2)$ i $v_1\neq0$, to

$$
m=\frac{v_2}{v_1}=\tan\alpha.
$$

Trójkąt zmian współrzędnych musi być zaczepiony na badanej prostej, najlepiej w punkcie $P_0$. Nachylenie opisuje zmianę $y$ przypadającą na jednostkę zmiany $x$, a geometrycznie jest tangensem kąta nachylenia.

#### Opis normalny

Wektor $n$ prostopadły do kierunku $v$ pozwala zapisać

$$
n\cdot(P-P_0)=0.
$$

Po rozwinięciu otrzymujemy postać

$$
Ax+By=C,
$$

w której $(A,B)$ jest wektorem normalnym. Współczynniki równania otrzymują zatem interpretację geometryczną.

Nie tworzymy osobnego katalogu wzorów. Przez cały czas śledzimy tę samą prostą.

#### Wizualizacja HTML

Jedna prosta, przy której można przełączać widoczną reprezentację:

- punkt i wektor kierunkowy;
- trójkąt nachylenia;
- wektor normalny;
- równanie parametryczne i kartezjańskie.

Przełączenie opisu nie zmienia rysunku prostej.

#### Minimalny przykład

Dla

$$
P_0=(1,1),\qquad v=(2,1)
$$

odczytujemy nachylenie $m=\frac12$, wybieramy prosty wektor normalny, na przykład $n=(1,-2)$, i zapisujemy równanie normalne.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student ma:

1. przechodzić między postacią parametryczną, kierunkową i normalną dla prostych danych;
2. odczytywać wektor kierunkowy i normalny z równania;
3. wyznaczać kąt nachylenia tylko w przypadkach o prostych wartościach tangensa;
4. rozpoznawać, kiedy postać $y=mx+b$ nie jest wygodna lub nie istnieje;
5. sprawdzać równoważność dwóch równań przez porównanie generowanego zbioru punktów;
6. przygotować jedną kartę prezentacyjną pokazującą trzy reprezentacje tej samej prostej.

W workbooku pozostają pełne przekształcenia, rysunek z kierunkiem i normalną oraz kontrola przez podstawienie dwóch punktów.

---

### 3. Przecięcie i wzajemne położenie dwóch prostych — około 18 minut

#### Na wykładzie

Przecięcie najpierw definiujemy geometrycznie:

> Punkt przecięcia należy jednocześnie do obu prostych.

Dopiero potem zapisujemy procedurę:

1. opisujemy obie proste;
2. narzucamy warunek, że ich opisy mają dać ten sam punkt;
3. rozwiązujemy otrzymane równania;
4. sprawdzamy wynik w obu prostych.

Na jednym rysunku pokazujemy trzy możliwe sytuacje:

- jeden punkt wspólny;
- brak punktów wspólnych dla prostych równoległych różnych;
- nieskończenie wiele punktów wspólnych dla dwóch opisów tej samej prostej.

Klasyfikacja ma wynikać z porównania kierunków i sprawdzenia wspólnego punktu, nie z pamięciowej tabeli.

#### Wizualizacja HTML

Dwie proste z ruchomym jednym wektorem kierunkowym. Student obserwuje przejście od przecięcia do równoległości. Po ustawieniu kierunków równoległych można przesuwać punkt początkowy i przejść od prostych różnych do zgodnych.

#### Minimalny przykład

Dwie proste o małych współczynnikach, których punkt przecięcia ma całkowite współrzędne. Rozwiązanie zapisujemy etapami i na końcu podstawiamy punkt do obu równań.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student ma:

1. rozwiązać kilka elementarnych problemów przecięcia;
2. dla każdego wyniku wykonać sprawdzenie w obu prostych;
3. sklasyfikować pary prostych jako przecinające się, równoległe różne albo zgodne;
4. porównać metodę wykorzystującą parametry z metodą wykorzystującą równania kartezjańskie;
5. znaleźć przykład dwóch różnych równań opisujących tę samą prostą;
6. przygotować schemat decyzyjny oparty na pytaniach o kierunki i wspólne punkty.

W `solution.md` musi znaleźć się co najmniej jedno pełne „książkowe” rozwiązanie: zapis obiektów, narzucenie warunku, rozwiązanie, punkt i sprawdzenie.

---

### 4. Odległość punktu od prostej — około 12 minut

#### Na wykładzie

Odległość nie zaczyna się od gotowego wzoru. Stawiamy pytanie:

> Które przesunięcie prowadzące z punktu do prostej jest najkrótsze?

Animacja pokazuje różne odcinki łączące punkt z prostą. Najkrótszy z nich jest prostopadły do prostej, a więc równoległy do jej wektora normalnego.

Odległość interpretujemy jako długość odpowiedniej składowej przesunięcia w kierunku normalnym. Wzór współrzędnościowy może zostać zapisany po tej konstrukcji, ale na wykładzie obliczamy tylko jeden prosty przypadek.

#### Wizualizacja HTML

Punkt poza prostą oraz ruchomy punkt na prostej. Długość łączącego odcinka zmienia się, a minimum pojawia się przy prostopadłości. Następnie wyświetlany jest rzut na kierunek normalny.

#### Minimalny przykład

Prosta pozioma lub prosta o prostym wektorze normalnym, aby student najpierw zobaczył wynik bez rachunku, a następnie potwierdził go wzorem.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student ma:

1. obliczać odległości punktu od prostych o prostych współczynnikach;
2. konstruować punkt rzutu prostopadłego;
3. sprawdzać, że otrzymany odcinek jest prostopadły do prostej;
4. porównywać wynik wzoru z długością rzutu na wektor normalny;
5. rozwiązać zadanie odwrotne: znaleźć punkty w ustalonej odległości od prostej;
6. przygotować rysunek wyjaśniający, dlaczego inny odcinek łączący punkt z prostą jest dłuższy.

W workbooku pozostają rachunek, konstrukcja geometryczna, test prostopadłości i interpretacja minimum.

---

### 5. Płaszczyzna jako naturalne rozszerzenie — około 15 minut

#### Na wykładzie

Płaszczyzna nie jest nowym katalogiem. Powtarzamy schemat prostej:

- punkt $P_0$;
- dwa niezależne kierunki $u,v$;
- wszystkie ich kombinacje.

$$
P(s,t)=P_0+su+tv.
$$

Pokazujemy, że dwa równoległe kierunki nie generują płaszczyzny, lecz tylko prostą. Następnie sygnalizujemy opis normalny

$$
n\cdot(P-P_0)=0,
$$

jako dokładnie tę samą ideę co dla prostej w płaszczyźnie.

Nie wyprowadzamy na wykładzie pełnej techniki iloczynu wektorowego ani płaszczyzny przez trzy punkty.

#### Wizualizacja HTML

Punkt $P_0$, dwa wektory $u,v$ i dwa suwaki $s,t$. Student obserwuje generowanie fragmentu płaszczyzny. Po ustawieniu kierunków równoległych wizualizacja zapada się do prostej.

#### Bezpośrednia kontynuacja na ćwiczeniach

Cała technika przestrzenna zostaje rozwinięta w workbooku.

Student ma:

1. generować punkty płaszczyzny z równania parametrycznego;
2. sprawdzać przynależność punktu;
3. badać niezależność dwóch kierunków;
4. z trzech niewspółliniowych punktów utworzyć dwa wektory kierunkowe;
5. poznać iloczyn wektorowy jako narzędzie do otrzymania normalnej i sprawdzić prostopadłość wyniku do obu kierunków;
6. zapisać płaszczyznę w postaci parametrycznej i normalnej;
7. klasyfikować proste przypadki wzajemnego położenia prostej i płaszczyzny oraz dwóch płaszczyzn;
8. przygotować prostą wizualizację albo serię rysunków pokazującą generowanie płaszczyzny.

W `solution.md` powinny pozostać: konstrukcja z trzech punktów, obliczenie normalnej, dwie reprezentacje płaszczyzny, sprawdzenie oraz krótki opis procedury własnymi słowami.

---

### 6. Domknięcie wykładu — około 5 minut

#### Na wykładzie

Podsumowujemy jeden wspólny schemat:

$$
\text{punkt}
+
\text{dozwolone kierunki}
\longrightarrow
\text{zbiór punktów}.
$$

- jeden kierunek generuje prostą;
- dwa niezależne kierunki generują płaszczyznę;
- normalna daje równoważny opis ograniczenia ruchu;
- przecięcie oznacza jednoczesne spełnienie warunków;
- odległość wynika z najkrótszego przesunięcia prostopadłego.

Student zapisuje zasadę:

> Prosta i płaszczyzna są obiektami generowanymi przez punkt i kierunki, a ich równania są różnymi reprezentacjami tej samej geometrii.

## Materiał opcjonalny w HTML

Pełny katalog kątów i odległości w przestrzeni, rozbudowana klasyfikacja wzajemnego położenia oraz dodatkowe dowody dotyczące iloczynu wektorowego mogą pozostać jako rozszerzenie. Nie są częścią obowiązkowej realizacji ustnej.

## Most do wykładu 04

Potrafimy generować obiekty liniowe za pomocą stałych kierunków.

> Jak opisywać krzywe, których kierunek zmienia się wraz z położeniem, oraz jak takie krzywe stają się modelami rzeczywistych trajektorii?