# Zero-Shot & Few-Shot Prompting

Zero-shot and few-shot prompting are the foundational techniques for controlling Large Language Models (LLMs).

## Zero-Shot Prompting
Zero-shot prompting means asking an LLM to perform a task without providing any examples. This relies entirely on the model's pre-existing knowledge.

**When to use:**
- Simple translations
- Basic summarization
- General knowledge queries

## Few-Shot Prompting
Few-shot prompting involves providing the model with a few examples (shots) of the expected input-output behavior. This "conditions" the model to follow a specific pattern or style.

### Best Practices:
1. **Diverse Examples:** Cover different scenarios.
2. **Consistent Formatting:** Use the exact same structure for examples as you do for the target query.
3. **Quality over Quantity:** 3-5 high-quality examples are usually better than 10 mediocre ones.
