# Wykład 10 — Limits and Continuity of Functions

## Rola wykładu w całym kursie

Poprzedni wykład zbudował pojęcie granicy na ciągach. Student nauczył się opisywać zachowanie kolejnych etapów procesu i rozumieć zdanie „dla wszystkich dostatecznie dużych indeksów”.

Teraz tę samą ideę przenosimy na funkcje. Nie zaczynamy od nowego formalizmu oderwanego od ciągów. Wykorzystujemy ciągi jako narzędzie opisujące wszystkie możliwe sposoby zbliżania się argumentu do punktu.

## Główne pytanie

> Co znaczy, że wartości funkcji zbliżają się do jednej liczby, gdy argument zbliża się do danego punktu?

## Centralna idea

> Granica funkcji opisuje zachowanie funkcji w pobliżu punktu, a nie samą wartość funkcji w tym punkcie.

Druga główna idea brzmi:

> Funkcja ma granicę w punkcie wtedy, gdy każdy sposób zbliżania się argumentów do tego punktu prowadzi do tego samego zachowania wartości funkcji.

## Proponowana narracja wykładu

### 1. Wartość w punkcie a zachowanie w pobliżu

Najpierw trzeba rozdzielić dwa pytania:

- jaka jest wartość \(f(a)\),
- do czego zbliżają się wartości \(f(x)\), gdy \(x\) zbliża się do \(a\).

Można użyć elementarnego przykładu funkcji z usuwalną dziurą. Wartość w punkcie może nie istnieć albo może być określona inaczej, podczas gdy zachowanie funkcji wokół punktu pozostaje jednoznaczne.

Student powinien zobaczyć, że granica nie jest „podstawieniem wartości do wzoru”, lecz opisem otoczenia punktu.

### 2. Definicja Heinego

Ciągi z poprzedniego wykładu stają się teraz właściwym narzędziem.

Mówimy, że

\[
\lim_{x\to a}f(x)=L,
\]

gdy dla każdego ciągu \((x_n)\) spełniającego

\[
x_n\to a,\qquad x_n\neq a,
\]

zachodzi

\[
f(x_n)\to L.
\]

Definicja ma być interpretowana następująco:

- wybieramy dowolny sposób zbliżania się do \(a\),
- obserwujemy wartości funkcji na tym ciągu,
- każdy taki sposób musi prowadzić do tej samej liczby \(L\).

Ta definicja uzasadnia, dlaczego ciągi musiały otrzymać osobny wykład.

### 3. Jak wykazać brak granicy

Definicja Heinego daje prostą metodę wykazywania, że granica nie istnieje. Wystarczy znaleźć dwa ciągi

\[
x_n\to a,\qquad y_n\to a,
\]

dla których ciągi wartości \(f(x_n)\) i \(f(y_n)\) mają różne granice albo różne rodzaje zachowania.

Najprostszy przykład powinien pokazać granice jednostronne lub skok funkcji. Chodzi o ideę dwóch różnych dróg dojścia, nie o skomplikowany wzór.

### 4. Definicja \(\varepsilon\)-\(\delta\)

Po definicji ciągowej można przedstawić równoważny opis:

\[
\lim_{x\to a}f(x)=L
\]

oznacza, że dla każdego \(\varepsilon>0\) istnieje \(\delta>0\) takie, że

\[
0<|x-a|<\delta
\quad\Longrightarrow\quad
|f(x)-L|<\varepsilon.
\]

Należy pokazać analogię z definicją granicy ciągu:

- \(\varepsilon\) nadal określa wymaganą dokładność wartości,
- zamiast indeksu \(N\) pojawia się promień otoczenia \(\delta\),
- warunek ma obowiązywać dla wszystkich argumentów dostatecznie bliskich punktu.

Nie chodzi o mnożenie symboli. Chodzi o kontrolę wartości funkcji przez kontrolę odległości argumentu od punktu.

### 5. Granice jednostronne

Granice lewostronna i prawostronna pozwalają oddzielnie badać dwa sposoby zbliżania się na osi rzeczywistej.

Granica obustronna istnieje wtedy, gdy oba zachowania są zgodne. Jest to prosty i wizualny przykład zasady, że wszystkie sposoby zbliżania się muszą prowadzić do tego samego wyniku.

### 6. Granice w nieskończoności i asymptoty

Zachowanie funkcji dla \(x\to\infty\) jest ciągłym odpowiednikiem zachowania asymptotycznego ciągów.

Wprowadzamy elementarne przykłady:

- stabilizację do poziomej asymptoty,
- wzrost bez ograniczenia,
- prostą asymptotę pionową jako granicę nieskończoną w skończonym punkcie.

Nie należy budować obszernego katalogu asymptot i trudnych przekształceń. Istotne jest rozumienie, jaki rodzaj zachowania opisuje dana granica.

### 7. Podstawowe działania na granicach funkcji

Korzystamy z analogii do granic ciągów. Przy odpowiednich założeniach granica zachowuje sumę, różnicę, iloczyn i iloraz.

Przykłady powinny być elementarne. Techniczne techniki usuwania postaci nieoznaczonych można ograniczyć do jednego lub dwóch czytelnych przypadków, na przykład prostego skracania wspólnego czynnika.

### 8. Ciągłość

Funkcja jest ciągła w punkcie \(a\), gdy

\[
\lim_{x\to a}f(x)=f(a).
\]

Oznacza to zgodność:

- zachowania funkcji w pobliżu punktu,
- wartości przewidywanej przez granicę,
- rzeczywiście przypisanej wartości w punkcie.

Hasło o rysowaniu bez odrywania ołówka może być ilustracją, ale nie definicją. Ważniejsza interpretacja brzmi:

> Drobne zmiany argumentu powodują kontrolowane, drobne zmiany wartości.

### 9. Po co potrzebna jest ciągłość

Warto pokazać jedno proste twierdzenie egzystencjalne, na przykład ideę twierdzenia o wartości pośredniej. Jeśli funkcja ciągła przyjmuje wartości o przeciwnych znakach na końcach przedziału, to gdzieś pomiędzy musi przyjąć wartość zero.

Nie jest konieczny techniczny dowód. Ważne jest pokazanie, że ciągłość pozwala wnioskować o istnieniu rozwiązania bez jego dokładnego obliczania.

## Rola wizualizacji HTML

Wizualizacja powinna pozwalać przesuwać punkt \(x\) w stronę \(a\) i obserwować wartości \(f(x)\). Dla definicji Heinego można pokazywać różne ciągi punktów zbliżających się do \(a\), zaznaczając odpowiadające im wartości funkcji.

Dla definicji \(\varepsilon\)-\(\delta\) dwa suwaki mogą sterować pasem wartości

\[
(L-\varepsilon,L+\varepsilon)
\]

oraz otoczeniem

\[
(a-\delta,a+\delta).
\]

Student powinien widzieć, że znalezienie odpowiedniego \(\delta\) oznacza zamknięcie całego fragmentu wykresu w wymaganym poziomym pasie.

## Zakres konieczny

Na wykładzie powinny pojawić się:

- różnica między wartością a granicą,
- definicja Heinego,
- użycie dwóch ciągów do wykazywania braku granicy,
- definicja \(\varepsilon\)-\(\delta\),
- granice jednostronne,
- proste granice w nieskończoności i granice nieskończone,
- podstawowe działania na granicach,
- ciągłość,
- elementarna idea twierdzenia o wartości pośredniej.

Nie jest potrzebny rozbudowany katalog postaci nieoznaczonych, trudne granice trygonometryczne ani duża liczba technicznych dowodów.

## Co można przenieść do ćwiczeń

- większą liczbę prostych obliczeń granic,
- dowody z definicji \(\varepsilon\)-\(\delta\) dla funkcji liniowych i bardzo prostych funkcji,
- przykłady użycia definicji Heinego,
- klasyfikację elementarnych nieciągłości,
- obliczanie prostych asymptot,
- techniczne ćwiczenia z działaniami na granicach.

## Zasada doboru przykładów

Przykłady mają izolować jedną trudność pojęciową naraz. Funkcja z dziurą pokazuje różnicę między wartością a granicą. Funkcja skokowa pokazuje niezgodność granic jednostronnych. Prosta funkcja wymierna pokazuje zachowanie w nieskończoności.

Nie należy łączyć nowej definicji z długimi przekształceniami algebraicznymi. Student ma mieć możliwość skupienia uwagi na sposobie zbliżania się i zachowaniu wartości.

## Co student powinien zapamiętać

> Granica funkcji opisuje jej zachowanie w pobliżu punktu, a ciągi pozwalają badać wszystkie możliwe sposoby zbliżania się do tego punktu.

## Przejście do następnego wykładu

Granica pozwala badać iloraz zmian dla coraz mniejszych przyrostów argumentu. Możemy więc zapytać:

> Czy średnie tempo zmiany funkcji stabilizuje się do jednej wartości, gdy badany przedział kurczy się do punktu?
