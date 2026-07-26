## Focus, directrix, and the geometric meaning of eccentricity {#focus-directrix}

The parameter $e$ has so far been observed through the changing shape of the radial family. We now give it a geometric meaning.

Fix a focus $F$ and a directrix $D$. A point $P$ belongs to the conic when

$$
d(P,F)=e\,d(P,D).
$$

Equivalently,

$$
\frac{d(P,F)}{d(P,D)}=e.
$$

Both distances change as $P$ moves, but their ratio remains constant.

<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <div>
      <span class="figure-title">Eccentricity as a constant distance ratio</span>
      <span class="figure-step-title"><span data-focus-type>parabola</span>, measured ratio <span data-focus-ratio>1</span></span>
    </div>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open focus-directrix construction in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage"><div id="focus-directrix-board" class="jxgbox" data-focus-directrix></div></div>
  <div class="parameter-controls" style="--parameter-count:2">
    <label class="parameter-control"><span>$e$ = <output data-focus-e>1</output></span><input type="range" min="0.4" max="1.6" step="0.05" value="1" data-focus-e-slider></label>
    <label class="parameter-control"><span>$\theta$ = <output data-focus-theta>0.4</output></span><input type="range" min="-1.2" max="1.2" step="0.01" value="0.4" data-focus-theta-slider></label>
  </div>
  <figcaption class="figure-caption">The brown segment is the distance to the focus. The green segment is the perpendicular distance to the directrix. Their ratio remains equal to $e$.</figcaption>
</figure>

The parabola gives the most transparent first example. When $e=1$,

$$
d(P,F)=d(P,D).
$$

For $e<1$, the focal distance is smaller than the corresponding multiple of the directrix distance and the curve is an ellipse. For $e>1$, the hyperbolic regime appears.

The lecture does **not** derive separate Cartesian equations for all conics from this condition. It uses the construction to explain why the same parameter $e$ classifies the shapes seen in the preceding animation.

!!! principle "Geometry before algebraic elimination"
    The definition compares two distances. Coordinates are introduced only when we need to calculate or draw the condition. The focus, directrix, and ratio are geometric objects independent of a particular coordinate notation.

!!! note "Continued in the exercise set"
    Students will verify the ratio for selected points, draw the two relevant distances correctly and compare the regimes $e<1$, $e=1$, and $e>1$. A full derivation of the radial equation may appear as a developing exercise, not as the centre of the lecture.
