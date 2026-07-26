# Wykład 01 — Cartesian Geometry and Coordinates

## Rola wykładu w całym kursie

Pierwszy wykład ma ustanowić sposób myślenia, który będzie obowiązywał dalej. Kurs nie ma być katalogiem wzorów ani serią luźno połączonych działów. Ma pokazywać, w jaki sposób matematyka tworzy język pozwalający przechodzić od intuicji i konstrukcji do obliczeń, modeli i przewidywań.

Punktem wyjścia jest geometria euklidesowa istniejąca jeszcze bez współrzędnych. Możemy mówić o punktach, prostych, okręgach, przecięciach, prostopadłości i długościach. Możemy konstruować obiekty i rozumować o ich relacjach. Brakuje jednak jednolitego języka liczbowego, który pozwalałby te konstrukcje zapisywać, porównywać i przekształcać algebraicznie.

## Główne pytanie

> Jak opisać świat geometryczny tak, aby można było wykonywać na nim obliczenia?

To pytanie jest ważniejsze niż sam układ współrzędnych. Układ współrzędnych nie jest celem wykładu. Jest odpowiedzią na potrzebę zakodowania geometrii za pomocą liczb.

## Centralna idea

> Geometria istnieje przed współrzędnymi. Współrzędne nie tworzą geometrii, lecz nadają jej język liczbowy.

Kartezjański krok polega na przypisaniu punktom par liczb. Dzięki temu relacje geometryczne mogą zostać zapisane jako równania i nierówności. To przejście od konstrukcji do kodowania jest jedną z najważniejszych idei całego kursu.

Student nie powinien zapamiętać jedynie, że punkt ma współrzędne \((x,y)\). Powinien zrozumieć, że od tej chwili obiekt geometryczny może mieć reprezentację algebraiczną, a problem geometryczny może zostać przekształcony w problem rachunkowy.

## Narracja wykładu

### 1. Geometria przed liczbami

Najpierw pokazujemy, że geometria nie zaczyna się od osi współrzędnych. Punkty, proste, okręgi i konstrukcje istnieją niezależnie od układu odniesienia. Ten etap jest potrzebny, aby student zobaczył, że współrzędne są wyborem języka, a nie własnością samych obiektów.

### 2. Konstrukcja układu współrzędnych

Wprowadzamy punkt wyróżniony jako początek, dwie osie, orientację i skalę. Każdy z tych elementów pełni konkretną funkcję:

- początek pozwala mierzyć położenie względem punktu odniesienia,
- osie wybierają kierunki pomiaru,
- orientacja odróżnia strony dodatnie od ujemnych,
- skala zamienia odległość geometryczną na liczbę.

Dopiero razem tworzą mechanizm pozwalający przypisać punktowi uporządkowaną parę liczb.

### 3. Punkt staje się parą liczb

Przejście od punktu do \((x,y)\) ma być pokazane jako kodowanie. Należy stale rozróżniać obiekt od jego opisu. Punkt nie jest parą liczb w sensie absolutnym; staje się parą liczb po wyborze układu współrzędnych.

To przygotowuje późniejsze rozumienie baz i zmiany współrzędnych. Już tutaj można zaznaczyć, że ten sam punkt może mieć różne współrzędne w różnych układach, chociaż sam punkt się nie zmienia.

### 4. Odległość jako pierwsza korzyść obliczeniowa

Wzór na odległość nie powinien pojawić się jako gotowa formuła. Powinien zostać wyprowadzony z twierdzenia Pitagorasa. Dzięki temu student widzi, jak konstrukcja geometryczna przechodzi w obliczenie algebraiczne.

To jest pierwszy konkretny przykład tego, co daje język współrzędnych: problem o długości odcinka zostaje sprowadzony do działań na liczbach.

### 5. Równania zaczynają generować punkty

Kolejny krok polega na odwróceniu perspektywy. Najpierw punkt otrzymał liczby. Teraz równanie zaczyna wyznaczać całe zbiory punktów.

Funkcja \(y=f(x)\) nie jest tylko przepisem rachunkowym. Każdej wartości \(x\) przyporządkowuje punkt \((x,f(x))\), a wszystkie takie punkty tworzą wykres.

W ten sposób algebra nie tylko opisuje istniejący rysunek. Algebra zaczyna generować geometrię.

### 6. Funkcje, relacje i krzywe parametryczne

Należy pokazać ograniczenie opisu \(y=f(x)\): nie każda krzywa daje się opisać jako pojedyncza wartość \(y\) dla każdego \(x\). Stąd naturalnie pojawiają się relacje oraz opis parametryczny.

Opis parametryczny powinien zostać przedstawiony jako bardzo ogólna metoda generowania punktów:

\[
x=x(t), \qquad y=y(t).
\]

Parametr nie musi od razu oznaczać czasu, ale może nim być. To ważny most do wektorów, ruchu i późniejszej fizyki.

### 7. Przecięcia i obszary

Skoro równania opisują zbiory punktów, to przecięcie obiektów oznacza znalezienie punktów spełniających jednocześnie kilka warunków. Układ równań nie jest zatem abstrakcyjną procedurą. Jest algebraicznym zapisem geometrycznego przecięcia.

Podobnie nierówności opisują obszary. To poszerza język z pojedynczych krzywych na całe fragmenty płaszczyzny.

### 8. Tożsamość trygonometryczna jako przykład działania metody

Wyprowadzenie wzoru na cosinus różnicy kątów ma pokazać, że po połączeniu geometrii ze współrzędnymi można uzyskiwać wyniki algebraiczne z argumentu geometrycznego. Nie chodzi tylko o sam wzór. Chodzi o demonstrację metody: reprezentujemy obiekty liczbowo, obliczamy ich relacje i otrzymujemy nową wiedzę.

## Minimalne środki dydaktyczne

Przykłady powinny być możliwie proste rachunkowo, ale nie mogą trywializować idei. Dobry przykład to taki, w którym student ma do wykonania niewiele działań, lecz wyraźnie widzi przejście:

- od konstrukcji do współrzędnych,
- od współrzędnych do wzoru,
- od równania do zbioru punktów,
- od kilku warunków do przecięcia lub obszaru.

Nie należy komplikować danych tylko po to, aby zadanie wyglądało poważniej. Trudność rachunkowa nie jest tutaj nośnikiem treści.

## Rola wizualizacji HTML

Wykład powinien wykorzystywać fakt, że publikowany jest jako strona internetowa. Interaktywne rysunki mogą pokazać, że wybór początku, orientacji lub skali zmienia współrzędne, ale nie zmienia samego obiektu. Można również dynamicznie generować wykresy funkcji i krzywe parametryczne oraz pokazywać przecięcia i obszary.

Wizualizacja ma nie zastępować argumentu matematycznego, lecz zmniejszać koszt poznawczy potrzebny do zobaczenia tego, co opisuje równanie.

## Co student powinien zapamiętać po latach

> Współrzędne są sposobem kodowania geometrii za pomocą liczb. Dzięki temu obiekty i relacje geometryczne można badać metodami algebraicznymi.

## Most do wykładu 02

Współrzędne opisują położenie punktu, czyli stan. Nie opisują jeszcze w sposób samodzielny zmiany między dwoma stanami.

Pytanie otwierające kolejny wykład brzmi:

> Jak opisać nie tylko to, gdzie znajduje się punkt, lecz także o ile i w jakim kierunku się zmienił?
