## Build a matrix from a picture {#design-a-matrix}

To construct a matrix, decide where the two basis vectors should go.

Suppose an action is required to satisfy

$$
\mathbf e_1\mapsto
\begin{bmatrix}3\\1\end{bmatrix},
\qquad
\mathbf e_2\mapsto
\begin{bmatrix}-1\\2\end{bmatrix}.
$$

Place these destination vectors as the columns:

$$
A=
\begin{bmatrix}
3&-1\\
1&2
\end{bmatrix}.
$$

No system of equations is needed. The matrix is read directly from the drawing.

### Design procedure

1. Draw $\mathbf e_1$ and $\mathbf e_2$.
2. Draw their required images.
3. Put the image of $\mathbf e_1$ in the first column.
4. Put the image of $\mathbf e_2$ in the second column.
5. Test the matrix on one additional vector.

For example,

$$
\begin{bmatrix}1\\1\end{bmatrix}
=
\mathbf e_1+\mathbf e_2,
$$

so its image must be

$$
A
\begin{bmatrix}1\\1\end{bmatrix}
=
A\mathbf e_1+A\mathbf e_2
=
\begin{bmatrix}3\\1\end{bmatrix}
+
\begin{bmatrix}-1\\2\end{bmatrix}
=
\begin{bmatrix}2\\3\end{bmatrix}.
$$

### Reading a desired transformation

| Desired action | Image of $\mathbf e_1$ | Image of $\mathbf e_2$ | Matrix |
|---|---:|---:|---:|
| double all lengths | $\begin{bmatrix}2\\0\end{bmatrix}$ | $\begin{bmatrix}0\\2\end{bmatrix}$ | $\begin{bmatrix}2&0\\0&2\end{bmatrix}$ |
| reflect in the horizontal axis | $\begin{bmatrix}1\\0\end{bmatrix}$ | $\begin{bmatrix}0\\-1\end{bmatrix}$ | $\begin{bmatrix}1&0\\0&-1\end{bmatrix}$ |
| swap the coordinate axes | $\begin{bmatrix}0\\1\end{bmatrix}$ | $\begin{bmatrix}1\\0\end{bmatrix}$ | $\begin{bmatrix}0&1\\1&0\end{bmatrix}$ |
| project onto the vertical axis | $\begin{bmatrix}0\\0\end{bmatrix}$ | $\begin{bmatrix}0\\1\end{bmatrix}$ | $\begin{bmatrix}0&0\\0&1\end{bmatrix}$ |

!!! warning "The first row is not the first basis image"
    Basis images are stored in **columns**. Confusing rows with columns usually produces a different transformation, often a reflection or shear in an unintended direction.

!!! question "Quick visual test"
    If the two columns point in exactly the same direction, can the image still fill the plane? Explain using linear combinations of the columns.
