title: Declarative & Adaptive Query Processing
status: Open
area: Pure DB

## Motivation

Query processing research spans four decades (1981-today), yet its techniques remain fragmented across systems and papers, keep reinventing the wheel, i.e., similar techniques over and over. No single engine adapts its execution to each query instance to approach the performance an oracle would achieve. In the cloud this gap widens — data placement, elasticity, and interactive workloads change the optimal strategy per query, sometimes mid-query. Our related lab work includes <a href="https://dl.acm.org/doi/10.1145/3802112" target="_blank" rel="noopener">SmartRabbit (SIGMOD 2026)</a>, an interactive query processor, and <a href="https://dl.acm.org/doi/abs/10.14778/3705829.3705856" target="_blank" rel="noopener">Themis (VLDB 2025)</a>, a GPU-accelerated relational engine.

Related background: the key industry references are <a href="https://arxiv.org/abs/2504.11540" target="_blank" rel="noopener">Pruning in Snowflake: Working Smarter, Not Harder (SIGMOD 2025)</a> and <a href="https://www.vldb.org/cidrdb/papers/2026/p29-zhao.pdf" target="_blank" rel="noopener">I Can&rsquo;t Believe It&rsquo;s Not Yannakakis: Pragmatic Bitmap Filters in Microsoft SQL Server (CIDR 2026)</a>.

## Goal

Instance-optimal (cloud) DB through adaptive execution: measure the gap between a baseline and a virtual instance-optimal method, close it with recent and novel adaptive techniques, unified in a declarative framework. Here, declarativity is for the interface; when we write adaptive-execution techniques in high-level, they automatically translate into low-level implementations for each system.

## Team

Looking for students who are good at systems and math.

## Timeline


