# Wykład 02 — Vectors, Bases, and Coordinate Systems

## Rola wykładu w całym kursie

Pierwszy wykład pokazał, jak opisywać położenie. Drugi wprowadza osobny język do opisu zmiany.

> Punkt opisuje stan, a wektor opisuje zmianę stanu.

Wektor nie ma pojawić się jako para liczb pozbawiona znaczenia. Najpierw jest przesunięciem: prowadzi z jednego punktu do drugiego, ma kierunek, zwrot i wielkość. Dopiero później otrzymuje współrzędne i staje się obiektem, na którym można wykonywać działania algebraiczne.

## Główne pytanie

> Jak opisać zmianę tak, aby można ją było składać, odwracać, skalować, mierzyć i rozkładać na podstawowe kierunki?

## Zakładany czas

Około $2\times45$ minut. Wykład ma przeprowadzić trzy główne idee:

1. wektor opisuje zmianę, a nie położenie;
2. zmiany tworzą algebrę;
3. baza pozwala kodować dowolną zmianę za pomocą podstawowych kierunków.

Iloczyn skalarny i rzut mają zostać pokazane pojęciowo, natomiast pełna technika rachunkowa będzie rozwijana na ćwiczeniach.

## Liniowy plan wykładu i ćwiczeń

### 1. Od dwóch punktów do jednej zmiany — około 15 minut

#### Na wykładzie

Zaczynamy od dwóch punktów $P$ i $Q$. Strzałka prowadząca z $P$ do $Q$ opisuje zmianę położenia:

$$
\overrightarrow{PQ}=Q-P.
$$

Współrzędne wektora odczytujemy jako informację:

- o ile zmienia się pierwsza współrzędna;
- o ile zmienia się druga współrzędna.

Następnie tę samą strzałkę przesuwamy w inne miejsce. Zmienia się punkt zaczepienia reprezentacji, ale nie zmienia się sama zmiana.

#### Wizualizacja HTML

Dwa punkty $P,Q$ oraz strzałka między nimi. Po naciśnięciu przycisku strzałka zostaje równolegle przesunięta w inne miejsce. Na ekranie pozostają te same współrzędne wektora.

Prowadzący pyta:

- czy zmienił się odcinek;
- czy zmieniło się przesunięcie;
- jaką informację zachowujemy, a jaką odrzucamy.

#### Minimalny przykład

Dla $P=(1,2)$ i $Q=(4,3)$:

$$
\overrightarrow{PQ}=(3,1).
$$

Tę samą zmianę pokazujemy od innego punktu początkowego.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student ma:

1. obliczyć wektory między kilkoma parami punktów;
2. znaleźć różne pary punktów wyznaczające ten sam wektor;
3. narysować trzy reprezentacje jednej zmiany w różnych miejscach;
4. rozstrzygnąć, kiedy dwie strzałki reprezentują ten sam wektor;
5. zapisać własnymi słowami różnicę między odcinkiem skierowanym a wektorem swobodnym.

W `solution.md` pozostają obliczenia, jeden wspólny rysunek i definicyjny komentarz studenta.

---

### 2. Dodawanie, odwracanie i skalowanie zmian — około 20 minut

#### Na wykładzie

Dodawanie wektorów wprowadzamy jako wykonanie dwóch zmian kolejno. Jeżeli $u$ prowadzi do punktu pośredniego, a $v$ od punktu pośredniego do końcowego, to $u+v$ opisuje zmianę całkowitą.

Wektor przeciwny $-u$ cofa zmianę. Odejmowanie jest dodawaniem zmiany przeciwnej.

Mnożenie przez skalar pokazujemy jako sterowanie wielkością i zwrotem:

- $|a|>1$ zwiększa zmianę;
- $0<|a|<1$ ją zmniejsza;
- $a<0$ dodatkowo odwraca zwrot;
- $a=0$ usuwa zmianę.

Wzory współrzędnościowe pojawiają się dopiero po zrozumieniu ruchu geometrycznego.

#### Wizualizacja HTML

Jedna animowana historia ruchu punktu:

1. wykonanie zmiany $u$;
2. wykonanie zmiany $v$;
3. pokazanie zmiany całkowitej $u+v$;
4. suwak sterujący skalarem $a$ w wektorze $au$.

#### Minimalny przykład

$$
u=(2,1),\qquad v=(-1,2).
$$

Student najpierw przewiduje wynik na rysunku, a dopiero potem oblicza

$$
u+v=(1,3).
$$

#### Bezpośrednia kontynuacja na ćwiczeniach

Pierwszy blok zadań ma rozwijać technikę, ale zachować interpretację ruchu.

Student ma:

1. obliczyć sumy, różnice i wielokrotności prostych wektorów;
2. narysować drogę odpowiadającą kilku kolejnym zmianom;
3. porównać wynik obliczony współrzędnościowo z końcem narysowanej drogi;
4. znaleźć dwa różne ciągi zmian prowadzące do tego samego wyniku;
5. sprawdzić na przykładzie przemienność dodawania oraz wyjaśnić ją geometrycznie;
6. zbudować przykład, w którym skalar ujemny zmienia zwrot wektora.

W workbooku muszą znaleźć się rachunki, rysunek łamanej oraz jedno sprawdzenie wyniku przez porównanie położenia początkowego i końcowego.

---

### 3. Długość, kierunek i iloczyn skalarny — około 20 minut

#### Na wykładzie

Długość wektora wynika z twierdzenia Pitagorasa:

$$
\|u\|=\sqrt{u_1^2+u_2^2}.
$$

Wektor jednostkowy oddziela kierunek od wielkości. Student ma zobaczyć, że można najpierw wybrać kierunek, a potem niezależnie sterować skalą.

Iloczyn skalarny wprowadzamy jako liczbowy pomiar wzajemnego ustawienia dwóch kierunków:

$$
u\cdot v=\|u\|\,\|v\|\cos\alpha.
$$

Dopiero potem pokazujemy zapis współrzędnościowy

$$
u\cdot v=u_1v_1+u_2v_2.
$$

Najważniejsza na wykładzie jest interpretacja znaku:

- dodatni — kąt ostry;
- zero — prostopadłość;
- ujemny — kąt rozwarty.

Nie rozwijamy dużej liczby rachunków na kąty.

#### Wizualizacja HTML

Dwa wektory z możliwością obracania jednego z nich. Obok dynamicznie zmieniają się:

- kąt;
- wartość cosinusa;
- wartość iloczynu skalarnego;
- opis „dodatni / zero / ujemny”.

#### Minimalny przykład

$$
u=(1,0),\qquad v=(1,1),\qquad w=(0,1).
$$

Porównujemy $u\cdot v$ oraz $u\cdot w$, aby zobaczyć różnicę między kątem ostrym i prostym.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student ma:

1. obliczać długości prostych wektorów;
2. normalizować wybrane wektory i sprawdzać długość otrzymanego wyniku;
3. obliczać iloczyny skalarne;
4. klasyfikować kąt jako ostry, prosty lub rozwarty bez wyznaczania samego kąta;
5. wyznaczać kąt tylko w kilku przypadkach o prostych wartościach;
6. zbudować tabelę pokazującą zależność między znakiem iloczynu skalarnego a wzajemnym ustawieniem wektorów;
7. sprawdzić wyniki na rysunku.

W `solution.md` pozostają obliczenia, tabela interpretacyjna i co najmniej jeden rysunek kontrolny.

---

### 4. Rzut jako składowa zmiany w wybranym kierunku — około 10 minut

#### Na wykładzie

Rzut pojawia się jako odpowiedź na pytanie:

> Jaka część wektora $u$ odbywa się w kierunku wektora $v$?

Na rysunku rozkładamy $u$ na składową równoległą do $v$ i składową prostopadłą. Pokazujemy jeden zapis:

$$
\operatorname{proj}_v u
=
\frac{u\cdot v}{v\cdot v}v.
$$

Nie przeprowadzamy pełnego katalogu przypadków ani wielu obliczeń. Wzór ma zostać odczytany jako:

1. pomiar zgodności kierunków przez iloczyn skalarny;
2. zamiana tej informacji na wielokrotność wybranego kierunku.

#### Wizualizacja HTML

Wektor $u$, obracany kierunek $v$, opuszczona prostopadła i dynamicznie zmieniający się rzut. Student obserwuje, kiedy rzut jest dodatni, zerowy albo skierowany przeciwnie do $v$.

#### Bezpośrednia kontynuacja na ćwiczeniach

Pełna technika rzutów zostaje przeniesiona na ćwiczenia.

Student ma:

1. obliczyć kilka rzutów na kierunki osiowe i nieosiowe;
2. narysować rozkład
   $$
   u=\operatorname{proj}_v u+u_\perp;
   $$
3. sprawdzić, że $u_\perp\cdot v=0$;
4. porównać rzut na $v$ i na $-v$;
5. znaleźć przykład, w którym rzut jest wektorem zerowym;
6. przygotować krótkie wyjaśnienie wizualne pojęcia rzutu.

W workbooku muszą znaleźć się pełne rachunki, rozkład wektora, kontrola prostopadłości oraz rysunek.

---

### 5. Kombinacje liniowe i baza — około 20 minut

#### Na wykładzie

Po dodawaniu i skalowaniu stawiamy pytanie:

> Jakie zmiany można zbudować z kilku ustalonych kierunków?

Kombinacja liniowa

$$
a_1v_1+\cdots+a_kv_k
$$

opisuje wszystkie zmiany tworzone z wybranych wektorów.

Na płaszczyźnie pokazujemy dwa przypadki:

- dwa równoległe kierunki generują tylko jedną prostą kierunkową;
- dwa nierównoległe kierunki pozwalają opisać każdy wektor płaszczyzny.

Baza zostaje przedstawiona jako minimalny zestaw niezależnych kierunków wystarczający do opisu dowolnej zmiany.

Następnie ten sam wektor zapisujemy w bazie standardowej oraz w jednej prostej bazie niestandardowej. Nie rozwijamy ogólnej teorii macierzy zmiany bazy.

#### Wizualizacja HTML

Dwa suwaki sterują współczynnikami $a,b$ w wyrażeniu

$$
av_1+bv_2.
$$

Student obserwuje punkt końcowy. Następnie jeden z wektorów bazowych obraca się, a współrzędne tej samej strzałki zmieniają się bez zmiany samego wektora.

#### Minimalny przykład

Dla

$$
v_1=(1,0),\qquad v_2=(1,1)
$$

zapisujemy prosty wektor, na przykład $(3,2)$, jako kombinację $av_1+bv_2$.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student ma:

1. rozstrzygać, czy podany wektor jest kombinacją wybranych kierunków;
2. porównywać przypadek kierunków niezależnych i równoległych;
3. wyznaczać współczynniki kombinacji liniowej w prostych bazach;
4. zapisywać ten sam wektor w dwóch bazach;
5. sprawdzać wynik przez odtworzenie wektora z kombinacji;
6. przygotować tabelę: „wektor geometryczny — baza — współrzędne”;
7. wyjaśnić, dlaczego współrzędne zależą od bazy, choć wektor się nie zmienia.

Jedno z zadań powinno zakończyć się krótką prezentacją przygotowaną przez studenta. W `solution.md` pozostają obliczenia, wizualizacja lub rysunek, kontrola wyniku i interpretacja.

---

### 6. Domknięcie wykładu — około 5 minut

#### Na wykładzie

Wracamy do jednej historii ruchu punktu i pokazujemy, że poznane pojęcia nie są osobnymi tematami:

- wektor zapisuje zmianę;
- dodawanie składa zmiany;
- skalar steruje ich wielkością i zwrotem;
- długość i iloczyn skalarny mierzą zmiany;
- rzut wydziela składową;
- baza pozwala budować każdą zmianę z podstawowych kierunków.

Student zapisuje końcową zasadę:

> Wektor jest matematycznym opisem zmiany, a współrzędne wektora są opisem tej zmiany względem wybranej bazy.

## Materiał opcjonalny w HTML

Uogólnienia trójwymiarowe i ogólna teoria przestrzeni liniowych mogą pozostać jako rozszerzenie. Iloczyn wektorowy nie jest częścią tego wykładu; pojawi się dopiero tam, gdzie będzie potrzebny do konstrukcji wektora normalnego płaszczyzny.

## Most do wykładu 03

Mamy już punkty oraz kierunki i potrafimy tworzyć ich kombinacje.

> Jak za pomocą punktu i dozwolonych kierunków generować całe obiekty geometryczne?