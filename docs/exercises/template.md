---
title: Exercise Set Design Template
description: Template for planning exercise sets that complement a lecture.
---

# Exercise Set Design Template

This template belongs to the **lecture-design repository**. It is used before the student workbook is created. Its purpose is to keep the lecture and exercises in one visible sequence.

For every substantial lecture segment, add one corresponding exercise block immediately after it in the design page.

## Required front matter

```yaml
---
title: Exercises XX — Lecture title
description: Exercise design for Lecture XX.
exercise_set: "XX"
exercise_title: Lecture title
lecture_link: lecture-XX/
intro: One sentence explaining how the exercises complement the lecture.
section_links:
  - { id: block-one, title: First block }
  - { id: block-two, title: Second block }
---
```

## Required structure of one exercise block

### 1. Connection to the lecture

State exactly which lecture segment, definition, visualization or example this block continues.

### 2. Boundary of the lecture

State what is explained fully during the lecture and what is **not** developed there because of time.

### 3. Work transferred to exercises

Specify concrete actions. Use verbs such as:

- compute;
- draw;
- compare;
- predict;
- verify;
- find a counterexample;
- prepare a visualization;
- formulate a conclusion;
- present the result.

### 4. Planned problem types

Describe the intended sequence, for example:

1. two or three elementary computational problems;
2. one interpretation problem;
3. one visual or constructive problem;
4. one comparison or argument problem;
5. one short presentation problem.

Do not write twenty near-identical calculations before the mathematical role of the block is settled.

### 5. Required workbook result

State what must remain in the future `solution.md`, for example:

- calculations;
- a diagram;
- a table;
- a check by substitution;
- a comparison of two methods;
- a short conclusion in the student’s own words.

### 6. Verification

Every conceptual task must require a check: substitution, a second example, comparison with a graph, or a counterexample.

### 7. Presentation element

Indicate whether students must present the problem, and what the presentation must contain:

- the question;
- the central picture or calculation;
- the conclusion;
- an answer to one control question.

## End-of-set audit

Before turning the design page into a student workbook set, verify:

- Does every transferred topic point back to a precise lecture segment?
- Is it clear why the topic was not developed fully during the lecture?
- Are computational and conceptual tasks both present?
- Is the expected result in `solution.md` explicit?
- Is there at least one verification step in every substantial task?
- Can a task be moved back to the lecture without rewriting the entire set?
