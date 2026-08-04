## Determinants of consecutive actions {#determinant-composition}

Lecture 06 represented two consecutive actions by a product matrix. Area multipliers must also combine.

Take

$$
B=
\begin{bmatrix}
2&0\\
0&1
\end{bmatrix}
$$

first. It doubles every area:

$$
\det B=2.
$$

Then apply the shear

$$
A=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}.
$$

It preserves area:

$$
\det A=1.
$$

The complete action is

$$
AB
=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}
\begin{bmatrix}
2&0\\
0&1
\end{bmatrix}
=
\begin{bmatrix}
2&1\\
0&1
\end{bmatrix}.
$$

Its determinant is

$$
\det(AB)
=2\cdot1-1\cdot0
=2.
$$

The area journey is therefore

$$
1
\overset{B}{\longmapsto}
2
\overset{A}{\longmapsto}
2.
$$

The total multiplier is

$$
2\cdot1=2.
$$

This is the general rule:

!!! principle "Area factors multiply"
    For two square matrices of the same size,

    $$
    \det(AB)=\det A\,\det B.
    $$

The order of matrices still matters for the final picture, but the two numerical determinant factors multiply as ordinary real numbers.

### A reflection changes the sign

Let

$$
R=
\begin{bmatrix}
1&0\\
0&-1
\end{bmatrix}.
$$

Since

$$
\det R=-1,
$$

applying $R$ after the previous stretch gives a total determinant

$$
(-1)\cdot2=-2.
$$

The ordinary area multiplier is $2$, and the negative sign records one reversal of orientation.

### A singular stage makes the whole composition singular

If one stage has determinant zero, then

$$
\det(AB)=\det A\cdot0=0.
$$

Once a two-dimensional region has collapsed to a line, a later linear action cannot reconstruct the missing dimension. The lost information is not present in the intermediate output.