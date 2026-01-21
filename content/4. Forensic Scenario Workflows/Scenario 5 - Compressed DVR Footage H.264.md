### Scenario 5: Compressed DVR Footage (H.264 Blocks)

**Problem**: Visible block artifacts, mosquito noise, macroblocking, quality loss

**Workflow**:
1. **LOAD** → Import DVR file
2. **ANALYZE** → Macroblocks visualization:
   - Shows 16×16 block grid with color variation
   - Determines deblocking strength needed
3. **DENOISE** → Deblocking Filter (FIRST):
   - Strength 0.5-1.0 (based on Macroblocks severity)
   - If heavy color variation in blocks: use Strength 0.8-1.0
   - If moderate blocking: use Strength 0.5-0.7
   - Result: Removes visible 8×8 and 16×16 block boundaries
4. **DENOISE** → Bilateral Filter:
   - Space_sigma 25-30 (moderate neighborhood)
   - Range_sigma 0.2 (balanced edge preservation)
   - Iterations 1-2
   - Result: Smooths block transitions, reduces mosquito noise
5. **INTEGRATE** → Temporal Smoothing:
   - Frame size 3-4 frames (leverage frame history)
   - Result: Further reduces compression artifacts by averaging adjacent frames
   - Reduces noise by 40-60%
6. **INTEGRATE** → Motion Smoothing:
   - Frame size 4
   - Apply if moving objects present (prevents ghosting)
   - Result: Handles moving subjects without blur trails
7. **SHARPEN** → Unsharp Masking:
   - Radius 1.0 (general edges)
   - Amount 0.7-0.9 (moderate sharpening to compensate for smoothing)
   - Threshold 2 (CRITICAL - protects low-contrast areas from artifact amplification)
   - Result: Recovers edge sharpness lost during deblocking/smoothing
8. **ADJUST** → CLAHE:
   - Block size 100px
   - Clip limit 3.0
   - Result: Enhances remaining detail contrast without amplifying compression artifacts
9. **Optional: ADJUST** → Levels/Curves:
   - Fine-tune final contrast if needed
   - Expand tonal range for maximum detail visibility
10. **PRESENT** → Compare Original:
    - Side-by-side view showing before/after
    - Documents improvement for court presentation
11. **PRESENT** → Annotate:
    - Add labels, frame numbers, case information
    - Highlight enhanced evidence regions

**Expected Result**: 
- Block artifacts minimized by 70-85%
- Smooth, natural appearance restored
- Mosquito noise significantly reduced
- Improved legibility of faces, license plates, text
- Enhanced detail contrast while maintaining natural look

**Key Success Factors**:
- Deblocking MUST be applied first (before other denoise)
- Temporal/Motion Smoothing critical for compressed video (leverages frame redundancy)
- Unsharp Threshold parameter prevents re-amplification of compression artifacts
- CLAHE enhances detail without bringing back blocking artifacts

**Common Mistakes to Avoid**:
- ❌ Sharpening before deblocking (amplifies block edges)
- ❌ Skipping Temporal Smoothing (misses major noise reduction opportunity)
- ❌ Using Laplacian sharpening (too aggressive, amplifies artifacts)
- ❌ Forgetting Unsharp Threshold parameter (critical for compressed footage)