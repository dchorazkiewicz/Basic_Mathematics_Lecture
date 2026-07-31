## A radial description adapted to a distinguished point {#radial-description}

Cartesian coordinates answer two questions: how far horizontally and how far vertically?

When one point is geometrically distinguished, another description is often more natural:

- choose a direction by an angle $\theta$;
- travel a distance $r$ from the distinguished point.

The point is then described by $(r,\theta)$.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar"><div><span class="figure-title">Direction and distance</span><span class="figure-step-title" data-polar-readout>Move the point to compare $(r,\theta)$ with $(x,y)$.</span></div><button class="icon-button" type="button" data-fullscreen aria-label="Open radial coordinate figure in full screen">⛶</button></div>
  <div class="figure-stage jsx-stage"><div id="polar-coordinate-board" class="jxgbox" data-polar-coordinate></div></div>
  <div class="relation-readout"><span data-polar-r></span><span data-polar-theta></span><span data-polar-xy></span></div>
  <figcaption class="figure-caption">Changing coordinates changes the description, not the point. The pole is chosen because the distance from it matters.</figcaption>
</figure>

The right triangle gives

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

Conversely,

$$
r=\sqrt{x^2+y^2}.
$$

For $(r,\theta)=(4,\pi/3)$,

$$
x=4\cos\frac{\pi}{3}=2,
\qquad
y=4\sin\frac{\pi}{3}=2\sqrt3.
$$

A radial equation is read operationally:

> Choose a direction $\theta$, calculate $r(\theta)$, and place the point at that distance from the pole.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar"><div><span class="figure-title">A radial rule draws a curve</span><span class="figure-step-title" data-polar-graph-readout>$r=2R\cos\theta$</span></div><button class="icon-button" type="button" data-fullscreen aria-label="Open radial graph figure in full screen">⛶</button></div>
  <div class="figure-stage jsx-stage"><div id="polar-graph-board" class="jxgbox" data-polar-graph></div></div>
  <label class="parameter-control"><span>$\theta$ = <output data-polar-angle>0.8</output></span><input type="range" min="0" max="6.283" step="0.01" value="0.8" data-polar-angle-slider></label>
  <figcaption class="figure-caption">The rotating ray and the changing radial distance materialize the meaning of $r=f(\theta)$.</figcaption>
</figure>

The equation

$$
r=2R\cos\theta
$$

generates a circle passing through the pole. Substituting $r^2=x^2+y^2$ and $r\cos\theta=x$ gives

$$
x^2+y^2=2Rx,
$$

or

$$
(x-R)^2+y^2=R^2.
$$

Thus the radial and Cartesian equations describe the same circle.

!!! principle "Why radial coordinates are useful"
    A focus or a central body is a distinguished point. A radial description records distance from that point directly instead of reconstructing it from horizontal and vertical coordinates.
