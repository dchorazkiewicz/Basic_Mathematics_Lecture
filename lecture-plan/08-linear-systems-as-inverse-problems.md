# Wykład 08 — Linear Systems as Inverse Problems

## Rola wykładu w całym kursie

Ten wykład zamyka blok algebry liniowej. Wykład 07 rozstrzygnął, kiedy jednoznaczne cofnięcie działania jest możliwe. Teraz konstruujemy samo działanie odwrotne i używamy go do odzyskiwania nieznanego wejścia.

Nie zaczynamy od układu równań jako osobnego działu rachunkowego. Zaczynamy od problemu odwrotnego: znamy wynik działania, lecz nie znamy danych wejściowych.

W ten sposób równanie

\[
Ax=b
\]

nie jest nową notacją bez motywacji. Jest naturalnym zapisem pytania o przyczynę na podstawie znanego skutku.

## Główne pytanie

> Jak odzyskać nieznane dane wejściowe, jeżeli znamy przekształcenie i jego wynik?

## Centralna idea

> Macierz odwrotna opisuje cofnięcie odwracalnego działania, a układ równań pyta o wejście prowadzące do znanego wyniku.

Macierz \(A\) opisuje działanie, wektor \(x\) jest nieznanym wejściem, a wektor \(b\) jest znanym wynikiem.

Rozwiązać układ znaczy znaleźć wszystkie punkty lub wektory, które po zastosowaniu \(A\) przechodzą w \(b\).

## Proponowana narracja wykładu

### 1. Znamy skutek, szukamy przyczyny

Zaczynamy od prostego modelu: pewne wielkości wejściowe są mieszane lub przekształcane według znanej reguły, a obserwujemy jedynie wynik.

Zapisujemy problem jako

\[
Ax=b.
\]

Każda część równania ma bezpośrednie znaczenie:

- \(x\) — nieznane dane,
- \(A\) — znana reguła ich przekształcenia,
- \(b\) — znany rezultat.

### 2. Macierz odwrotna jako cofnięcie działania

Jeżeli \(\det A\neq0\), wykład 07 pokazał, że każde wyjście ma dokładnie jedno wejście. Wprowadzamy macierz \(A^{-1}\) jako macierz działania cofającego:

\[
A^{-1}A=AA^{-1}=I.
\]

Najpierw pokazujemy cofnięcie na prostym przykładzie geometrycznym, a dopiero potem symbol i rachunek.

Dla macierzy \(2\times2\) można podać wzór na odwrotność i jeden jawny przykład. Student ma rozumieć, że czynnik \(1/\det A\) jest możliwy tylko wtedy, gdy wyznacznik jest niezerowy.

### 3. Przypadek odwracalny w równaniu \(Ax=b\)

Zastosowanie działania odwrotnego daje

\[
x=A^{-1}b.
\]

Ten wzór jest cofnięciem przekształcenia, a nie formalnym przeniesieniem macierzy na drugą stronę równania.

### 4. Gdy odwrotność nie istnieje

Brak macierzy odwrotnej nie rozstrzyga jeszcze samodzielnie, czy dla konkretnego \(b\) istnieje rozwiązanie. Pojawiają się trzy możliwości:

- dokładnie jedno rozwiązanie,
- brak rozwiązań,
- nieskończenie wiele rozwiązań.

Interpretujemy je geometrycznie jako pytanie, czy \(b\) należy do zbioru możliwych wyników przekształcenia.

W przypadku macierzy kwadratowej dokładnie jedno rozwiązanie dla każdego \(b\) odpowiada odwracalności. Przypadki singularne pokazują, co dzieje się po utracie wymiaru.

### 5. Eliminacja jako zachowanie zbioru rozwiązań

Metoda eliminacji pojawia się jako sposób zastępowania układu innym, prostszym układem o tym samym zbiorze rozwiązań.

Operacje elementarne na równaniach zachowują rozwiązania:

- zamiana równań,
- pomnożenie równania przez niezerową liczbę,
- dodanie wielokrotności jednego równania do drugiego.

Na wykładzie wystarczy jeden przejrzysty przykład eliminacji. Biegłość algorytmiczna jest rozwijana na ćwiczeniach.

### 6. Synteza całego bloku

W jednym schemacie łączymy cztery wykłady:

1. macierz opisuje przekształcenie,
2. iloczyn macierzy opisuje składanie działań,
3. wyznacznik rozpoznaje utratę informacji i możliwość cofnięcia,
4. macierz odwrotna i układ \(Ax=b\) odzyskują wejście ze znanego wyniku.

Dzięki temu algebra liniowa nie jest zbiorem niepowiązanych algorytmów, lecz spójnym językiem opisu działań i problemów odwrotnych.

## Zakres konieczny

Na wykładzie powinny pojawić się:

- interpretacja \(Ax=b\),
- macierz odwrotna jako cofnięcie działania,
- warunki \(A^{-1}A=AA^{-1}=I\),
- wzór na odwrotność macierzy \(2\times2\),
- jeden jawny przykład obliczenia odwrotności,
- rozwiązanie przez odwrotność w przypadku odwracalnym,
- trzy możliwe liczby rozwiązań,
- podstawowa idea eliminacji,
- jeden kompletny przykład rachunkowy.

Nie jest konieczne omawianie wszystkich wariantów metod rozwiązywania ani budowanie pełnej teorii rzędu macierzy.

## Co można przenieść do ćwiczeń

- techniczne wykonywanie eliminacji Gaussa,
- obliczanie większej liczby macierzy odwrotnych,
- metoda Gaussa–Jordana,
- reguła Cramera jako dodatkowa metoda,
- klasyfikowanie układów na podstawie postaci schodkowej,
- zadania modelowe prowadzące do układów równań.

## Co student powinien zapamiętać

> Rozwiązując \(Ax=b\), szukamy danych wejściowych, które po znanym przekształceniu dają obserwowany wynik; gdy działanie jest odwracalne, macierz odwrotna wykonuje cofnięcie.

## Domknięcie bloku algebry liniowej

Rozdziały 5–8 odpowiadają kolejno na cztery pytania:

1. Jak opisać przekształcenie? — macierzą.
2. Jak składać przekształcenia? — mnożąc macierze.
3. Kiedy działanie można cofnąć? — badając wyznacznik i utratę informacji.
4. Jak rzeczywiście odzyskać wejście ze znanego wyniku? — używając macierzy odwrotnej lub eliminacji.

## Przejście do rachunku różniczkowego

Algebra liniowa opisywała działania liniowe, czyli takie, które zachowują kombinacje liniowe. Kolejny blok kursu powinien rozpocząć się od pytania:

> Jak opisywać zjawiska i funkcje, które nie są liniowe, lecz w małej skali mogą być przybliżane działaniem liniowym?

To pytanie prowadzi naturalnie do funkcji, granicy i pochodnej jako lokalnego przybliżenia liniowego.
