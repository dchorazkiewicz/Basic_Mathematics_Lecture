## When a transformation collapses dimensions {#collapse}

Not every matrix spreads the plane across another two-dimensional plane. Two different input directions may be sent into the same output direction.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">A plane can collapse to a line or a point</span>
      <span class="figure-step-title" data-collapse-readout>projection onto the horizontal axis</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open dimension-collapse figure in full screen">⛶</button>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose a collapsing transformation">
    <button class="curve-mode is-active" type="button" data-collapse-mode="projection">Projection</button>
    <button class="curve-mode" type="button" data-collapse-mode="same-line">Both columns on one line</button>
    <button class="curve-mode" type="button" data-collapse-mode="zero">Zero matrix</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="collapse-board" class="jxgbox" data-collapse-board aria-label="Interactive examples of matrices that collapse dimensions"></div>
  </div>
  <div class="relation-readout"><span data-collapse-matrix>$A=\begin{bmatrix}1&0\\0&0\end{bmatrix}$</span></div>
  <figcaption class="figure-caption">The original triangle has area. Its image under these matrices lies on a line or at one point.</figcaption>
</figure>

### Projection onto the horizontal axis

$$
P=
\begin{bmatrix}
1&0\\
0&0
\end{bmatrix}
$$

gives

$$
P
\begin{bmatrix}x\\y\end{bmatrix}
=
\begin{bmatrix}x\\0\end{bmatrix}.
$$

Every point is dropped vertically onto the horizontal axis. The vertical direction disappears because

$$
P\mathbf e_2=\mathbf0.
$$

### Two columns on the same line

For

$$
C=
\begin{bmatrix}
1&2\\
1&2
\end{bmatrix},
$$

both columns are multiples of $\begin{bmatrix}1\\1\end{bmatrix}$. Every output is therefore a multiple of that vector:

$$
C
\begin{bmatrix}x\\y\end{bmatrix}
=
(x+2y)
\begin{bmatrix}1\\1\end{bmatrix}.
$$

The whole plane is compressed onto one line.

### The zero matrix

$$
O=
\begin{bmatrix}
0&0\\
0&0
\end{bmatrix}
$$

sends every vector to the origin.

!!! interpretation "Loss of dimension means loss of information"
    After a plane has been collapsed to a line, many different inputs produce the same output. From the output alone, the original input cannot be recovered uniquely. Invertibility will be studied systematically in Lecture 07.
