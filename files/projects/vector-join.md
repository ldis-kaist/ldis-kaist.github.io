title: Vector Join
status: Ongoing
area: DB4AI

## Motivation

Modern AI applications embed text, images, and tables as high-dimensional vectors, and increasingly ask set-at-a-time questions: find all query-data vector pairs within a distance threshold — a vector join. Vector joins are fundamental to vector and vector-relational databases powering multimodal retrieval and semantic analytics, yet the state of the art treats each query vector almost independently, suffering redundant index traversals and excessive distance computations. Our recent work, <a href="https://arxiv.org/abs/2603.16360" target="_blank" rel="noopener">Fast Approximate Vector Joins via Offline-Online Co-Design (preprint)</a>, introduces soft work sharing, a merged query-data index, and an adaptive hybrid search strategy, substantially improving the efficiency-recall trade-off. 

Related background: most vector systems build on graph indexes such as <a href="https://arxiv.org/abs/1603.09320" target="_blank" rel="noopener">HNSW</a> — with newer graphs like <a href="https://arxiv.org/abs/1707.00143" target="_blank" rel="noopener">NSG (VLDB 2019)</a> showing even better performance — all designed for one query at a time; for OOD-aware search, see <a href="https://dl.acm.org/doi/abs/10.1145/3786643" target="_blank" rel="noopener">CDMG+ (SIGMOD 2026)</a>, which we compare against in our paper.

## Goal

Follow-up research on the paper above: pushing vector joins further (e.g., robustness, updates, disk-based settings), integrating them as first-class operators inside vector-relational systems, and connecting with our caching line of work such as <a href="https://arxiv.org/abs/2602.02057" target="_blank" rel="noopener">QVCache: A Query-Aware Vector Cache (preprint)</a>.

## Team

Currently working with 1+ students remotely.

## Timeline


