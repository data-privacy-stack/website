---
title: Presidio
description: PII detection and anonymization for text, images, and structured data.
---

**Presidio** helps you detect and anonymize personally identifiable information
(PII) and protected health information (PHI) across text, images, and structured
data.

:::tip[Full documentation]
The complete Presidio documentation — installation, tutorials, API reference,
and recognizer catalog — lives at
**[presidio.dataprivacystack.org](https://presidio.dataprivacystack.org)**.
:::

## What it does

- **Detect** PII using a configurable pipeline of recognizers: regex/pattern
  matching, deny lists, NLP models (spaCy, Stanza, transformers), and modern
  model-based recognizers (GLiNER, HuggingFace).
- **Anonymize** detected entities with operators such as redact, replace, mask,
  hash, encrypt, and realistic synthetic surrogates.
- **Work across modalities** — plain text, structured/tabular data, and images
  (including DICOM).

## Where to go

- **Docs:** [presidio.dataprivacystack.org](https://presidio.dataprivacystack.org)
- **Source:** [github.com/data-privacy-stack/presidio](https://github.com/data-privacy-stack/presidio)
- **Packages:** [`presidio-analyzer`](https://pypi.org/project/presidio-analyzer/) ·
  [`presidio-anonymizer`](https://pypi.org/project/presidio-anonymizer/) on PyPI

## Getting started

```bash
pip install presidio-analyzer presidio-anonymizer
python -m spacy download en_core_web_lg
```

```python
from presidio_analyzer import AnalyzerEngine
from presidio_anonymizer import AnonymizerEngine

analyzer = AnalyzerEngine()
anonymizer = AnonymizerEngine()

text = "My name is Maria and my number is 212-555-0143."
results = analyzer.analyze(text=text, language="en")
print(anonymizer.anonymize(text=text, analyzer_results=results).text)
```

See the [full documentation](https://presidio.dataprivacystack.org) for
configuration, custom recognizers, and deployment guides.
