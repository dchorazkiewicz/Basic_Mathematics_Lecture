## Follow one vector through both stages {#two-stage-journey}

For the input vector $\mathbf x$, the complete journey is

$$
\mathbf x
\longmapsto
B\mathbf x
\longmapsto
A(B\mathbf x).
$$

The panel shows the input, the intermediate vector and the final vector in the same coordinate system.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">One board, three stages of the same journey</span>
      <span class="figure-step-title" data-two-stage-title>Start with the input vector</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open the vector journey in full screen">⛶</button>
  </div>
  <div class="relation-readout">
    <span>$B=\begin{bmatrix}1&1\\0&1\end{bmatrix}$</span>
    <span>$A=\begin{bmatrix}0&-1\\1&0\end{bmatrix}$</span>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose the visible stage of the composition">
    <button class="curve-mode is-active" type="button" data-two-stage-mode="input">Input $\mathbf x$</button>
    <button class="curve-mode" type="button" data-two-stage-mode="middle">After $B$</button>
    <button class="curve-mode" type="button" data-two-stage-mode="final">After $A\circ B$</button>
    <button class="curve-mode" type="button" data-two-stage-mode="all">Show all</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="two-stage-board" class="jxgbox" data-two-stage-board aria-label="Interactive view of the input, intermediate and final vectors on one coordinate system"></div>
  </div>
  <div class="relation-readout">
    <span data-two-stage-equation>$\mathbf x=\begin{bmatrix}2\\1\end{bmatrix}$</span>
  </div>
  <figcaption class="figure-caption">The dark arrow marks the selected stage. Earlier stages remain visible as a faint trace.</figcaption>
</figure>

The notation

$$
A\circ B
$$

means “first apply $B$, then apply $A$”. For linear transformations, the single matrix representing this two-stage action is written $AB$.

!!! interpretation "Two notations, one process"
    - $A\circ B$ names the composition of two actions;
    - $AB$ is the matrix that performs the same complete action in one step.
