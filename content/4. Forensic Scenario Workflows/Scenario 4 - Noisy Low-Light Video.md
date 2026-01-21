
### Scenario 4: Noisy Low-Light Video

**Problem**: High ISO noise, low SNR, grainy, low-light CCTV

**Workflow**:
1. **LOAD** → Import video
2. **ANALYZE** → Macroblocks (check compression), Histogram
3. **DENOISE** → Deblocking Filter:
   - Strength 0.5-1.0 (based on Macroblocks severity)
   - Removes visible block boundaries
4. **DENOISE** → Bilateral Filter:
   - Space 25, Range 0.2, Iterations 1
   - Smooths block transitions
5. **INTEGRATE** → Temporal Smoothing:
   - Frame size 3-4 (leverage frame history)
   - Further reduces compression artifacts
6. **INTEGRATE** → Motion Smoothing:
   - Handle moving objects
7. **SHARPEN** → Unsharp Masking:
   - Radius 1.0, Amount 0.7, Threshold 2
   - Recovers lost sharpness
8. **ADJUST** → CLAHE:
   - Block 100px, Clip 3.0
   - Enhance remaining detail contrast
9. **PRESENT** → Compare Original, Annotate

**Expected Result**: Block artifacts minimized, smooth appearance, improved legibility
