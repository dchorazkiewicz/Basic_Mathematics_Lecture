## Matrix times vector is a linear combination of columns {#matrix-vector-product}

Every vector can be written in the standard basis:

$$
\begin{bmatrix}x\\y\end{bmatrix}
=
x\mathbf e_1+y\mathbf e_2.
$$

A linear transformation respects this construction:

$$
A(x\mathbf e_1+y\mathbf e_2)
=
xA\mathbf e_1+yA\mathbf e_2.
$$

If the columns of $A$ are

$$
\mathbf u=
\begin{bmatrix}a\\c\end{bmatrix},
\qquad
\mathbf v=
\begin{bmatrix}b\\d\end{bmatrix},
$$

then

$$
A
\begin{bmatrix}x\\y\end{bmatrix}
=
x\mathbf u+y\mathbf v.
$$

This is the geometric meaning of matrix-vector multiplication.

!!! derivation "From columns to the coordinate formula"
    $$
    \begin{aligned}
    A
    \begin{bmatrix}x\\y\end{bmatrix}
    &=
    x
    \begin{bmatrix}a\\c\end{bmatrix}
    +
    y
    \begin{bmatrix}b\\d\end{bmatrix}\\[4pt]
    &=
    \begin{bmatrix}
    ax\\cx
    \end{bmatrix}
    +
    \begin{bmatrix}
    by\\dy
    \end{bmatrix}\\[4pt]
    &=
    \begin{bmatrix}
    ax+by\\cx+dy
    \end{bmatrix}.
    \end{aligned}
    $$

### Worked example

Let

$$
A=
\begin{bmatrix}
2&-1\\
1&1
\end{bmatrix},
\qquad
\mathbf x=
\begin{bmatrix}3\\2\end{bmatrix}.
$$

Read the columns first:

$$
A\mathbf e_1=
\begin{bmatrix}2\\1\end{bmatrix},
\qquad
A\mathbf e_2=
\begin{bmatrix}-1\\1\end{bmatrix}.
$$

Because $\mathbf x=3\mathbf e_1+2\mathbf e_2$,

$$
A\mathbf x
=
3\begin{bmatrix}2\\1\end{bmatrix}
+
2\begin{bmatrix}-1\\1\end{bmatrix}
=
\begin{bmatrix}4\\5\end{bmatrix}.
$$

The row calculation and the column calculation are the same operation viewed from two directions:

- rows compute the two output coordinates;
- columns explain how the output vector is assembled.

!!! warning "Do not multiply by position"
    In a product $A\mathbf x$, the vector is written as a column on the right. The dimensions are part of the notation, not decoration.
