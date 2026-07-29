## Changing the order usually changes the result {#order-matters}

The products $AB$ and $BA$ describe two different procedures:

$$
AB:\quad \text{first }B,\text{ then }A,
$$

$$
BA:\quad \text{first }A,\text{ then }B.
$$

We keep the same matrices

$$
B=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix},
\qquad
A=
\begin{bmatrix}
0&-1\\
1&0
\end{bmatrix}.
$$

Their two products are

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

To compare them, use one simple input:

$$
\mathbf x=
\begin{bmatrix}
1\\1
\end{bmatrix}.
$$

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">The same input under two different orders</span>
      <span class="figure-step-title">Both results are visible at the same time</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open the order comparison in full screen">⛶</button>
  </div>
  <div class="figure-stage stage-board-stage">
    <div class="stage-board-grid stage-board-grid--two">
      <section class="stage-card">
        <div class="stage-card-title">First $B$, then $A$: product $AB$</div>
        <div id="order-ab-board" class="jxgbox stage-mini-board" data-order-ab-board aria-label="Input x and final vector ABx"></div>
        <div class="stage-card-math">$AB\mathbf x=\begin{bmatrix}-1\\2\end{bmatrix}$</div>
      </section>
      <section class="stage-card">
        <div class="stage-card-title">First $A$, then $B$: product $BA$</div>
        <div id="order-ba-board" class="jxgbox stage-mini-board" data-order-ba-board aria-label="Input x and final vector BAx"></div>
        <div class="stage-card-math">$BA\mathbf x=\begin{bmatrix}0\\1\end{bmatrix}$</div>
      </section>
    </div>
  </div>
  <figcaption class="figure-caption">The faint arrow is the same input vector in both panels. The final arrows are different because the actions were performed in different orders.</figcaption>
</figure>

The algebra confirms the picture:

$$
\begin{aligned}
AB\mathbf x
&=
\begin{bmatrix}
0&-1\\
1&1
\end{bmatrix}
\begin{bmatrix}
1\\1
\end{bmatrix}
=
\begin{bmatrix}
-1\\2
\end{bmatrix},\\[10pt]
BA\mathbf x
&=
\begin{bmatrix}
1&-1\\
1&0
\end{bmatrix}
\begin{bmatrix}
1\\1
\end{bmatrix}
=
\begin{bmatrix}
0\\1
\end{bmatrix}.
\end{aligned}
$$

Since one input already produces two different outputs, the two transformations cannot be the same. Thus

$$
AB\ne BA.
$$

!!! warning "The written order is opposite to the chronological reading"
    In $AB\mathbf x$, the vector meets $B$ first because $B$ is closest to $\mathbf x$. Never decide the chronological order by reading the factors from left to right.