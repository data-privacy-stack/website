---
title: "Evaluating PII Detection Models: A Field Guide"
description: Why a single accuracy number can be misleading when you choose a PII detection model - and how to evaluate one properly.
---

_By Omri Mendels_

Suppose you're choosing a PII detection model for your organization or platform.
You run two candidates on the same annotated test set: Model A reports an
accuracy (say F2, which penalizes false negatives more) of 0.91, Model B reports
0.78. You pick Model A - then deploy it, and privacy incidents keep happening.

What went wrong? Often, nothing with the model itself. The numbers were real;
they just weren't measuring what you thought they were measuring.

Evaluating a model for general Named Entity Recognition asks a single question:
how well does it detect entity type X? **PII detection is different** - it serves
several distinct purposes at once (de-identification, redaction, discovery,
compliance), and each demands a different way of measuring success. A single
headline metric collapses those purposes into one number and hides the trade-offs
that actually matter for privacy.

This field guide walks through how to evaluate PII detection models in a way that
reflects what you're really trying to achieve - the metrics that matter, the
pitfalls of borrowing NER evaluation wholesale, and how to reason about false
negatives versus false positives when the cost of a miss is a leaked identity.

**[Read the full article on Medium →](https://medium.com/p/fa0c745d7a4c)**
