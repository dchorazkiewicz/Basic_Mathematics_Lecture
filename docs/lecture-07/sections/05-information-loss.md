## Where the information goes {#information-loss}

The singular matrix

$$
S=
\begin{bmatrix}
1&1\\
1&1
\end{bmatrix}
$$

remembers only the sum of the two input coordinates. Therefore different inputs with the same sum must produce the same output.

Take

$$
\mathbf p=
\begin{bmatrix}1\\0\end{bmatrix},
\qquad
\mathbf q=
\begin{bmatrix}0\\1\end{bmatrix}.
$$

They are different vectors, but

$$
S\mathbf p
=
\begin{bmatrix}1\\1\end{bmatrix}
$$

and

$$
S\mathbf q
=
\begin{bmatrix}1\\1\end{bmatrix}.
$$

Thus

$$
\mathbf p\neq\mathbf q,
\qquad
S\mathbf p=S\mathbf q.
$$

Looking only at the output

$$
\begin{bmatrix}1\\1\end{bmatrix},
$$

we cannot decide whether the input was $\mathbf p$, $\mathbf q$, or any other vector whose coordinates add to $1$.

For example,

$$
\begin{bmatrix}2\\-1\end{bmatrix},
\qquad
\begin{bmatrix}5\\-4\end{bmatrix},
\qquad
\begin{bmatrix}-3\\4\end{bmatrix}
$$

all have coordinate sum $1$, so all three have the same image.

### Subtract the two equal outputs

From

$$
S\mathbf p=S\mathbf q
$$

we obtain

$$
S\mathbf p-S\mathbf q=\mathbf0.
$$

Because a matrix preserves subtraction,

$$
S(\mathbf p-\mathbf q)=\mathbf0.
$$

Here

$$
\mathbf p-\mathbf q
=
\begin{bmatrix}1\\-1\end{bmatrix}
\neq\mathbf0,
$$

but

$$
S
\begin{bmatrix}1\\-1\end{bmatrix}
=
\begin{bmatrix}0\\0\end{bmatrix}.
$$

A nonzero direction has disappeared completely.

This gives two equivalent pictures of the same loss:

1. two different inputs produce one output;
2. their nonzero difference is sent to zero.

!!! principle "Information is lost along a vanished direction"
    If a nonzero vector $\mathbf v$ satisfies

    $$
    A\mathbf v=\mathbf0,
    $$

    then every pair of inputs separated by $\mathbf v$ has the same image:

    $$
    A(\mathbf x+\mathbf v)
    =A\mathbf x+A\mathbf v
    =A\mathbf x.
    $$

    The output cannot remember how far the input moved in that direction.