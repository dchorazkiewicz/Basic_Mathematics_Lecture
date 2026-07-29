## The columns of the product are two completed journeys {#product-columns}

Recall from Lecture 05 that a matrix is determined by the images of $\mathbf e_1$ and $\mathbf e_2$.

For the composition $AB$,

$$
(AB)\mathbf e_1=A(B\mathbf e_1),
\qquad
(AB)\mathbf e_2=A(B\mathbf e_2).
$$

Therefore:

- the first column of $AB$ is obtained by sending the first column of $B$ through $A$;
- the second column of $AB$ is obtained by sending the second column of $B$ through $A$.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Build $AB$ by following the two basis vectors</span>
      <span class="figure-step-title" data-basis-journey-title>each column completes two stages</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open basis-vector composition figure in full screen">⛶</button>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose a matrix pair">
    <button class="curve-mode is-active" type="button" data-basis-journey-preset="shear-rotate">Shear → rotate</button>
    <button class="curve-mode" type="button" data-basis-journey-preset="stretch-shear">Stretch → shear</button>
    <button class="curve-mode" type="button" data-basis-journey-preset="reflect-rotate">Reflect → rotate</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="basis-journey-board" class="jxgbox" data-basis-journey-board aria-label="Basis vectors followed through two transformations"></div>
  </div>
  <div class="relation-readout">
    <span data-basis-journey-matrices>$AB=\begin{bmatrix}0&-1\\1&1\end{bmatrix}$</span>
  </div>
  <figcaption class="figure-caption">Orange arrows show the columns of $B$. Blue and green arrows show where $A$ sends those columns; they are the columns of $AB$.</figcaption>
</figure>

Algebraically, the first column is

$$
A
\begin{bmatrix}
e\\g
\end{bmatrix}
=
\begin{bmatrix}
ae+bg\\
ce+dg
\end{bmatrix},
$$

and the second column is

$$
A
\begin{bmatrix}
f\\h
\end{bmatrix}
=
\begin{bmatrix}
af+bh\\
cf+dh
\end{bmatrix}.
$$

Placing these two output columns next to each other gives the usual multiplication formula.
