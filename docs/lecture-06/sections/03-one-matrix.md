## One matrix records the two-step action {#one-matrix}

We now replace the two consecutive actions by one matrix. The important step is not guessing the product formula. It is reading the coefficients of the final output rule.

Keep

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
\end{bmatrix},
\qquad
\mathbf x=
\begin{bmatrix}
x\\y
\end{bmatrix}.
$$

### Stage 1: write the output of $B$

$$
\begin{aligned}
B\mathbf x
&=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}
\begin{bmatrix}
x\\y
\end{bmatrix}\\[4pt]
&=
\begin{bmatrix}
x+y\\y
\end{bmatrix}.
\end{aligned}
$$

### Stage 2: feed that output into $A$

$$
\begin{aligned}
A(B\mathbf x)
&=
\begin{bmatrix}
0&-1\\
1&0
\end{bmatrix}
\begin{bmatrix}
x+y\\y
\end{bmatrix}\\[4pt]
&=
\begin{bmatrix}
0(x+y)-y\\
(x+y)+0y
\end{bmatrix}\\[4pt]
&=
\begin{bmatrix}
-y\\x+y
\end{bmatrix}.
\end{aligned}
$$

### Stage 3: separate the coefficients of $x$ and $y$

The final vector can be rewritten as

$$
\begin{bmatrix}
-y\\x+y
\end{bmatrix}
=
x
\begin{bmatrix}
0\\1
\end{bmatrix}
+y
\begin{bmatrix}
-1\\1
\end{bmatrix}.
$$

The coefficient vector multiplying $x$ becomes the first column. The coefficient vector multiplying $y$ becomes the second column. Therefore

$$
C=AB=
\begin{bmatrix}
0&-1\\
1&1
\end{bmatrix}.
$$

### Stage 4: verify the four entries one by one

Write $C=(c_{ij})$. The first index selects the row of $A$ and the second index selects the column of $B$.

$$
\begin{aligned}
c_{11}
&=
\begin{bmatrix}0&-1\end{bmatrix}
\begin{bmatrix}1\\0\end{bmatrix}
=0\cdot1+(-1)\cdot0
=0,\\[6pt]
c_{12}
&=
\begin{bmatrix}0&-1\end{bmatrix}
\begin{bmatrix}1\\1\end{bmatrix}
=0\cdot1+(-1)\cdot1
=-1,\\[6pt]
c_{21}
&=
\begin{bmatrix}1&0\end{bmatrix}
\begin{bmatrix}1\\0\end{bmatrix}
=1\cdot1+0\cdot0
=1,\\[6pt]
c_{22}
&=
\begin{bmatrix}1&0\end{bmatrix}
\begin{bmatrix}1\\1\end{bmatrix}
=1\cdot1+0\cdot1
=1.
\end{aligned}
$$

Thus the four separately calculated entries reconstruct the same matrix:

$$
C=
\begin{bmatrix}
c_{11}&c_{12}\\
c_{21}&c_{22}
\end{bmatrix}
=
\begin{bmatrix}
0&-1\\
1&1
\end{bmatrix}.
$$

A direct action check gives

$$
\begin{bmatrix}
0&-1\\
1&1
\end{bmatrix}
\begin{bmatrix}
x\\y
\end{bmatrix}
=
\begin{bmatrix}
-y\\x+y
\end{bmatrix},
$$

which is exactly the output obtained from the two-stage calculation.

!!! definition "Matrix product as a combined action"
    The product $AB$ is the matrix satisfying

    $$
    (AB)\mathbf x=A(B\mathbf x)
    $$

    for every input vector $\mathbf x$.

!!! principle "Do not memorize the product before you can explain it"
    The matrix $AB$ is correct because its action reproduces the complete two-stage rule. The indexed row-by-column calculation and the basis-vector journey are two ways to calculate the same matrix.