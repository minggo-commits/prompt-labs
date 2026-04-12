---
title: Retrieval-Augmented Generation (RAG)
description: Learn how to ground Large Language Models in external facts using RAG to reduce hallucinations and improve factual accuracy.
keywords: [rag, retrieval-augmented generation, ground ai, vector databases, factual ai]
---

# Retrieval-Augmented Generation (RAG)

RAG is a technique that grounds AI outputs in specific, external data rather than relying solely on the model's internal knowledge.

## The Problem
Models have a "cutoff date" for their knowledge and can hallucinate when they lack information.

## The RAG Solution
1. **Retrieve**: Search a knowledge base for relevant documents.
2. **Augment**: Inject those documents into the prompt.
3. **Generate**: The model answers based *only* on the provided context.

### Standard RAG Prompt Pattern:
> Answer the question based ONLY on the provided context. If the answer isn't there, say "I don't know."
> 
> **Context:** [Retrieved Text Here]
> 
> **Question:** [User Question Here]
