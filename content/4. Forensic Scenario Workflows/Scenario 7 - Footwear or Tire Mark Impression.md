### Scenario 7: Footwear/Tire Mark Impression

**Problem**: Impression on varied substrate, low contrast, need dimensional analysis

**Workflow**:
1. **LOAD** → Import impression photo
2. **ANALYZE** → Histogram (assess contrast)
3. **EXTRACT** → Invert (if mark lighter than background)
4. **ADJUST** → Smart Adjust:
   - Strength 1.5
   - Local contrast enhancement for varied substrate
5. **EXTRACT** → Channel Mixer:
   - Convert to greyscale using best channel
   - Try all three, select highest contrast
6. **ADJUST** → CLAHE:
   - Block 75-100px
   - Clip 3.5
   - Result: Tread detail emerges
7. **DENOISE** → Bilateral Filter:
   - Space 25, Range 0.15, Iterations 1
   - Reduce substrate noise, preserve tread edges
8. **SHARPEN** → Unsharp Masking (optional):
   - Radius 0.8, Amount 0.6, Threshold 1.5
9. **MEASURE** → Measure 1D/2D:
   - Measure tread width
   - Measure pattern dimensions
   - Use scale reference in image
10. **PRESENT** → Annotate:
    - Highlight class characteristics
    - Mark individual characteristics
    - Label dimensions

**Expected Result**: Tread pattern clearly visible, dimensional measurements accurate vs. reference
