title: Semantic Operators
status: Ongoing
area: DB4AI

## Motivation

Semantic operators (filter, join, group-by over unstructured data using LLMs) are powerful but expensive; existing engines optimize logical plans poorly and burn LLM calls where cheaper proxies would do.

## Goal

SAGE: a self-optimizing engine for semantic operators — analyze bottlenecks of SOTA engines, then replace expensive LLM calls with cheaper proxies such as vector embeddings and clustering, with accuracy guarantees.

## Timeline
