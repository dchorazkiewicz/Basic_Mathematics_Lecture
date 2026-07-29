## The columns of the product are two completed journeys {#product-columns}

Lecture 05 established that a matrix is determined by the destinations of the two basis vectors. We use that fact again.

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

### The general column rule

Write

$$
A=
\begin{bmatrix}
a&b\\c&d
\end{bmatrix},
\qquad
B=
\begin{bmatrix}
e&f\\g&h
\end{bmatrix}
=
\left[
\begin{array}{c|c}
\mathbf b_1&\mathbf b_2
\end{array}
\right].
$$

Then

$$
AB=
\left[
\begin{array}{c|c}
A\mathbf b_1&A\mathbf b_2
\end{array}
\right].
$$

The first column is

$$
A\mathbf b_1
=
\begin{bmatrix}
a&b\\c&d
\end{bmatrix}
\begin{bmatrix}
e\\g
\end{bmatrix}
=
\begin{bmatrix}
ae+bg\\ce+dg
\end{bmatrix},
$$

and the second column is

$$
A\mathbf b_2
=
\begin{bmatrix}
a&b\\c&d
\end{bmatrix}
\begin{bmatrix}
f\\h
\end{bmatrix}
=
\begin{bmatrix}
af+bh\\cf+dh
\end{bmatrix}.
$$

Therefore

$$
AB=
\begin{bmatrix}
ae+bg&af+bh\\
ce+dg&cf+dh
\end{bmatrix}.
$$

!!! interpretation "Row by column is the coordinate version of the column journey"
    Each column of $B$ is treated as an input vector for $A$. The familiar row-by-column calculation simply computes the coordinates of those two output vectors.