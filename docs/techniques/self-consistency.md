# Self-Consistency

Self-Consistency is an advanced decoding and prompting strategy that improves the reliability of reasoning tasks by sampling multiple reasoning paths and selecting the most consistent answer.

## The Core Concept

In complex reasoning tasks (like math or multi-hop logic), a model might make a minor error in a single "Chain-of-Thought" path that leads to a wrong conclusion. Self-Consistency mitigates this by:
1.  **Sampling**: Generating multiple independent "thoughts" for the same prompt (different reasoning paths).
2.  **Aggregation**: Collecting all the final answers from these paths.
3.  **Majority Vote**: Selecting the answer that appears most frequently across all sampled paths.

## Why it Works

The intuition is that while there are many ways to reach a wrong answer through a mistake, there is usually only one (or a very small number) of ways to reach the correct answer through sound logic. By looking for the common ground among many attempts, you filter out the individual path "noise."

## Practical Application

This is most effective when:
*   The answer is **finite and verifiable** (e.g., a number, a "Yes/No", or a specific category).
*   The task requires **multi-step reasoning** where the chance of a single point of failure is high.
*   You use a higher **temperature** during sampling to ensure diversity in the reasoning paths.
