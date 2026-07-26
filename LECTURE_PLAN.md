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
- każdy wykład powinien pozostawiać pytanie prowadzące naturalnie do następnego;
- techniki rachunkowe dobieramy tak, aby ujawniały ideę, a nie przeciążały studentów długimi przekształceniami;
- większą część biegłości algorytmicznej można rozwijać na ćwiczeniach, pozostawiając wykładowi strukturę pojęciową i najprostsze reprezentatywne przykłady.

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
9. [Wykład 09 — Sequences and Asymptotic Behaviour](lecture-plan/09-sequences-and-asymptotic-behaviour.md)
10. [Wykład 10 — Limits and Continuity of Functions](lecture-plan/10-limits-and-continuity-of-functions.md)
11. [Wykład 11 — Derivatives and Qualitative Analysis](lecture-plan/11-derivatives-and-qualitative-analysis.md)
12. [Wykład 12 — Integration and Accumulation](lecture-plan/12-integration-and-accumulation.md)
13. [Wykład 13 — Synthesis and Applications](lecture-plan/13-synthesis-and-applications.md) — wykład końcowy zależny od dostępnego czasu

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

Blok kończy się pytaniem prowadzącym do analizy:

> Jak opisywać procesy, zachowanie asymptotyczne i zjawiska nieliniowe, których nie można uchwycić jednym skończonym działaniem liniowym?

## Narracja trzeciego bloku

Wykłady 9–12 tworzą podstawowy blok analizy matematycznej. Jego kolejności nie można skracać przez pominięcie ciągów. Granica ciągu jest pierwszym ścisłym językiem zachowania asymptotycznego, a następnie staje się narzędziem do definiowania i badania granic funkcji metodą Heinego.

Blok odpowiada kolejno na cztery pytania:

1. Jak opisać zachowanie procesu po bardzo wielu krokach? — przez ciągi, ograniczoność, monotoniczność i granicę ciągu.
2. Jak opisać zachowanie funkcji przy zbliżaniu się argumentu do punktu? — przez definicję Heinego, definicję \(\varepsilon\)-\(\delta\) i ciągłość.
3. Jak opisać zmianę chwilową oraz wykorzystać ją do badania przebiegu funkcji? — przez pochodną, lokalne przybliżenie liniowe i jakościową analizę funkcji.
4. Jak zsumować lokalne wkłady w efekt globalny? — przez sumy Riemanna, całkę i fundamentalne twierdzenie rachunku całkowego.

Narracja ma zachować pełną zależność pojęciową:

\[
\text{ciągi}
\longrightarrow
\text{granice ciągów}
\longrightarrow
\text{granice funkcji}
\longrightarrow
\text{pochodna}
\longrightarrow
\text{całka}.
\]

Wykład o ciągach nie jest krótkim wstępem technicznym. Uczy rozumienia zdań „dla dostatecznie dużych indeksów”, „dowolnie blisko” i „od pewnego momentu”, bez których późniejsze definicje granicy funkcji byłyby nieuzasadnionym skokiem pojęciowym.

Granica funkcji jest następnie badana ciągowo: każdy ciąg argumentów zbliżający się do punktu musi prowadzić do tego samego zachowania wartości funkcji. Dopiero po zbudowaniu tego aparatu można odpowiedzialnie zdefiniować pochodną jako granicę ilorazów zmian.

Pochodna wraca do idei algebry liniowej: globalnie nieliniowa funkcja może być lokalnie przybliżana działaniem liniowym. Całka wykonuje ruch odwrotny, składając lokalne wkłady w jedną wielkość globalną.

Ze względu na poziom studentów przykłady muszą być maksymalnie elementarne rachunkowo. Nowa idea nie powinna pojawiać się jednocześnie z trudnym przekształceniem algebraicznym. Wykład pokazuje jedną reprezentatywną metodę na prostym przykładzie, a większa liczba obliczeń i wariantów przechodzi na ćwiczenia.

W wykładzie o całce należy pokazać podstawowe funkcje pierwotne oraz przynajmniej jedno bardzo proste podstawienie jako odwrócenie reguły łańcuchowej. Całkowanie przez części jest zależne od dostępnego czasu i może pozostać materiałem ćwiczeniowym.

## Wykład końcowy: synteza i zastosowania

Wykład 13 jest osobnym wykładem zastosowaniowym i syntetycznym. Nie powinien zostać wciśnięty do wykładu o całce, ponieważ całka wymaga własnego czasu na zbudowanie idei akumulacji oraz pokazanie elementarnych metod rachunkowych.

Wykład końcowy nie wprowadza nowego dużego działu. Jego zadaniem jest pokazanie na jednym prostym modelu, jak współpracują:

- geometria i współrzędne,
- wektory i krzywe parametryczne,
- macierze oraz zmiany układu,
- układy równań jako problemy odwrotne,
- granice i pochodne jako opis zmiany chwilowej,
- całki jako opis akumulacji.

Najbardziej naturalnym przykładem jest ruch po prostej trajektorii, najlepiej po okręgu lub elipsie, co pozwala wrócić do modelowania stożkowych i fizyki z pierwszego bloku. Rachunki mają być elementarne; głównym celem jest odsłonięcie architektury modelu, a nie rozwiązanie zaawansowanego problemu mechaniki.

Jeżeli nie wystarczy czasu, wykład 13 może zostać pominięty bez usuwania podstawowych treści kursu. Powinien jednak pozostać w planie jako właściwa kropka nad i: pokazanie, że wszystkie wcześniejsze pojęcia były kolejnymi warstwami jednego języka matematycznego.

## Narracja całego kursu

Pełny kurs prowadzi przez trzy zasadnicze etapy:

1. **Opis obiektów:** współrzędne, wektory, proste, płaszczyzny, krzywe i modele geometryczne.
2. **Opis działań:** macierze, składanie przekształceń, odwracalność i problemy odwrotne.
3. **Opis zmiany ciągłej:** ciągi, granice funkcji, pochodne i całki.

Wykład syntetyczny pokazuje współpracę tych warstw w jednym modelu.

Najkrótszy zapis narracji całego kursu ma postać:

\[
\text{obiekt}
\longrightarrow
\text{działanie}
\longrightarrow
\text{proces}
\longrightarrow
\text{zmiana lokalna}
\longrightarrow
\text{efekt globalny}
\longrightarrow
\text{model i przewidywanie}.
\]
