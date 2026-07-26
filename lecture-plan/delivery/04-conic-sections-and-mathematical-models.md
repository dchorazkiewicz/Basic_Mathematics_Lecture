# Plan realizacyjny wykładu 04 — Conic Sections and Mathematical Models

## Funkcja wykładu

Wykład zamyka pierwszy blok kursu. Ma pokazać, że wcześniejszy język współrzędnych, wektorów, równań i parametrów nie służy wyłącznie do opisu prostych obiektów, lecz pozwala organizować całe rodziny krzywych i budować pierwsze modele rzeczywistych trajektorii.

Główne idee:

> Równanie z parametrami może opisywać rodzinę obiektów, a nie tylko jedną krzywą.

oraz

> Model matematyczny nie jest samym zjawiskiem fizycznym, lecz precyzyjnym opisem zbudowanym na przyjętych założeniach.

Zakładany czas: około \(2\times45\) minut.

## Hierarchia treści

### Poziom A — rozwijane w całości

1. Ograniczenie obiektów liniowych i potrzeba zmiennego kierunku.
2. Krzywa parametryczna jako generowanie punktów.
3. Parametr jako wielkość sterująca położeniem punktu albo kształtem całej rodziny.
4. Opis radialny przez kąt i odległość od wyróżnionego punktu.
5. Jedna rodzina stożkowych sterowana mimośrodem \(e\).
6. Rozróżnienie kształtu trajektorii, parametryzacji ruchu i prawa fizycznego.

### Poziom B — rozwinięcie sterowane

1. Podstawowe postacie kartezjańskie okręgu, elipsy, paraboli i hiperboli.
2. Ognisko, kierownica i geometryczne znaczenie mimośrodu.
3. Klasyfikacja orbit w prostym modelu grawitacyjnym.
4. Zmiana skali, położenia i orientacji krzywej.

### Poziom C — sygnalizacja i kontynuacja w workbooku

1. Samodzielne badanie wpływu parametrów równań kartezjańskich.
2. Przejścia między opisem kartezjańskim, parametrycznym i radialnym.
3. Konstrukcja wizualizacji rodziny stożkowych.
4. Analiza założeń modelu grawitacyjnego.
5. Porównanie statycznego kształtu krzywej z ruchem punktu po tej krzywej.

### Poziom D — opcjonalne rozszerzenie

1. Pełne wyprowadzenie równania stożkowej z definicji ognisko–kierownica.
2. Klasyfikacja ogólnego równania drugiego stopnia.
3. Wyprowadzenie orbit z równań ruchu.
4. Prawa Keplera w pełnej postaci.

Te treści nie mogą być warunkiem zamknięcia wykładu.

## Zasada ograniczająca przeciążenie

Nie prowadzimy czterech oddzielnych miniwykładów o okręgu, elipsie, paraboli i hiperboli. Wszystkie krzywe mają zostać pokazane jako stany jednego mechanizmu sterowanego parametrem.

Równania kartezjańskie pełnią rolę rozpoznawczą, a nie stanowią głównej osi narracji. Najważniejsza jest dynamiczna rodzina oraz znaczenie parametru.

## Proponowany przebieg czasowy

### Część I — od prostej do zmiennego kierunku, około 15 minut

- przypomnienie \(P_0+tv\);
- pokaz, że stały kierunek generuje prostą;
- pytanie, jak opisać trajektorię zmieniającą kierunek;
- krótka parametryzacja okręgu lub elipsy.

### Część II — parametry sterują geometrią, około 15 minut

- jeden prosty wzór z parametrem skali lub położenia;
- suwak zmieniający krzywą;
- rozróżnienie parametru punktu na krzywej i parametru kształtu rodziny.

### Część III — opis radialny, około 20 minut

- wyróżniony punkt centralny;
- kąt wybierający kierunek;
- promień wybierający punkt;
- przejście \(x=r\cos\theta\), \(y=r\sin\theta\);
- jeden punkt obliczony ręcznie.

### Część IV — jedna rodzina stożkowych, około 25 minut

- animacja równania

\[
r(\theta)=\frac{p}{1+e\cos\theta};
\]

- zmiana \(e\);
- klasyfikacja czterech typów;
- krótkie znaczenie ogniska i kierownicy;
- obserwacja, które cechy zmieniają typ, a które tylko położenie lub orientację.

### Część V — model fizyczny i przekazanie do ćwiczeń, około 15 minut

- ciało centralne i przykładowe trajektorie;
- jakościowy związek między typem stożkowej a rodzajem ruchu;
- wyraźne oddzielenie krzywej od teorii grawitacji;
- przedstawienie zadań workbookowych.

## Główna wizualizacja HTML

Jedna zintegrowana scena powinna pokazywać:

- wyróżnione ognisko;
- promień wodzący;
- kąt \(\theta\);
- punkt generowany przez \(r(\theta)\);
- ślad punktu tworzący krzywą;
- suwak mimośrodu \(e\);
- aktualną klasyfikację krzywej;
- równoległy zapis radialny i kartezjański tam, gdzie jest prosty.

Elementy powinny pojawiać się etapami. Na początku student widzi tylko kierunek i promień. Dopiero później pojawia się cała rodzina oraz interpretacja fizyczna.

## Didaskalia

### Sekwencja 1 — dlaczego prosta nie wystarcza

**Co student widzi:** punkt generowany przez \(P_0+tv\), a obok zakrzywioną trajektorię.

**Co robi prowadzący:** pyta, która część opisu prostej uniemożliwia zmianę kierunku.

**Wniosek:** potrzebujemy dwóch funkcji współrzędnych albo innego mechanizmu sterowania położeniem.

### Sekwencja 2 — parametr punktu

**Co student widzi:** punkt poruszający się po okręgu dla zmiennego \(t\).

**Co robi prowadzący:** pyta, czy zmiana \(t\) zmienia kształt krzywej, czy tylko położenie punktu.

**Wniosek:** parametr może wybierać punkt na ustalonym obiekcie.

### Sekwencja 3 — parametr rodziny

**Co student widzi:** suwak zmieniający promień okręgu albo półosie elipsy.

**Co robi prowadzący:** porównuje ten suwak z parametrem ruchu punktu.

**Wniosek:** nie każdy parametr pełni tę samą funkcję; jeden może wskazywać punkt, drugi może zmieniać cały obiekt.

### Sekwencja 4 — opis radialny

**Co student widzi:** obracający się promień i punkt przesuwany wzdłuż niego.

**Co robi prowadzący:** najpierw prosi o opis położenia słowami: kierunek i odległość. Dopiero potem zapisuje współrzędne biegunowe.

**Moment formalizacji:**

\[
x=r\cos\theta,\qquad y=r\sin\theta.
\]

### Sekwencja 5 — mimośród

**Co student widzi:** krzywa płynnie zmienia typ dla rosnącego \(e\).

**Co robi prowadzący:** zatrzymuje animację dla \(e=0\), \(0<e<1\), \(e=1\), \(e>1\) i prosi studentów o opis jakościowy.

**Wniosek:** jedna liczba organizuje całą klasę zachowań geometrycznych.

### Sekwencja 6 — ognisko i kierownica

**Co student widzi:** odległość punktu krzywej od ogniska i od kierownicy.

**Co robi prowadzący:** nie wyprowadza długiego wzoru; pokazuje, że ich stosunek pozostaje równy \(e\).

**Punkt przekazania:** pełne sprawdzenie na wybranych punktach i przygotowanie wizualizacji przechodzi do workbooku.

### Sekwencja 7 — model orbity

**Co student widzi:** ciało centralne i kilka trajektorii odpowiadających różnym wartościom parametru.

**Co robi prowadzący:** pyta, które informacje pochodzą z geometrii krzywej, a które wymagałyby prawa siły i warunków początkowych.

**Wniosek:** stożkowa opisuje możliwy kształt rozwiązania modelu, ale sama nie jest prawem grawitacji.

## Minimalna notatka studenta

1. Parametryzacja jednej prostej krzywej.
2. Rozróżnienie parametru punktu i parametru rodziny.
3. Rysunek współrzędnych radialnych z \(r\) i \(\theta\).
4. Wzór \(r(\theta)=p/(1+e\cos\theta)\).
5. Tabela wartości \(e\) i typów stożkowych.
6. Zdanie rozróżniające trajektorię geometryczną, ruch po trajektorii i prawo fizyczne.

## Punkt przekazania do ćwiczeń

> Na wykładzie zobaczyliśmy jedną rodzinę krzywych oraz sposób, w jaki parametr organizuje różne typy geometrii i ruchu. Na ćwiczeniach zbadacie konkretne równania, przygotujecie własne wizualizacje, porównacie reprezentacje i sprawdzicie, jakie założenia są potrzebne, aby krzywa stała się modelem fizycznym.

## Bloki zadań do przyszłego workbooku

### Zadanie 1 — parametr punktu i parametr kształtu

**Typ:** I + W + A.

**Cel:** rozróżnić dwie role parametrów.

**Dane:**

\[
x(t)=a\cos t,\qquad y(t)=b\sin t.
\]

**Czynności:**

1. dla ustalonych \(a,b\) zaznacz punkty odpowiadające kilku wartościom \(t\);
2. zmień \(t\) i opisz, co się zmienia;
3. zmień \(a\) lub \(b\) i opisz, co się zmienia;
4. przygotuj dwa rysunki;
5. napisz porównanie roli trzech parametrów.

**Rezultat:** rysunki i tabela „parametr — co kontroluje”.

### Zadanie 2 — od opisu radialnego do punktów kartezjańskich

**Typ:** R + I.

**Cel:** nadać geometryczne znaczenie przejściu między reprezentacjami.

**Dane:** kilka prostych par \((r,\theta)\).

**Czynności:**

1. narysuj kierunek \(\theta\);
2. zaznacz punkt w odległości \(r\);
3. oblicz \(x=r\cos\theta\), \(y=r\sin\theta\);
4. porównaj obliczenie z rysunkiem;
5. wykonaj zadanie odwrotne dla jednego punktu kartezjańskiego.

**Rezultat:** tabela i rysunek.

### Zadanie 3 — rodzina sterowana mimośrodem

**Typ:** W + I + A.

**Cel:** samodzielnie opracować dynamiczną klasyfikację.

**Dane:** równanie radialne i zestaw wartości \(e\).

**Czynności:**

1. przygotuj wykresy dla co najmniej pięciu wartości \(e\);
2. oznacz ognisko i wybrane promienie wodzące;
3. sklasyfikuj krzywe;
4. opisz, co dzieje się przy przejściu przez \(e=1\);
5. wskaż, które zmiany mają charakter jakościowy;
6. sformułuj wniosek w 4–6 zdaniach.

**Rezultat:** jedna wspólna wizualizacja albo uporządkowana seria wykresów.

### Zadanie 4 — ognisko, kierownica i sprawdzenie mimośrodu

**Typ:** R + W + A; rozwinięcie poziomu B/C.

**Cel:** sprawdzić geometryczne znaczenie \(e\).

**Dane:** prosta stożkowa z podanym ogniskiem, kierownicą i kilkoma punktami.

**Czynności:**

1. oblicz odległość każdego punktu od ogniska;
2. oblicz odległość od kierownicy;
3. porównaj ilorazy;
4. przedstaw wyniki w tabeli;
5. zaznacz odległości na rysunku;
6. wyjaśnij, dlaczego stałość ilorazu definiuje jedną rodzinę krzywych.

### Zadanie 5 — trzy opisy tej samej krzywej

**Typ:** I + A + W.

**Cel:** porównać reprezentację kartezjańską, parametryczną i radialną.

**Dane:** okrąg albo prosta elipsa.

**Czynności:**

1. zapisz możliwie proste trzy reprezentacje;
2. wskaż, które pytania najłatwiej rozwiązać w każdej z nich;
3. przygotuj wspólny rysunek;
4. sprawdź jeden punkt we wszystkich opisach;
5. opisz, dlaczego zmiana reprezentacji nie zmienia krzywej.

**Rezultat:** tabela porównawcza i sprawdzenie punktu.

### Zadanie 6 — krzywa a ruch

**Typ:** I + M + A.

**Cel:** rozróżnić geometryczny tor od sposobu poruszania się po nim.

**Dane:** dwie parametryzacje tego samego okręgu, na przykład z parametrami \(t\) i \(2t\).

**Czynności:**

1. pokaż, że obie parametryzacje generują ten sam zbiór punktów;
2. porównaj położenia dla tych samych wartości czasu;
3. opisz różnicę szybkości przechodzenia po krzywej bez wprowadzania jeszcze pochodnej;
4. przygotuj tabelę lub animację;
5. sformułuj rozróżnienie: kształt trajektorii kontra prawo ruchu.

### Zadanie 7 — model grawitacyjny i jego założenia

**Typ:** M + A.

**Cel:** nauczyć odróżniać model od ilustracji.

**Dane:** krótki opis problemu dwóch ciał i zestaw możliwych stwierdzeń.

**Czynności:**

1. wskaż, które stwierdzenia są czysto geometryczne;
2. wskaż, które wymagają prawa grawitacji;
3. wskaż, które wymagają warunków początkowych;
4. uporządkuj zależności w schemat;
5. napisz 5–7 zdań wyjaśniających, dlaczego sama elipsa nie jest teorią ruchu planet.

**Rezultat:** mapa zależności i komentarz.

### Zadanie 8 — prezentacja dynamicznej rodziny

**Typ:** prezentacyjne + AI kontrolowane.

Student przygotowuje 4-minutową prezentację jednej rodziny krzywych sterowanej parametrem.

Materiał musi zawierać:

1. wzór;
2. wskazanie roli każdego parametru;
3. animację lub serię co najmniej czterech stanów;
4. opis jednej zmiany ilościowej i jednej jakościowej;
5. kontrolę poprawności na wybranym punkcie;
6. krótkie wyjaśnienie, czego wizualizacja nie dowodzi.

AI może pomóc z kodem, lecz student musi opisać wykonane testy i poprawki.

## Kryterium zakończenia wykładu

Student powinien umieć wyjaśnić:

- dlaczego krzywa wymaga bardziej ogólnego opisu niż prosta;
- jaką rolę może pełnić parametr;
- dlaczego opis radialny jest naturalny dla obiektów z wyróżnionym centrum lub ogniskiem;
- jak mimośród organizuje rodzinę stożkowych;
- czym różnią się krzywa, ruch po krzywej i model fizyczny.

## Most do następnego bloku

Na wykładzie zmienialiśmy parametry i obserwowaliśmy, jak zmieniają się całe krzywe. Kolejny blok rozpoczyna się pytaniem:

> Jak zapisać jedną regułę, która jednocześnie przekształca wszystkie punkty, wektory i figury?
