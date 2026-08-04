## Calculate the determinant {#determinant-calculation}

We now need a formula for the signed area visible in the previous panel.

Take the concrete matrix

$$
A=
\begin{bmatrix}
2&1\\
1&3
\end{bmatrix}.
$$

Its columns are

$$
\mathbf u=
\begin{bmatrix}2\\1\end{bmatrix},
\qquad
\mathbf v=
\begin{bmatrix}1\\3\end{bmatrix}.
$$

These two vectors form the sides of the transformed unit square.

### Calculate the area as base times height

The length of the base is

$$
\|\mathbf u\|=\sqrt{2^2+1^2}=\sqrt5.
$$

A vector perpendicular to $\mathbf u=[2,1]$ is $[-1,2]$. Its unit version is

$$
\mathbf n=rac1{\sqrt5}
\begin{bmatrix}-1\\2\end{bmatrix}.
$$

The height of the parallelogram is the absolute value of the component of $\mathbf v$ in this perpendicular direction:

$$
\begin{aligned}
h
&=|\mathbf v\cdot\mathbf n|\\
&=\left|
\begin{bmatrix}1\\3\end{bmatrix}
\cdot
\frac1{\sqrt5}
\begin{bmatrix}-1\\2\end{bmatrix}
\right|\\
&=\frac{|-1+6|}{\sqrt5}\\
&=\sqrt5.
\end{aligned}
$$

Therefore

$$
\text{area}=\text{base}\cdot\text{height}
=\sqrt5\cdot\sqrt5
=5.
$$

Now look at the four entries of the matrix:

$$
2\cdot3-1\cdot1=5.
$$

The same calculation works for a general matrix.

Let

$$
A=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix},
\qquad
\mathbf u=
\begin{bmatrix}a\\c\end{bmatrix},
\qquad
\mathbf v=
\begin{bmatrix}b\\d\end{bmatrix}.
$$

Assume first that $\mathbf u\neq\mathbf0$. A perpendicular unit direction to $\mathbf u$ is

$$
\mathbf n=rac1{\sqrt{a^2+c^2}}
\begin{bmatrix}-c\\a\end{bmatrix}.
$$

Hence the height is

$$
|\mathbf v\cdot\mathbf n|
=rac{|ad-bc|}{\sqrt{a^2+c^2}}.
$$

Multiplying by the base length $\sqrt{a^2+c^2}$ gives ordinary area

$$
|ad-bc|.
$$

If $\mathbf u=\mathbf0$, the parallelogram is already collapsed and both its area and $|ad-bc|$ are zero.

The sign records the orientation, so we define:

!!! definition "Determinant of a $2\times2$ matrix"
    For

    $$
    A=
    \begin{bmatrix}
    a&b\\
    c&d
    \end{bmatrix},
    $$

    the determinant is

    $$
    \det A=ad-bc.
    $$

Read the pattern as

$$
\det A
=
(\text{main diagonal product})
-
(\text{other diagonal product}).
$$

### Three direct calculations

For a stretch,

$$
\det
\begin{bmatrix}
2&0\\
0&3
\end{bmatrix}
=2\cdot3-0\cdot0
=6.
$$

Areas are multiplied by $6$.

For a shear,

$$
\det
\begin{bmatrix}
1&2\\
0&1
\end{bmatrix}
=1\cdot1-2\cdot0
=1.
$$

Areas are preserved.

For a reflection,

$$
\det
\begin{bmatrix}
1&0\\
0&-1
\end{bmatrix}
=1\cdot(-1)-0\cdot0
=-1.
$$

Ordinary area is preserved, but orientation is reversed.