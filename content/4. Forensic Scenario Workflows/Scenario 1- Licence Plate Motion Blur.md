## 4. FORENSIC SCENARIO WORKFLOWS

### Scenario 1: License Plate Motion Blur (CCTV)

**Problem**: Moving vehicle, horizontal motion streak, small/distant plate

**Workflow**:
1. **LOAD** → Import video
2. **ANALYZE** → Check metadata (frame rate, codec), Histogram
3. **EDIT** → Undistort (if barrel distortion present from wide-angle lens)
4. **DEBLUR** → Motion Deblurring:
   - Measure blur angle: ~5° (slight diagonal)
   - Measure blur size: 24 pixels
   - Parameters: Angle 5°, Size 24, Strength 0.8
5. **EDIT** → Smart Resize (2× upscale plate region)
6. **SHARPEN** → Unsharp Masking:
   - Radius 1.2 (character edges)
   - Amount 1.3 (strong sharpening)
   - Threshold 1-3 (protect noise)
7. **ADJUST** → Levels (maximize character contrast):
   - Set black point to darken background
   - Set white point to brighten characters
8. **Optional: SHARPEN** → Laplacian (if noise controlled)
9. **PRESENT** → Annotate:
   - Box around plate
   - Characters labeled
   - Frame number macro

**Expected Result**: Unreadable → Clearly legible characters