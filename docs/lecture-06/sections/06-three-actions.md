## Three consecutive actions can be grouped without changing the journey {#three-actions}

Suppose that $C$ acts first, then $B$, then $A$. The chronological journey is

$$
\mathbf x
\overset{C}{\longmapsto}
C\mathbf x
\overset{B}{\longmapsto}
B(C\mathbf x)
\overset{A}{\longmapsto}
A(B(C\mathbf x)).
$$

There are two convenient ways to calculate one matrix for this three-stage action.

### First combine $A$ and $B$

$$
\begin{aligned}
((AB)C)\mathbf x
&=(AB)(C\mathbf x)\\
&=A(B(C\mathbf x)).
\end{aligned}
$$

### First combine $B$ and $C$

$$
\begin{aligned}
(A(BC))\mathbf x
&=A((BC)\mathbf x)\\
&=A(B(C\mathbf x)).
\end{aligned}
$$

Both grouped products send every input vector to the same final output. Therefore

$$
(AB)C=A(BC).
$$

This property is called **associativity**.

!!! interpretation "Parentheses change the calculation plan, not the action order"
    In both calculations, $C$ still acts first, $B$ second and $A$ third. Parentheses only decide which pair of matrices is multiplied first.

!!! warning "Associativity is not commutativity"
    The factors keep their order. Associativity allows $(AB)C=A(BC)$, but it does not allow the matrices to be exchanged. Usually $AB\ne BA$.