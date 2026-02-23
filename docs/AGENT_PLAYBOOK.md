# Agent Playbook (OpenClaw & other automation helpers)

This is the canonical workflow for autonomous agents contributing to the hub.

## 1. Environment bootstrap

```powershell
cd C:\Users\ZakkE\.openclaw\workspace\ampullary-duodenal-cancer-research-hub
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
```

## 2. Update & branch

```powershell
git pull origin main
git checkout -b agent/<short-topic>
```

## 3. Editing rules

- Work only inside `docs/` (or `.github/` when updating workflows/templates).
- Prepend every new section with a plain-language blockquote summary.
- Add evidence labels (Guideline, Randomized, Phase II, Case series, Anecdote).
- Use analogies for complex concepts (e.g., “Biliary drains are plumbing clean-outs”).

## 4. Quality checks

```powershell
mkdocs serve  # optional live preview
mkdocs build  # required before commit
```

If `mkdocs build` fails, fix the file noted in the traceback.

## 5. Commit & PR

```powershell
git status
git add <files>
git commit -m "feat: <short description>"
git push origin HEAD
gh pr create --title "feat: <topic>" --body "Summary + testing notes"
```

If `gh` CLI is unavailable, push and create the PR via GitHub web UI.

## 6. Content heuristics

- **Plain language first:** lead with the caregiver explanation, follow with clinician depth.
- **Cite everything:** include PubMed/DOI links or guideline references.
- **Story balance:** for each anecdote, add a “What to ask your doctor” bullet.

## 7. Automation-friendly templates

- `docs/community/templates/story.md`
- `docs/community/templates/research.md`
- Issue templates under `.github/ISSUE_TEMPLATE/`

## 8. Hand-off checklist

- [ ] Plain-language summary added/updated.
- [ ] Evidence tags present.
- [ ] Links verified.
- [ ] `mkdocs build` succeeds.
- [ ] PR references related issue if applicable.

Agents should log actions in their own runbooks if required. When in doubt, create a draft PR and request human review before merging.
