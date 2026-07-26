# Wykład 11 — Derivatives and Qualitative Analysis

## Rola wykładu w całym kursie

Poprzedni wykład nadał ścisły sens zachowaniu funkcji w pobliżu punktu. Teraz granica zostaje użyta do zdefiniowania chwilowego tempa zmiany.

Pochodna nie powinna pojawić się jako kolejna tabela wzorów. Ma być odpowiedzią na problem, którego nie rozwiązuje średnia zmiana na skończonym przedziale: jak opisać zmianę funkcji w jednym punkcie?

W tym wykładzie po raz pierwszy wraca również centralna idea algebry liniowej. Funkcja może być globalnie nieliniowa, ale w bardzo małym otoczeniu punktu jej zmiana może być opisana przez proste działanie liniowe.

## Główne pytanie

> Jak opisać chwilowe tempo zmiany funkcji i wykorzystać lokalną informację do badania jej zachowania na większym obszarze?

## Centralna idea

> Pochodna jest granicą ilorazów zmian i opisuje najlepsze lokalne przybliżenie liniowe funkcji.

Druga główna idea brzmi:

> Informacja lokalna zawarta w pochodnej pozwala wnioskować o wzroście, spadku, ekstremach i kształcie funkcji.

## Proponowana narracja wykładu

### 1. Zmiana średnia

Zaczynamy od dwóch punktów wykresu. Iloraz

\[
\frac{f(b)-f(a)}{b-a}
\]

opisuje średnią zmianę wartości funkcji przypadającą na jednostkę zmiany argumentu.

Geometrycznie jest nachyleniem siecznej. Fizycznie może być średnią prędkością. Obie interpretacje pokazują, że jest to informacja dotycząca całego przedziału, a nie pojedynczej chwili.

### 2. Kurczenie przedziału

Ustalamy punkt \(a\) i zapisujemy iloraz różnicowy

\[
\frac{f(a+h)-f(a)}{h}.
\]

Parametr \(h\) określa rozmiar badanego przyrostu. Gdy \(h\to0\), drugi punkt zbliża się do pierwszego, a sieczna może stabilizować się do stycznej.

To jest naturalne zastosowanie granicy funkcji, a nie niezależna sztuczka rachunkowa.

### 3. Definicja pochodnej

Definiujemy

\[
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h},
\]

o ile granica istnieje.

Należy wyraźnie odczytać wszystkie elementy:

- \(f(a+h)-f(a)\) jest zmianą wartości,
- \(h\) jest zmianą argumentu,
- iloraz jest zmianą średnią,
- granica wydobywa zmianę chwilową.

Pochodna może nie istnieć. Prosty przykład narożnika pokazuje, że ciągłość nie gwarantuje różniczkowalności.

### 4. Trzy interpretacje pochodnej

Pochodna powinna zostać przedstawiona równocześnie jako:

- chwilowe tempo zmiany,
- nachylenie stycznej,
- współczynnik lokalnego modelu liniowego.

Najważniejszy zapis lokalnego przybliżenia to

\[
f(a+h)\approx f(a)+f'(a)h.
\]

W jednym wymiarze działanie

\[
h\longmapsto f'(a)h
\]

jest lokalnym przekształceniem liniowym. To stanowi bezpośredni most do wykładów o macierzach.

### 5. Najprostsze reguły różniczkowania

Po definicji można wprowadzić podstawowe reguły:

- pochodną sumy,
- pochodną iloczynu,
- pochodną ilorazu,
- regułę łańcuchową.

Nie należy tworzyć długiego katalogu. Każda reguła powinna pojawić się z jednym elementarnym przykładem.

Szczególnie ważna jest reguła łańcuchowa:

\[
(f\circ g)'(x)=f'(g(x))g'(x).
\]

Powinna zostać zinterpretowana jako składanie lokalnych zmian. W jednym wymiarze współczynniki lokalnych przekształceń liniowych mnożą się tak, jak wcześniej składały się macierze.

### 6. Znak pochodnej i monotoniczność

Jeżeli \(f'(x)>0\), funkcja lokalnie rośnie. Jeżeli \(f'(x)<0\), lokalnie maleje.

Na prostym przykładzie należy pokazać, jak znak pochodnej na przedziałach pozwala zbudować jakościowy obraz funkcji bez obliczania wielu jej wartości.

Nie chodzi o mechaniczną tabelę znaków. Chodzi o przejście od informacji o lokalnej zmianie do informacji o przebiegu funkcji.

### 7. Punkty krytyczne i ekstrema

Punkty, w których

\[
f'(x)=0
\]

albo pochodna nie istnieje, stają się kandydatami na zmianę zachowania funkcji.

Wprowadzamy:

- maksimum lokalne,
- minimum lokalne,
- punkt krytyczny,
- prosty test zmiany znaku pochodnej.

Należy wyraźnie zaznaczyć, że warunek \(f'(a)=0\) sam nie gwarantuje ekstremum.

### 8. Druga pochodna i zmiana nachylenia

Druga pochodna opisuje zmianę pierwszej pochodnej. Może służyć do badania wypukłości, wklęsłości i zmiany charakteru wykresu.

Wystarczy jeden prosty przykład, na którym student zobaczy różnicę między:

- wartością funkcji,
- jej nachyleniem,
- zmianą nachylenia.

Nie należy rozbudowywać tej części w pełny katalog testów drugiej pochodnej.

### 9. Elementarna analiza jednej funkcji

Kulminacją powinno być pełne, lecz rachunkowo proste badanie jednej funkcji. Przykład powinien pozwolić wyznaczyć:

- dziedzinę,
- podstawowe granice,
- przedziały wzrostu i spadku,
- ekstrema,
- prostą informację o wypukłości,
- szkic wykresu.

Najlepszy będzie wielomian niskiego stopnia albo bardzo prosta funkcja wymierna. Celem jest połączenie wcześniejszych idei, nie demonstracja sprawności w przekształceniach.

## Rola wizualizacji HTML

Najważniejsza animacja powinna pokazywać sieczną przechodzącą w styczną, gdy \(h\to0\). Powiększanie wykresu wokół punktu powinno ujawniać jego lokalne prostowanie.

Można równolegle pokazywać:

- wykres funkcji,
- wartość ilorazu różnicowego,
- wykres pochodnej,
- znak pochodnej i odpowiadające mu przedziały wzrostu lub spadku.

Student powinien widzieć, że wykres pochodnej jest zapisem lokalnych nachyleń funkcji pierwotnej.

## Zakres konieczny

Na wykładzie powinny pojawić się:

- zmiana średnia,
- iloraz różnicowy,
- definicja pochodnej,
- interpretacja geometryczna i fizyczna,
- lokalne przybliżenie liniowe,
- podstawowe reguły różniczkowania,
- reguła łańcuchowa,
- monotoniczność,
- punkty krytyczne i ekstrema,
- podstawowa rola drugiej pochodnej,
- jeden pełny, elementarny przykład analizy funkcji.

Nie jest potrzebny rozbudowany katalog pochodnych, trudne funkcje złożone ani wiele technicznych zadań optymalizacyjnych.

## Co można przenieść do ćwiczeń

- większą liczbę rachunkowych przykładów różniczkowania,
- techniczne stosowanie reguły iloczynu, ilorazu i łańcuchowej,
- badanie prostych wielomianów i funkcji wymiernych,
- elementarne zadania optymalizacyjne,
- obliczenia stycznych i normalnych,
- ćwiczenia z drugą pochodną.

## Zasada doboru przykładów

Każdy przykład powinien eksponować jedną ideę. Parabola dobrze pokazuje sieczną, styczną i liniowy model lokalny. Prosty wielomian trzeciego stopnia może pokazać zmianę monotoniczności i ekstrema.

Długie rachunki nie mogą zasłaniać związku między funkcją a jej lokalną zmianą. Współczynniki powinny być małe, a wyniki łatwe do interpretacji na rysunku.

## Co student powinien zapamiętać

> Pochodna powstaje z granicy ilorazów zmian, opisuje chwilowe tempo zmiany i daje lokalny liniowy model funkcji.

## Przejście do następnego wykładu

Pochodna przechodzi od wielkości do jej lokalnego tempa zmiany. Pojawia się problem odwrotny:

> Jeżeli znamy lokalne tempo zmiany albo lokalną gęstość pewnej wielkości, jak odtworzyć całkowity efekt?
