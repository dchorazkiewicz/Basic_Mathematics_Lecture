# Wykład 07 — Determinants and Invertibility

## Rola wykładu w całym kursie

Poprzednie dwa wykłady pokazały, jak opisywać przekształcenia i jak je składać. Teraz pojawia się pierwsze zasadnicze ograniczenie tego języka: nie każde działanie można jednoznacznie cofnąć.

Wykład 07 skupia się na utracie informacji, wyznaczniku i rozpoznawaniu odwracalności. Nie wprowadza jeszcze macierzy odwrotnej ani technik jej obliczania. Te pojawią się w wykładzie 08 razem z problemem odzyskiwania wejścia z równania \(Ax=b\).

## Główne pytanie

> Kiedy przekształcenie można cofnąć jednoznacznie, a kiedy jego działanie łączy różne dane wejściowe w ten sam wynik?

## Centralna idea

> Przekształcenie jest odwracalne wtedy, gdy nie traci informacji.

Wyznacznik mierzy, jak przekształcenie zmienia zorientowane pole w dwóch wymiarach. W szczególności

\[
\det A=0
\]

oznacza, że figura o dodatnim polu została spłaszczona do obiektu niższego wymiaru. W takiej sytuacji różnych punktów nie można już jednoznacznie odtworzyć z ich obrazów.

## Proponowana narracja wykładu

### 1. Obraz kwadratu jednostkowego

Zaczynamy od kolumn macierzy i obrazu kwadratu jednostkowego. Pokazujemy kolejno:

- zachowanie pola przez identyczność,
- zmianę pola przez skalowanie,
- zmianę kształtu bez zmiany pola przez ścinanie,
- zmianę orientacji przez odbicie,
- spłaszczenie kwadratu do odcinka.

Interpretacja geometryczna poprzedza definicję i wzór.

### 2. Pole i orientacja

Wyznacznik opisuje:

- współczynnik zmiany pola przez wartość bezwzględną,
- zachowanie lub zmianę orientacji przez znak,
- spłaszczenie, gdy wartość wynosi zero.

### 3. Wyznacznik macierzy \(2\times2\)

Dla

\[
A=\begin{bmatrix}a&b\\c&d\end{bmatrix}
\]

wprowadzamy

\[
\det A=ad-bc.
\]

Wzór wynika z pola równoległoboku utworzonego przez kolumny macierzy. Najpierw pojawia się jawny przykład liczbowy, w którym pole jest liczone jako długość podstawy razy wysokość prostopadła. Dopiero potem ten sam argument zostaje zapisany dla współczynników \(a,b,c,d\).

### 4. Kolaps z dwóch wymiarów do jednego

Centralnym przykładem jest

\[
S=\begin{bmatrix}1&1\\1&1\end{bmatrix}.
\]

Pokazujemy jednocześnie obrazowo i algebraicznie, że

\[
S\begin{bmatrix}s\\t\end{bmatrix}
=(s+t)\begin{bmatrix}1\\1\end{bmatrix}.
\]

Dwa parametry wejściowe \(s,t\) zostają zastąpione jednym parametrem \(s+t\). Cała płaszczyzna trafia na jedną prostą.

### 5. Utrata informacji

Dwa różne wejścia mogą mieć ten sam obraz. Na konkretnych wektorach pokazujemy

\[
S\mathbf p=S\mathbf q,
\]

a następnie

\[
S(\mathbf p-\mathbf q)=\mathbf0.
\]

Student widzi dwa równoważne opisy tego samego zjawiska:

- różne wejścia zlewają się w jeden wynik,
- pewien niezerowy kierunek znika całkowicie.

### 6. Test odwracalności

W wymiarze dwa spinamy fakty:

- \(\det A\neq0\),
- kolumny macierzy nie są współliniowe,
- kolumny tworzą bazę płaszczyzny,
- przekształcenie nie spłaszcza płaszczyzny,
- żaden niezerowy wektor nie jest wysyłany do zera,
- każdy wynik pochodzi od dokładnie jednego wejścia.

Na tym etapie odwracalność jest własnością przekształcenia, nie algorytmem. Nie używamy jeszcze symbolu \(A^{-1}\), nie podajemy wzoru na odwrotność i nie wykonujemy obliczeń macierzy odwrotnych.

### 7. Wyznacznik złożenia

Z interpretacji pola wynika

\[
\det(AB)=\det A\det B.
\]

Pokazujemy jeden prosty przykład: skalowanie zmienia pole, a następujące po nim ścinanie zachowuje otrzymane pole. Jeżeli jeden etap ma wyznacznik zero, cały proces pozostaje singularny, ponieważ późniejsza transformacja nie może odtworzyć utraconego wymiaru.

## Zakres konieczny

Na wykładzie powinny pojawić się:

- obraz kwadratu jednostkowego,
- wyznacznik \(2\times2\),
- interpretacja pola i znaku,
- kolaps z 2D do 1D,
- utrata informacji i niezerowy kierunek wysyłany do zera,
- warunek \(\det A=0\),
- test możliwości jednoznacznego cofnięcia,
- własność \(\det(AB)=\det A\det B\).

Macierz odwrotna, symbol \(A^{-1}\), wzór na odwrotność i jej obliczanie nie należą do tego wykładu.

## Co można przenieść do ćwiczeń

- większą liczbę obliczeń wyznaczników,
- budowanie macierzy o zadanym wyznaczniku,
- znajdowanie kierunków wysyłanych do zera,
- porównywanie różnych kryteriów odwracalności,
- sprawdzanie wyznacznika złożenia na przykładach.

## Co student powinien zapamiętać

> Zerowy wyznacznik oznacza spłaszczenie i utratę informacji; niezerowy wyznacznik oznacza, że każde wyjście ma dokładnie jedno wejście.

## Przejście do następnego wykładu

Jeżeli wiemy już, że cofnięcie jest możliwe, pozostaje pytanie rachunkowe:

> Jak znaleźć wejście \(x\), gdy znamy macierz \(A\) i wynik \(b\) w równaniu \(Ax=b\)?

To pytanie prowadzi do macierzy odwrotnej i układów równań w wykładzie 08.
