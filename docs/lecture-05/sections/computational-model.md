## Optional computational model {#computational-model}

A matrix transformation can be implemented without a matrix library. The code mirrors the coordinate formula exactly.

```python
from collections.abc import Iterable
from typing import TypeAlias

Vector2: TypeAlias = tuple[float, float]
Matrix2: TypeAlias = tuple[tuple[float, float], tuple[float, float]]


def transform(matrix: Matrix2, vector: Vector2) -> Vector2:
    """Apply a 2×2 matrix to a two-dimensional column vector."""
    (a, b), (c, d) = matrix
    x, y = vector
    return a * x + b * y, c * x + d * y


def transform_shape(matrix: Matrix2, vertices: Iterable[Vector2]) -> list[Vector2]:
    """Transform every vertex of a polygon by the same matrix."""
    return [transform(matrix, vertex) for vertex in vertices]


shear: Matrix2 = ((1.0, 1.0), (0.0, 1.0))
house: list[Vector2] = [
    (-1.0, -1.0),
    (1.0, -1.0),
    (1.0, 1.0),
    (0.0, 2.0),
    (-1.0, 1.0),
]

print(transform(shear, (3.0, 2.0)))
print(transform_shape(shear, house))
```

The computational model should preserve the mathematical structure:

- the matrix is one action;
- the same function is applied to every vertex;
- no vertex receives a special rule;
- the order of the vertices is retained so that edges can be redrawn.

!!! note "What to verify"
    For each implementation, test the basis vectors first. If the program does not return the two columns for $\mathbf e_1$ and $\mathbf e_2$, the indexing convention is wrong.

This model prepares the next lecture. Applying one matrix and then another creates a new action; matrix multiplication will arise from composing those actions.
