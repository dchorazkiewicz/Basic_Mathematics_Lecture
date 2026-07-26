# Model realizacji wykładu i workbooku

## Cel dokumentu

Ten dokument oddziela dwa poziomy projektowania kursu:

1. **plan matematyczny** — jakie pytania stawiamy, jakie pojęcia wprowadzamy i jak łączą się one w narrację całego kursu;
2. **plan realizacji dydaktycznej** — co rzeczywiście zostaje pokazane podczas wykładu, co jest jedynie zasygnalizowane, co student rozwija na ćwiczeniach oraz jaki konkretny rezultat ma umieścić w swoim workbooku.

Wykład HTML i workbook studenta są dwiema częściami jednego procesu. Wykład ma pokazać, dlaczego dane pojęcie powstaje, jak działa i jak je prezentować. Workbook ma zmusić studenta do samodzielnego odtworzenia, sprawdzenia, rozwinięcia i zapisania tej idei.

Zakładamy wykład o czasie około \(2\times45\) minut. Strona HTML może zawierać więcej materiału niż zostanie omówione ustnie. Nie każda sekcja strony musi otrzymać ten sam status dydaktyczny.

## Cztery poziomy realizacji treści

Każdy element planu należy oznaczyć jednym z poniższych poziomów.

### Poziom A — rdzeń rozwijany w całości na wykładzie

Treść otrzymuje pełną sekwencję dydaktyczną:

1. pytanie lub problem motywujący;
2. obserwację albo animację;
3. sformułowanie pojęcia;
4. zapis matematyczny;
5. jeden elementarny przykład;
6. interpretację wyniku.

Na jednym wykładzie powinny znajdować się najwyżej dwie lub trzy idee poziomu A.

### Poziom B — rozwinięcie sterowane

Treść zostaje pokazana na wykładzie, ale nie jest w pełni przećwiczona. Prowadzący:

- wskazuje potrzebę pojęcia;
- pokazuje jedną wizualizację lub jeden przypadek;
- podaje podstawowy zapis;
- mówi, jakie elementy będą rozwijane na ćwiczeniach.

Student powinien rozumieć sens pojęcia, lecz sprawność techniczną zdobywa później.

### Poziom C — sygnalizacja i przekazanie do workbooku

Treść zostaje nazwana i osadzona w narracji, ale jej właściwe opracowanie należy do studentów. Na wykładzie trzeba wyraźnie powiedzieć:

- po co temat jest potrzebny;
- z jakich wcześniejszych idei wynika;
- jaki problem student ma rozwiązać;
- jaki rezultat ma przygotować w workbooku.

Samo wymienienie terminu bez określenia dalszej pracy nie jest wystarczające.

### Poziom D — materiał opcjonalny lub rozszerzający

Treść może pozostać na stronie HTML, lecz nie jest częścią obowiązkowej realizacji ustnej. Powinna być jawnie oznaczona jako:

- rozszerzenie;
- materiał zależny od czasu;
- przygotowanie do dalszej matematyki;
- dodatkowa praca dla zainteresowanych.

## Standardowa sekwencja pojedynczej idei na wykładzie

Każda główna idea powinna być projektowana w następującej kolejności.

### 1. Sytuacja przed definicją

Student najpierw widzi problem, którego dotychczasowy język nie rozwiązuje. Nie podajemy terminu przed pojawieniem się potrzeby.

### 2. Obserwacja sterowana

Animacja, rysunek lub prosty eksperyment numeryczny ujawnia regularność. Prowadzący zadaje pytania, a nie tylko opisuje ekran.

### 3. Nazwanie struktury

Dopiero po obserwacji pojawia się termin matematyczny oraz zapis formalny.

### 4. Jeden elementarny przykład

Przykład ma izolować jedną trudność pojęciową. Dane powinny być tak dobrane, aby rachunek nie zasłaniał struktury.

### 5. Granica obowiązkowej realizacji

Prowadzący jawnie wskazuje, co zostało pokazane w pełni, a co zostaje przekazane do ćwiczeń.

### 6. Zadanie kontynuacyjne

Student otrzymuje zadanie, które nie powtarza mechanicznie przykładu z wykładu, lecz wymaga samodzielnego odtworzenia idei na nowym, nadal prostym przypadku.

## Didaskalia dla wykładu HTML

Każda część planu realizacyjnego powinna zawierać następujące pola.

### Co student widzi

Dokładny opis rysunku, animacji, tabeli, zmiennego parametru lub kolejnych stanów ekranu.

### Co robi prowadzący

Kolejność pytań, moment zatrzymania animacji, miejsce wprowadzenia definicji oraz informacja, czego jeszcze nie należy formalizować.

### Co student ma przewidzieć lub powiedzieć

Krótka aktywność poznawcza: przewidzenie wyniku, porównanie dwóch przypadków, wskazanie cechy niezmiennej albo sformułowanie obserwacji własnymi słowami.

### Minimalny zapis do notatek

Najkrótszy zestaw informacji, który powinien znaleźć się w notatkach studenta:

- jedno zdanie interpretacyjne;
- podstawowa definicja lub wzór;
- jeden rysunek albo schemat;
- jeden przykład.

Notatki nie powinny być mechanicznym przepisaniem całej strony HTML.

### Punkt przekazania do ćwiczeń

Zdanie, którym prowadzący zamyka część wykładu i określa dalszą pracę, na przykład:

> Na wykładzie zobaczyliśmy, dlaczego ten warunek opisuje zjawisko. Na ćwiczeniach sprawdzicie go na kilku przypadkach, przygotujecie własną wizualizację i zapiszecie krótkie uzasadnienie.

## Struktura zadania w przyszłym workbooku

Każde zadanie rozwijające temat z wykładu powinno mieć następujące elementy.

### 1. Cel matematyczny

Jednoznacznie wskazuje pojęcie lub zależność, którą student ma opracować.

### 2. Dane początkowe

Prosty przypadek, wzór, rysunek, tabela albo fragment kodu. Dane muszą pozwalać skupić się na idei, nie na długim rachunku.

### 3. Czynności obowiązkowe

Polecenia powinny używać czasowników opisujących rzeczywistą pracę:

- oblicz;
- narysuj;
- porównaj;
- przewidź;
- sprawdź;
- znajdź kontrprzykład;
- wyjaśnij;
- przygotuj wizualizację;
- sformułuj wniosek;
- przedstaw rozwiązanie.

### 4. Obowiązkowy rezultat w pliku `solution.md`

Student musi wiedzieć, co ma pozostać w repozytorium. W zależności od zadania rezultat obejmuje:

- pełny rachunek;
- krótki opis metody;
- wykres lub rysunek;
- tabelę porównawczą;
- jedno- lub dwuzdaniową interpretację;
- wskazanie założeń;
- sprawdzenie wyniku;
- wniosek końcowy.

### 5. Element weryfikacji

Każde zadanie konceptualne powinno wymagać co najmniej jednej kontroli:

- podstawienia wyniku;
- porównania z rysunkiem;
- zbadania drugiego przykładu;
- wskazania przypadku, w którym obserwacja przestaje działać;
- porównania dwóch metod.

### 6. Element prezentacyjny

Wybrane zadania powinny kończyć się krótką prezentacją rozwiązania. Student ma umieć:

- wskazać pytanie;
- pokazać najważniejszy rysunek lub obliczenie;
- sformułować wniosek;
- odpowiedzieć na jedno pytanie kontrolne.

### 7. Użycie AI

AI może służyć do przygotowania pierwszej wersji wyjaśnienia, wizualizacji lub kodu, ale zadanie musi wymagać:

1. sprawdzenia wyniku na konkretnych danych;
2. wskazania co najmniej jednego ograniczenia lub możliwej nieścisłości;
3. poprawienia materiału;
4. napisania końcowego komentarza własnymi słowami.

Samo wklejenie odpowiedzi wygenerowanej przez AI nie realizuje zadania.

## Typy zadań workbookowych

### Typ R — rachunkowe

Budują techniczną sprawność na prostych i stopniowo trudniejszych przykładach.

### Typ I — interpretacyjne

Wymagają odczytania znaczenia wzoru, wykresu, parametru albo warunku.

### Typ W — wizualizacyjne

Student przygotowuje lub poprawia rysunek, animację, tabelę albo sekwencję stanów.

### Typ A — argumentacyjne

Student porównuje przypadki, uzasadnia wniosek, znajduje kontrprzykład albo wyjaśnia, dlaczego dana intuicja jest niewystarczająca.

### Typ M — modelowe

Student przechodzi od opisu sytuacji do obiektów matematycznych, wykonuje obliczenie i interpretuje wynik.

Jeden zestaw ćwiczeniowy powinien łączyć kilka typów. Pierwsze zadania mogą rozwijać technikę, ale dalsza część zestawu powinna wymagać interpretacji, wizualizacji, argumentacji i prezentacji.

## Zasada hierarchii treści

Dla każdego wykładu plan realizacyjny musi odpowiedzieć na pięć pytań:

1. Co musi zostać przeżyte i zrozumiane na wykładzie?
2. Co wystarczy pokazać raz i rozwinąć później?
3. Co zostaje tylko nazwane i przekazane do workbooku?
4. Jakie konkretne czynności wykona student?
5. Jaki trwały rezultat pozostanie w jego repozytorium?

Dopiero po zapisaniu tych odpowiedzi można tworzyć właściwą stronę HTML i odpowiadający jej zestaw workbookowy.
