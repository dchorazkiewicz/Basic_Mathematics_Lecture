## The columns show where the basis vectors go {#basis-images}

Recall the standard basis vectors

$$
\mathbf e_1=
\begin{bmatrix}1\\0\end{bmatrix},
\qquad
\mathbf e_2=
\begin{bmatrix}0\\1\end{bmatrix}.
$$

Apply the matrix

$$
A=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
$$

to each basis vector:

$$
A\mathbf e_1
=
\begin{bmatrix}
a\\c
\end{bmatrix},
\qquad
A\mathbf e_2
=
\begin{bmatrix}
b\\d
\end{bmatrix}.
$$

These are exactly the two columns of the matrix.

!!! interpretation "Read a matrix as two destination arrows"
    - the first column is the image of $\mathbf e_1$;
    - the second column is the image of $\mathbf e_2$.

    Once these two arrows are known, the action on every other vector is determined.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Build the matrix by moving its two columns</span>
      <span class="figure-step-title" data-basis-matrix-readout>$A=\begin{bmatrix}2&1\\0&1\end{bmatrix}$</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open basis-image transformation in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="basis-image-board" class="jxgbox" data-basis-image-board aria-label="Interactive transformed grid with draggable images of the basis vectors"></div>
  </div>
  <div class="relation-readout">
    <span>Drag the endpoints of $A\mathbf e_1$ and $A\mathbf e_2$. The entire grid and unit square follow those two choices.</span>
  </div>
  <figcaption class="figure-caption">The columns are not merely stored numbers. They are the two vectors that generate the transformed coordinate grid.</figcaption>
</figure>

The original unit square has vertices

$$
\mathbf 0,\quad \mathbf e_1,\quad \mathbf e_2,\quad \mathbf e_1+\mathbf e_2.
$$

After applying $A$, its vertices become

$$
\mathbf 0,\quad A\mathbf e_1,\quad A\mathbf e_2,\quad A\mathbf e_1+A\mathbf e_2.
$$

Therefore a unit square usually becomes a parallelogram. The picture is obtained by the same vector addition already used in Lecture 02.
