## Two actions in succession {#consecutive-actions}

Lecture 05 treated a matrix as one action on the plane. We now place two actions one after the other.

Let $B$ act first and let $A$ act second. The input vector follows the journey

$$
\mathbf x
\overset{B}{\longmapsto}
B\mathbf x
\overset{A}{\longmapsto}
A(B\mathbf x).
$$

!!! principle "Read the journey from the vector outward"
    In $A(B\mathbf x)$, the matrix nearest to $\mathbf x$ acts first. Therefore $B$ is the first action and $A$ is the second action.

We use one example throughout the lecture:

$$
B=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}
\qquad\text{and}\qquad
A=
\begin{bmatrix}
0&-1\\
1&0
\end{bmatrix}.
$$

The matrix $B$ is a shear. The matrix $A$ is a rotation through $90^\circ$ counterclockwise.

Start with

$$
\mathbf x=
\begin{bmatrix}
2\\1
\end{bmatrix}.
$$

### First action: apply $B$

$$
\begin{aligned}
B\mathbf x
&=
\begin{bmatrix}
1&1\\
0&1
\end{bmatrix}
\begin{bmatrix}
2\\1
\end{bmatrix}\\[4pt]
&=
\begin{bmatrix}
1\cdot2+1\cdot1\\
0\cdot2+1\cdot1
\end{bmatrix}\\[4pt]
&=
\begin{bmatrix}
3\\1
\end{bmatrix}.
\end{aligned}
$$

The vector $\begin{bmatrix}3\\1\end{bmatrix}$ is the **intermediate output**. It is also the input received by the second matrix.

### Second action: apply $A$ to the intermediate output

$$
\begin{aligned}
A(B\mathbf x)
&=
\begin{bmatrix}
0&-1\\
1&0
\end{bmatrix}
\begin{bmatrix}
3\\1
\end{bmatrix}\\[4pt]
&=
\begin{bmatrix}
0\cdot3-1\cdot1\\
1\cdot3+0\cdot1
\end{bmatrix}\\[4pt]
&=
\begin{bmatrix}
-1\\3
\end{bmatrix}.
\end{aligned}
$$

The complete numerical journey is therefore

$$
\begin{bmatrix}2\\1\end{bmatrix}
\overset{B}{\longmapsto}
\begin{bmatrix}3\\1\end{bmatrix}
\overset{A}{\longmapsto}
\begin{bmatrix}-1\\3\end{bmatrix}.
$$

!!! warning "Do not restart from the original vector"
    The second matrix acts on $B\mathbf x$, not on the original vector $\mathbf x$. The intermediate vector must remain visible in the calculation.