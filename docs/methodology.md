# Sources & Methodology

This hub synthesizes peer-reviewed evidence, guideline statements, and carefully tagged anecdotal data. Below is the repeatable process used for each update cycle.

## 1. Literature acquisition

1. **Guidelines**: NCCN Ampullary Adenocarcinoma v1.2026, NCCN Small Bowel Adenocarcinoma v1.2026, ESMO Biliary Tract Cancers 2023, ASCO Cholangiocarcinoma Updates 2024.
2. **Primary research**: PubMed queries `("ampullary" OR "duodenal adenocarcinoma") AND ("metastatic" OR "advanced")`, filtered for 2019–2026.
3. **Conference abstracts**: ASCO GI 2023–2026, ESMO 2022–2025, AACR GI special sessions.
4. **Real-world data**: SEER analyses and Flatiron Health reports when available.

## 2. Evidence grading

| Rank | Definition | Examples |
|------|------------|----------|
| **Guideline** | Endorsed by NCCN/ESMO/ASCO or national consensus with clear grading | Standard chemo regimens, biomarker testing algorithms |
| **Randomized / Phase III** | Prospective controlled trials | POLO (olaparib) extrapolations, TOPAZ-1 (durvalumab+GemCis) |
| **Phase II / Cohort** | Prospective or retrospective cohorts with ≥20 patients | FOLFOX post-gemcitabine data, KRAS G12C inhibitor cohorts |
| **Case series / Mechanistic** | ≤20 patients or translational data | CLDN18.2 expression studies |
| **Anecdote** | Forums, blogs, single-patient reports | Drain management hacks, integrative therapy experiences |

Statements inside the docs specify the highest rank available. Anecdotal sections are explicitly labeled.

## 3. Update cadence

- **Monthly**: scan newly published trials, NCCN update bulletins, FDA approvals.
- **Quarterly**: refresh clinical trial table, supportive care checklists.
- **Ad hoc**: when major approvals (e.g., KRAS G12C combo) occur.

## 4. Tooling

- Managed with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) for static-site generation.
- Content linted using `markdownlint` (if installed) and spell-check via VS Code extensions.
- Citations tracked via Zotero shared library (`Ampullary Hub 2026`).

## 5. Contribution workflow

1. Fork the GitHub repo.
2. Create a feature branch (`feature/add-biomarkers`).
3. Add/edit Markdown files in `docs/` and update `mkdocs.yml` if nav changes.
4. Run `mkdocs serve` locally to preview.
5. Submit a pull request referencing sources. Maintain evidence labels.

## 6. Transparency & limitations

- Rare cancer data often relies on pancreatic or biliary analogs; differences are noted where applicable.
- Survival statistics vary widely by stage, histology, and comorbidities—use the [Clinician Mode](clinician-mode.md) section for contextual numbers.
- Anecdotal insights are community observations, not medical advice.

For questions or source submissions, open a GitHub issue or email the maintainers listed on the [Disclaimer & Privacy](disclaimer.md) page.
