# Plan wykładu

## Cel dokumentu

Ten plan nie jest jedynie spisem tematów. Jest dokumentem projektowym całego kursu: zapisuje główne idee matematyczne, pytania motywujące, zależności między wykładami, ograniczenia zakresu oraz rolę przykładów i wizualizacji.

Kurs ma być opowieścią o tym, jak matematyka buduje język do opisu obiektów, zmian, relacji i modeli. Definicje, twierdzenia, wzory i przykłady powinny pojawiać się dlatego, że są potrzebne tej narracji, a nie dlatego, że należą do tradycyjnego katalogu tematów.

Przyjmujemy następujące zasady projektowe:

- używamy możliwie prostych przykładów rachunkowych, ale nie trywializujemy idei matematycznych;
- trudność obliczeniowa nie jest celem samym w sobie;
- każde nowe pojęcie powinno odpowiadać na wcześniej postawione pytanie lub ograniczenie dotychczasowego aparatu;
- należy wyraźnie odróżniać obiekt matematyczny od jego reprezentacji;
- format HTML wykorzystujemy do dynamicznych wizualizacji, animacji parametrów i pokazywania, jak równania generują oraz przekształcają obiekty;
- wizualizacja wspiera argument matematyczny, ale go nie zastępuje;
- każdy wykład powinien pozostawiać pytanie prowadzące naturalnie do następnego.

## Struktura plików

Każdy wykład ma osobny plik w katalogu `lecture-plan/`. Dzięki temu jego koncepcję można rozwijać i komentować niezależnie bez nadpisywania całego planu.

## Wykłady

1. [Wykład 01 — Cartesian Geometry and Coordinates](lecture-plan/01-cartesian-geometry-and-coordinates.md)
2. [Wykład 02 — Vectors, Bases, and Coordinate Systems](lecture-plan/02-vectors-bases-and-coordinate-systems.md)
3. [Wykład 03 — Lines and Planes](lecture-plan/03-lines-and-planes.md)
4. [Wykład 04 — Conic Sections and Mathematical Models](lecture-plan/04-conic-sections-and-mathematical-models.md)
5. [Wykład 05 — Matrices as Transformations](lecture-plan/05-matrices-as-transformations.md)
6. [Wykład 06 — Composition of Transformations](lecture-plan/06-composition-of-transformations.md)
7. [Wykład 07 — Determinants and Invertibility](lecture-plan/07-determinants-and-invertibility.md)
8. [Wykład 08 — Linear Systems as Inverse Problems](lecture-plan/08-linear-systems-as-inverse-problems.md)
9. Wykład 09 — Functions and Their Graphs
10. Wykład 10 — Limits and Continuity
11. Wykład 11 — Derivative and Local Change
12. Wykład 12 — Integral and Accumulation

## Narracja pierwszego bloku

Pierwsze cztery wykłady tworzą zamknięty blok pokazujący stopniowe rozszerzanie języka matematycznego:

1. liczby zaczynają opisywać punkty i relacje geometryczne;
2. wektory zaczynają opisywać zmiany;
3. punkty i kierunki pozwalają generować proste i płaszczyzny;
4. równania i parametry opisują całe rodziny krzywych, które mogą być używane jako modele rzeczywistych trajektorii.

Blok rozpoczyna się od geometrii bez współrzędnych, a kończy pokazaniem, że algebraiczny opis geometrii umożliwia ilościowy opis świata fizycznego.

## Narracja drugiego bloku

Wykłady 5–8 przechodzą od opisu obiektów do opisu operacji wykonywanych na obiektach. Nie tworzą pełnego kursu algebry liniowej. Mają wydobyć jej pojęciową esencję w czterech wykładach i pozostawić techniczną biegłość rachunkową przede wszystkim ćwiczeniom.

Blok odpowiada kolejno na cztery pytania:

1. Jak opisać jedną regułę działającą na całej przestrzeni? — przez przekształcenie liniowe i jego macierz.
2. Jak opisać kilka działań wykonywanych kolejno? — przez składanie przekształceń i mnożenie macierzy.
3. Kiedy działanie można cofnąć? — przez pojęcia utraty informacji, wyznacznika i macierzy odwrotnej.
4. Jak odzyskać dane wejściowe ze znanego wyniku? — przez układ liniowy zapisany jako problem odwrotny \(Ax=b\).

Macierze nie powinny pojawiać się jako tablice przeznaczone do wykonywania algorytmów. Najpierw pojawia się działanie geometryczne, następnie potrzeba jego zwartego zapisu, a dopiero potem macierz.

Mnożenie macierzy wynika ze składania działań. Wyznacznik wynika z pytania o odwracalność i utratę wymiaru. Macierz odwrotna opisuje cofnięcie działania. Układ równań liniowych jest pytaniem o przyczynę na podstawie znanego skutku.

Ze względu na ograniczenie czasu główna narracja pozostaje w wymiarze dwa i opiera się na niewielkiej liczbie dobrze dobranych przykładów. Rozbudowane algorytmy, większe macierze, metoda Gaussa–Jordana, reguła Cramera oraz większa liczba technicznych obliczeń mogą zostać przeniesione do ćwiczeń.

Blok kończy się pytaniem prowadzącym do rachunku różniczkowego:

> Jak opisywać zjawiska nieliniowe, które w dostatecznie małej skali można przybliżyć przekształceniem liniowym?
