## When can the action be reversed? {#invertibility}

Compare two matrices:

$$
A=
\begin{bmatrix}
2&1\\
1&1
\end{bmatrix},
\qquad
S=
\begin{bmatrix}
1&1\\
1&1
\end{bmatrix}.
$$

Their determinants are

$$
\det A=2\cdot1-1\cdot1=1,
$$

and

$$
\det S=1\cdot1-1\cdot1=0.
$$

The columns of $A$ point in two different directions:

$$
\begin{bmatrix}2\\1\end{bmatrix},
\qquad
\begin{bmatrix}1\\1\end{bmatrix}.
$$

They form a basis of the plane. Therefore every target vector $\mathbf b$ can be written as one combination

$$
\mathbf b
=s
\begin{bmatrix}2\\1\end{bmatrix}
+t
\begin{bmatrix}1\\1\end{bmatrix}.
$$

The coefficients $s$ and $t$ are the coordinates of the input vector

$$
\mathbf x=
\begin{bmatrix}s\\t\end{bmatrix}
$$

that produces $\mathbf b$.

### Why the input is unique

Suppose two inputs produce the same output:

$$
A\mathbf p=A\mathbf q.
$$

Then

$$
A(\mathbf p-\mathbf q)=\mathbf0.
$$

For our matrix $A$, write

$$
\mathbf p-\mathbf q=
\begin{bmatrix}s\\t\end{bmatrix}.
$$

The equation

$$
A
\begin{bmatrix}s\\t\end{bmatrix}
=
\begin{bmatrix}0\\0\end{bmatrix}
$$

means

$$
\begin{aligned}
2s+t&=0,\\
s+t&=0.
\end{aligned}
$$

Subtracting the second equation from the first gives

$$
s=0,
$$

and then

$$
t=0.
$$

Thus

$$
\mathbf p-\mathbf q=\mathbf0,
$$

so

$$
\mathbf p=\mathbf q.
$$

Different inputs cannot merge.

!!! definition "Invertible linear action"
    A linear action is **invertible** when every output vector comes from exactly one input vector.

For a $2\times2$ matrix, the following descriptions express the same fact:

| Geometric view | Algebraic view |
|---|---|
| the transformed unit square has positive area | $\det A\neq0$ |
| the two columns point in two independent directions | the columns form a basis of the plane |
| the plane does not collapse to a line | no nonzero vector is sent to zero |
| different inputs remain distinguishable | every output has exactly one input |

For a singular matrix, each statement fails. For a matrix with nonzero determinant, each statement holds.

The determinant therefore answers the first reversal question:

$$
\boxed{
\det A\neq0
\quad\Longleftrightarrow\quad
\text{the action can be reversed uniquely}
}
$$

The next question is computational: given a particular output $\mathbf b$, how do we find its input $\mathbf x$?