## Changing the order usually changes the result {#order-matters}

The products $AB$ and $BA$ describe different procedures:

$$
AB:\quad \text{first }B,\text{ then }A,
$$

$$
BA:\quad \text{first }A,\text{ then }B.
$$

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">The same two actions in opposite orders</span>
      <span class="figure-step-title" data-order-title>compare the final grid and house</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open order comparison in full screen">⛶</button>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose the order of transformations">
    <button class="curve-mode is-active" type="button" data-order-mode="AB">First $B$, then $A$</button>
    <button class="curve-mode" type="button" data-order-mode="BA">First $A$, then $B$</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="order-matters-board" class="jxgbox" data-order-matters-board aria-label="Comparison of AB and BA on the same grid and figure"></div>
  </div>
  <div class="relation-readout">
    <span data-order-matrix>$AB=\begin{bmatrix}0&-1\\1&1\end{bmatrix}$</span>
  </div>
  <figcaption class="figure-caption">Switch the order and inspect both the matrix and the final picture. Matrix multiplication is generally not commutative.</figcaption>
</figure>

For the shear

$$
B=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}
$$

and the rotation

$$
A=
\begin{bmatrix}
0&-1\\
1&0
\end{bmatrix},
$$

we obtain

$$
AB=
\begin{bmatrix}
0&-1\\
1&1
\end{bmatrix},
\qquad
BA=
\begin{bmatrix}
1&-1\\
1&0
\end{bmatrix}.
$$

These matrices are different, and their transformed figures are different.

!!! warning "Do not reverse the factors"
    The written order is not the chronological order. In $AB\mathbf x$, the vector meets $B$ first because $B$ is closest to $\mathbf x$.
