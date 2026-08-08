title: AI-Driven Research Systems
status: Ongoing
area: DB4AI

## Motivation

AI agents can now write and revise code against execution feedback — so can they act as autonomic researchers for database internals? Today's AI-driven research attempts are nondeterministic, wasteful, and hard to trust or reproduce; we argue they need the same discipline DBMSs brought to data: transactions, provenance, and declarative interfaces. Our vision paper, <a href="https://arxiv.org/abs/2607.10508" target="_blank" rel="noopener">Confining Nondeterminism: AI-Driven Research Systems as DBMSs (vision, preprint)</a>, lays out this direction — treating AI-driven research systems as DBMSs for reliable, non-wasteful, transparent, and collaborative research.

Related background: agentic research systems such as <a href="https://arxiv.org/abs/2408.06292" target="_blank" rel="noopener">The AI Scientist</a> show the potential — and the reliability gap.

## Goal

Building toward the vision above: manage AI-driven research the way a DBMS manages data — confining nondeterminism behind well-defined interfaces, caching and reusing intermediate results across runs (non-wasteful), recording provenance for transparency and reproducibility, and letting multiple researchers (human or AI) collaborate on a shared, consistent research state. Database internals can be our first testbed. To first sell our vision, we collect concrete examples when aforementioned issues arise and translate them into quantifiable test experiments.

## Team

Currently working with 2+ students remotely.

## Timeline


