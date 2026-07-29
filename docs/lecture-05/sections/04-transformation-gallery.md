## A small gallery of transformations {#transformation-gallery}

The fastest way to learn elementary matrices is to connect each formula with a visible action. In the figure below, the faint grid is the original plane. The transformed grid and the small house show the result of one matrix.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">One matrix transforms the grid and every figure on it</span>
      <span class="figure-step-title" data-gallery-readout>identity — nothing changes</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open transformation gallery in full screen">⛶</button>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose a matrix transformation">
    <button class="curve-mode is-active" type="button" data-transform-mode="identity">Identity</button>
    <button class="curve-mode" type="button" data-transform-mode="stretch">Stretch</button>
    <button class="curve-mode" type="button" data-transform-mode="shear">Shear</button>
    <button class="curve-mode" type="button" data-transform-mode="reflection">Reflection</button>
    <button class="curve-mode" type="button" data-transform-mode="rotation">Rotation</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="transformation-gallery-board" class="jxgbox" data-transformation-gallery aria-label="Interactive gallery of elementary matrix transformations"></div>
  </div>
  <div class="relation-readout">
    <span data-gallery-matrix>$A=\begin{bmatrix}1&0\\0&1\end{bmatrix}$</span>
  </div>
  <figcaption class="figure-caption">Watch the basis arrows, grid lines and house together. They are three views of the same action.</figcaption>
</figure>

### Identity

$$
I=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
$$

leaves every vector unchanged.

### Horizontal stretch

$$
S=
\begin{bmatrix}
2&0\\
0&1
\end{bmatrix}
$$

sends $\mathbf e_1$ to $2\mathbf e_1$ and keeps $\mathbf e_2$ fixed. Widths double; heights do not.

### Shear

$$
H=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}
$$

keeps horizontal vectors horizontal but moves the top of a figure sideways. A square becomes a slanted parallelogram.

### Reflection in the vertical axis

$$
R_y=
\begin{bmatrix}
-1&0\\
0&1
\end{bmatrix}
$$

reverses the horizontal direction and keeps the vertical direction.

### Rotation through $90^\circ$ counterclockwise

$$
Q=
\begin{bmatrix}
0&-1\\
1&0
\end{bmatrix}.
$$

It sends

$$
\mathbf e_1\mapsto\mathbf e_2,
\qquad
\mathbf e_2\mapsto-\mathbf e_1.
$$

The matrix is reconstructed directly from these two destination vectors.
