# Wykład 13 — Synthesis and Applications

## Status tej części planu

Ten wykład jest przewidziany jako osobna, końcowa synteza kursu. Powinien zostać przeprowadzony, jeśli pozwoli na to czas. Jeśli czasu zabraknie, kurs pozostaje merytorycznie kompletny po wykładzie o całce, ale traci wyraźne domknięcie pokazujące współpracę wszystkich wcześniej wprowadzonych idei.

Wykład nie ma uczyć kolejnego dużego działu ani nowych skomplikowanych metod. Jego celem jest uzasadnienie całej konstrukcji kursu i pokazanie, że geometria analityczna, algebra liniowa oraz analiza matematyczna nie są trzema osobnymi katalogami narzędzi.

## Rola wykładu w całym kursie

Pierwszy blok nauczył opisywać obiekty i modele geometryczne. Drugi blok nauczył opisywać działania na tych obiektach oraz rozwiązywać problemy odwrotne. Trzeci blok nauczył opisywać zachowanie asymptotyczne, zmianę lokalną i akumulację globalną.

Ostatni wykład ma połączyć te trzy warstwy w jednym prostym modelu. Student nie musi opanować nowej techniki. Powinien zobaczyć architekturę matematycznego opisu:

1. wybieramy obiekty i współrzędne,
2. zapisujemy relacje i przekształcenia,
3. opisujemy zmianę w czasie lub w przestrzeni,
4. wykorzystujemy dane do odzyskiwania nieznanych wielkości,
5. sumujemy lokalne skutki,
6. interpretujemy wynik w kontekście modelowanego zjawiska.

## Główne pytanie

> Jak geometria, algebra liniowa i analiza współpracują przy opisie jednego rzeczywistego zjawiska?

## Centralna idea

> Model matematyczny łączy opis stanu, prawa przekształceń, lokalne tempo zmiany i globalną akumulację w jeden spójny mechanizm.

Druga główna idea brzmi:

> Matematyczne pojęcia nabierają pełnego znaczenia nie wtedy, gdy występują osobno, lecz wtedy, gdy pozwalają przechodzić między obserwacją, modelem, obliczeniem i przewidywaniem.

## Proponowana główna historia: ruch po trajektorii

Najbardziej naturalnym przykładem jest ruch punktu lub ciała po krzywej w płaszczyźnie. Przykład powinien być elementarny rachunkowo. Można wykorzystać okrąg albo prostą elipsę, dzięki czemu wykład wraca do stożkowych i modelowania z wykładu czwartego.

Położenie zapisujemy jako funkcję czasu:

\[
r(t)=
\begin{bmatrix}
x(t)\\
y(t)
\end{bmatrix}.
\]

Ten jeden zapis pozwala kolejno przywołać główne idee kursu.

### 1. Geometria i współrzędne: jak zapisujemy stan

Punkt na trajektorii jest obiektem geometrycznym. Współrzędne nadają mu liczbowy opis zależny od wybranego układu odniesienia.

Trajektoria nie jest tylko rysunkiem. Jest zbiorem punktów generowanych przez parametr \(t\). W zastosowaniu fizycznym parametr może oznaczać czas.

Należy przypomnieć zasadę:

> Zmiana reprezentacji nie zmienia samego obiektu.

### 2. Wektory: jak zapisujemy zmianę stanu

Różnica

\[
r(t+\Delta t)-r(t)
\]

opisuje zmianę położenia w skończonym przedziale czasu.

Wektor oddziela zmianę od konkretnego miejsca zaczepienia. Jego kierunek i długość mają bezpośrednie znaczenie dla ruchu.

### 3. Granica i pochodna: jak przechodzimy do zmiany chwilowej

Średnia prędkość ma postać

\[
\frac{r(t+\Delta t)-r(t)}{\Delta t}.
\]

Prędkość chwilowa powstaje przez granicę:

\[
v(t)=r'(t).
\]

Wektor prędkości jest styczny do trajektorii. Druga pochodna

\[
a(t)=r''(t)
\]

opisuje zmianę prędkości.

Nie należy wybierać funkcji prowadzących do trudnego różniczkowania. Celem jest zobaczenie przejścia od położenia do prędkości i przyspieszenia.

### 4. Macierze: jak zmienia się opis całego ruchu

Obrót lub skalowanie układu może być opisane macierzą \(A\):

\[
\widetilde r(t)=Ar(t).
\]

Wtedy, dla stałej macierzy,

\[
\widetilde v(t)=Av(t).
\]

Ta zależność pokazuje, że macierz działa nie tylko na pojedynczy punkt, ale także na lokalne kierunki ruchu.

Można pokazać na animacji tę samą trajektorię i jej obraz po prostym obrocie albo skalowaniu. Liczby w macierzy, siatka współrzędnych, położenie oraz wektor prędkości powinny zmieniać się równocześnie.

### 5. Układy równań: jak odzyskujemy nieznane wielkości z obserwacji

Załóżmy, że trajektoria ma prostą postać zależną od kilku nieznanych parametrów. Kilka pomiarów położenia może prowadzić do układu równań liniowych.

Układ nie powinien być duży. Wystarczy przykład z dwiema niewiadomymi, w którym student widzi:

- dane pomiarowe jako znany skutek,
- parametry modelu jako nieznane wejście,
- macierz jako sposób mieszania tych parametrów,
- rozwiązanie jako odzyskanie modelu z obserwacji.

W ten sposób wraca interpretacja \(Ax=b\) jako problemu odwrotnego.

### 6. Całka: jak z lokalnej zmiany odzyskujemy efekt globalny

Z prędkości odtwarzamy zmianę położenia:

\[
r(b)-r(a)=\int_a^b v(t)\,dt.
\]

Długość przebytej drogi jest związana z całką

\[
\int_a^b \|v(t)\|\,dt.
\]

Należy wyraźnie odróżnić przemieszczenie od drogi. Pierwsze jest wektorem efektu końcowego, drugie sumuje długości lokalnych fragmentów ruchu.

### 7. Powrót do stożkowych i modelu grawitacyjnego

Jeśli głównym przykładem jest elipsa, można wrócić do wykładu czwartego. Wtedy student widzi dwa poziomy opisu:

- równanie stożkowej opisuje geometryczny kształt możliwej trajektorii,
- funkcja \(r(t)\) opisuje ruch po tej trajektorii.

Granice, pochodne i całki dodają do statycznego kształtu informacje o czasie, prędkości, przyspieszeniu i akumulacji ruchu.

Nie należy przeprowadzać pełnego wyprowadzenia praw Keplera ani rozwiązywać równania ruchu. Trzeba jasno powiedzieć, że fizyczna trajektoria wynika z przyjętego modelu sił i ruchu. Stożkowa nie jest sama z siebie teorią grawitacji.

## Drugie możliwe spojrzenie: od lokalnej liniowości do dalszej matematyki

Na końcu można krótko pokazać, że pochodna funkcji wielu zmiennych jest macierzą opisującą lokalne przekształcenie liniowe.

Nie należy rozwijać formalnej teorii pochodnej wielowymiarowej. Wystarczy wskazać strukturę:

- funkcja może nieliniowo przekształcać płaszczyznę,
- w bardzo małym otoczeniu punktu jej działanie jest przybliżane macierzą,
- wyznacznik tej macierzy opisuje lokalną zmianę pola,
- całkowanie pozwala składać lokalne informacje w wynik globalny.

To jest naturalne domknięcie kursu i zapowiedź geometrii różniczkowej, równań różniczkowych oraz bardziej zaawansowanego modelowania.

## Proponowana struktura wykładu

### Część I — jeden konkretny model

Najpierw prowadzimy jeden przykład ruchu po prostej krzywej od początku do końca. Wszystkie potrzebne rachunki powinny być krótkie i wykonywane na prostych funkcjach.

### Część II — mapa pojęć

Następnie jawnie pokazujemy zależności:

- współrzędne opisują stan,
- wektory opisują zmianę,
- równania i parametry opisują trajektorię,
- macierze opisują zmianę całego układu,
- układy równań odzyskują parametry z danych,
- granice nadają sens zmianie chwilowej,
- pochodne opisują lokalną dynamikę,
- całki składają lokalne wkłady w efekt globalny.

### Część III — czego ten kurs nie kończy

Na zakończenie warto pokazać pytania prowadzące dalej:

- Jak prawo siły wyznacza całą trajektorię? — równania różniczkowe.
- Jak różniczkować funkcje wielu zmiennych? — analiza wielowymiarowa.
- Jak badać zakrzywione przestrzenie? — geometria różniczkowa.
- Jak odzyskiwać modele z dużej liczby danych? — metody numeryczne, statystyka i analiza danych.

Nie są to nowe tematy do nauczenia. Mają pokazać, że ukończony kurs zbudował rzeczywisty fundament dalszej matematyki.

## Rola wizualizacji HTML

Ten wykład powinien najmocniej wykorzystać format HTML. Jedna zintegrowana wizualizacja może pokazywać:

- punkt poruszający się po trajektorii,
- jego współrzędne,
- wektor położenia,
- wektor prędkości,
- wartość parametru czasu,
- obraz po zastosowaniu macierzy,
- akumulowane przemieszczenie lub drogę.

Elementy powinny pojawiać się etapami. Nie należy od razu pokazywać wszystkiego na jednym przeładowanym ekranie.

## Zakres i dyscyplina

Wykład nie może stać się zbiorem wielu zastosowań. Jeden dobrze przeprowadzony model jest lepszy niż pięć pobieżnych przykładów.

Nie należy wprowadzać nowych technik rachunkowych. Wszystkie rachunki mają wykorzystywać metody poznane wcześniej i być możliwie elementarne.

Trzeba odróżniać:

- model matematyczny od rzeczywistego zjawiska,
- dokładny wynik modelu od jakościowej ilustracji,
- zmianę współrzędnych od zmiany obiektu,
- trajektorię geometryczną od prawa ruchu po tej trajektorii.

## Co student powinien zapamiętać

> Geometria opisuje obiekty i trajektorie, algebra liniowa opisuje działania i zmianę reprezentacji, granica umożliwia przejście do zmiany chwilowej, pochodna opisuje lokalne zachowanie, a całka składa lokalne efekty w wynik globalny.

oraz:

> Matematyka staje się narzędziem modelowania wtedy, gdy te idee są używane razem do przechodzenia od obserwacji do opisu, obliczenia i przewidywania.

## Domknięcie całego kursu

Pełna narracja kursu prowadzi przez trzy etapy:

1. **Opis obiektów:** współrzędne, wektory, proste, płaszczyzny i krzywe.
2. **Opis działań:** macierze, składanie, odwracalność i problemy odwrotne.
3. **Opis zmiany ciągłej:** ciągi, granice funkcji, pochodna i całka.

Wykład końcowy pokazuje, że te etapy nie są odrębnymi częściami programu, lecz kolejnymi warstwami jednego języka matematycznego.
