title: NL2SQL
status: Ongoing
area: AI4DB

## Motivation

Asking a database questions in natural language is one of the oldest dreams of the field, and LLMs brought it close — yet NL2SQL still fails on complex, real-world queries: ambiguous schemas, multi-step reasoning, and subtle semantic mismatches that a single LLM call cannot fix. The interesting research lies exactly in those failures, and in the system around the model: execution feedback, retrieval, and verification. For broader context on making LLMs reliable around databases, see <a href="https://arxiv.org/abs/2412.18022" target="_blank" rel="noopener">Trustworthy and Efficient LLMs Meet Databases (preprint)</a>.

Related background: the <a href="https://arxiv.org/abs/1809.08887" target="_blank" rel="noopener">Spider</a> and <a href="https://arxiv.org/abs/2305.03111" target="_blank" rel="noopener">BIRD</a> benchmarks define the current frontier of NL2SQL difficulty; recent systems such as <a href="https://arxiv.org/abs/2510.17586" target="_blank" rel="noopener">DeepEye-SQL</a> show where the state of the art stands.

## Goal

An umbrella project combining LLM agents, DB execution feedback, verification, RAG, approximate query processing, and finetuning (as a last resort) — identify where SOTA baselines break, then tackle those bottlenecks with the right combination of techniques. We already have 1+ year of experience and findings when & why such baselines fail.

## Team

Currently working with 4+ students remotely.

## Timeline


