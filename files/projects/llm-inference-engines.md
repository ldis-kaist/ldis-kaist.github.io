title: LLM Inference Engines
status: Open
area: DB4AI

## Motivation

Serving LLMs is a data management problem in disguise: inference engines (vLLM and friends) juggle KV caches, batching, and scheduling — the same buffer-management and scheduling questions databases solved decades ago, now on GPUs. Yet engines differ widely in mechanisms and performance, and no unified model explains their behavior across hardware and objectives. Our work, <a href="https://arxiv.org/abs/2411.07447" target="_blank" rel="noopener">our work on LLM inference simulation and DBMS-inspired cache replacement (preprint)</a>, showed that simulation plus DBMS-inspired cache replacement policies can save real GPU hours in both engine development and online serving.

Related background: <a href="https://arxiv.org/abs/2309.06180" target="_blank" rel="noopener">vLLM / PagedAttention</a> is the canonical example of an OS/DB-style idea transforming LLM serving.

## Goal

Follow-up research on the paper above: a unified performance model of LLM inference engines — measure and break down throughput/latency across hardware settings, model multiple engines in one framework, and identify bottlenecks and preconditions to harness future hardware.

## Team

Looking for students who are good at performance profiling.

## Timeline


