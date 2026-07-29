## Rows meet columns: the indexed pattern {#product-columns}

Lecture 05 established that a matrix is determined by the destinations of the two basis vectors. We use that fact first, and then translate it into the indexed row-by-column rule.

For the product $AB$,

$$
(AB)\mathbf e_1=A(B\mathbf e_1),
\qquad
(AB)\mathbf e_2=A(B\mathbf e_2).
$$

The first column of $AB$ is the completed journey of $\mathbf e_1$. The second column is the completed journey of $\mathbf e_2$.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Construct the two columns separately</span>
      <span class="figure-step-title">One board for $\mathbf e_1$, one board for $\mathbf e_2$</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open the two basis-vector journeys in full screen">⛶</button>
  </div>
  <div class="relation-readout">
    <span>$B=\begin{bmatrix}1&1\\0&1\end{bmatrix}$</span>
    <span>$A=\begin{bmatrix}0&-1\\1&0\end{bmatrix}$</span>
    <span>$AB=\begin{bmatrix}0&-1\\1&1\end{bmatrix}$</span>
  </div>
  <div class="figure-stage stage-board-stage">
    <div class="stage-board-grid stage-board-grid--two">
      <section class="stage-card">
        <div class="stage-card-title">First column: journey of $\mathbf e_1$</div>
        <div id="basis-journey-e1-board" class="jxgbox stage-mini-board" data-basis-journey-e1-board aria-label="Journey of the first basis vector through B and A"></div>
        <div class="stage-card-math">$\mathbf e_1\overset{B}{\longmapsto}\begin{bmatrix}1\\0\end{bmatrix}\overset{A}{\longmapsto}\begin{bmatrix}0\\1\end{bmatrix}$</div>
      </section>
      <section class="stage-card">
        <div class="stage-card-title">Second column: journey of $\mathbf e_2$</div>
        <div id="basis-journey-e2-board" class="jxgbox stage-mini-board" data-basis-journey-e2-board aria-label="Journey of the second basis vector through B and A"></div>
        <div class="stage-card-math">$\mathbf e_2\overset{B}{\longmapsto}\begin{bmatrix}1\\1\end{bmatrix}\overset{A}{\longmapsto}\begin{bmatrix}-1\\1\end{bmatrix}$</div>
      </section>
    </div>
  </div>
  <figcaption class="figure-caption">The dashed orange arrow is the intermediate image under $B$. The solid coloured arrow is the final image under $A$. The two final arrows become the two columns of $AB$.</figcaption>
</figure>

For this example,

$$
(AB)\mathbf e_1=
\begin{bmatrix}0\\1\end{bmatrix},
\qquad
(AB)\mathbf e_2=
\begin{bmatrix}-1\\1\end{bmatrix}.
$$

Placing these vectors next to each other gives

$$
AB=
\left[
\begin{array}{c|c}
(AB)\mathbf e_1&(AB)\mathbf e_2
\end{array}
\right]
=
\begin{bmatrix}
0&-1\\
1&1
\end{bmatrix}.
$$

### Indexed notation

For the general rule, write

$$
A=(a_{ij}),
\qquad
B=(b_{ij}),
\qquad
C=AB=(c_{ij}).
$$

The index $i$ identifies a **row**, while $j$ identifies a **column**. Each entry $c_{ij}$ is built from row $i$ of $A$ and column $j$ of $B$.

<div class="matrix-pattern-board" aria-label="Colour coded row by column pattern for multiplying two by two matrices">
  <div class="matrix-pattern-equation">
    <div class="matrix-labelled">
      <span class="matrix-name">A =</span>
      <div class="matrix-grid-visual">
        <span class="matrix-cell matrix-row-one"><i>a</i><sub>11</sub></span>
        <span class="matrix-cell matrix-row-one"><i>a</i><sub>12</sub></span>
        <span class="matrix-cell matrix-row-two"><i>a</i><sub>21</sub></span>
        <span class="matrix-cell matrix-row-two"><i>a</i><sub>22</sub></span>
      </div>
    </div>

    <span class="matrix-operator">·</span>

    <div class="matrix-labelled">
      <span class="matrix-name">B =</span>
      <div class="matrix-grid-visual">
        <span class="matrix-cell matrix-col-one"><i>b</i><sub>11</sub></span>
        <span class="matrix-cell matrix-col-two"><i>b</i><sub>12</sub></span>
        <span class="matrix-cell matrix-col-one"><i>b</i><sub>21</sub></span>
        <span class="matrix-cell matrix-col-two"><i>b</i><sub>22</sub></span>
      </div>
    </div>

    <span class="matrix-operator">=</span>

    <div class="matrix-labelled">
      <span class="matrix-name">C =</span>
      <div class="matrix-grid-visual">
        <span class="matrix-cell matrix-result-r1c1"><i>c</i><sub>11</sub></span>
        <span class="matrix-cell matrix-result-r1c2"><i>c</i><sub>12</sub></span>
        <span class="matrix-cell matrix-result-r2c1"><i>c</i><sub>21</sub></span>
        <span class="matrix-cell matrix-result-r2c2"><i>c</i><sub>22</sub></span>
      </div>
    </div>
  </div>

  <div class="matrix-pattern-legend">
    <span class="matrix-pattern-chip matrix-pattern-chip--r1">row 1 of A</span>
    <span class="matrix-pattern-chip matrix-pattern-chip--r2">row 2 of A</span>
    <span class="matrix-pattern-chip matrix-pattern-chip--c1">column 1 of B</span>
    <span class="matrix-pattern-chip matrix-pattern-chip--c2">column 2 of B</span>
  </div>
</div>

### The four entries, one at a time

<div class="matrix-entry-grid">
  <article class="matrix-entry-card matrix-entry-card--r1c1">
    <div class="matrix-entry-label"><i>c</i><sub>11</sub>: row 1 × column 1</div>
    <div class="matrix-entry-formula">
      <span class="row-factor"><i>a</i><sub>11</sub></span>·<span class="column-factor"><i>b</i><sub>11</sub></span>
      +
      <span class="row-factor"><i>a</i><sub>12</sub></span>·<span class="column-factor"><i>b</i><sub>21</sub></span>
    </div>
  </article>

  <article class="matrix-entry-card matrix-entry-card--r1c2">
    <div class="matrix-entry-label"><i>c</i><sub>12</sub>: row 1 × column 2</div>
    <div class="matrix-entry-formula">
      <span class="row-factor"><i>a</i><sub>11</sub></span>·<span class="column-factor"><i>b</i><sub>12</sub></span>
      +
      <span class="row-factor"><i>a</i><sub>12</sub></span>·<span class="column-factor"><i>b</i><sub>22</sub></span>
    </div>
  </article>

  <article class="matrix-entry-card matrix-entry-card--r2c1">
    <div class="matrix-entry-label"><i>c</i><sub>21</sub>: row 2 × column 1</div>
    <div class="matrix-entry-formula">
      <span class="row-factor"><i>a</i><sub>21</sub></span>·<span class="column-factor"><i>b</i><sub>11</sub></span>
      +
      <span class="row-factor"><i>a</i><sub>22</sub></span>·<span class="column-factor"><i>b</i><sub>21</sub></span>
    </div>
  </article>

  <article class="matrix-entry-card matrix-entry-card--r2c2">
    <div class="matrix-entry-label"><i>c</i><sub>22</sub>: row 2 × column 2</div>
    <div class="matrix-entry-formula">
      <span class="row-factor"><i>a</i><sub>21</sub></span>·<span class="column-factor"><i>b</i><sub>12</sub></span>
      +
      <span class="row-factor"><i>a</i><sub>22</sub></span>·<span class="column-factor"><i>b</i><sub>22</sub></span>
    </div>
  </article>
</div>

The compact indexed rule is

$$
\boxed{
 c_{ij}
 =a_{i1}b_{1j}+a_{i2}b_{2j}
 =\sum_{k=1}^{2}a_{ik}b_{kj}
}
$$

<div class="matrix-index-note">
  <div><strong>$i$ chooses the row</strong>Use row $i$ of $A$ and place the result in row $i$ of $C$.</div>
  <div><strong>$j$ chooses the column</strong>Use column $j$ of $B$ and place the result in column $j$ of $C$.</div>
  <div><strong>$k$ runs through matching positions</strong>For $2\times2$ matrices, $k=1,2$, so every entry contains two products.</div>
</div>

Therefore

$$
AB=
\begin{bmatrix}
a_{11}b_{11}+a_{12}b_{21}&a_{11}b_{12}+a_{12}b_{22}\\
a_{21}b_{11}+a_{22}b_{21}&a_{21}b_{12}+a_{22}b_{22}
\end{bmatrix}.
$$

!!! interpretation "Row by column is the coordinate version of the column journey"
    Each column of $B$ is treated as an input vector for $A$. The indexed calculation computes the two coordinates of each output vector. The colours show which row of $A$ meets which column of $B$.