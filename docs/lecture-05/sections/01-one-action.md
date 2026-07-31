## One rule acts on every vector {#one-action}

In the previous lectures, vectors described changes, directions and combinations. We now introduce a new object: a rule that acts on vectors.

An action receives an input vector and produces an output vector:

$$
\begin{bmatrix}x\\y\end{bmatrix}
\longmapsto
\begin{bmatrix}x'\\y'\end{bmatrix}.
$$

For example, the rule

$$
\begin{bmatrix}x\\y\end{bmatrix}
\longmapsto
\begin{bmatrix}2x\\y\end{bmatrix}
$$

doubles the horizontal component and leaves the vertical component unchanged. The same rule acts on every point, every arrow and every figure.

!!! principle "One action, one rule"
    We do not choose a new formula for each input. We specify one rule and apply it to every vector in the plane.

### Start with two coordinate formulas

A general rule of the type studied in this lecture has the form

$$
\begin{aligned}
x' &= ax+by,\\
y' &= cx+dy.
\end{aligned}
$$

Read these equations literally:

- the first output coordinate is built from $x$ and $y$ using the coefficients $a$ and $b$;
- the second output coordinate is built from $x$ and $y$ using the coefficients $c$ and $d$.

The four coefficients can be stored in a rectangular array:

$$
A=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}.
$$

This array is called a **matrix**. At this point it is only an organised way to store the four coefficients of the rule.

### Definition: matrix times vector

We now **define** what the expression

$$
A
\begin{bmatrix}x\\y\end{bmatrix}
$$

means.

Take one row at a time:

$$
\begin{array}{c}
\text{first row }[a\ b]
\end{array}
\quad\Longrightarrow\quad
ax+by,
$$

$$
\begin{array}{c}
\text{second row }[c\ d]
\end{array}
\quad\Longrightarrow\quad
cx+dy.
$$

Therefore, by definition,

$$
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}
\begin{bmatrix}x\\y\end{bmatrix}
=
\begin{bmatrix}
ax+by\\
cx+dy
\end{bmatrix}.
$$

The left-hand side is compact notation. The right-hand side tells us exactly how to calculate the two output coordinates.

!!! definition "Matrix-vector multiplication"
    Multiplying a $2\times2$ matrix by a two-component vector means:

    1. use the first row to calculate the first output coordinate;
    2. use the second row to calculate the second output coordinate.

    Nothing is being assumed here. This is the definition of the operation introduced in this lecture.

The output coordinates are linear combinations of the input coordinates. There are no constant terms such as $+3$ or $-1$.

!!! consequence "The origin stays fixed"
    Substituting $x=0$ and $y=0$ into the definition gives

    $$
    A\begin{bmatrix}0\\0\end{bmatrix}
    =
    \begin{bmatrix}
    a\cdot0+b\cdot0\\
    c\cdot0+d\cdot0
    \end{bmatrix}
    =
    \begin{bmatrix}0\\0\end{bmatrix}.
    $$

    A translation is therefore not represented by a $2\times2$ matrix acting on ordinary plane vectors. Translations require a different representation.

### First calculation, row by row

Let

$$
A=
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix},
\qquad
\mathbf x=
\begin{bmatrix}3\\2\end{bmatrix}.
$$

The first row produces the first output coordinate:

$$
[2\ \ 1]
\begin{bmatrix}3\\2\end{bmatrix}
=2\cdot3+1\cdot2
=8.
$$

The second row produces the second output coordinate:

$$
[0\ \ 1]
\begin{bmatrix}3\\2\end{bmatrix}
=0\cdot3+1\cdot2
=2.
$$

Putting the two results into one vector gives

$$
A\mathbf x
=
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}
\begin{bmatrix}3\\2\end{bmatrix}
=
\begin{bmatrix}8\\2\end{bmatrix}.
$$

The arithmetic gives one transformed vector. The geometric question for the rest of the lecture is: **what does this same rule do to the whole plane?**
