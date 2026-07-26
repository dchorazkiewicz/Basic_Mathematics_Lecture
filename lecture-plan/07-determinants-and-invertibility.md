# Wykład 07 — Determinants and Invertibility

## Rola wykładu w całym kursie

Poprzednie dwa wykłady pokazały, jak opisywać przekształcenia i jak je składać. Teraz pojawia się pierwsze zasadnicze ograniczenie tego języka: nie każde działanie można odwrócić.

Wyznacznik, odwracalność i macierz odwrotna nie powinny być przedstawiane jako trzy niezależne tematy. Wszystkie odpowiadają na jedno pytanie o utratę informacji.

## Główne pytanie

> Kiedy przekształcenie można cofnąć, a kiedy jego działanie bezpowrotnie łączy różne dane wejściowe w ten sam wynik?

## Centralna idea

> Przekształcenie jest odwracalne wtedy, gdy nie traci informacji.

Wyznacznik mierzy, jak przekształcenie zmienia zorientowane pole w dwóch wymiarach lub zorientowaną objętość w trzech wymiarach. W szczególności

\[
\det A=0
\]

oznacza, że figura o dodatnim polu została spłaszczona do obiektu niższego wymiaru. W takiej sytuacji różnych punktów nie można już jednoznacznie odtworzyć z ich obrazów.

## Proponowana narracja wykładu

### 1. Próba cofania prostych przekształceń

Zaczynamy od przykładów:

- obrót można cofnąć obrotem przeciwnym,
- niezerowe skalowanie można cofnąć skalowaniem odwrotnym,
- ścinanie można cofnąć odpowiednim ścinaniem,
- rzut płaszczyzny na prostą nie może zostać cofnięty.

W ostatnim przypadku wiele punktów ma ten sam obraz. To nie jest brak sprytnego algorytmu, lecz rzeczywista utrata informacji.

### 2. Geometria pola i orientacji

Śledzimy obraz kwadratu jednostkowego. Po przekształceniu otrzymujemy równoległobok rozpięty przez kolumny macierzy.

Wyznacznik opisuje:

- współczynnik zmiany pola,
- zmianę lub zachowanie orientacji przez znak,
- spłaszczenie, gdy wartość wynosi zero.

Interpretacja geometryczna powinna poprzedzić wzór rachunkowy.

### 3. Wyznacznik macierzy \(2\times2\)

Dla

\[
A=\begin{bmatrix}a&b\\c&d\end{bmatrix}
\]

wprowadzamy

\[
\det A=ad-bc.
\]

Wzór ma zostać powiązany z polem równoległoboku utworzonego przez kolumny macierzy. Nie powinien pojawić się jako czysto formalna definicja pozbawiona wcześniejszej potrzeby.

### 4. Macierz odwrotna jako cofnięcie działania

Jeżeli przekształcenie nie traci informacji, istnieje działanie odwrotne. Macierz \(A^{-1}\) spełnia

\[
A^{-1}A=AA^{-1}=I.
\]

Macierz odwrotna jest więc reprezentacją cofnięcia przekształcenia.

W wymiarze dwa można pokazać wzór na odwrotność i jeden przykład, ale nie należy rozbudowywać wykładu w katalog metod obliczeniowych.

### 5. Równoważność pojęć

W prostym, dwuwymiarowym kontekście spinamy najważniejsze fakty:

- \(\det A\neq0\),
- kolumny macierzy nie są współliniowe,
- przekształcenie nie spłaszcza płaszczyzny,
- istnieje macierz odwrotna,
- każde wyjście pochodzi od dokładnie jednego wejścia.

Student powinien zobaczyć, że są to różne opisy tego samego zjawiska.

## Zakres konieczny

Na wykładzie powinny pojawić się:

- utrata informacji jako źródło problemu,
- wyznacznik \(2\times2\),
- interpretacja pola i znaku,
- warunek \(\det A=0\),
- idea macierzy odwrotnej,
- jeden prosty przykład obliczenia odwrotności.

Pełne rozwinięcie Laplace'a, wzory dla dużych macierzy i rozbudowane techniki rachunkowe nie są potrzebne w głównej narracji.

## Co można przenieść do ćwiczeń

- większą liczbę obliczeń wyznaczników,
- techniczne wyznaczanie macierzy odwrotnych,
- metodę Gaussa–Jordana,
- wyznaczniki wyższych rzędów,
- sprawdzanie odwracalności na podstawie różnych kryteriów.

## Co student powinien zapamiętać

> Zerowy wyznacznik oznacza spłaszczenie i utratę informacji; niezerowy wyznacznik oznacza, że przekształcenie można odwrócić.

## Przejście do następnego wykładu

Jeżeli znamy wynik działania przekształcenia, naturalnie chcemy odzyskać dane wejściowe. Prowadzi to do pytania:

> Jak rozwiązać równanie \(Ax=b\), gdy \(x\) jest nieznane?
