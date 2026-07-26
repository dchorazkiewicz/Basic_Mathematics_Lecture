## Optional computational model {#computational-model}

This section is not part of the essential 90-minute lecture. It shows how the central mathematical idea can be represented by one small computational object instead of separate classes for every conic.

??? example "One class for the radial conic family"

    ```python
    from dataclasses import dataclass
    from math import cos, sin


    @dataclass(frozen=True)
    class PolarConic:
        focal_scale: float
        eccentricity: float
        orientation: float = 0.0

        def __post_init__(self) -> None:
            if self.focal_scale <= 0:
                raise ValueError("focal_scale must be positive")
            if self.eccentricity < 0:
                raise ValueError("eccentricity must be nonnegative")

        @property
        def conic_type(self) -> str:
            e = self.eccentricity
            if e == 0:
                return "circle"
            if e < 1:
                return "ellipse"
            if e == 1:
                return "parabola"
            return "hyperbola branch"

        def radius(self, theta: float) -> float | None:
            denominator = 1 + self.eccentricity * cos(
                theta - self.orientation
            )
            if denominator <= 0:
                return None
            return self.focal_scale / denominator

        def point(self, theta: float) -> tuple[float, float] | None:
            r = self.radius(theta)
            if r is None:
                return None
            return r * cos(theta), r * sin(theta)
    ```

The class mirrors the lecture directly:

- `theta` selects a point;
- `focal_scale` changes size;
- `eccentricity` changes shape and conic type;
- `orientation` rotates the description.

??? example "Checking the interpretation"

    ```python
    conic = PolarConic(focal_scale=2.4, eccentricity=0.6)

    print(conic.conic_type)
    # ellipse

    print(conic.radius(0))
    # 1.5

    print(conic.point(0))
    # (1.5, 0.0)
    ```

A computational task based on this code must include numerical checks. Producing a plot without verifying selected values of $r(\theta)$ is not sufficient mathematical work.
