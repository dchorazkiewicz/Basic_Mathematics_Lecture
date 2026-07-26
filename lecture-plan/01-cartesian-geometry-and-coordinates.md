# Wykład 01 — Cartesian Geometry and Coordinates

## Rola wykładu w całym kursie

Pierwszy wykład ustanawia podstawowy sposób myślenia obowiązujący w całym kursie:

> Obiekt matematyczny i jego reprezentacja nie są tym samym.

Punktem wyjścia jest geometria euklidesowa istniejąca jeszcze bez współrzędnych. Punkty, proste, okręgi, przecięcia, prostopadłość i długość mają znaczenie geometryczne przed wyborem jakiegokolwiek układu liczbowego. Układ współrzędnych pojawia się dopiero jako mechanizm kodowania tej geometrii, dzięki któremu można wykonywać obliczenia.

## Główne pytanie

> Jak opisać świat geometryczny za pomocą liczb, nie myląc obiektu z jego liczbowym opisem?

## Zakładany czas

Około $2\times45$ minut. Strona HTML może zawierać materiał dodatkowy, ale podczas wykładu należy przeprowadzić w pełni tylko trzy zasadnicze idee:

1. współrzędne są wyborem reprezentacji;
2. geometria może zostać przekształcona w obliczenie;
3. równanie może generować cały zbiór punktów.

## Liniowy plan wykładu i ćwiczeń

### 1. Geometria przed współrzędnymi — około 10 minut

#### Na wykładzie

Zaczynamy od rysunku zawierającego punkty, prostą, okrąg, przecięcie i odcinek, ale bez osi współrzędnych. Prowadzący pyta kolejno:

- jakie obiekty rozpoznajemy;
- jakie relacje można już sformułować;
- co można skonstruować bez używania liczb;
- czego brakuje, jeżeli chcemy porównywać wyniki i wykonywać systematyczne obliczenia.

Nie wprowadzamy jeszcze współrzędnych. Najpierw ma zostać ustalone, że geometria nie zaczyna się od par liczb.

#### Wizualizacja HTML

Jedna scena geometryczna z przełącznikiem „ukryj/pokaż układ współrzędnych”. Po ukryciu osi wszystkie obiekty pozostają na miejscu. Student ma zobaczyć, że usunięcie reprezentacji nie usuwa geometrii.

#### Minimalny przykład

Dwa punkty i odcinek między nimi. Można powiedzieć, który punkt leży na prostej, które odcinki są prostopadłe i które punkty leżą na okręgu, mimo że nie znamy żadnych współrzędnych.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student otrzymuje dwa rysunki geometryczne bez osi.

Ma:

1. nazwać obiekty i relacje możliwe do opisania bez współrzędnych;
2. zaznaczyć, które pytania wymagają już pomiaru lub zapisu liczbowego;
3. przygotować własny prosty rysunek pokazujący różnicę między obiektem a jego reprezentacją;
4. zapisać w `solution.md` jedno zdanie wyjaśniające, dlaczego punkt nie jest tym samym co para jego współrzędnych.

Rezultatem ma być rysunek z opisem oraz krótka notatka pojęciowa, nie rachunek.

---

### 2. Budowa układu współrzędnych i kodowanie punktu — około 20 minut

#### Na wykładzie

Układ współrzędnych budujemy etapami. Każdy element pojawia się dlatego, że rozwiązuje konkretny problem:

- początek wskazuje punkt odniesienia;
- osie wybierają kierunki pomiaru;
- orientacja rozróżnia strony dodatnie i ujemne;
- skala zamienia długość geometryczną na liczbę.

Dopiero po ustaleniu tych danych punkt otrzymuje zapis $(x,y)$.

Następnie ten sam punkt pokazujemy w drugim układzie: przesuniętym albo z inną skalą. Punkt pozostaje ten sam, lecz jego współrzędne się zmieniają.

#### Wizualizacja HTML

Student może przesuwać początek układu i zmieniać skalę suwakiem. Na ekranie jednocześnie widoczne są:

- nieruchomy punkt geometryczny;
- aktualne osie;
- aktualne współrzędne punktu.

Prowadzący zatrzymuje animację w dwóch ustawieniach i pyta, co się zmieniło, a co pozostało niezmienne.

#### Minimalny przykład

Punkt ma współrzędne $(2,1)$ w pierwszym układzie. Po przesunięciu początku o jedną jednostkę w prawo otrzymuje inne współrzędne. Przykład ma być policzony bez ogólnego wzoru zmiany współrzędnych.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student pracuje z jednym rysunkiem i dwoma podanymi układami współrzędnych.

Ma:

1. odczytać współrzędne tych samych trzech punktów w obu układach;
2. zapisać wyniki w tabeli;
3. wskazać, które wielkości zależą od układu, a które nie;
4. sprawdzić, czy odległości między punktami pozostają takie same;
5. przygotować krótką prezentację jednego przykładu pod hasłem „zmienił się opis, nie obiekt”.

W `solution.md` muszą pozostać: rysunek, tabela współrzędnych, jedno sprawdzenie odległości i dwuzdaniowy wniosek.

---

### 3. Odległość jako przejście od geometrii do obliczenia — około 20 minut

#### Na wykładzie

Dla dwóch punktów $P=(x_1,y_1)$ i $Q=(x_2,y_2)$ dobudowujemy trójkąt prostokątny. Długości przyprostokątnych są zmianami współrzędnych:

$$
|x_2-x_1|,\qquad |y_2-y_1|.
$$

Z twierdzenia Pitagorasa otrzymujemy

$$
d(P,Q)=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
$$

Wzór nie może pojawić się przed rysunkiem. Celem jest pokazanie mechanizmu:

$$
\text{problem geometryczny}
\longrightarrow
\text{konstrukcja}
\longrightarrow
\text{równanie}
\longrightarrow
\text{wynik liczbowy}.
$$

#### Wizualizacja HTML

Dwa ruchome punkty, odcinek między nimi oraz automatycznie dobudowany trójkąt prostokątny. Obok aktualizują się różnice współrzędnych i długość odcinka.

#### Minimalny przykład

Punkty $P=(1,1)$ i $Q=(4,5)$. Przyprostokątne mają długości $3$ i $4$, więc odległość wynosi $5$.

#### Bezpośrednia kontynuacja na ćwiczeniach

Pierwsza część ćwiczeń rozwija sprawność rachunkową, ale każdy wynik ma zostać powiązany z rysunkiem.

Student ma:

1. obliczyć kilka odległości dla małych całkowitych współrzędnych;
2. dla każdego przykładu narysować odpowiadający trójkąt prostokątny;
3. znaleźć przykład dwóch różnych par punktów o tej samej odległości;
4. sprawdzić wynik przez bezpośrednie podstawienie;
5. wyjaśnić, dlaczego znaki różnic współrzędnych nie wpływają na końcową długość.

W workbooku pozostają pełne obliczenia, jeden wspólny rysunek porównawczy i krótka interpretacja.

---

### 4. Równanie jako generator zbioru punktów — około 25 minut

#### Na wykładzie

Odwracamy dotychczasowy kierunek myślenia. Najpierw punkt otrzymywał liczby. Teraz warunek algebraiczny ma wyznaczać wszystkie punkty, które go spełniają.

Zaczynamy od prostej funkcji, na przykład

$$
y=2x+1.
$$

Zmiana $x$ generuje kolejne punkty $(x,2x+1)$, a ich zbiór tworzy wykres. Następnie pokazujemy drugi prosty warunek, na przykład

$$
x^2+y^2=4,
$$

aby zasygnalizować, że nie każdy zbiór punktów jest wykresem jednej funkcji $y=f(x)$.

Przecięcie dwóch obiektów zostaje krótko pokazane jako jednoczesne spełnienie dwóch warunków. Nie rozwijamy jeszcze pełnej techniki rozwiązywania układów.

#### Wizualizacja HTML

Pole wyboru wartości $x$ generuje punkt na wykresie funkcji. Następnie przełącznik zmienia opis z funkcji na relację i pokazuje, że dla jednego $x$ mogą istnieć dwie wartości $y$.

#### Minimalny przykład

Dla $x=-1,0,1$ generujemy trzy punkty prostej $y=2x+1$. Następnie sprawdzamy, które z kilku podanych punktów spełniają równanie okręgu $x^2+y^2=4$.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student ma samodzielnie rozwinąć trzy sposoby opisywania zbiorów punktów.

1. **Funkcja:** wygenerować tabelę wartości i wykres prostej funkcji.
2. **Relacja:** narysować okrąg albo inną prostą relację i wyjaśnić, dlaczego nie jest globalnie wykresem $y=f(x)$.
3. **Przecięcie:** znaleźć punkty spełniające dwa elementarne warunki jednocześnie.
4. **Nierówność:** zaznaczyć obszar opisany prostą nierównością i wyjaśnić rolę brzegu.
5. **Parametryzacja:** przygotować prosty zapis
   $$
   x=x(t),\qquad y=y(t)
   $$
   generujący odcinek albo okrąg oraz przedstawić kilka wartości parametru.

W `solution.md` muszą znaleźć się wykresy, tabele lub lista wygenerowanych punktów oraz porównanie:

- funkcji;
- relacji;
- opisu parametrycznego.

To jest główna część materiału, która nie będzie rozwijana technicznie podczas wykładu.

---

### 5. Domknięcie wykładu — około 10 minut

#### Na wykładzie

Wracamy do pierwszego rysunku bez osi i pokazujemy, jak został wzbogacony:

- punkt otrzymał współrzędne;
- długość otrzymała wzór;
- równanie zaczęło generować całe zbiory punktów.

Student powinien zapisać końcową zasadę:

> Współrzędne są sposobem kodowania geometrii za pomocą liczb. Dzięki temu pytania geometryczne można przekształcać w pytania algebraiczne.

Prowadzący jawnie zaznacza, że relacje, nierówności i parametryzacje zostały tylko rozpoczęte i będą rozwijane na ćwiczeniach.

## Materiał opcjonalny w HTML

Geometryczne wyprowadzenie wybranej tożsamości trygonometrycznej może pozostać jako rozszerzenie pokazujące siłę metody współrzędnościowej. Nie jest częścią obowiązkowej realizacji ustnej ani warunkiem przejścia do następnego wykładu.

## Most do wykładu 02

Współrzędne opisują położenie punktu, czyli stan. Nie opisują jeszcze samodzielnie zmiany między dwoma stanami.

> Jak opisać nie tylko to, gdzie znajduje się punkt, lecz także o ile i w jakim kierunku się zmienił?