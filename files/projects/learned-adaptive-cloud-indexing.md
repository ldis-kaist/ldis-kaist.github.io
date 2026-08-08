title: Learned & Adaptive Cloud Indexing
status: Open
area: Pure DB

## Motivation

Cloud databases separate compute from storage, so touching cold data is expensive — and the classic answer, building indexes upfront, breaks down: you pay to build and maintain indexes that shifting workloads may never use, while the queries that arrive have no index exactly when they need one. Adaptive indexing flips this around: build index structure incrementally, as a byproduct of the queries actually being asked, so the database organizes itself toward its workload. Combined with learned components that predict what is worth indexing, this is a path to instance-optimality in the cloud — performance approaching an ideal index chosen in hindsight, without the upfront gamble.

Related background: the key reference is <a href="https://ieeexplore.ieee.org/document/10184818" target="_blank" rel="noopener">SPA</a> — economical, workload-driven indexing for cloud analytics (<a href="https://ir.cwi.nl/pub/33311/33311.pdf" target="_blank" rel="noopener">open PDF</a>); earlier roots include <a href="https://dblp.org/rec/conf/cidr/IdreosKM07.html" target="_blank" rel="noopener">database cracking (CIDR 2007)</a> and <a href="https://arxiv.org/abs/1712.01208" target="_blank" rel="noopener">learned index structures</a>.

## Goal

Instance-optimality in the cloud via learned, adaptive indexing — implement our adaptive approach on top of strong baselines, measure how close it gets to the ideal-index performance, and optimize from there.

## Team



## Timeline


