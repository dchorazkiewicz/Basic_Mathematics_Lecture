# Wykład 04 — Conic Sections and Mathematical Models

## Rola wykładu w całym kursie

Pierwsze trzy wykłady zbudowały język opisu:

- współrzędne kodują punkty;
- wektory kodują zmiany i kierunki;
- równania generują proste i płaszczyzny.

Czwarty wykład ma pokazać, że ten aparat nie służy wyłącznie do opisu obiektów liniowych. Równania i parametry mogą organizować całe rodziny krzywych, a te krzywe mogą następnie występować w modelach rzeczywistych zjawisk.

Wykład nie jest katalogiem czterech osobnych stożkowych ani kursem mechaniki nieba.

## Główne pytanie

> Jak parametry organizują całe rodziny krzywych i jak odróżnić geometryczny kształt trajektorii od ruchu oraz prawa fizycznego, które ten ruch wyznacza?

## Centralne idee

1. Krzywa może być generowana przez parametr, ponieważ jej kierunek nie musi być stały.
2. Jeden parametr może sterować całą rodziną geometrycznych kształtów.
3. Kształt trajektorii, sposób poruszania się po niej i prawo fizyczne są trzema różnymi poziomami opisu.

## Zakładany czas

Około \(2\times45\) minut. Rachunki muszą pozostać elementarne. Dynamiczne wizualizacje mają wykonać znaczną część pracy związanej z rozpoznawaniem wpływu parametrów.

## Liniowy plan wykładu i ćwiczeń

### 1. Od prostej do krzywej parametrycznej — około 15 minut

#### Na wykładzie

Przypominamy prostą

\[
P(t)=P_0+tv.
\]

Stały wektor \(v\) oznacza stały kierunek. Taki mechanizm generuje prostą, ale nie może wygenerować trajektorii, której kierunek zmienia się w trakcie ruchu.

Wprowadzamy więc ogólniejszy zapis

\[
x=x(t),\qquad y=y(t).
\]

Parametr \(t\) porządkuje punkty krzywej. Może być tylko zmienną sterującą, ale w modelu ruchu może również oznaczać czas. Na tym etapie trzeba jawnie odróżnić:

- parametr wybierający punkt krzywej;
- czas jako wielkość fizyczną;
- sam geometryczny zbiór punktów.

#### Wizualizacja HTML

Najpierw punkt porusza się po prostej ze stałym kierunkiem. Następnie przełączamy zapis na

\[
x(t)=\cos t,\qquad y(t)=\sin t,
\]

a punkt zaczyna kreślić okrąg. Widoczne są aktualne wartości \(t,x(t),y(t)\) oraz ślad punktu.

#### Minimalny przykład

Dla \(t=0,\frac{\pi}{2},\pi,\frac{3\pi}{2}\) wyznaczamy cztery punkty okręgu jednostkowego. Nie rozwijamy jeszcze rachunku trygonometrycznego poza tymi wartościami.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student ma:

1. wygenerować tabele punktów dla kilku prostych krzywych parametrycznych;
2. narysować otrzymane krzywe;
3. porównać dwie różne parametryzacje tego samego zbioru punktów;
4. wskazać, które własności zależą od parametryzacji, a które od samej krzywej;
5. przygotować przykład, w którym zmiana zakresu parametru daje tylko fragment krzywej;
6. sprawdzić przez podstawienie, czy wygenerowane punkty spełniają odpowiednie równanie kartezjańskie.

W `solution.md` muszą znaleźć się tabela wartości, wykres, sprawdzenie równania i komentarz rozróżniający krzywą od sposobu jej parametryzowania.

---

### 2. Parametry sterujące położeniem, skalą i kształtem — około 15 minut

#### Na wykładzie

Pokazujemy, że litera w równaniu może pełnić różne role. Na prostym przykładzie elipsy

\[
\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1
\]

identyfikujemy:

- \((h,k)\) jako położenie środka;
- \(a,b\) jako skale w dwóch kierunkach.

Nie wyprowadzamy wzorów ani nie omawiamy wszystkich przypadków osobno. Celem jest nauczenie studentów czytania wpływu parametru na geometrię.

Następnie rozróżniamy dwa typy parametrów:

- parametr \(t\) lub \(\theta\), który wybiera punkt na jednej krzywej;
- parametr \(a,b,e,\ldots\), który zmienia całą krzywą lub rodzinę krzywych.

#### Wizualizacja HTML

Suwaki \(h,k,a,b\) sterują elipsą. Student ma kolejno przewidzieć, co zmieni każdy parametr, zanim suwak zostanie poruszony.

#### Minimalny przykład

Porównujemy

\[
\frac{x^2}{4}+y^2=1
\]

oraz

\[
\frac{(x-2)^2}{4}+(y+1)^2=1.
\]

Wykład ogranicza się do odczytania przesunięcia i skali z równania.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student ma:

1. rozpoznawać podstawowe postacie kartezjańskie okręgu, elipsy, paraboli i hiperboli;
2. odczytywać położenie i skalę z prostych równań;
3. przygotować serię wykresów pokazującą zmianę jednego parametru przy pozostałych ustalonych;
4. opisać słownie wpływ każdego parametru;
5. znaleźć przykład dwóch różnych równań, których wykresy różnią się tylko przesunięciem;
6. sprawdzić wybrane punkty przez podstawienie do równania.

W workbooku pozostają wykresy, tabela „parametr — efekt geometryczny”, sprawdzenia punktów i krótki wniosek. Techniczna klasyfikacja ogólnego równania drugiego stopnia nie należy do tego bloku.

---

### 3. Opis radialny i jedna rodzina stożkowych — około 25 minut

#### Na wykładzie

Dla zjawiska z wyróżnionym centrum naturalny jest opis przez:

- kierunek wybrany kątem \(\theta\);
- odległość \(r\) od wyróżnionego punktu.

Przejście

\[
x=r\cos\theta,\qquad y=r\sin\theta
\]

jest interpretowane geometrycznie. Kąt wybiera półprostą, a promień wybiera punkt na tej półprostej.

Następnie pokazujemy rodzinę

\[
r(\theta)=\frac{p}{1+e\cos\theta}
\]

w jednej ustalonej orientacji. Nie skupiamy się na przekształceniach wzoru. Najważniejsza jest obserwacja dynamiczna:

- \(e=0\) — okrąg;
- \(0<e<1\) — elipsa;
- \(e=1\) — parabola;
- \(e>1\) — hiperbola.

Student ma zobaczyć, że cztery nazwy opisują jakościowo różne stany jednej rodziny kontrolowanej przez parametr \(e\).

#### Wizualizacja HTML

Jedna zintegrowana animacja:

- suwak steruje \(e\);
- aktualny promień \(r(\theta)\) jest rysowany od ogniska;
- punkt kreśli krzywą;
- obok widoczne są wartość \(e\), typ stożkowej i aktualne równanie.

Animację zatrzymujemy przed wartościami granicznymi \(e=1\), aby student najpierw przewidział zmianę typu krzywej.

#### Minimalny przykład

Dla ustalonego \(p\) obliczamy ręcznie tylko kilka wartości \(r(\theta)\) dla prostych kątów, na przykład \(\theta=0\) i \(\theta=\pi\). Celem jest odczytanie, co robi wzór, nie ręczne kreślenie całej krzywej.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student ma:

1. obliczyć wybrane wartości \(r(\theta)\) dla kilku mimośrodów;
2. przygotować tabelę porównującą przypadki \(e=0\), \(0<e<1\), \(e=1\), \(e>1\);
3. wygenerować lub narysować odpowiadające krzywe;
4. opisać, co dzieje się z kształtem przy zbliżaniu się \(e\) do \(1\) z obu stron;
5. porównać opis radialny z prostym opisem kartezjańskim tej samej krzywej;
6. wyjaśnić, dlaczego opis radialny jest naturalny przy wyróżnionym centrum;
7. przygotować prostą interaktywną wizualizację albo sekwencję czterech dobrze opisanych rysunków.

W `solution.md` pozostają obliczenia kontrolne, tabela klasyfikacji, wykresy i interpretacja roli mimośrodu. Kod lub wizualizacja wygenerowana przy pomocy AI musi zostać sprawdzona na konkretnych wartościach i opatrzona komentarzem studenta.

---

### 4. Ognisko, kierownica i geometryczny sens mimośrodu — około 15 minut

#### Na wykładzie

Definicja ognisko–kierownica nie rozpoczyna wykładu. Pojawia się dopiero po zobaczeniu rodziny radialnej, aby nadać parametrowi \(e\) znaczenie geometryczne.

Dla punktu \(P\) stożkowej porównujemy:

- odległość od ogniska \(F\);
- odległość od kierownicy \(d(P,l)\).

Mimośród jest stałym stosunkiem

\[
\frac{d(P,F)}{d(P,l)}=e.
\]

Na wykładzie pokazujemy tę zależność na jednym punkcie i animujemy ruch punktu po krzywej. Student obserwuje, że obie odległości się zmieniają, ale ich stosunek pozostaje stały.

Nie przeprowadzamy pełnego algebraicznego wyprowadzenia równania każdej stożkowej.

#### Wizualizacja HTML

Ognisko, kierownica, ruchomy punkt \(P\), dwa odcinki reprezentujące odległości oraz dynamicznie wyświetlany ich iloraz.

#### Minimalny przykład

Wybieramy prostą konfigurację paraboli, dla której \(e=1\). Student widzi równość odległości od ogniska i kierownicy.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student ma:

1. sprawdzić warunek ognisko–kierownica dla kilku punktów na podanej krzywej;
2. porównać przypadki \(e<1\), \(e=1\) i \(e>1\);
3. przygotować rysunek z poprawnie zaznaczonymi odległościami;
4. wyjaśnić, dlaczego sam kształt rysunku nie wystarcza do ustalenia wartości \(e\);
5. odtworzyć jakościowo krzywą na podstawie zadanego ogniska, kierownicy i mimośrodu;
6. wskazać, które elementy definicji są geometryczne, a które zależą od wybranego układu współrzędnych.

W workbooku pozostają obliczenia odległości, tabela ilorazów, rysunek i wniosek o stałości mimośrodu.

---

### 5. Stożkowe jako trajektorie w modelu grawitacyjnym — około 15 minut

#### Na wykładzie

Po zbudowaniu rodziny geometrycznej pokazujemy, że stożkowe występują jako możliwe trajektorie w idealizowanym problemie dwóch ciał.

Prowadzący musi jawnie rozdzielić trzy poziomy:

1. **kształt geometryczny** — zbiór punktów tworzących stożkową;
2. **ruch po trajektorii** — zależność położenia od czasu;
3. **prawo fizyczne** — założenia o ruchu i oddziaływaniu, z których trajektoria wynika.

Na tym wykładzie nie wyprowadzamy praw Keplera ani równania ruchu. Pokazujemy tylko jakościową klasyfikację:

- orbity związane — elipsy, z okręgiem jako przypadkiem szczególnym;
- przypadek graniczny — parabola;
- trajektorie niezwiązane — hiperbole.

Nie wolno sugerować, że sama definicja stożkowej stanowi teorię grawitacji.

#### Wizualizacja HTML

Ciało centralne i kilka trajektorii. Przełącznik zmienia typ krzywej, a obok widoczne są etykiety:

- model geometryczny;
- parametr kształtu;
- informacja jakościowa o ruchu.

Ruch punktu po krzywej może być pokazany wyłącznie ilustracyjnie, bez twierdzenia, że jego prędkość odpowiada pełnemu rozwiązaniu fizycznemu.

#### Minimalny przykład

Porównujemy elipsę i hiperbolę jako dwa jakościowo różne typy trajektorii względem ciała centralnego. Nie wykonujemy rachunku energii.

#### Bezpośrednia kontynuacja na ćwiczeniach

Student ma:

1. przypisać podane trajektorie do typów stożkowych;
2. rozdzielić informacje opisujące kształt, parametryzację i prawo fizyczne;
3. wskazać założenia idealizowanego modelu dwóch ciał;
4. wyjaśnić, czego model nie uwzględnia;
5. porównać statyczne równanie elipsy z przykładową parametryzacją ruchu po elipsie;
6. przygotować krótką notatkę „krzywa nie jest prawem ruchu”;
7. przedstawić jeden przypadek na ćwiczeniach, używając rysunku i nie więcej niż dwóch podstawowych wzorów.

W `solution.md` muszą pozostać: klasyfikacja, tabela trzech poziomów modelu, lista założeń i krótka interpretacja fizyczna bez nieuzasadnionych wniosków.

---

### 6. Domknięcie pierwszego bloku — około 5 minut

#### Na wykładzie

Wracamy do narracji pierwszych czterech spotkań:

1. geometria istniała przed liczbami;
2. współrzędne zakodowały punkty;
3. wektory zakodowały zmiany;
4. punkty i kierunki wygenerowały obiekty liniowe;
5. parametry i równania zaczęły organizować rodziny krzywych;
6. te krzywe mogą występować jako elementy modeli świata fizycznego.

Student zapisuje dwie końcowe zasady:

> Parametr może wybierać punkt jednej krzywej albo zmieniać kształt całej rodziny krzywych.

> Model matematyczny łączy obiekty i zależności na podstawie określonych założeń; nie jest samym zjawiskiem fizycznym.

## Materiał opcjonalny w HTML

Jako materiał rozszerzający mogą pozostać:

- pełne wyprowadzenie równań z definicji ognisko–kierownica;
- klasyfikacja ogólnego równania drugiego stopnia;
- szczegółowe prawa Keplera;
- wyprowadzenie orbit z równań ruchu;
- dodatkowe warianty orientacji równania radialnego.

Żaden z tych elementów nie jest wymagany do zamknięcia obowiązkowej narracji wykładu.

## Most do wykładu 05

Pierwszy blok pokazał, jak opisywać obiekty i rodziny obiektów. Kolejne pytanie dotyczy już nie samych figur, lecz działań wykonywanych jednocześnie na całej przestrzeni:

> Jak zapisać jedną regułę, która przekształca wszystkie punkty i wektory?