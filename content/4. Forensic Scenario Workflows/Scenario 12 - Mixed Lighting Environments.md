### Scenario 12: Mixed Lighting Environments

**Problem**: Part of scene bright, part dark - high dynamic range challenge

**Workflow**:
1. **LOAD** → Import image/video
2. **ANALYZE** → Histogram (shows wide spread, gaps)
3. **ADJUST** → CLAHE (PRIMARY TOOL):
   - Block 150-200px
   - Clip 3.0-4.0
   - Result: Dark areas lifted, bright areas not blown out
4. **ADJUST** → Curves:
   - Fine-tune specific tonal regions
   - Lift shadows without affecting highlights
5. **DENOISE** → Bilateral Filter (if noise in shadows):
   - Space 30, Range 0.2, Iterations 2
6. **SHARPEN** → Unsharp Masking:
   - Radius 1.0, Amount 0.9, Threshold 2
7. **PRESENT** → Compare Original

**Expected Result**: Both dark and bright regions visible, balanced exposure
