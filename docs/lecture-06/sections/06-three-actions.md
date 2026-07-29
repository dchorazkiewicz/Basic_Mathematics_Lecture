## Three consecutive actions can be grouped without changing the journey {#three-actions}

Suppose that $C$ acts first, then $B$, then $A$. The vector follows

$$
\mathbf x
\overset{C}{\longmapsto}
C\mathbf x
\overset{B}{\longmapsto}
B(C\mathbf x)
\overset{A}{\longmapsto}
A(B(C\mathbf x)).
$$

We may first combine $A$ with $B$:

$$
(AB)(C\mathbf x),
$$

or first combine $B$ with $C$:

$$
A((BC)\mathbf x).
$$

Both expressions describe the same three-stage journey. Therefore

$$
(AB)C=A(BC).
$$

!!! interpretation "Grouping is not ordering"
    Parentheses tell us which product is calculated first. They do not change the chronological order of the actions. The rightmost matrix still acts first.

This property is called **associativity**. It allows a long chain of transformations to be replaced step by step by one matrix.

It does **not** imply that factors may be exchanged. Usually $AB\ne BA$.
