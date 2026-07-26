# Wykład 02 — Vectors, Bases, and Coordinate Systems

## Rola wykładu w całym kursie

Pierwszy wykład pokazał, jak opisywać położenie. Drugi ma pokazać, że matematyka potrzebuje osobnego języka do opisu zmiany. Punkt mówi, gdzie jesteśmy. Nie mówi jednak sam z siebie, jak przejść z jednego miejsca do drugiego, jaka jest wielkość tego przejścia ani jaki ma ono kierunek.

Wektor pojawia się więc nie jako kolejna definicja z programu, lecz jako odpowiedź na realną lukę pojęciową pozostawioną przez współrzędne punktów.

## Główne pytanie

> Jak opisać zmianę położenia tak, aby można ją było mierzyć, dodawać, skalować i rozkładać na prostsze kierunki?

## Centralna idea

> Punkt opisuje stan, a wektor opisuje zmianę.

Wektor jest klasą równoważnych przesunięć. Dwie strzałki zaczepione w różnych miejscach mogą reprezentować ten sam wektor, jeśli mają ten sam kierunek, zwrot i długość. To odróżnienie obiektu od jego reprezentacji jest równie ważne jak rozróżnienie punktu i jego współrzędnych w wykładzie pierwszym.

Druga wielka idea brzmi:

> Zmiany tworzą algebrę.

Można je składać, odwracać, skalować, mierzyć, porównywać i rozkładać na składowe. W ten sposób algebra nie opisuje już tylko położenia, ale również działanie.

## Narracja wykładu

### 1. Od dwóch punktów do jednej zmiany

Zaczynamy od dwóch punktów \(P\) i \(Q\). Różnica ich współrzędnych opisuje przejście z \(P\) do \(Q\):

\[
\overrightarrow{PQ}=Q-P.
\]

To przejście należy interpretować geometrycznie, nie wyłącznie rachunkowo. Współrzędne wektora mówią, o ile zmieniamy każdą współrzędną punktu.

### 2. Ten sam wektor w różnych miejscach

Należy wyraźnie pokazać, że wektor nie jest przywiązany do jednego punktu zaczepienia. Wektor opisuje zmianę, a nie konkretny odcinek w przestrzeni.

Jest to pierwszy krok w stronę abstrakcji: rezygnujemy z części informacji o reprezentacji i zachowujemy tylko to, co istotne dla zmiany.

### 3. Dodawanie jako składanie zmian

Dodawanie wektorów nie powinno być przedstawione jako arbitralne dodawanie współrzędnych. Najpierw powinno oznaczać wykonanie jednej zmiany, a następnie drugiej.

Jeżeli \(u\) prowadzi z punktu początkowego do punktu pośredniego, a \(v\) z punktu pośredniego do końcowego, to \(u+v\) opisuje zmianę całkowitą.

W tym miejscu algebra otrzymuje sens operacyjny.

### 4. Wektor przeciwny i odejmowanie

Wektor \(-u\) odwraca zmianę. Odejmowanie \(u-v\) jest dodaniem zmiany przeciwnej. Te operacje należy osadzić w obrazie ruchu, aby student rozumiał ich znaczenie, zanim zacznie wykonywać działania na współrzędnych.

### 5. Skalowanie jako zmiana intensywności i zwrotu

Mnożenie wektora przez skalar zmienia jego długość, a dla skalaru ujemnego także zwrot. To najprostszy przykład parametrycznej rodziny wektorów i pierwszy kontakt z ideą, że jeden obiekt może generować całą prostą kierunkową.

Ta obserwacja stanie się bezpośrednim fundamentem równania parametrycznego prostej w wykładzie trzecim.

### 6. Długość i kierunek

Długość wektora wynika z geometrii euklidesowej i twierdzenia Pitagorasa. Wektor jednostkowy oddziela kierunek od wielkości.

Należy podkreślić, że rozdzielenie długości i kierunku jest matematycznie użyteczne: możemy zachować sam kierunek i niezależnie sterować skalą.

### 7. Równoległość, prostopadłość i iloczyn skalarny

Test równoległości wynika z pytania, czy jeden wektor jest skalarną wielokrotnością drugiego.

Iloczyn skalarny powinien pojawić się jako narzędzie do badania wzajemnego ustawienia dwóch zmian. Jego związek z cosinusem kąta pozwala mierzyć zgodność kierunków, a przypadek zerowy daje test prostopadłości.

Nie chodzi o sam wzór

\[
u\cdot v=u_1v_1+u_2v_2,
\]

lecz o fakt, że relację geometryczną można wyrazić jedną liczbą.

### 8. Rzut jako część zmiany w wybranym kierunku

Rzut wektora na inny wektor odpowiada na pytanie:

> Jaka część tej zmiany odbywa się w zadanym kierunku?

To pojęcie jest ważne dla geometrii, mechaniki i późniejszej analizy danych. Powinno zostać pokazane za pomocą prostego rysunku oraz związku z iloczynem skalarnym.

Rzut nie jest odrębnym dodatkiem do wykładu. Jest naturalną konsekwencją możliwości mierzenia zgodności kierunków.

### 9. Kombinacje liniowe i baza

Po poznaniu dodawania i skalowania pojawia się pytanie, jakie zmiany można zbudować z kilku ustalonych kierunków.

Kombinacja liniowa

\[
a_1v_1+\cdots+a_kv_k
\]

opisuje wszystkie zmiany konstruowane z wybranych wektorów.

Baza jest minimalnym zestawem niezależnych kierunków pozwalającym opisać każdą zmianę w danej przestrzeni. Nie powinna być przedstawiona jako formalizm sam dla siebie. Jest odpowiedzią na pytanie:

> Jak opisać dowolną zmianę za pomocą niewielkiej liczby podstawowych zmian?

### 10. Współrzędne zależą od bazy

Tak jak współrzędne punktu zależały od układu współrzędnych, tak współrzędne wektora zależą od wybranej bazy. Sam wektor pozostaje ten sam, zmienia się jego opis.

Na tym poziomie wystarczy prosty przykład numeryczny. Nie należy rozbudowywać ogólnej teorii zmiany bazy ponad to, co jest potrzebne do zobaczenia idei.

## Zakres i dyscyplina

Ten wykład jest szeroki, ale jego elementy tworzą jedną historię. Nie należy usuwać podstawowych operacji, długości, kierunku, iloczynu skalarnego, rzutu ani bazy, ponieważ każdy z tych elementów rozwija jedną wspólną ideę: algebra zmian.

Należy natomiast ograniczać formalizm, dowody techniczne i uogólnienia trójwymiarowe, jeśli nie służą bezpośrednio narracji. Przestrzeń trójwymiarowa może pojawiać się jako naturalne rozszerzenie, ale nie powinna dominować wykładu.

## Minimalne środki dydaktyczne

Przykłady powinny opierać się na małych współrzędnych i czytelnych konfiguracjach geometrycznych. Celem nie jest wykonywanie długich rachunków, lecz rozpoznawanie znaczenia operacji.

Student powinien na jednym prostym przykładzie zobaczyć:

- różnicę między punktem a wektorem,
- składanie dwóch zmian,
- skalowanie kierunku,
- pomiar długości i kąta,
- wydzielanie składowej w zadanym kierunku,
- zapis tej samej zmiany w innej bazie.

## Rola wizualizacji HTML

Interaktywne rysunki są szczególnie wartościowe w tym wykładzie. Można przesuwać punkty i obserwować niezmienność wektora, składać przesunięcia, zmieniać skalar suwakiem, obracać wektory i śledzić zmianę iloczynu skalarnego oraz rzutu.

Wizualizacja bazy powinna pozwalać zmieniać wektory bazowe i obserwować, jak współrzędne tej samej strzałki zmieniają się bez zmiany samego wektora.

## Co student powinien zapamiętać po latach

> Wektor jest matematycznym opisem zmiany. Zmiany można składać, skalować, mierzyć, porównywać i rozkładać na podstawowe kierunki.

## Most do wykładu 03

Mamy już punkty oraz kierunki. Możemy więc zadać pytanie:

> Jak za pomocą punktu i dozwolonych kierunków generować całe obiekty geometryczne?

To pytanie prowadzi bezpośrednio do prostych i płaszczyzn.
