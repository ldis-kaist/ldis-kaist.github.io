title: Learned Query Optimization
status: Open
area: AI4DB

## Motivation

Query optimizers still rely on decades-old heuristics, and their worst mistakes trace back to cardinality estimation. Our work <a href="https://dl.acm.org/doi/abs/10.1145/3639300" target="_blank" rel="noopener">ASM (SIGMOD 2024)</a> harmonizes autoregressive models, sampling, and statistics merging into a practical learned estimator producing near-optimal plans, and <a href="https://dl.acm.org/doi/abs/10.1145/3514221.3526154" target="_blank" rel="noopener">our in-depth study (SIGMOD 2022)</a> demystifies when and why learned estimators fail. LLMs open a new chapter — optimization by reasoning rather than by training a model per database — but current LLM-based approaches need heavy inference pipelines and offer little robustness.

Related background: learned optimizers such as <a href="https://arxiv.org/abs/1904.03711" target="_blank" rel="noopener">Neo</a> and <a href="https://arxiv.org/abs/2004.03814" target="_blank" rel="noopener">Bao</a> illustrate both the promise and the inference/robustness costs we aim to avoid.

## Goal

Two connected threads: (1) follow-up research on ASM — pushing learned cardinality estimation further (group-by, subqueries, updates, UDFs); (2) benchmark LLM-based query optimization, then develop better methods using agentic multi-path reasoning and self-reflection — minimizing inference overhead, reliance on external models/finetuning, and optimization latency.

## Team

Looking for students who are good at math (probability and statistics).

## Timeline


