# Wykład 03 — Lines and Planes

## Rola wykładu w całym kursie

Pierwszy wykład dał liczbowy opis punktów. Drugi dał algebraiczny opis zmian i kierunków. Trzeci wykład łączy oba języki i pokazuje, jak z punktów oraz kierunków budować całe obiekty geometryczne.

To nie powinien być wykład o katalogu równań prostej i płaszczyzny. Jego celem jest zmiana sposobu patrzenia na obiekt geometryczny.

## Główne pytanie

> Jak opisać cały zbiór punktów, jeżeli znamy punkt początkowy i kierunki, w których wolno się poruszać?

## Centralna idea

> Obiekt geometryczny można rozumieć przez sposób jego generowania.

Prosta nie jest przede wszystkim kreską na rysunku. Jest zbiorem wszystkich punktów dostępnych z jednego punktu przy użyciu jednego kierunku.

Płaszczyzna jest zbiorem wszystkich punktów dostępnych z jednego punktu przy użyciu dwóch niezależnych kierunków.

Równania parametryczne, kartezjańskie i normalne są różnymi opisami tej samej konstrukcji. Nie są osobnymi obiektami ani niepowiązanymi wzorami.

## Narracja wykładu

### 1. Prosta jako punkt i dozwolony kierunek

Zaczynamy od punktu \(P_0\) i niezerowego wektora kierunkowego \(v\). Wszystkie punkty prostej mają postać

\[
P(t)=P_0+t v.
\]

To równanie powinno zostać odczytane jako instrukcja generowania punktów. Parametr \(t\) mówi, jak daleko i w którą stronę przesuwamy się od punktu początkowego wzdłuż kierunku \(v\).

Współrzędne są konsekwencją tej konstrukcji:

\[
x=x_0+t v_1,\qquad y=y_0+t v_2.
\]

### 2. Różne dane wyznaczające tę samą prostą

Należy pokazać, że ten sam obiekt może być opisany przez różne punkty początkowe i różne wielokrotności tego samego kierunku. To wzmacnia wcześniejsze rozróżnienie między obiektem a jego reprezentacją.

Istotne pytanie brzmi nie „czy wzory wyglądają tak samo?”, lecz „czy generują ten sam zbiór punktów?”.

### 3. Od opisu parametrycznego do kartezjańskiego

Postacie \(y=mx+b\), \(Ax+By=C\) i inne znane równania powinny wynikać z konstrukcji parametrycznej, a nie pojawiać się jako niezależny katalog.

Nachylenie ma otrzymać jasną interpretację geometryczną:

\[
m=\tan\alpha,
\]

gdzie \(\alpha\) jest kątem nachylenia prostej do dodatniego kierunku osi \(x\), o ile opis ten ma sens.

Trójkąt ilustrujący zmianę współrzędnych powinien być zaczepiony na badanej prostej, najlepiej w punkcie \(P_0\), aby było wyraźne, że mierzymy zmianę wzdłuż tej prostej, a nie w przypadkowym miejscu układu.

### 4. Przecięcie jako wspólny punkt

Przecięcie dwóch prostych należy najpierw zdefiniować geometrycznie: jest to punkt należący do obu zbiorów.

Dopiero potem przechodzimy do obliczeń. Szukamy takich wartości parametrów lub takich współrzędnych, które spełniają oba opisy jednocześnie.

Metoda powinna być pokazana książkowo i etapami:

1. zapisujemy oba obiekty,
2. narzucamy warunek, że opisują ten sam punkt,
3. rozwiązujemy powstałe równania,
4. sprawdzamy, jaki punkt otrzymaliśmy i czy rzeczywiście należy do obu prostych.

### 5. Równoległość, zgodność i brak przecięcia

Wektory kierunkowe pozwalają rozpoznać równoległość. Jeżeli są proporcjonalne, proste mają ten sam kierunek. Następnie trzeba odróżnić dwie sytuacje:

- proste są różne i nie mają punktów wspólnych,
- opisy dotyczą tej samej prostej.

Klasyfikacja ma wynikać z geometrii i testów, nie z pamięciowego schematu.

### 6. Kierunek prostopadły i opis normalny

W płaszczyźnie prostą można opisać również przez wektor normalny \(n\), prostopadły do wszystkich jej kierunków. Warunek

\[
n\cdot(P-P_0)=0
\]

mówi, że przesunięcie od punktu \(P_0\) do dowolnego punktu \(P\) na prostej nie ma składowej w kierunku normalnym.

Równanie \(Ax+By=C\) powinno być interpretowane właśnie w ten sposób. Współczynniki \((A,B)\) nie są przypadkowymi liczbami; tworzą wektor normalny.

### 7. Odległość punktu od prostej

Odległość należy rozumieć jako długość najkrótszego przesunięcia z punktu do prostej. Najkrótsze przesunięcie jest prostopadłe do prostej, więc problem naturalnie prowadzi do rzutu na kierunek normalny.

Wzór ma być konsekwencją geometrii wektorowej, a nie formułą podaną bez uzasadnienia.

### 8. Płaszczyzna jako dwa niezależne kierunki

Przechodzimy do przestrzeni przez dokładne rozszerzenie wcześniejszego pomysłu. Punkt \(P_0\) oraz dwa niezależne wektory \(u,v\) generują płaszczyznę:

\[
P(s,t)=P_0+s u+t v.
\]

Nie wprowadzamy płaszczyzny jako nowego, niepowiązanego obiektu. Jest ona naturalnym skutkiem idei kombinacji liniowej z wykładu drugiego.

Niezależność kierunków jest konieczna: jeśli \(u\) i \(v\) są równoległe, nie generują płaszczyzny, lecz tylko prostą.

### 9. Wektor normalny płaszczyzny

Płaszczyznę można opisać również przez wektor prostopadły do obu kierunków generujących. Iloczyn wektorowy może pojawić się jako sposób otrzymania takiego wektora w przestrzeni trójwymiarowej.

Nie należy nadmiernie rozbudowywać wyprowadzenia iloczynu wektorowego. Wystarczy pokazać jego rolę, sprawdzić najważniejsze własności i zastosować go do konstrukcji normalnej.

Warunek normalny ma postać

\[
n\cdot(P-P_0)=0.
\]

Jest to dokładnie ta sama idea co dla prostej w płaszczyźnie.

### 10. Płaszczyzna przez trzy punkty

Trzy niewspółliniowe punkty wyznaczają dwa niezależne kierunki. Wybieramy jeden punkt jako początek, budujemy dwa wektory różnicowe, a następnie generujemy płaszczyznę albo wyznaczamy wektor normalny.

Ta procedura pokazuje, jak dane geometryczne są przekształcane w konstrukcję algebraiczną.

### 11. Wzajemne położenie płaszczyzn i prostych

Relacje między obiektami powinny być analizowane przez ich kierunki i wektory normalne. Równoległość, prostopadłość, przecięcie i zgodność wynikają z warunków na te wektory oraz z istnienia wspólnych punktów.

Nie jest potrzebny rozbudowany katalog przypadków bez idei przewodniej. Każdy przypadek ma zostać wyprowadzony z pytania:

> Jak porównują się dozwolone kierunki tych obiektów i czy istnieje punkt spełniający oba opisy?

## Minimalne środki dydaktyczne

Rachunki powinny być krótkie, a konfiguracje czytelne. Każdy przykład ma odsłaniać konstrukcję:

- punkt plus jeden kierunek daje prostą,
- punkt plus dwa niezależne kierunki daje płaszczyznę,
- normalna daje równoważny opis,
- przecięcie oznacza wspólne spełnienie warunków,
- odległość wynika z najkrótszego, prostopadłego przesunięcia.

## Rola wizualizacji HTML

Interaktywna wizualizacja może pokazywać punkt początkowy, zmienny parametr i generowany punkt poruszający się po prostej. Dla płaszczyzny dwa suwaki mogą sterować dwoma kierunkami generującymi.

Warto umożliwić przełączanie między opisem parametrycznym i normalnym przy zachowaniu tego samego obiektu na rysunku. Student powinien zobaczyć, że zmienia się język, a nie geometria.

Animacje przecięć powinny wizualizować poszukiwanie wspólnego punktu, a rzut prostopadły powinien ożywiać pojęcie odległości.

## Co student powinien zapamiętać po latach

> Prosta i płaszczyzna nie są przede wszystkim rysunkami ani wzorami. Są zbiorami punktów generowanymi przez dozwolone kierunki, a różne równania są różnymi opisami tych samych obiektów.

## Most do wykładu 04

Potrafimy już opisywać punkty, zmiany, proste i płaszczyzny. Są to jednak obiekty liniowe, generowane przez kierunki w najprostszy możliwy sposób.

Naturalne pytanie brzmi:

> Jak opisywać krzywe, których nie można otrzymać przez ruch wzdłuż jednego stałego kierunku, i co takie opisy pozwalają powiedzieć o rzeczywistym świecie?
