### Scenario 8: Colored Text/Stamp on Colored Background

**Problem**: Yellow text on blue wall, signature under red stamp, color separation needed

**Workflow**:
1. **LOAD** → Import image
2. **ANALYZE** → Assess color overlap
3. **EXTRACT** → Color Deconvolution:
   - Click desired color sample (yellow text)
   - Click undesired color #1 (blue wall)
   - Click background/substrate
   - Optional: Click undesired color #2
   - Color space: Lab (often superior to RGB)
   - Result: Yellow text isolated, blue removed
4. **ADJUST** → Levels/Curves:
   - Increase text-to-background separation
   - Maximize contrast
5. **ADJUST** → CLAHE:
   - Block 100px, Clip 3.0
   - Enhance text readability
6. **SHARPEN** → Unsharp Masking (optional):
   - If text edges need enhancement
7. **PRESENT** → Annotate:
   - Highlight extracted text
   - Document colors separated

**Expected Result**: Target color isolated, interfering colors removed, text/signature legible
