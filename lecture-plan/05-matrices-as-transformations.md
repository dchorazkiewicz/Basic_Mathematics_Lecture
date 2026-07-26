# Wykład 05 — Matrices as Transformations

## Rola wykładu w całym kursie

Pierwsze cztery wykłady budowały język opisu obiektów geometrycznych. Współrzędne pozwoliły kodować punkty, wektory opisywały zmiany, równania generowały proste, płaszczyzny i krzywe, a stożkowe pokazały, że taki język może służyć do modelowania rzeczywistych trajektorii.

Od tego miejsca kurs przechodzi od opisu obiektów do opisu działań wykonywanych na obiektach.

Nie chcemy zaczynać od tabel liczb i formalnych działań na macierzach. Macierz ma pojawić się dopiero wtedy, gdy stanie się potrzebna jako zwarty zapis przekształcenia całej przestrzeni.

## Główne pytanie

> Jak opisać jedną regułę, która jednocześnie przekształca wszystkie punkty i wektory?

## Centralna idea

> Macierz nie jest przede wszystkim tabelą liczb. Jest reprezentacją przekształcenia liniowego względem wybranej bazy.

Przekształcenie liniowe powinno najpierw pojawić się jako działanie geometryczne. Dopiero później jego efekt zostaje zapisany liczbowo.

Najważniejszy fakt wykładu brzmi:

> Aby znać przekształcenie liniowe w przestrzeni dwuwymiarowej, wystarczy wiedzieć, co robi ono z dwoma wektorami bazy.

Kolumny macierzy są obrazami wektorów bazowych. Dzięki temu macierz nie jest arbitralnym zapisem, lecz bezpośrednim kodem działania.

## Proponowana narracja wykładu

### 1. Od obiektów do działań

Zaczynamy od prostych figur i pytamy, co znaczy zmienić całą figurę jedną regułą. Pokazujemy tylko niewielką liczbę dobrze dobranych przykładów:

- skalowanie,
- obrót,
- ścinanie.

Nie budujemy katalogu przekształceń. Przykłady mają jedynie ujawnić wspólną strukturę: każdemu punktowi przypisujemy nowy punkt według tej samej reguły.

### 2. Wektory bazy jako wystarczająca informacja

Każdy wektor można zapisać jako kombinację wektorów bazy. Jeżeli przekształcenie zachowuje dodawanie i mnożenie przez skalar, to jego działanie na dowolnym wektorze wynika z działania na bazie.

To jest moment, w którym powinna pojawić się właściwa motywacja liniowości:

- proste kombinacje przed przekształceniem pozostają odpowiadającymi im kombinacjami po przekształceniu,
- dzięki temu nie trzeba osobno definiować obrazu każdego punktu.

### 3. Narodziny macierzy

Obrazy wektorów bazowych zapisujemy jako kolumny. Powstaje macierz przekształcenia.

Jeżeli

\[
T(e_1)=a_1, \qquad T(e_2)=a_2,
\]

to macierz ma postać

\[
A=\begin{bmatrix} | & | \\ a_1 & a_2 \\ | & | \end{bmatrix}.
\]

Działanie na wektorze zapisujemy jako

\[
T(x)=Ax.
\]

Mnożenie macierzy przez wektor ma zostać odczytane jako zastosowanie przekształcenia, nie jako samodzielny algorytm rachunkowy.

### 4. Wizualizacja jako część argumentu

Format HTML powinien pokazać jednocześnie:

- ruch wektorów bazy,
- deformację siatki współrzędnych,
- ruch wybranego punktu lub figury,
- zmianę kolumn macierzy.

Student ma zobaczyć, że zmiana kilku liczb w macierzy zmienia działanie wykonywane na całej płaszczyźnie.

## Zakres konieczny

Na wykładzie powinny pojawić się:

- idea przekształcenia liniowego,
- działanie na wektorach bazy,
- macierz jako zapis tego działania,
- mnożenie macierzy przez wektor,
- kilka prostych przykładów geometrycznych.

Nie jest konieczne pełne formalne rozwijanie teorii przestrzeni liniowych ani rozbudowany katalog typów macierzy.

## Co można przenieść do ćwiczeń

- rachunkowe przykłady mnożenia macierzy przez wektor,
- rozpoznawanie macierzy prostych przekształceń,
- budowanie macierzy na podstawie obrazów wektorów bazy,
- dodatkowe transformacje, takie jak odbicie czy rzut.

## Co student powinien zapamiętać

> Macierz jest liczbowym zapisem działania na przestrzeni, a jej kolumny mówią, co dzieje się z wektorami bazy.

## Przejście do następnego wykładu

Skoro jedna macierz opisuje jedno przekształcenie, pojawia się naturalne pytanie:

> Jak opisać wykonanie dwóch przekształceń jedno po drugim?
