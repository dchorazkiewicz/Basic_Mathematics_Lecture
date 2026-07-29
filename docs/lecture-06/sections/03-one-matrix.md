## One matrix records the two-step action {#one-matrix}

Continue with

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

For a general input vector,

$$
\mathbf x=
\begin{bmatrix}
x\\y
\end{bmatrix},
$$

the first action gives

$$
B\mathbf x=
\begin{bmatrix}
x+y\\y
\end{bmatrix}.
$$

The second action then gives

$$
A(B\mathbf x)
=
\begin{bmatrix}
-y\\x+y
\end{bmatrix}.
$$

This final rule is represented by one matrix:

$$
AB=
\begin{bmatrix}
0&-1\\
1&1
\end{bmatrix}.
$$

Indeed,

$$
AB
\begin{bmatrix}
x\\y
\end{bmatrix}
=
\begin{bmatrix}
-y\\x+y
\end{bmatrix}.
$$

!!! definition "Matrix product"
    The product $AB$ is the matrix whose action is equivalent to applying $B$ first and $A$ second:

    $$
    (AB)\mathbf x=A(B\mathbf x)
    $$

    for every vector $\mathbf x$.

For general matrices

$$
A=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix},
\qquad
B=
\begin{bmatrix}
e&f\\
g&h
\end{bmatrix},
$$

the product is

$$
AB=
\begin{bmatrix}
ae+bg&af+bh\\
ce+dg&cf+dh
\end{bmatrix}.
$$

This formula is not introduced as an isolated pattern. Each column will now be derived from the journey of one basis vector.
