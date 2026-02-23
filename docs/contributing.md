# Contributing Guide

*Maintainer: [Zakk Easterbrook](https://github.com/zakkeasterbrook)*

Thank you for helping families facing ampullary and duodenal cancers. This project welcomes clinicians, caregivers, researchers, and automation agents. Pick the workflow that matches your comfort level.

## 1. Choose your contribution type

| Contribution | Examples | How to submit |
|--------------|----------|---------------|
| **Plain-language story** | What worked for drain care, nutrition hacks, inpatient tips | Open a "Human Story" issue or drop a file under `docs/community/` using the story template |
| **Clinic note digest** | MyChart visit summary, doctor recommendations (anonymized) | Use the clinic-note template or Human Story issue |
| **Research summary** | Trial results, biomarkers, guidelines | Open a "New Topic / Research" issue or create a new Markdown file under `docs/` |
| **Correction** | Broken link, outdated regimen, typo | Open a "Correction" issue or send a pull request |

## 2. No-code workflow (web editor)

1. Click any file in `docs/` on GitHub.
2. Press the pencil icon (✏️) to edit.
3. Use the provided template (each file starts with instructions).
4. Describe your change and select **“Create a new branch for this commit and start a pull request.”**
5. Submit! Maintainers will review and merge.

## 3. Local workflow (developers & agents)

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```
- Edit Markdown under `docs/`.
- Run `mkdocs serve` to preview: http://127.0.0.1:8000
- `mkdocs build` before committing to catch errors.

## 4. Evidence labels

Every fact needs a label:
- `Guideline`
- `Randomized / Phase III`
- `Phase II / Cohort`
- `Case series / Mechanistic`
- `Anecdote`

Tag statements inline (e.g., `*Guideline level.*`) and cite sources with markdown links.

## 5. Tone & accessibility

- Lead with the plain-language explanation before deep detail.
- Use analogies: “Biliary drains are like plumbing clean-outs…”
- Avoid medical slang unless you define it right away.

## 6. File naming & structure

- Use lowercase-with-hyphens for new files.
- For community stories, copy `docs/community/templates/story.md`.
- For research, follow `docs/community/templates/research.md`.

## 7. Pull request checklist

- [ ] Plain-language summary at the top of each new section.
- [ ] Evidence label + citation for every clinical statement.
- [ ] `mkdocs build` passes (or note if you only used the web editor).
- [ ] Screenshots or notes if you changed layout/styling.

## 8. Safety & privacy

- Remove identifiers from caregiver stories (names, dates, locations).
- When summarizing clinic notes, replace exact dates with month/year, omit provider names, and never upload PDFs/screenshots.
- No medical advice: describe experiences & evidence, but remind readers to consult their care team.

## 9. Need help?

- Open a “Question” discussion or tag `@zakkeasterbrook` on your issue/PR.
- Automation agents should follow the [Agent Playbook](AGENT_PLAYBOOK.md) for detailed commands.

Let’s build the internet’s most compassionate, evidence-ranked resource for these cancers. Every thoughtful contribution counts.
