## From a line to a parametric curve {#parametric-curves}

The preceding lecture generated a line from one point and one fixed direction:

$$
P(t)=P_0+tv.
$$

The vector $v$ does not change as $t$ changes. This is exactly why the generated path is a line.

A curved path requires a more general rule. Instead of adding multiples of one fixed vector, we let both coordinates depend on one parameter:

$$
x=x(t),\qquad y=y(t).
$$

The number $t$ selects a point. As $t$ varies, the selected point moves and its trace forms a curve.

!!! question "The first question"
    What must change in the description when the direction of the path is no longer constant?

<figure class="figure-panel jsx-panel parametric-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">One parameter generates a path</span>
      <span class="equation-general" data-parametric-form>$x(t)=1+2t,\ y(t)=1+t$</span>
      <span class="figure-step-title" data-parametric-point>$t=0$, point $(1,1)$</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open parametric curve in full screen">⛶</button>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose a parametric description">
    <button class="curve-mode is-active" type="button" data-parametric-mode="line">Fixed direction: line</button>
    <button class="curve-mode" type="button" data-parametric-mode="circle">Changing direction: circle</button>
    <button class="curve-mode" type="button" data-parametric-mode="circleFast">The same circle, another parameter</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="lecture-04-parametric-board" class="jxgbox" data-parametric-curves aria-label="Interactive comparison of a line and parametric circles"></div>
  </div>
  <label class="parameter-control single-parameter">
    <span>parameter $t$ = <output data-parametric-value>0.00</output></span>
    <input type="range" data-parametric-slider min="-2.5" max="2.5" step="0.01" value="-2.5" aria-label="Parameter t">
  </label>
  <figcaption class="figure-caption">The parameter chooses a point. Changing the formulas changes the path; changing only the speed of the parameter may leave the geometric curve unchanged.</figcaption>
</figure>

For the circle

$$
x(t)=3\cos t,\qquad y(t)=3\sin t,
$$

we calculate only the four transparent values $t=0,\frac{\pi}{2},\pi,\frac{3\pi}{2}$. They produce the four axis points of the circle.

The comparison with

$$
x(t)=3\cos(2t),\qquad y(t)=3\sin(2t)
$$

shows an important distinction: the geometric set is the same circle, but the parameter runs through it differently.

!!! principle "Three levels that must not be confused"
    - the **curve** is the set of points;
    - the **parametrization** is the rule that selects and orders those points;
    - **time** is a physical interpretation of the parameter that requires additional assumptions.

!!! note "Continued in the exercise set"
    Students will generate points, compare two parametrizations of the same curve, restrict the parameter interval and verify generated points in a Cartesian equation. The lecture establishes the distinction; the exercises develop the technique.
