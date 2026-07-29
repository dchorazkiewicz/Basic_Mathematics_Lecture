## Follow one vector through both stages {#two-stage-journey}

The previous calculation should also be readable as a picture. Instead of placing every stage on one crowded board, we separate the journey into three coordinate systems.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">One input, one intermediate vector, one final vector</span>
      <span class="figure-step-title">Read the panels from left to right</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open the three-stage vector journey in full screen">⛶</button>
  </div>
  <div class="relation-readout">
    <span>$B=\begin{bmatrix}1&1\\0&1\end{bmatrix}$</span>
    <span>$A=\begin{bmatrix}0&-1\\1&0\end{bmatrix}$</span>
  </div>
  <div class="figure-stage stage-board-stage">
    <div class="stage-board-grid stage-board-grid--three">
      <section class="stage-card">
        <div class="stage-card-title">1. Input vector</div>
        <div id="two-stage-input-board" class="jxgbox stage-mini-board" data-two-stage-input-board aria-label="Input vector x equals two comma one"></div>
        <div class="stage-card-math">$\mathbf x=\begin{bmatrix}2\\1\end{bmatrix}$</div>
      </section>
      <section class="stage-card">
        <div class="stage-card-title">2. After the first action $B$</div>
        <div id="two-stage-middle-board" class="jxgbox stage-mini-board" data-two-stage-middle-board aria-label="Intermediate vector Bx equals three comma one"></div>
        <div class="stage-card-math">$B\mathbf x=\begin{bmatrix}3\\1\end{bmatrix}$</div>
      </section>
      <section class="stage-card">
        <div class="stage-card-title">3. After the second action $A$</div>
        <div id="two-stage-final-board" class="jxgbox stage-mini-board" data-two-stage-final-board aria-label="Final vector A of Bx equals minus one comma three"></div>
        <div class="stage-card-math">$A(B\mathbf x)=\begin{bmatrix}-1\\3\end{bmatrix}$</div>
      </section>
    </div>
  </div>
  <figcaption class="figure-caption">Each panel contains only one vector. The middle panel is the bridge between the two actions: it is the output of $B$ and the input of $A$.</figcaption>
</figure>

The notation

$$
A\circ B
$$

means “first apply $B$, then apply $A$”. For linear transformations, the single matrix representing this two-stage action will be written $AB$.

!!! interpretation "Two notations, one process"
    - $A\circ B$ names the composition of two actions;
    - $AB$ names the matrix that performs the same complete action in one step.