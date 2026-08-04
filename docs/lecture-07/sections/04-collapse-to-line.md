## Collapse from two dimensions to one {#collapse-to-line}

Consider

$$
S=
\begin{bmatrix}
1&1\\
1&1
\end{bmatrix}.
$$

Its two columns are identical:

$$
S\mathbf e_1=
\begin{bmatrix}1\\1\end{bmatrix},
\qquad
S\mathbf e_2=
\begin{bmatrix}1\\1\end{bmatrix}.
$$

The transformed unit square no longer has two independent side directions. Both sides point along the same line.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">One singular matrix, three views of the same information loss</span>
      <span class="figure-step-title" data-collapse-title>The unit square collapses to a segment</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open the singular-collapse figure in full screen">⛶</button>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose a view of the singular transformation">
    <button class="curve-mode is-active" type="button" data-collapse-mode="square">Square to segment</button>
    <button class="curve-mode" type="button" data-collapse-mode="same-output">Two inputs, one output</button>
    <button class="curve-mode" type="button" data-collapse-mode="kernel">Nonzero input to zero</button>
  </div>
  <div class="relation-readout">
    <span>$S=\begin{bmatrix}1&1\\1&1\end{bmatrix}$</span>
    <span data-collapse-equation>$S\begin{bmatrix}s\\t\end{bmatrix}=(s+t)\begin{bmatrix}1\\1\end{bmatrix}$</span>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="singular-collapse-board" class="jxgbox" data-singular-collapse-board aria-label="Square collapsing to a line and examples of information loss"></div>
  </div>
  <figcaption class="figure-caption">Each button shows one consequence of the same matrix. Only the selected argument is drawn, so the board stays readable.</figcaption>
</figure>

Take a general input

$$
\mathbf x=
\begin{bmatrix}s\\t\end{bmatrix}.
$$

Then

$$
\begin{aligned}
S\mathbf x
&=
\begin{bmatrix}
1&1\\
1&1
\end{bmatrix}
\begin{bmatrix}s\\t\end{bmatrix}\\[4pt]
&=
\begin{bmatrix}
s+t\\
s+t
\end{bmatrix}\\[4pt]
&=(s+t)
\begin{bmatrix}1\\1\end{bmatrix}.
\end{aligned}
$$

The input needed two numbers, $s$ and $t$. The output remembers only their sum

$$
r=s+t.
$$

Every output lies on the line

$$
y=x.
$$

This is the algebraic meaning of collapse from two dimensions to one:

$$
(s,t)
\longmapsto
r=s+t
\longmapsto
r
\begin{bmatrix}1\\1\end{bmatrix}.
$$

The determinant confirms what the picture shows:

$$
\det S
=1\cdot1-1\cdot1
=0.
$$

!!! definition "Singular matrix"
    A square matrix is called **singular** when its determinant is zero.

    For a $2\times2$ transformation, this means that the image of the plane fits inside a line or a single point. A two-dimensional region is crushed to an object with zero area.