# Wykład 04 — Conic Sections and Mathematical Models

## Status tej części planu

Ten wykład wymaga przebudowy względem obecnej wersji kursu. Dotychczasowa treść zawiera potrzebne składniki, ale ich kolejność i rola nie tworzą jeszcze jednej konsekwentnej opowieści.

Nie chcemy budować wykładu przede wszystkim wokół klasycznej konstrukcji stożkowych przez ognisko i kierownicę ani wokół katalogu osobnych definicji okręgu, elipsy, paraboli i hiperboli. Konstrukcje geometryczne mogą się pojawić, lecz nie powinny zdominować narracji.

Główny ciężar ma zostać przeniesiony na algebraiczny i parametryczny opis krzywych, ich dynamiczną wizualizację oraz pierwszą wyraźną demonstrację tego, że zbudowany wcześniej aparat matematyczny pozwala opisywać rzeczywisty świat.

## Rola wykładu w całym kursie

Pierwsze trzy wykłady budowały język:

- współrzędne pozwoliły kodować punkty,
- wektory pozwoliły kodować zmiany,
- równania pozwoliły opisywać proste i płaszczyzny jako całe zbiory punktów.

Czwarty wykład powinien odpowiedzieć na pytanie:

> Po co budowaliśmy ten język i co możemy dzięki niemu zobaczyć poza prostymi przypadkami liniowymi?

To ma być pierwszy wyraźny wykład o sile modelu matematycznego. Stożkowe są tutaj nie tylko rodziną krzywych do sklasyfikowania, ale przykładem tego, że prosty aparat algebraiczny potrafi opisać ważne zjawiska geometryczne i fizyczne.

## Główne pytanie

> Jak równania i parametry opisują całe rodziny krzywych oraz dlaczego właśnie te krzywe pojawiają się w ruchu ciał niebieskich?

## Centralna idea

> Równanie nie musi opisywać jednego nieruchomego obiektu. Może opisywać rodzinę obiektów, a zmiana parametrów ujawnia strukturę całej rodziny.

Druga, równie ważna idea brzmi:

> Matematyka nie tylko zapisuje znane kształty. Pozwala budować modele, które opisują i przewidują zachowanie świata fizycznego.

Stożkowe mają więc zamknąć pierwszy blok kursu przez pokazanie, że kartezjańskie połączenie geometrii i algebry nie jest wyłącznie techniką obliczeniową. Daje język zdolny opisać orbity planet, trajektorie komet oraz tory ciał poruszających się w polu grawitacyjnym.

## Proponowana narracja wykładu

### 1. Od obiektów liniowych do krzywych

Zaczynamy od ograniczenia dotychczasowego aparatu. Prosta powstaje przez ruch w jednym stałym kierunku. Tym sposobem nie opiszemy trajektorii, która zmienia kierunek.

Potrzebujemy bardziej ogólnego sposobu generowania punktów. Naturalnym językiem jest opis parametryczny:

\[
x=x(t),\qquad y=y(t).
\]

Parametr może być tylko narzędziem porządkującym punkty, ale w zastosowaniach fizycznych może również oznaczać czas.

### 2. Równania algebraiczne ożywają

Należy wykorzystać przewagę formatu HTML. Krzywa nie powinna być pokazywana wyłącznie jako gotowy rysunek pod wzorem. Powinna być generowana i przekształcana na oczach studenta.

Suwaki mogą zmieniać współczynniki i parametry. Student powinien obserwować:

- przesunięcie środka,
- rozciąganie i ściskanie,
- zmianę orientacji,
- przejścia między różnymi kształtami,
- ruch punktu po krzywej zgodnie z parametrem.

Wizualizacja ma pokazać, że równanie jest mechanizmem generującym geometrię, a parametr steruje tym mechanizmem.

### 3. Jedna rodzina zamiast katalogu figur

Nie chcemy przedstawiać okręgu, elipsy, paraboli i hiperboli jako czterech niepowiązanych tematów. Należy możliwie szybko dojść do wspólnej struktury.

Najpierw można rozpoznać klasyczne równania kartezjańskie i ich podstawowe parametry, ale tylko w zakresie potrzebnym do odczytywania kształtu i do zbudowania wspólnej rodziny.

Istotne jest pytanie:

> Które elementy równania odpowiadają za położenie, skalę, orientację i typ krzywej?

### 4. Opis radialny jako język wspólnej rodziny

Głównym celem powinno być możliwie szybkie przejście do opisu radialnego, w którym punkt krzywej jest określony przez kierunek i odległość od wyróżnionego punktu.

Współrzędne biegunowe nie powinny być osobnym dodatkiem oderwanym od stożkowych. Mają pojawić się dlatego, że dla trajektorii orbitujących wokół wyróżnionego centrum opis przez kąt i promień jest naturalniejszy niż opis przez dwie niezależne współrzędne kartezjańskie.

Przejście

\[
x=r\cos\theta,\qquad y=r\sin\theta
\]

ma być interpretowane geometrycznie. Kąt wybiera kierunek, a \(r\) określa położenie punktu wzdłuż tego kierunku.

Następnie dochodzimy do jednej rodziny równań radialnych, na przykład postaci

\[
r(\theta)=\frac{p}{1+e\cos\theta},
\]

z odpowiednim omówieniem orientacji i możliwych wariantów znaku lub przesunięcia kąta.

Najważniejszy nie jest sam wzór, lecz fakt, że jeden parametr \(e\) zmienia typ krzywej:

- \(e=0\): okrąg,
- \(0<e<1\): elipsa,
- \(e=1\): parabola,
- \(e>1\): hiperbola.

Ta klasyfikacja powinna być pokazana dynamicznie. Student ma zobaczyć płynne przejście przez rodzinę, a nie cztery statyczne obrazki.

### 5. Geometryczna interpretacja jako wyjaśnienie, nie punkt wyjścia

Ognisko, kierownica i mimośród mogą zostać użyte do wyjaśnienia wspólnej struktury stożkowych. Nie powinny jednak rozpoczynać długiej konstrukcyjnej części wykładu.

Ich rola ma być następująca:

- nadać geometryczne znaczenie parametrowi \(e\),
- pokazać, dlaczego różne krzywe należą do jednej rodziny,
- uzasadnić radialną postać równania,
- połączyć algebraiczny opis z geometryczną definicją.

Konstrukcja ma służyć wspólnemu modelowi, a nie zastępować go.

### 6. Grawitacja jako pierwsze pełne zastosowanie języka kursu

Po zbudowaniu matematycznej rodziny należy pokazać, że te same krzywe opisują trajektorie w problemie grawitacyjnym dwóch ciał.

Nie jest konieczne przeprowadzenie pełnego wyprowadzenia praw Keplera ani rozwiązanie równania ruchu na poziomie zaawansowanego rachunku różniczkowego. Celem jest pokazanie struktury modelu:

- wyróżniamy ciało centralne,
- opis radialny wykorzystuje odległość od tego ciała i kierunek,
- parametr energii i warunków ruchu prowadzi do różnych typów orbit,
- związane trajektorie są elipsami, z okręgiem jako przypadkiem szczególnym,
- trajektoria graniczna jest parabolą,
- trajektorie niezwiązane są hiperbolami.

Należy bardzo uważać, aby nie sugerować, że sama klasyfikacja stożkowych stanowi już teorię grawitacji. Matematyczne krzywe są rozwiązaniami modelu fizycznego dopiero po przyjęciu odpowiednich praw ruchu i oddziaływania. Wykład ma pokazać współpracę matematyki i fizyki, a nie zacierać różnicę między nimi.

### 7. Jedna matematyka, różne zjawiska ruchu

Warto podkreślić, że okrąg, elipsa, parabola i hiperbola nie są tylko kolejnymi figurami geometrycznymi. W modelu grawitacyjnym odpowiadają jakościowo różnym rodzajom ruchu.

To daje studentowi przykład, w którym wartość parametru nie zmienia jedynie wyglądu wykresu, ale rozstrzyga o charakterze zjawiska fizycznego.

Właśnie tutaj można sprzedać ideę parametru jako wielkości organizującej całą klasę zachowań.

### 8. Powrót do idei Kartezjusza

Zakończenie powinno jawnie domknąć narrację pierwszych czterech wykładów.

Zaczęliśmy od geometrii bez liczb. Następnie zakodowaliśmy punkty, zmiany i obiekty geometryczne. Teraz ten język pozwala opisać trajektorie realnych ciał.

Kartezjańskie połączenie geometrii z algebrą nie tylko upraszcza rysowanie krzywych. Umożliwia ilościowy opis świata.

## Proponowane wizualizacje HTML

### Dynamiczna rodzina stożkowych

Suwak steruje mimośrodem \(e\), a rysunek płynnie przechodzi przez okrąg, elipsy, parabolę i hiperbole. Jednocześnie powinny być widoczne aktualne równanie i wartość parametru.

### Punkt generowany radialnie

Kąt \(\theta\) zmienia się, promień \(r(\theta)\) jest obliczany z równania, a punkt kreśli krzywą. Powinny być widoczne promień wodzący, aktualny kąt i ślad punktu.

### Porównanie opisu kartezjańskiego i radialnego

Ten sam punkt i ta sama krzywa są opisywane równolegle przez \((x,y)\) oraz \((r,\theta)\). Student widzi, że zmienia się reprezentacja, nie obiekt.

### Orbity w modelu grawitacyjnym

Interaktywna animacja pokazuje ciało centralne i różne trajektorie zależne od parametru. Należy jasno opisać, że jest to wizualizacja matematycznego modelu, a nie pełna symulacja wszystkich efektów fizycznych.

### Zmiana orientacji i parametrów

Student może obracać oś stożkowej, zmieniać skalę oraz położenie. Pozwala to oddzielić cechy istotne dla typu krzywej od cech wynikających jedynie z położenia w układzie współrzędnych.

## Zakres i dyscyplina

Wykład nie powinien stać się kursem mechaniki nieba ani pełną teorią równań drugiego stopnia. Należy ograniczyć rachunki do minimum potrzebnego dla zrozumienia:

- jak równanie generuje krzywą,
- jak parametr organizuje rodzinę krzywych,
- dlaczego opis radialny jest naturalny,
- jak stożkowe pojawiają się jako trajektorie w modelu grawitacyjnym.

Nie należy przeciążać wykładu długimi przekształceniami algebraicznymi, klasyfikacją wszystkich ogólnych równań kwadratowych ani technicznym wyprowadzeniem dynamiki orbitalnej.

Najprostsze przykłady są pożądane, ale uproszczenie rachunków nie może prowadzić do trywializacji idei. Student ma zobaczyć prawdziwą strukturę matematyczną, nawet jeśli pokazujemy ją na szczególnie czytelnym przypadku.

## Co student powinien zapamiętać po latach

> Równania i parametry opisują nie tylko pojedyncze krzywe, lecz całe rodziny możliwych kształtów. Te same rodziny mogą następnie opisywać jakościowo różne zachowania rzeczywistych układów fizycznych.

oraz:

> Połączenie geometrii z algebrą pozwala matematyce przejść od rysunku do ilościowego modelu świata.

## Most do dalszej części kursu

Pierwszy blok kursu pokazał, jak kodować i opisywać obiekty geometryczne. Pojawia się teraz pytanie, jak systematycznie przekształcać całe układy współrzędnych, wektory i figury oraz jak zapisywać takie przekształcenia w zwartej postaci.

To prowadzi do macierzy jako narzędzi opisujących transformacje.
