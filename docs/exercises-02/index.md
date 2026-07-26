---
title: Exercises 02 — Vectors, Bases, and Coordinate Systems
description: Exercise design complementing Lecture 02.
exercise_set: "02"
exercise_title: Vectors, Bases, and Coordinate Systems
lecture_link: lecture-02/
intro: The lecture builds the algebra of change; the exercises turn each geometric interpretation into a checked calculation, drawing and short explanation.
section_links:
  - { id: vectors-as-changes, title: Vectors as changes }
  - { id: algebra-of-changes, title: Algebra of changes }
  - { id: dot-product, title: Length and dot product }
  - { id: projection, title: Projection }
  - { id: basis, title: Linear combinations and basis }
  - { id: set-audit, title: Set audit }
---

# Exercise design

## Vectors as changes {#vectors-as-changes}

### Connection to the lecture

The lecture constructs a vector from two points and shows several translated arrows representing the same change.

### Boundary of the lecture

Only one numerical example is needed on the lecture. The classification of many representations belongs to exercises.

### Work transferred to exercises

Students should calculate vectors between points, find different point pairs producing the same vector, draw several representatives and distinguish a free vector from one directed segment.

### Planned problem types

- short coordinate calculations;
- one matching problem between arrows and vectors;
- one drawing task;
- one definition-in-own-words task.

### Required workbook result

Calculations, a shared diagram with several representatives and a concise statement of the equivalence condition.

### Verification

Each claimed representative must have the same coordinate difference.

## Algebra of changes {#algebra-of-changes}

### Connection to the lecture

Addition is shown as consecutive motion, negation as reversing motion and scalar multiplication as controlling magnitude and orientation.

### Boundary of the lecture

The lecture demonstrates one animated path and one simple sum. Repetition and comparison are transferred.

### Work transferred to exercises

Students should:

1. compute sums, differences and scalar multiples;
2. draw the corresponding paths;
3. compare different sequences of changes leading to the same endpoint;
4. verify commutativity geometrically;
5. interpret negative and zero scalars.

### Planned problem types

- elementary calculations;
- path construction;
- comparison of two routes;
- one interpretation problem involving a negative scalar.

### Required workbook result

Calculations, a broken-line diagram, endpoint checks and one explanatory paragraph.

### Verification

The final point obtained from the drawing must agree with the coordinate sum.

## Length and dot product {#dot-product}

### Connection to the lecture

The lecture derives length geometrically and presents the dot product as a numerical measure of directional agreement.

### Boundary of the lecture

The lecture interprets the sign and performs only elementary examples. General angle computation is not the main activity.

### Work transferred to exercises

Students should calculate lengths, normalize simple vectors, compute dot products, classify angles by sign and determine actual angles only in selected simple cases.

### Planned problem types

- length and normalization calculations;
- sign-based angle classification;
- one table relating geometry to the dot product;
- one visual explanation.

### Required workbook result

Calculations, an interpretation table and at least one drawing used to check the sign.

### Verification

Normalized vectors must be checked to have length $1$, and classifications must be compared with a sketch.

## Projection {#projection}

### Connection to the lecture

The lecture visualizes a vector as a parallel component plus a perpendicular remainder and states the projection formula.

### Boundary of the lecture

Full projection technique is intentionally transferred to exercises.

### Work transferred to exercises

Students should:

1. calculate projections onto coordinate and non-coordinate directions;
2. construct the decomposition $u=\operatorname{proj}_v u+u_\perp$;
3. check $u_\perp\cdot v=0$;
4. compare projection onto $v$ and $-v$;
5. identify zero and oppositely directed projections;
6. prepare a clear visual explanation.

### Planned problem types

- two direct calculations;
- one decomposition problem;
- one comparison problem;
- one visualization or short presentation.

### Required workbook result

Full calculations, a decomposition diagram and an explicit orthogonality check.

### Verification

The two components must add back to the original vector and the remainder must be orthogonal to the target direction.

## Linear combinations and basis {#basis}

### Connection to the lecture

The lecture uses two sliders to show which vectors can be generated from chosen directions and introduces a basis as independent directions spanning the plane.

### Boundary of the lecture

Only one simple nonstandard basis is treated. General change-of-basis machinery is deferred.

### Work transferred to exercises

Students should compare dependent and independent generating vectors, solve simple coordinate decompositions, express one vector in two bases and verify both descriptions geometrically.

### Planned problem types

- generation by one or two directions;
- simple linear-combination calculations;
- one change-of-basis example with small coefficients;
- one comparison of the vector with its coordinate descriptions;
- one student-prepared visual explanation.

### Required workbook result

A generating diagram, solved coefficients in two bases, reconstruction checks and a statement that coordinates depend on the basis while the vector does not.

### Verification

Every coordinate vector must be reconstructed from the stated basis vectors.

## Set audit {#set-audit}

Check that the set preserves one narrative: vector as change → algebra of changes → measurement of directions → extraction of a component → representation in a basis. Technical repetition should support this narrative rather than replace it.
