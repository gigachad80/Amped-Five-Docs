## Scenario 6: Fisheye Dome Camera (Height Measurement)

**Problem**: Curved lines, wide-angle radial distortion, measurement required

**Workflow**:
1. **LOAD** → Import dome camera footage
2. **ANALYZE** → Verify straight lines are curved (distortion present)
3. **EDIT** → Correct Fisheye:
   - Register 3 curved reference lines (door frame, wall edges, floor line)
   - Select mapping function (try all options)
   - Result: 180° circular → 120-140° linear perspective
4. **EDIT** → Post Projection:
   - X/Y/Z shifts to recenter view if needed
5. **EDIT** → Smart Resize (optional):
   - If resolution boost needed for measurement
6. **ADJUST** → Levels/Curves:
   - Optimize visibility of reference objects
7. **MEASURE** → Measure 3D:
   - Mark vertical axis (known vertical reference)
   - Mark horizontal baseline
   - Measure reference object (door height 2.1m)
   - Measure subject height
   - Result: Height estimate ±1.3cm accuracy
8. **PRESENT** → Annotate:
   - Show reference measurements
   - Label subject height
   - Add measurement lines

**Expected Result**: Straight lines appear straight, distortion <5%, accurate height measurement
