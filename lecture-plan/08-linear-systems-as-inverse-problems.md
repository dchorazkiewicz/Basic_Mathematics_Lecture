# Wykład 08 — Linear Systems as Inverse Problems

## Rola wykładu w całym kursie

Ten wykład zamyka blok algebry liniowej. Wszystkie wcześniejsze idee mają tu zostać użyte razem.

Nie zaczynamy od układu równań jako osobnego działu rachunkowego. Zaczynamy od problemu odwrotnego: znamy wynik działania, lecz nie znamy danych wejściowych.

W ten sposób równanie

\[
Ax=b
\]

nie jest nową notacją bez motywacji. Jest naturalnym zapisem pytania o przyczynę na podstawie znanego skutku.

## Główne pytanie

> Jak odzyskać nieznane dane wejściowe, jeżeli znamy przekształcenie i jego wynik?

## Centralna idea

> Układ równań liniowych jest problemem odwrotnym dla przekształcenia liniowego.

Macierz \(A\) opisuje działanie, wektor \(x\) jest nieznanym wejściem, a wektor \(b\) jest znanym wynikiem.

Rozwiązać układ znaczy znaleźć wszystkie punkty lub wektory, które po zastosowaniu \(A\) przechodzą w \(b\).

## Proponowana narracja wykładu

### 1. Znamy skutek, szukamy przyczyny

Zaczynamy od prostego modelu: pewne wielkości wejściowe są mieszane lub przekształcane według znanej reguły, a obserwujemy jedynie wynik.

Zapisujemy problem jako

\[
Ax=b.
\]

Student powinien umieć odczytać każdą część równania:

- \(x\) — nieznane dane,
- \(A\) — znana reguła ich przekształcenia,
- \(b\) — znany rezultat.

### 2. Przypadek odwracalny

Jeżeli \(A\) jest odwracalna, to przekształcenie nie utraciło informacji. Można zastosować działanie odwrotne:

\[
x=A^{-1}b.
\]

Ten wzór powinien być interpretowany jako cofnięcie przekształcenia, nie jako formalny trik polegający na przeniesieniu macierzy na drugą stronę.

### 3. Gdy odwrotność nie istnieje

Brak macierzy odwrotnej nie rozstrzyga jeszcze samodzielnie, czy rozwiązanie istnieje. Pojawiają się trzy możliwości:

- dokładnie jedno rozwiązanie,
- brak rozwiązań,
- nieskończenie wiele rozwiązań.

Interpretujemy je geometrycznie jako wzajemne położenie prostych lub płaszczyzn oraz jako pytanie, czy \(b\) należy do zbioru możliwych wyników przekształcenia.

W kontekście macierzy kwadratowej przypadek dokładnie jednego rozwiązania odpowiada odwracalności. Przypadki osobliwe pokazują, co dzieje się po utracie wymiaru lub przy sprzecznych wymaganiach.

### 4. Eliminacja jako zachowanie zbioru rozwiązań

Metoda eliminacji powinna pojawić się jako sposób zastępowania układu innym, prostszym układem o tym samym zbiorze rozwiązań.

Operacje elementarne na równaniach nie są arbitralnymi manipulacjami. Każda z nich zachowuje informację o rozwiązaniach:

- zamiana równań,
- pomnożenie równania przez niezerową liczbę,
- dodanie wielokrotności jednego równania do drugiego.

Na wykładzie wystarczy jeden przejrzysty przykład eliminacji. Biegłość algorytmiczna powinna być rozwijana na ćwiczeniach.

### 5. Synteza całego bloku

W jednym schemacie łączymy cztery wykłady:

1. macierz opisuje przekształcenie,
2. iloczyn macierzy opisuje składanie działań,
3. wyznacznik rozpoznaje utratę informacji i odwracalność,
4. układ \(Ax=b\) pyta o wejście prowadzące do znanego wyniku.

Dzięki temu algebra liniowa nie jest zbiorem niepowiązanych algorytmów, lecz spójnym językiem opisu działań i problemów odwrotnych.

## Zakres konieczny

Na wykładzie powinny pojawić się:

- interpretacja \(Ax=b\),
- rozwiązanie przez odwrotność w przypadku odwracalnym,
- trzy możliwe liczby rozwiązań,
- geometryczna interpretacja prostych układów,
- podstawowa idea eliminacji,
- jeden kompletny przykład rachunkowy.

Nie jest konieczne omawianie wszystkich wariantów metod rozwiązywania ani budowanie pełnej teorii rzędu macierzy.

## Co można przenieść do ćwiczeń

- techniczne wykonywanie eliminacji Gaussa,
- rozwiązywanie większej liczby układów,
- metoda Gaussa–Jordana,
- reguła Cramera jako dodatkowa metoda i okazja do użycia wyznaczników,
- klasyfikowanie układów na podstawie postaci schodkowej,
- zadania modelowe prowadzące do układów równań.

## Co student powinien zapamiętać

> Rozwiązując \(Ax=b\), szukamy danych wejściowych, które po znanym przekształceniu dają obserwowany wynik.

## Domknięcie bloku algebry liniowej

Rozdziały 5–8 odpowiadają kolejno na cztery pytania:

1. Jak opisać przekształcenie? — macierzą.
2. Jak składać przekształcenia? — mnożąc macierze.
3. Kiedy działanie można cofnąć? — badając odwracalność i wyznacznik.
4. Jak odzyskać wejście ze znanego wyniku? — rozwiązując układ liniowy.

Wspólnym motywem jest przejście od opisu obiektów do opisu operacji wykonywanych na obiektach.

## Przejście do rachunku różniczkowego

Algebra liniowa opisywała działania liniowe, czyli takie, które zachowują kombinacje liniowe. Kolejny blok kursu powinien rozpocząć się od pytania:

> Jak opisywać zjawiska i funkcje, które nie są liniowe, lecz w małej skali mogą być przybliżane działaniem liniowym?

To pytanie prowadzi naturalnie do funkcji, granicy i pochodnej jako lokalnego przybliżenia liniowego.
