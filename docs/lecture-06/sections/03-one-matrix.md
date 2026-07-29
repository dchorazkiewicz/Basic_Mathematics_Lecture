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
AB=
\begin{bmatrix}
0&-1\\
1&1
\end{bmatrix}.
$$

A direct check gives

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
    The matrix $AB$ is correct because its two columns reproduce the coefficients of the final rule. The next section derives those same columns directly from the basis vectors.