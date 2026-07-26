## One parameter organizes a family of conics {#conic-family}

With the pole placed at a focus, consider the radial family

$$
r(\theta)=\frac{p}{1+e\cos\theta},\qquad p>0,\quad e\ge0.
$$

The parameters have different jobs:

- $p$ sets the overall focal scale;
- $e$ changes the shape and, at a critical value, the type of conic;
- $\theta$ selects one point on the chosen curve.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar"><div><span class="figure-title">One radial law, four geometric regimes</span><span class="figure-step-title" data-conic-family-readout>$r=p/(1+e\cos\theta)$</span></div><button class="icon-button" type="button" data-fullscreen aria-label="Open conic family in full screen">⛶</button></div>
  <div class="figure-stage jsx-stage"><div id="polar-conic-family-board" class="jxgbox" data-polar-conic-family></div></div>
  <div class="parameter-controls" style="--parameter-count:3">
    <label class="parameter-control"><span>$p$ = <output data-conic-p>2.4</output></span><input type="range" min="0.8" max="4" step="0.1" value="2.4" data-conic-p-slider></label>
    <label class="parameter-control"><span>$e$ = <output data-conic-e>0.60</output></span><input type="range" min="0" max="1.8" step="0.02" value="0.6" data-conic-e-slider></label>
    <label class="parameter-control"><span>$\theta$ = <output data-conic-theta>0</output></span><input type="range" min="-3.14" max="3.14" step="0.01" value="0" data-conic-theta-slider></label>
  </div>
  <div class="relation-readout"><span>current radius: <strong data-conic-radius></strong></span></div>
  <figcaption class="figure-caption">Move $\theta$ to read the formula as a radial instruction. Then vary $e$ and observe how the entire curve changes.</figcaption>
</figure>

The lecture stops at four qualitative cases:

| Eccentricity | Geometric type |
|---|---|
| $e=0$ | circle |
| $0<e<1$ | ellipse |
| $e=1$ | parabola |
| $e>1$ | hyperbola branch |

This is not a list of four unrelated formulas. It is one family with a shape parameter.

For a transparent numerical reading, fix $p=2.4$ and $e=0.6$. Then

$$
r(0)=\frac{2.4}{1.6}=1.5,
$$

while

$$
r(\pi)=\frac{2.4}{0.4}=6.
$$

The two opposite directions have very different focal distances. This is the geometric effect of eccentricity.

!!! interpretation "The transition at $e=1$"
    For $e<1$, the denominator stays positive for every direction and the curve closes. At $e=1$, it can approach zero in one limiting direction. For $e>1$, some directions no longer produce a finite nonnegative radius, and an open hyperbolic branch appears.

No general second-degree classification and no lengthy algebraic conversion are needed here. The animation carries the qualitative argument; the two hand calculations show how the formula is read.

!!! note "Continued in the exercise set"
    Students will calculate selected radii, create a four-case comparison table, plot representative curves and explain what changes when $e$ approaches $1$ from below and above.
