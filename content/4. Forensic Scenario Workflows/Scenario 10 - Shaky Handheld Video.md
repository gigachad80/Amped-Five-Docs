### Scenario 10: Shaky Handheld Video

**Problem**: Handheld camera shake, unstable video, motion blur

**Workflow**:
1. **LOAD** → Import video
2. **INTEGRATE** → Local Stabilization:
   - Stabilize ROI (subject region)
3. **INTEGRATE** → Perspective Stabilization:
   - Handle perspective shifts during shake
4. **DENOISE** → Bilateral OR Temporal:
   - Clean noise exposed by stabilization
5. **SHARPEN** → Unsharp Masking:
   - Recover detail
6. **INTEGRATE** → Temporal Smoothing (optional):
   - If residual jitter remains
7. **PRESENT** → Compare Original (show stabilization effect)

**Expected Result**: Shaky footage → Smooth, stable playback, reduced motion blur
