## Two actions in succession {#consecutive-actions}

Lecture 05 treated a matrix as one action on the plane. Real procedures often contain several actions.

Suppose that the matrix $B$ acts first and the matrix $A$ acts second. A vector follows the path

$$
\mathbf x
\overset{B}{\longmapsto}
B\mathbf x
\overset{A}{\longmapsto}
A(B\mathbf x).
$$

!!! principle "Read the action from right to left"
    In the expression $A(B\mathbf x)$, the matrix nearest to $\mathbf x$ acts first. Therefore $B$ is applied first and $A$ second.

For example, let

$$
B=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix},
\qquad
A=
\begin{bmatrix}
0&-1\\
1&0
\end{bmatrix}.
$$

The first action is a shear. The second action is a rotation through $90^\circ$ counterclockwise.

Starting from

$$
\mathbf x=
\begin{bmatrix}
2\\1
\end{bmatrix},
$$

we obtain

$$
B\mathbf x=
\begin{bmatrix}
3\\1
\end{bmatrix},
\qquad
A(B\mathbf x)=
\begin{bmatrix}
-1\\3
\end{bmatrix}.
$$

The intermediate vector is part of the reasoning. It shows exactly what the second matrix receives as its input.

!!! warning "Do not apply both matrices to the original vector"
    The second action is applied to the output of the first action, not again to the original vector.
