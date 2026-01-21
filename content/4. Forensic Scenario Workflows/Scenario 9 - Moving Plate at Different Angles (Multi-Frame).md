### Scenario 9: Moving Plate at Different Angles (Multi-Frame)

**Problem**: License plate moving across frame, perspective changes, low resolution

**Workflow**:
1. **LOAD** → Import video sequence
2. **ANALYZE** → Verify frame rate, check perspective variation
3. **INTEGRATE** → Perspective Stabilization:
   - Track plate across frames
   - Register corresponding points (plate corners)
   - Result: All frames aligned to frontal view
4. **INTEGRATE** → Perspective Super Resolution:
   - OR use combined Perspective SR filter
   - Frame count: 10-15 frames
   - Zoom: 2×-3×
   - Result: Merges sub-pixel data, resolution increase
5. **SHARPEN** → Unsharp Masking:
   - Radius 1.2, Amount 1.2, Threshold 1-3
6. **EDIT** → Smart Resize (optional additional upscale)
7. **ADJUST** → Levels/Curves:
   - Final contrast tuning
8. **PRESENT** → Annotate, Compare Original

**Expected Result**: Low-res angled plate → High-res frontal view, characters legible