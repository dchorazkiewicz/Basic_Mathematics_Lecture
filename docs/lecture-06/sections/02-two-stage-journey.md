## Follow a figure through both stages {#two-stage-journey}

A composition acts on every point of a figure in the same order. The panel below shows three views of one process:

1. the original grid and house;
2. the image after the first matrix $B$;
3. the final image after the second matrix $A$.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">One figure, two consecutive actions</span>
      <span class="figure-step-title" data-two-stage-title>first shear, then rotate</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open two-stage transformation in full screen">⛶</button>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose a pair of transformations">
    <button class="curve-mode is-active" type="button" data-two-stage-preset="shear-rotate">Shear → rotate</button>
    <button class="curve-mode" type="button" data-two-stage-preset="stretch-shear">Stretch → shear</button>
    <button class="curve-mode" type="button" data-two-stage-preset="reflect-rotate">Reflect → rotate</button>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose which stage is emphasized">
    <button class="curve-mode is-active" type="button" data-two-stage-step="0">Input</button>
    <button class="curve-mode" type="button" data-two-stage-step="1">After $B$</button>
    <button class="curve-mode" type="button" data-two-stage-step="2">After $A\circ B$</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="two-stage-board" class="jxgbox" data-two-stage-board aria-label="Interactive two-stage transformation of a grid and house"></div>
  </div>
  <div class="relation-readout">
    <span data-two-stage-matrices>$B=\begin{bmatrix}1&1\\0&1\end{bmatrix},\quad A=\begin{bmatrix}0&-1\\1&0\end{bmatrix}$</span>
  </div>
  <figcaption class="figure-caption">The orange stage is the output of $B$ and simultaneously the input of $A$. The blue stage is the final image.</figcaption>
</figure>

The notation

$$
A\circ B
$$

means “first apply $B$, then apply $A$”. For linear transformations, the matrix of this composition will be written $AB$.

The circle symbol describes composition of actions. The product symbol describes the matrix that represents the same combined action.
