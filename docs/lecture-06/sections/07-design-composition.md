## Design and check a composition {#design-composition}

A reliable solution should tell the same story in words, in a drawing and in algebra.

### Procedure

1. **Name the first action.** Call its matrix $B$.
2. **Name the second action.** Call its matrix $A$.
3. **Write the chronological journey.**

   $$
   \mathbf x\longmapsto B\mathbf x\longmapsto A(B\mathbf x).
   $$

4. **Write the product in the correct order.** The combined matrix is $AB$.
5. **Construct the first column.** Send $\mathbf e_1$ through $B$, then through $A$.
6. **Construct the second column.** Send $\mathbf e_2$ through $B$, then through $A$.
7. **Check one additional vector.** The one-step and two-step calculations must agree.

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

The first action is $B$, so $B$ stands next to the input vector. The combined matrix must therefore be $AB$.

### First column

The first column of $B$ is

$$
B\mathbf e_1=
\begin{bmatrix}
2\\0
\end{bmatrix}.
$$

Apply the second action:

$$
A(B\mathbf e_1)
=
\begin{bmatrix}
0&-1\\
1&0
\end{bmatrix}
\begin{bmatrix}
2\\0
\end{bmatrix}
=
\begin{bmatrix}
0\\2
\end{bmatrix}.
$$

This is the first column of $AB$.

### Second column

The second column of $B$ is

$$
B\mathbf e_2=
\begin{bmatrix}
0\\1
\end{bmatrix}.
$$

Apply the second action:

$$
A(B\mathbf e_2)
=
\begin{bmatrix}
0&-1\\
1&0
\end{bmatrix}
\begin{bmatrix}
0\\1
\end{bmatrix}
=
\begin{bmatrix}
-1\\0
\end{bmatrix}.
$$

This is the second column of $AB$.

Put the two final columns together:

$$
AB=
\begin{bmatrix}
0&-1\\
2&0
\end{bmatrix}.
$$

### One-vector check

For $\mathbf x=\begin{bmatrix}1\\1\end{bmatrix}$, the one-step calculation gives

$$
AB\mathbf x
=
\begin{bmatrix}
0&-1\\
2&0
\end{bmatrix}
\begin{bmatrix}
1\\1
\end{bmatrix}
=
\begin{bmatrix}
-1\\2
\end{bmatrix}.
$$

The two-stage calculation gives the same result:

$$
\begin{bmatrix}1\\1\end{bmatrix}
\overset{B}{\longmapsto}
\begin{bmatrix}2\\1\end{bmatrix}
\overset{A}{\longmapsto}
\begin{bmatrix}-1\\2\end{bmatrix}.
$$

!!! principle "A correct product must agree with both checks"
    The columns must match the two basis-vector journeys, and a test vector must have the same final image in the one-step and two-step calculations.