## One rule acts on every vector {#one-action}

In the previous lectures, vectors described changes, directions and combinations. We now study **actions on vectors**.

An action receives an input vector and produces an output vector:

$$
\begin{bmatrix}x\\y\end{bmatrix}
\longmapsto
\begin{bmatrix}x'\\y'\end{bmatrix}.
$$

For example,

$$
\begin{bmatrix}x\\y\end{bmatrix}
\longmapsto
\begin{bmatrix}2x\\y\end{bmatrix}
$$

doubles every horizontal component and leaves every vertical component unchanged. The same rule acts on every point, every arrow and every figure.

!!! principle "A matrix represents one consistent action"
    We do not choose a new formula for each point. One matrix supplies one rule, and that rule is applied everywhere in the plane.

The general two-dimensional rule used in this lecture is

$$
\begin{aligned}
x' &= ax+by,\\
y' &= cx+dy.
\end{aligned}
$$

The four coefficients are written compactly as

$$
A=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix},
\qquad
A
\begin{bmatrix}x\\y\end{bmatrix}
=
\begin{bmatrix}
ax+by\\
cx+dy
\end{bmatrix}.
$$

The output coordinates are linear combinations of the input coordinates. There are no constant terms such as $+3$ or $-1$.

!!! consequence "The origin stays fixed"
    For every matrix $A$,

    $$
    A\begin{bmatrix}0\\0\end{bmatrix}
    =
    \begin{bmatrix}0\\0\end{bmatrix}.
    $$

    A translation is therefore not represented by a $2\times2$ matrix acting on ordinary plane vectors. Translations will require a different representation later.

### First reading example

Let

$$
A=
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

Then

$$
A
\begin{bmatrix}3\\2\end{bmatrix}
=
\begin{bmatrix}
2\cdot3+1\cdot2\\
0\cdot3+1\cdot2
\end{bmatrix}
=
\begin{bmatrix}8\\2\end{bmatrix}.
$$

The arithmetic gives one transformed vector. The geometry asks a larger question: **what does the same rule do to the whole plane?**
