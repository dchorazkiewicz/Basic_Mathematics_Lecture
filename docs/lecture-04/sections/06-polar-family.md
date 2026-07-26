## A conic as a trajectory is not yet a law of motion {#geometric-models}

Conics occur as possible trajectories in an idealized two-body gravitational model. This statement must be read carefully.

There are three different levels of description:

1. **Geometric path** — the set of points forming a circle, ellipse, parabola, or hyperbola.
2. **Motion on the path** — a rule that assigns a position to each time.
3. **Physical law** — assumptions and equations that determine which motions are possible.

A curve equation supplies the first level. A parametrization supplies an ordering of points and may be used to display motion, but it becomes a physical time law only after additional justification.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">The path can be classified before the motion is derived</span>
      <span class="figure-step-title" data-orbit-type>ellipse — bounded geometric path</span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open geometric trajectory model in full screen">⛶</button>
  </div>
  <div class="curve-switcher" role="group" aria-label="Choose a geometric trajectory">
    <button class="curve-mode is-active" type="button" data-orbit-mode="ellipse">Ellipse</button>
    <button class="curve-mode" type="button" data-orbit-mode="parabola">Parabola</button>
    <button class="curve-mode" type="button" data-orbit-mode="hyperbola">Hyperbola</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="orbit-model-board" class="jxgbox" data-orbit-models></div></div>
  <label class="parameter-control single-parameter"><span>display parameter $\theta$ = <output data-orbit-theta>0</output></span><input type="range" min="0" max="6.283" step="0.01" value="0" data-orbit-theta-slider></label>
  <div class="relation-readout"><span data-orbit-motion-note>The slider chooses a point on the path; it is not yet a physical time law.</span></div>
  <figcaption class="figure-caption">The moving point is an illustration of a parametrized path. Its displayed speed is not presented as the physical speed of an orbiting body.</figcaption>
</figure>

At the qualitative level used in this lecture:

| Geometric type | Interpretation in the idealized model |
|---|---|
| circle or ellipse | bounded trajectory |
| parabola | limiting case between bounded and unbounded motion |
| hyperbola | unbounded passage |

No energy calculation, Kepler-law derivation, or differential equation is introduced here. Those belong to a mechanics course or to the later synthesis after calculus.

!!! warning "A curve is not a theory of gravity"
    The statement “the trajectory is an ellipse” does not by itself specify how fast the body moves, why it follows that path, or which assumptions were used. The mathematical model includes the law and the assumptions, not only the shape.

!!! note "Continued in the exercise set"
    Students will classify paths, separate geometric data from parametrization and physical assumptions, identify idealizations of the two-body model and prepare a short note titled “A trajectory is not a law of motion”.
