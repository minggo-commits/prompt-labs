# Tool Use & Orchestration (ReAct)

Modern AI models can act as agents by using external tools (calculators, web search, APIs) to complete tasks.

## ReAct Pattern
**Reasoning + Acting (ReAct)** is a paradigm where the model alternates between thinking and executing actions.

1. **Thought**: The model decides it needs more data or a specific calculation.
2. **Action**: The model outputs a specific tool call (e.g., JSON).
3. **Observation**: The system provides the tool output back to the model.
4. **Final Answer**: The model synthesizes the total context to respond to the user.

## Implementation Tip
Always provide clear instructions on how the model should handle tool failures or ambiguous results to ensure system reliability.
