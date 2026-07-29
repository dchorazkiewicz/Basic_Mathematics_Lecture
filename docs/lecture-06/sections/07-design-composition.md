## Design and check a composition {#design-composition}

A reliable two-step solution should contain both the geometric story and the algebra.

### Procedure

1. **Name the first action.** Call its matrix $B$.
2. **Name the second action.** Call its matrix $A$.
3. **Write the journey.**

   $$
   \mathbf x\longmapsto B\mathbf x\longmapsto A(B\mathbf x).
   $$

4. **Construct the product $AB$.** Use either the two basis-vector journeys or the row-by-column calculation.
5. **Check one object.** Test a basis vector, a simple point, or one vertex of the figure.
6. **Compare with the drawing.** Signs, directions and the order of the factors must agree with the picture.

### Example: stretch, then rotate

Let

$$
B=
\begin{bmatrix}
2&0\\
0&1
\end{bmatrix}
$$

stretch horizontally, and let

$$
A=
\begin{bmatrix}
0&-1\\
1&0
\end{bmatrix}
$$

rotate through $90^\circ$ counterclockwise.

Then

$$
AB=
\begin{bmatrix}
0&-1\\
2&0
\end{bmatrix}.
$$

A quick basis check gives

$$
AB\mathbf e_1=
\begin{bmatrix}
0\\2
\end{bmatrix},
\qquad
AB\mathbf e_2=
\begin{bmatrix}
-1\\0
\end{bmatrix}.
$$

The first basis direction is stretched to length $2$ and then rotated upward. The second basis direction is rotated left without changing length.

!!! principle "A correct product must tell the same story as the picture"
    If the product matrix predicts basis arrows that disagree with the two-stage drawing, the factors were probably reversed or a column was calculated incorrectly.
