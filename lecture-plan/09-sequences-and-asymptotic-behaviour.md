# Wykład 09 — Sequences and Asymptotic Behaviour

## Rola wykładu w całym kursie

Pierwsze osiem wykładów opisywało obiekty, ich reprezentacje oraz działania wykonywane na całej przestrzeni. Trzeci blok kursu ma przejść do procesów, których nie rozumiemy przez pojedynczy skończony krok, lecz przez zachowanie kolejnych przybliżeń.

Ciągi są pierwszym i najprostszym środowiskiem, w którym można nauczyć się myślenia granicznego. Nie powinny zostać potraktowane jako krótki dodatek poprzedzający granice funkcji. Stanowią samodzielny etap pojęciowy: uczą odróżniać zachowanie początkowych wyrazów od zachowania asymptotycznego oraz nadają ścisły sens zdaniu „dla dostatecznie dużych indeksów”.

## Główne pytanie

> Jak matematycznie opisać proces, który wykonuje się krok po kroku, i rozstrzygnąć, co dzieje się z nim po bardzo wielu krokach?

## Centralna idea

> W badaniu ciągu nie interesują nas wyłącznie jego pojedyncze wyrazy, lecz trwałe zachowanie ujawniające się dla dostatecznie dużych indeksów.

Druga podstawowa idea brzmi:

> Granica ciągu pozwala wyznaczyć dokładny wynik procesu złożonego z coraz lepszych przybliżeń, nawet jeśli żaden pojedynczy etap nie daje jeszcze wyniku ostatecznego.

## Proponowana narracja wykładu

### 1. Ciąg jako proces dyskretny

Ciąg należy najpierw pokazać jako uporządkowany proces:

\[
a_1,a_2,a_3,\ldots
\]

Indeks oznacza kolejny etap. Przykładami mogą być:

- kolejne przybliżenia jednej liczby,
- pola wielokątów coraz lepiej przybliżających koło,
- wyniki prostej procedury iteracyjnej,
- sumy częściowe prostego szeregu geometrycznego.

Nie zaczynamy od formalnej klasyfikacji wszystkich sposobów zadawania ciągów. Najpierw student ma zobaczyć, że ciąg jest matematycznym zapisem procesu rozwijającego się krok po kroku.

### 2. Pojedyncze wyrazy a zachowanie asymptotyczne

Początkowe wyrazy mogą wyglądać nieregularnie i nie przesądzać o dalszym zachowaniu. Pytanie „co dzieje się z ciągiem?” oznacza przede wszystkim pytanie o to, co dzieje się dla dużych wartości \(n\).

Należy zestawić kilka jakościowo różnych przykładów:

\[
\frac1n\to0,
\]

\[
\frac{n}{n+1}\to1,
\]

\[
(-1)^n
\]

oscyluje i nie ma granicy, natomiast

\[
a_n=n
\]

rośnie bez ograniczenia.

Student powinien zobaczyć, że zbieżność, oscylacja i nieograniczony wzrost są różnymi rodzajami zachowania asymptotycznego.

### 3. Ograniczoność i monotoniczność

Zanim pojawi się formalna definicja granicy, wprowadzamy dwa proste sposoby kontrolowania ciągu:

- ograniczoność mówi, że wyrazy nie uciekają poza ustalony zakres,
- monotoniczność mówi, że zmieniają się w jednym kierunku.

Twierdzenie o ciągu monotonicznym i ograniczonym może być pierwszym przykładem twierdzenia gwarantującego istnienie granicy bez konieczności odgadywania jej z gotowego wzoru:

> Każdy ciąg monotoniczny i ograniczony jest zbieżny.

Nie jest potrzebny rozbudowany dowód techniczny. Istotna jest struktura argumentu: kontrolujemy kierunek ruchu i jednocześnie uniemożliwiamy ucieczkę.

### 4. Definicja granicy ciągu

Zdanie

\[
a_n\to L
\]

ma oznaczać:

> Dla każdej wymaganej dokładności wszystkie dostatecznie późne wyrazy ciągu znajdują się już w tej dokładności od liczby \(L\).

Formalnie: dla każdego \(\varepsilon>0\) istnieje takie \(N\), że dla każdego \(n\geq N\)

\[
|a_n-L|<\varepsilon.
\]

Należy bardzo wyraźnie omówić kolejność kwantyfikatorów:

1. najpierw wybierana jest dokładność \(\varepsilon\),
2. następnie znajdujemy moment \(N\), od którego dokładność jest zachowana,
3. warunek musi obowiązywać dla wszystkich późniejszych wyrazów, a nie tylko dla wybranych.

Definicja nie ma zostać podana jako rytuał symboliczny. Powinna formalizować wcześniej zbudowaną intuicję stabilizacji.

### 5. Podstawowe działania na granicach

Po ustaleniu znaczenia granicy można pokazać, że przy odpowiednich założeniach granice zachowują podstawowe działania algebraiczne:

- sumę,
- różnicę,
- iloczyn,
- iloraz, gdy granica mianownika jest niezerowa.

Wystarczą przykłady o bardzo prostych wyrazach. Celem nie jest techniczna biegłość w skomplikowanych przekształceniach, lecz pokazanie, że granice tworzą rachunek pozwalający analizować procesy złożone z prostszych procesów.

### 6. Ciągi rozbieżne i granice nieskończone

Brak granicy skończonej może wynikać z różnych przyczyn:

- oscylacji,
- wzrostu bez ograniczenia,
- niestabilnego zachowania.

Granica nieskończona nie oznacza zbieżności do liczby. Jest opisem kontrolowanego wzrostu. Należy odróżnić ją od braku jakiegokolwiek uporządkowanego zachowania.

### 7. Ciągi jako narzędzie badania innych obiektów

Na zakończenie trzeba przygotować rolę ciągów w następnym wykładzie. Ciąg może opisywać dowolny wybrany sposób zbliżania się argumentów do punktu:

\[
x_n\to a.
\]

Badanie wartości

\[
f(x_n)
\]

pozwoli przenieść pojęcie granicy z procesów dyskretnych na funkcje. To nie jest poboczne zastosowanie ciągów, lecz główny most do definicji Heinego.

## Rola wizualizacji HTML

Wizualizacje powinny pokazywać jednocześnie wykres punktowy ciągu i przedział

\[
(L-\varepsilon,L+\varepsilon).
\]

Suwak sterujący wartością \(\varepsilon\) może pokazywać, jak zmienia się wymagany indeks \(N\). Student powinien widzieć, że po przekroczeniu \(N\) wszystkie kolejne wyrazy pozostają w zadanym otoczeniu.

Warto również zestawić na jednym ekranie ciąg zbieżny, oscylujący i rosnący bez ograniczenia, aby różnica między tymi zachowaniami była widoczna, zanim zostanie zapisana formalnie.

## Zakres konieczny

Na wykładzie powinny pojawić się:

- ciąg jako proces dyskretny,
- zachowanie asymptotyczne,
- ograniczoność i monotoniczność,
- zbieżność i rozbieżność,
- definicja \(\varepsilon\)-\(N\),
- granice skończone i nieskończone,
- podstawowe działania na granicach,
- twierdzenie o ciągu monotonicznym i ograniczonym,
- przygotowanie do ciągowego badania granic funkcji.

Nie jest potrzebny rozbudowany katalog trudnych granic, zaawansowane ciągi rekurencyjne ani długie dowody techniczne.

## Co można przenieść do ćwiczeń

- większą liczbę elementarnych obliczeń granic,
- proste dowody z definicji \(\varepsilon\)-\(N\),
- badanie monotoniczności i ograniczoności konkretnych ciągów,
- przykłady ciągów rekurencyjnych,
- techniczne zastosowania twierdzeń o działaniach na granicach.

## Zasada doboru przykładów

Przykłady mają być rachunkowo elementarne. Liczby i wzory powinny być tak dobrane, aby student mógł skupić uwagę na zachowaniu ciągu, a nie na przekształceniach algebraicznych.

Prostota rachunków nie oznacza uproszczenia idei. Student ma rzeczywiście zobaczyć różnicę między obserwacją kilku wyrazów a matematyczną kontrolą wszystkich dostatecznie późnych etapów.

## Co student powinien zapamiętać

> Granica ciągu opisuje trwałe zachowanie kolejnych etapów procesu i nadaje ścisły sens stwierdzeniu, że od pewnego momentu przybliżenia są dowolnie dokładne.

## Przejście do następnego wykładu

Ciągi pozwalają opisać różne sposoby zbliżania się do jednego punktu. Pojawia się pytanie:

> Czy granicę funkcji można rozpoznać, badając wartości funkcji dla każdego ciągu argumentów zbliżającego się do danego punktu?
