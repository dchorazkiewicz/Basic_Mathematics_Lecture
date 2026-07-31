## Parameters that move, scale, and reshape a curve {#parameter-roles}

The letter appearing in a formula may play two very different roles.

- A parameter such as $t$ selects a point on one fixed curve.
- A parameter such as $a$, $b$, $h$, or $k$ changes the curve itself.

Consider the ellipse

$$
\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1,\qquad a>0,\quad b>0.
$$

Its parameters have direct geometric meanings:

- $(h,k)$ determines the centre;
- $a$ determines the horizontal scale;
- $b$ determines the vertical scale.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Read parameters through their geometric effect</span>
      <span class="figure-step-title" data-ellipse-parameter-readout>centre $(0,0)$, horizontal scale $4$, vertical scale $2$</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open ellipse parameter figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="ellipse-parameter-board" class="jxgbox" data-ellipse-parameters aria-label="Interactive ellipse controlled by centre and scale parameters"></div>
  </div>
  <div class="parameter-controls" style="--parameter-count:4">
    <label class="parameter-control"><span>$h$ = <output data-ellipse-h>0</output></span><input type="range" min="-3" max="3" step="0.5" value="0" data-ellipse-h-slider></label>
    <label class="parameter-control"><span>$k$ = <output data-ellipse-k>0</output></span><input type="range" min="-2" max="2" step="0.5" value="0" data-ellipse-k-slider></label>
    <label class="parameter-control"><span>$a$ = <output data-ellipse-a>4</output></span><input type="range" min="1" max="5" step="0.5" value="4" data-ellipse-a-slider></label>
    <label class="parameter-control"><span>$b$ = <output data-ellipse-b>2</output></span><input type="range" min="1" max="4" step="0.5" value="2" data-ellipse-b-slider></label>
  </div>
  <figcaption class="figure-caption">Before moving a slider, predict whether the centre, width, or height will change. The animation checks the prediction.</figcaption>
</figure>

For example, compare

$$
\frac{x^2}{4}+y^2=1
$$

with

$$
\frac{(x-2)^2}{4}+(y+1)^2=1.
$$

The second curve has the same horizontal and vertical scales as the first. Only its centre has moved from $(0,0)$ to $(2,-1)$.

!!! summary "Parameter and geometric effect"
    | Parameter | Effect |
    |---|---|
    | $h$ | horizontal position of the centre |
    | $k$ | vertical position of the centre |
    | $a$ | horizontal scale |
    | $b$ | vertical scale |
