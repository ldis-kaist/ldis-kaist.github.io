title: Semantic Operators
status: Ongoing
area: DB4AI

## Motivation

Semantic operators let users query unstructured data (documents, images, logs) with LLM-powered filters, joins, and aggregations — but every operator call per data item is an LLM invocation, so naive pipelines are painfully slow and expensive. Existing engines optimize semantic logical plans poorly and burn LLM calls where much cheaper proxies would do. Our recent work, <a href="https://arxiv.org/abs/2606.08090" target="_blank" rel="noopener">Fast LLM-Based Semantic Filtering (preprint)</a>, unifies existing semantic-filtering approaches in one framework and derives an adaptive two-phase method that is both fast and accurate.

Related background: semantic-operator engines such as <a href="https://arxiv.org/abs/2407.11418" target="_blank" rel="noopener">LOTUS</a> and declarative AI-workload systems such as <a href="https://arxiv.org/abs/2405.14696" target="_blank" rel="noopener">Palimpzest</a>.

## Goal

Follow-up research on the paper above, growing into a self-optimizing engine for semantic operators — analyze the bottlenecks of SOTA engines, then replace expensive LLM calls with cheaper proxies such as vector embeddings, clustering, and lightweight ML models, with accuracy guarantees. Extend beyond a single operator and design a query optimizer with the multi-objective goal (accuracy & efficiency) with redefined plan equivalence.

## Team



## Timeline


