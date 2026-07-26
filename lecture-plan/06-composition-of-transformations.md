# Wykład 06 — Composition of Transformations

## Rola wykładu w całym kursie

Poprzedni wykład wprowadził macierz jako zapis jednego przekształcenia liniowego. Teraz potrzebujemy opisać sytuację, w której kilka działań wykonywanych jest kolejno.

Nie chcemy przedstawiać mnożenia macierzy jako arbitralnego algorytmu. Ma ono pojawić się jako konieczna odpowiedź na problem składania przekształceń.

## Główne pytanie

> Jak zapisać jednym działaniem wynik wykonania dwóch przekształceń jedno po drugim?

## Centralna idea

> Mnożenie macierzy opisuje składanie przekształceń.

Jeżeli najpierw stosujemy przekształcenie reprezentowane przez macierz \(B\), a następnie przekształcenie reprezentowane przez macierz \(A\), to całe działanie opisuje macierz

\[
AB.
\]

Kolejność mnożenia wynika z kolejności wykonywania działań.

## Proponowana narracja wykładu

### 1. Dwa działania wykonywane po kolei

Zaczynamy od prostego przykładu geometrycznego, na przykład skalowania i obrotu. Student widzi dwa etapy działania na tym samym wektorze lub figurze.

Zapisujemy:

\[
x \mapsto Bx \mapsto A(Bx).
\]

Pytanie brzmi, czy cały proces można zastąpić jednym przekształceniem.

### 2. Skąd bierze się iloczyn macierzy

Nie podajemy najpierw reguły „wiersz razy kolumna”. Wyprowadzamy macierz z działania na wektorach bazy.

Kolumny macierzy \(AB\) są obrazami wektorów bazowych po wykonaniu najpierw \(B\), a następnie \(A\).

Dzięki temu algorytm mnożenia macierzy ma znaczenie geometryczne i funkcjonalne.

### 3. Kolejność ma znaczenie

Pokazujemy na animacji dwie kolejności tych samych przekształceń:

- najpierw obrót, potem skalowanie kierunkowe,
- najpierw skalowanie kierunkowe, potem obrót.

Wyniki mogą być różne. To prowadzi do obserwacji:

\[
AB \neq BA
\]

w ogólności.

Nieprzemienność nie jest osobliwą cechą rachunku macierzowego. Wynika z tego, że kolejność działań wykonywanych na obiekcie może zmieniać wynik.

### 4. Algebra działań

Dopiero po ustaleniu interpretacji wprowadzamy podstawowe operacje potrzebne w dalszym kursie:

- mnożenie macierzy przez wektor,
- mnożenie macierzy przez macierz,
- macierz jednostkową jako działanie, które niczego nie zmienia,
- potęgi macierzy jako wielokrotne wykonywanie tego samego działania.

Dodawanie macierzy może pojawić się jako zapis sumy wyników dwóch działań, ale nie powinno dominować narracji.

## Zakres konieczny

Na wykładzie powinny pojawić się:

- składanie dwóch przekształceń,
- iloczyn macierzy jako reprezentacja złożenia,
- znaczenie kolejności,
- macierz jednostkowa,
- jeden lub dwa pełne przykłady rachunkowe w wymiarze dwa.

Nie jest potrzebne rozbudowane omawianie wszystkich własności algebry macierzy ani przykłady dużych macierzy.

## Co można przenieść do ćwiczeń

- techniczne mnożenie macierzy,
- sprawdzanie łączności na przykładach,
- obliczanie potęg prostych macierzy,
- większa liczba przykładów składania transformacji,
- rachunkowe zadania dotyczące macierzy jednostkowej i zerowej.

## Co student powinien zapamiętać

> Iloczyn macierzy nie jest sztuczną regułą rachunkową. Jest zapisem wykonania jednego przekształcenia po drugim.

## Przejście do następnego wykładu

Skoro potrafimy wykonywać i składać przekształcenia, pojawia się pytanie:

> Czy każde przekształcenie można cofnąć i po czym rozpoznać, że informacja została utracona?
