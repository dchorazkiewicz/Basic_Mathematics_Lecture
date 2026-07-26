# Wykład 12 — Integration and Accumulation

## Rola wykładu w całym kursie

Pochodna rozkłada zachowanie funkcji na lokalne tempo zmiany. Całka wykonuje ruch przeciwny: składa małe lokalne wkłady w jedną wielkość globalną.

Ten wykład ma wprowadzić zarówno ideę całki oznaczonej jako granicy sum, jak i podstawowy rachunek funkcji pierwotnych. Nie może jednak zmienić się w katalog trudnych technik całkowania. Metody rachunkowe mają być pokazane na elementarnych przykładach, aby wspierały ideę akumulacji, a nie ją zasłaniały.

## Główne pytanie

> Jak zsumować bardzo wiele zmiennych i coraz mniejszych wkładów, aby otrzymać ich całkowity efekt?

## Centralna idea

> Całka oznaczona jest granicą sum lokalnych przybliżeń.

Druga główna idea brzmi:

> Pochodna wydobywa lokalne tempo zmiany, a całka odtwarza z lokalnych zmian efekt globalny.

## Proponowana narracja wykładu

### 1. Problem akumulacji

Zaczynamy od sytuacji, w której zwykłe mnożenie działa tylko w przypadku stałej wielkości.

Jeżeli prędkość jest stała, przemieszczenie wynosi

\[
s=vt.
\]

Jeżeli prędkość zmienia się w czasie, dzielimy czas na małe przedziały. Na każdym przedziale traktujemy prędkość jako w przybliżeniu stałą i zapisujemy lokalny wkład

\[
v(t_i)\Delta t_i.
\]

Całkowite przemieszczenie przybliża suma

\[
\sum_i v(t_i)\Delta t_i.
\]

Ten przykład pokazuje, skąd bierze się potrzeba sumowania lokalnych wkładów.

### 2. Prostokąty i pole

Geometrycznym odpowiednikiem jest przybliżanie pola pod wykresem przez prostokąty.

Dzielimy przedział

\[
[a,b]
\]

na mniejsze części i na każdej budujemy prostokąt o wysokości wyznaczonej przez wartość funkcji.

Pole przybliżone ma postać

\[
\sum_{i=1}^n f(\xi_i)\Delta x_i.
\]

Nie należy utożsamiać całki wyłącznie z polem. Pole jest pierwszym czytelnym modelem szerszej idei akumulacji.

### 3. Całka jako granica sum

Gdy podział staje się coraz drobniejszy, sumy mogą stabilizować się do jednej wartości. Definiujemy

\[
\int_a^b f(x)\,dx
\]

jako granicę sum Riemanna.

To jest kolejne zastosowanie języka granic:

- ciągi opisywały kolejne przybliżenia,
- granice funkcji opisywały zachowanie lokalne,
- pochodna była granicą ilorazów,
- całka jest granicą sum.

Warto podkreślić, że symbole \(dx\) i granice całkowania mają znaczenie wynikające z konstrukcji podziału, a nie są jedynie częścią zapisu do zapamiętania.

### 4. Całka jako suma lokalnej gęstości

Funkcja pod całką może opisywać różne wielkości lokalne:

- wysokość i pole,
- prędkość i przemieszczenie,
- gęstość i masę,
- moc i energię,
- natężenie i łączny efekt.

Wspólna struktura jest zawsze taka sama:

\[
\text{lokalna wielkość na jednostkę}
\times
\text{mały fragment}
\]

jest lokalnym wkładem, a całka sumuje wszystkie wkłady.

### 5. Funkcja akumulacji

Definiujemy

\[
F(x)=\int_a^x f(t)\,dt.
\]

Funkcja \(F\) mówi, ile zgromadzono od punktu \(a\) do punktu \(x\).

Zwiększenie górnej granicy o małe \(h\) dodaje w przybliżeniu prostokąt o polu

\[
f(x)h.
\]

To prowadzi do związku

\[
F'(x)=f(x).
\]

Student powinien zobaczyć, dlaczego lokalne tempo wzrostu zgromadzonej wielkości jest równe aktualnej gęstości tej wielkości.

### 6. Fundamentalne twierdzenie rachunku całkowego

Kulminacją wykładu jest powiązanie całki z funkcją pierwotną.

Jeżeli

\[
F'(x)=f(x),
\]

to

\[
\int_a^b f(x)\,dx=F(b)-F(a).
\]

Twierdzenie należy przedstawić jako połączenie dwóch pozornie różnych problemów:

- geometrycznego i fizycznego problemu akumulacji,
- algebraicznego problemu odwracania różniczkowania.

Nie jest to wyłącznie przepis obliczeniowy. Jest to stwierdzenie, że lokalna zmiana i globalna akumulacja są dwiema stronami jednego mechanizmu.

### 7. Całka nieoznaczona i funkcje pierwotne

Zapis

\[
\int f(x)\,dx=F(x)+C
\]

opisuje rodzinę wszystkich funkcji mających tę samą pochodną.

Stała \(C\) powinna zostać wyjaśniona przez fakt, że różniczkowanie traci informację o stałym przesunięciu pionowym. Jest to prosty przykład problemu odwrotnego, podobnego do problemów odwracalności omawianych w algebrze liniowej.

### 8. Elementarne metody całkowania

Metody powinny zostać pokazane oszczędnie i na prostych przykładach.

#### Bezpośrednie użycie podstawowych funkcji pierwotnych

Najpierw pokazujemy całki wynikające bezpośrednio z poznanych pochodnych:

\[
\int x^n\,dx,
\qquad
\int e^x\,dx,
\qquad
\int \cos x\,dx.
\]

Nie jest potrzebna długa tabela. Ważne jest odczytywanie całkowania jako odwracania różniczkowania.

#### Proste podstawienie

Podstawienie powinno zostać pokazane jako odwrócenie reguły łańcuchowej. Dobieramy przykład, w którym struktura jest widoczna bez długich przekształceń, na przykład

\[
\int 2x(x^2+1)^2\,dx.
\]

Celem jest rozpoznanie złożenia i jego pochodnej, nie techniczna żonglerka symbolami.

#### Całkowanie przez części jako materiał zależny od czasu

Całkowanie przez części może zostać przedstawione krótko jako odwrócenie reguły iloczynu, jeśli czas na to pozwoli. Powinien wystarczyć jeden bardzo prosty przykład. W razie ograniczeń czasowych technika może zostać przeniesiona na ćwiczenia.

### 9. Znak całki i całkowita zmiana

Całka oznaczona uwzględnia znak. Obszary poniżej osi dają wkład ujemny.

W kontekście ruchu należy odróżnić:

- przemieszczenie

\[
\int_a^b v(t)\,dt,
\]

- przebytą drogę

\[
\int_a^b |v(t)|\,dt.
\]

Jest to prosty przykład pokazujący, że interpretacja wyniku zależy od znaczenia całkowanej wielkości.

## Rola wizualizacji HTML

Najważniejsza animacja powinna pokazywać coraz drobniejszy podział przedziału i prostokąty przybliżające pole lub przemieszczenie. Student powinien obserwować jednocześnie:

- liczbę przedziałów,
- sumę prostokątów,
- wartość graniczną,
- zmniejszający się błąd przybliżenia.

Dla funkcji akumulacji można przesuwać górną granicę \(x\) i równocześnie pokazywać pole zgromadzone od \(a\) do \(x\) oraz wykres funkcji \(F(x)\).

## Zakres konieczny

Na wykładzie powinny pojawić się:

- problem akumulacji,
- podział przedziału i sumy Riemanna,
- całka oznaczona jako granica sum,
- interpretacja pola, przemieszczenia i gęstości,
- funkcja akumulacji,
- fundamentalne twierdzenie rachunku całkowego,
- funkcja pierwotna i stała całkowania,
- podstawowe całki bezpośrednie,
- jedno elementarne podstawienie,
- odróżnienie przemieszczenia od drogi.

Całkowanie przez części jest zależne od dostępnego czasu i może zostać przeniesione do ćwiczeń.

## Co można przenieść do ćwiczeń

- większą liczbę obliczeń prostych całek,
- techniczne podstawienia,
- całkowanie przez części,
- obliczanie pól między wykresami,
- proste zadania z prędkością i drogą,
- przybliżenia całek metodami numerycznymi,
- dodatkowe interpretacje fizyczne.

## Zasada doboru przykładów

Przykłady powinny mieć możliwie prostą funkcję i jednoznaczną interpretację. Stała lub liniowo zmienna prędkość dobrze pokazuje przejście od sumy do całki. Parabola na krótkim przedziale dobrze pokazuje prostokątne przybliżenia pola.

Technika rachunkowa ma służyć rozpoznaniu struktury. Nie należy wybierać całek wymagających wielu podstawień, rozkładów lub długich przekształceń.

## Co student powinien zapamiętać

> Całka jest granicą sum lokalnych wkładów, a fundamentalne twierdzenie pokazuje, że akumulacja i lokalne tempo zmiany są wzajemnie powiązane.

## Przejście do następnego wykładu

Mamy już język położenia, zmiany, obiektów, przekształceń, granic, lokalnego tempa zmiany i globalnej akumulacji. Pozostaje pytanie:

> Jak wszystkie te idee współpracują w jednym matematycznym modelu rzeczywistego zjawiska?
