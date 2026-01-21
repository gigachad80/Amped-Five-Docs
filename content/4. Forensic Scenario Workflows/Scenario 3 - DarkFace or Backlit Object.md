### Scenario 3: Dark Face / Backlit Subject

**Problem**: Underexposed, poor shadow detail, high noise, backlit

**Workflow**:
1. **LOAD** → Import image/video
2. **ANALYZE** → Histogram (shows left-clustered = underexposed)
3. **ADJUST** → Exposure:
   - Increase +1.0 to +1.5 stops
   - Initial brightness recovery
4. **ADJUST** → CLAHE:
   - Block size 100-200px (facial region)
   - Clip limit 3.0
   - ROI selection on face only
   - Result: Dark facial features boosted locally
5. **ADJUST** → Histogram Equalization (global):
   - Balances overall brightness across frame
6. **DENOISE** → Bilateral Filter:
   - Space_sigma 30
   - Range_sigma 0.2
   - Iterations 2
   - Result: Noise removed, facial edges preserved
7. **ADJUST** → Curves:
   - Lift shadow region (pull shadows up)
   - Protect highlights (keep from clipping)
   - Fine-tune midtones
8. **SHARPEN** → Unsharp Masking:
   - Radius 0.7 (fine facial features)
   - Amount 0.9 (moderate)
   - Threshold 1.5
9. **PRESENT** → Annotate, Compare Original

**Expected Result**: Dark/unidentifiable → Facial features visible, noise minimized, detail preserved
