# Share Data Safely

We want real clinic insights without personal identifiers. Follow this playbook to convert MyChart notes or doctor summaries into anonymized fuel for the community.

## 1. Decide what to share

- **Clinic note digest:** summarize impressions, plans, and lab trends using the [clinic-note template](community/templates/clinic-note.md).
- **Scan/lab trends:** capture changes over time instead of raw PDFs.
- **Questions for the crowd:** list dilemmas your care team raised.

## 2. Strip personal identifiers

Remove or replace:
- Names, initials, pronouns tied to identity (use "patient/caregiver").
- Exact dates → use month/year.
- Locations, hospital names, provider names.
- MRN, account numbers, barcodes.
- Attachments (uploading PHI is not allowed).

## 3. Summarize instead of copy-paste

| Original note | Safe summary |
|---------------|--------------|
| "Dr. Smith saw Jane Doe on 02/12/26" | "Oncology visit in Feb 2026" |
| "MRN: 123456" | (omit entirely) |
| "Portal vein thrombosis noted" | "Imaging showed portal vein thrombosis" |

Use bullet points and plain language—think “care team told us to…”

## 4. Add context, not diagnosis

- Mention stage, biomarkers, symptoms, and goals.
- Separate facts from personal opinions.
- Note evidence level (guideline vs anecdote).

## 5. Submit it

- Via GitHub issue templates (Human Story or New Topic).
- Or paste into `docs/community/clinic-notes/` using the clinic note template.
- Automation agents can digest public datasets—tag `@zakkeasterbrook` if you need help.

## 6. Why we can’t accept full MyChart uploads

This GitHub Pages site is static (no secure storage or HIPAA compliance). Summaries let us share wisdom while keeping families safe.

Need help anonymizing? Open a “Question” issue and we’ll walk through it together.
