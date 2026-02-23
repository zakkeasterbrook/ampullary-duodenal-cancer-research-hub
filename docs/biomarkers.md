# Biomarkers & Testing

**Goal:** map every readily actionable biomarker for ampullary carcinoma, duodenal adenocarcinoma, and pancreatobiliary overlap tumors, with the sequencing strategy that maximizes therapeutic options even for frail patients.

| Biomarker | Test | Actionability | Evidence Strength |
|-----------|------|---------------|-------------------|
| **MMR/MSI status** | IHC for MLH1/MSH2/MSH6/PMS2 + PCR/NGS for MSI | Opens pembrolizumab or dostarlimab in any treatment line; signals Lynch syndrome workup | Guideline (NCCN/ESMO) |
| **Tumor Mutational Burden ≥10 mut/Mb** | NGS panel (DNA) | Supports pembrolizumab under tumor-agnostic FDA label | FDA label |
| **HER2 amplification / overexpression** | IHC + confirm FISH/NGS copy number | Enables trastuzumab + chemotherapy, trastuzumab deruxtecan, or tucatinib-based regimens | Phase II / basket |
| **BRCA1/2, PALB2, ATM, other HRD** | Germline + tumor NGS | Enables platinum prioritization, PARP inhibitors (olaparib, talazoparib) via extrapolation from pancreatic/biliary trials | Guideline + cohort |
| **KRAS G12C** | DNA NGS | Adagrasib + EGFR inhibitor (panitumumab) via KRYSTAL-1 biliary cohort; clinical-trial referral | Phase II |
| **NTRK / RET / ALK fusions** | RNA fusion panel or anchored multiplex PCR | Trk inhibitors (larotrectinib, entrectinib) or selpercatinib | FDA tumor-agnostic |
| **BRAF V600E** | DNA NGS | Dabrafenib + trametinib (tumor-agnostic), consider triplet with cetuximab if intestinal phenotype | FDA label |
| **FGFR2 fusions/amplifications** | DNA/RNA NGS | Erdafitinib, pemigatinib, futibatinib (off-label unless in trial) | Phase II biliary |
| **CLDN18.2** | IHC (Ventana) | Renders patients eligible for zolbetuximab trials; watch 2025 FDA review | Phase III (gastroesophageal) |
| **PD-L1 CPS ≥10** | PD-L1 IHC 22C3 | Supports adding nivolumab to chemo if intestinal phenotype and CPS high (extrapolated from CheckMate-649) | Phase III extrapolation |

## Sequencing strategy

1. **At diagnosis of metastatic disease**, order a comprehensive hybrid capture NGS panel (DNA + RNA) on tumor tissue. If tissue is scant, send blood-based ctDNA (e.g., Guardant360) while pursuing tissue.
2. **Pair molecular testing with germline** (Invitae Multi-Cancer, Ambry, etc.) because up to 10% carry Lynch or BRCA-related mutations.
3. **Add MSI/MMR IHC immediately** on resection or biopsy tissue; do not wait for NGS turnaround if systemic therapy decisions are pending.
4. **Reflex to RNA fusion testing** if DNA panel is negative for driver alterations and the tumor displays intestinal histology.
5. **Document TMB** and PD-L1 CPS in the pathology addendum to smooth insurance approvals for immunotherapy.

## Interpretation pearls

- **Pancreatobiliary subtype**: KRAS, TP53, SMAD4 alterations dominate; MSI-high is rare. Focus on KRAS subtyping (G12D vs G12C) for trial matching.
- **Intestinal subtype**: more likely to be MSI-high, HER2-positive, and responsive to 5-FU/oxaliplatin protocols.
- **Biliary obstruction** or cholangitis can cause chronic inflammation that lowers tumor purity; request macro-dissection and confirm % tumor nuclei before sending tissue.
- **When ctDNA is negative**, repeat after biliary drainage—high bilirubin and sepsis can dilute circulating tumor DNA.

## Reporting template for tumor boards

```text
Patient: 79F, pancreatobiliary-type ampullary carcinoma, liver mets
Sample: Core needle biopsy, Feb 2026, 30% tumor cellularity
Test: Caris MI Profile (DNA+RNA)
Findings:
  - KRAS G12C p.G12C (VAF 28%) → adagrasib/panitumumab trial (KRYSTAL-10)
  - TP53 p.R248Q, SMAD4 LOH (prognostic only)
  - MSI-stable, TMB 4.3 mut/Mb
  - PD-L1 CPS 3
Germline: negative (Invitae); VUS in ATM
Action items:
  1. Prioritize gemcitabine + nab-paclitaxel now; bridge to KRYSTAL-10 if functional status holds.
  2. Repeat ctDNA after 3 cycles to monitor KRAS VAF trend.
  3. Re-biopsy if rapid progression to reassess HER2/FGFR status.
```

## Resources & further reading

- NCCN Ampullary Adenocarcinoma v1.2026 molecular workup appendix
- ESMO Guidelines Committee. *Biliary Tract Cancers: ESMO Clinical Practice Guidelines* (2023 update)
- Shroff RT et al. *Comprehensive Genomic Profiling of Biliary Tract Cancers Identifies Actionable Alterations* (JCO Precision Oncology, 2024)
- NCI MATCH and TAPUR trial lookup portals
