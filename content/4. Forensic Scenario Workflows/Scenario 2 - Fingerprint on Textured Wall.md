### Scenario 2: Fingerprint on Textured Wall

**Problem**: Low contrast, wall texture obscures ridges, varied substrate

**Workflow**:
1. **LOAD** → Import image/photo
2. **ANALYZE** → Histogram (check contrast), Metadata
3. **EXTRACT** → Channel Mixer:
   - Select GREEN channel (if fluorescent detection)
   - Or try all three, pick best contrast
4. **EXTRACT** → Color Deconvolution (if colored background):
   - Click ridge color (desired)
   - Click wall color (undesired #1)
   - Result: Ridges isolated
5. **EXTRACT** → Fourier Filter (if periodic wall pattern):
   - Identify frequency peak of texture
   - Suppress texture pattern
6. **ADJUST** → CLAHE:
   - Block size 75px (local ridge contrast)
   - Clip limit 3.0
   - Result: Ridge detail emerges
7. **ADJUST** → Levels/Curves:
   - Optimize black/white points
   - Enhance ridge-to-background separation
8. **SHARPEN** → Optional Unsharp Masking (gentle):
   - Radius 0.5 (fine ridge detail)
   - Amount 0.7 (gentle)
   - Threshold 1.5 (protect background)
9. **EDIT** → Resize 1:1 (MANDATORY for AFIS):
   - Preserves 1000+ DPI
   - No interpolation artifacts
10. **MEASURE** → Measure 1D/2D (if dimensional comparison needed)
11. **PRESENT** → Annotate:
    - Highlight ridge patterns
    - Add scale reference
    - Mark minutiae points

**Expected Result**: Obscured by texture → Ridge patterns clearly visible, ready for comparison
