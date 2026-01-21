// MOCK CONTENT FOR SINGLE-FILE PREVIEW
const fileContents = {
    "1. Introduction to Amped 5.md": "# 1. Introduction to Amped 5\n\nAmped FIVE is the most complete image and video processing software specifically designed for forensic, security and investigative applications.\n\n## Key Features\n- Workflow Based\n- Scientific Methodology\n- Report Generation\n- Over 140 Filters\n\nAmped FIVE allows you to import and convert footage, analyze it, interpret the data, and generate a technical report for the court.",
    "2.1 Load Module.md": "# 2.1 Load Module\n\nThe Load Module is the first step in any workflow. It allows you to import images and videos into Amped FIVE.\n\n## Supported Formats\n- Standard Images (JPG, PNG, BMP)\n- Standard Video (MP4, AVI, MKV)\n- Proprietary CCTV Formats\n\n**Tip:** Always check the file info after loading to verify resolution and framerate.",
    "2.2 Interlace Module.md": "# 2.2 Interlace Module\n\nUsed for handling interlaced video footage typically from analog sources.\n\n## Functions\n- Deinterlace\n- Field Separation\n- Field Shift\n\nCorrect deinterlacing is crucial for preventing jagged edges and motion artifacts.",
    "2.3 Analyze Module.md": "# 2.3 Analyze Module\n\nTools for analyzing the content and technical properties of the video.\n\n- Histogram\n- Fourier Transform\n- Error Level Analysis\n- Macroblocks",
    "2.4 Deblur Module.md": "# 2.4 Deblur Module\n\nFilters to correct various types of blur.\n\n- Optical Deblur\n- Motion Deblur\n- Blind Deconvolution",
    "2.5 Extract Module.md": "# 2.5 Extract Module\n\nExtract specific channels or frames.\n\n- Extract Channel (R, G, B)\n- Component Separation",
    "2.6 Edit Module.md": "# 2.6 Edit Module\n\nBasic editing functions.\n\n- Crop\n- Resize\n- Rotate\n- Flip",
    "2.7 Sharpend Module.md": "# 2.7 Sharpen Module\n\nEnhance edge contrast to make details pop.\n\n- Unsharp Mask\n- Laplace Sharpen",
    "2.8 Denoise Module.md": "# 2.8 Denoise Module\n\nRemove noise from low-light footage.\n\n- Averaging\n- Gaussian Blur (Smoothing)\n- Median Filter",
    "2.9 Integrate Module.md": "# 2.9 Integrate Module\n\nCombine multiple frames to improve quality.\n\n- Frame Averaging\n- Frame Integration",
    "2.10 Adjust Module.md": "# 2.10 Adjust Module\n\nAdjust brightness, contrast, and levels.\n\n- Levels\n- Curves\n- Exposure",
    "2.11 Measure Module.md": "# 2.11 Measure Module\n\nPerform photogrammetry and measurements.\n\n- 1D Measure (Distance)\n- 2D Measure (Planar)\n- 3D Measure",
    "2.12 Present Module.md": "# 2.12 Present Module\n\nPrepare the final output for presentation.\n\n- Add Text\n- Add Arrows\n- Spotlight",
    "3.1 Recommended Workflow sequence.md": "# 3.1 Recommended Workflow Sequence\n\n1. **Load:** Import original footage.\n2. **Analyze:** Inspect for defects (interlacing, noise).\n3. **Correct:** Fix optical/geometric defects (fisheye, aspect ratio).\n4. **Enhance:** Apply denoise, deblur, sharpen.\n5. **Present:** Annotate and export.\n\n*Note:* Always work non-destructively.",
    "3.2 Critical Workflow Priniciples.md": "# 3.2 Critical Workflow Principles\n\n- **Scientific Method:** Reproducibility and Peer Review.\n- **Original Evidence:** Never alter the original file. Work on copies or streams.\n- **Audit Trail:** Keep a log of every filter applied.",
    "Scenario 1- Licence Plate Motion Blur.md": "# Scenario 1: License Plate Motion Blur\n\n**Problem:** Plate is unreadable due to vehicle speed.\n\n**Solution:**\n1. Load Video.\n2. Crop to plate area.\n3. Apply **Motion Deblur**.\n4. Adjust angle and length parameters until characters resolve.",
    "Scenario 2 - Fingerprint on Textured Wall.md": "# Scenario 2: Fingerprint on Textured Wall\n\n**Problem:** Background texture interferes with ridge detail.\n\n**Solution:**\n1. Use **Fast Fourier Transform (FFT)**.\n2. Select the periodic pattern of the texture in the frequency domain.\n3. Filter out the pattern to reveal the print.",
    "Scenario 3 - DarkFace or Backlit Object.md": "# Scenario 3: Dark Face or Backlit Object\n\n**Problem:** Subject is too dark due to backlighting.\n\n**Solution:**\n1. Apply **Shadow/Highlight** adjustment\n2. Use **Local Histogram Equalization**\n3. Fine-tune with **Curves**",
    "Scenario 4 - Noisy Low-Light Video.md": "# Scenario 4: Noisy Low-Light Video\n\n**Problem:** Excessive noise in low-light footage.\n\n**Solution:**\n1. Use **Temporal Denoise** if camera is static\n2. Apply **Spatial Denoise** for moving scenes\n3. Balance noise reduction with detail preservation",
    "Scenario 5 - Compressed DVR Footage H.264.md": "# Scenario 5: Compressed DVR Footage H.264\n\n**Problem:** Compression artifacts and blocking.\n\n**Solution:**\n1. Identify macroblock patterns\n2. Apply **Deblock Filter**\n3. Use **Deringing** for edge artifacts",
    "Scenario 6 - Fisheye Dome camera ( Height Measurement).md": "# Scenario 6: Fisheye Dome Camera\n\n**Problem:** Distorted perspective from dome camera.\n\n**Solution:**\n1. Use **Perspective Correction**\n2. Calibrate using known reference points\n3. Perform measurements in corrected space",
    "Scenario 7 - Footwear or Tire Mark Impression.md": "# Scenario 7: Footwear or Tire Mark Impression\n\n**Problem:** Low contrast marks on varied surfaces.\n\n**Solution:**\n1. Enhance local contrast with **CLAHE**\n2. Use **Channel Extraction** for optimal contrast\n3. Apply **Sharpening** to reveal pattern details",
    "Scenario 8 - Colored Text or Stamp on Colored Background.md": "# Scenario 8: Colored Text on Colored Background\n\n**Problem:** Poor contrast between text and background.\n\n**Solution:**\n1. Extract relevant **Color Channel**\n2. Apply **Color Deconvolution**\n3. Enhance contrast with **Levels**",
    "Scenario 9 - Moving Plate at Different Angles (Multi-Frame).md": "# Scenario 9: Moving Plate (Multi-Frame)\n\n**Problem:** Plate visible in multiple frames at different angles.\n\n**Solution:**\n1. Extract best frames\n2. Use **Super-Resolution**\n3. Combine results from multiple angles",
    "Scenario 10 - Shaky Handheld Video.md": "# Scenario 10: Shaky Handheld Video\n\n**Problem:** Camera shake makes analysis difficult.\n\n**Solution:**\n1. Apply **Video Stabilization**\n2. Crop to remove edge artifacts\n3. Extract stabilized frames for analysis",
    "Scenario 11 - Grid or Fence Pattern Interference.md": "# Scenario 11: Grid or Fence Pattern Interference\n\n**Problem:** Fence or grid obscures subject.\n\n**Solution:**\n1. Use **FFT Analysis** to identify pattern\n2. Apply **Frequency Domain Filtering**\n3. Reconstruct image without interference",
    "Scenario 12 - Mixed Lighting Environments.md": "# Scenario 12: Mixed Lighting Environments\n\n**Problem:** Uneven lighting across scene.\n\n**Solution:**\n1. Apply **Adaptive Histogram Equalization**\n2. Use **Local Tone Mapping**\n3. Balance exposure zones",
    "5.1 Denoise Filter Section.md": "# 5.1 Denoise Filter Selection\n\n| Noise Type | Recommended Filter |\n|---|---|\n| Static (Grain) | Frame Averaging (if static camera) |\n| Salt & Pepper | Median Filter |\n| Random Noise | Gaussian Smoothing |",
    "5.2 Contrast Enhancement.md": "# 5.2 Contrast Enhancement\n\n- **Histogram Equalization:** Good for general enhancement.\n- **CLAHE:** Better for local contrast adaptation.\n- **Levels:** Precise control over black and white points.",
    "5.3 Deblur Type selection.md": "# 5.3 Deblur Type Selection\n\n| Blur Type | Recommended Filter |\n|---|---|\n| Motion Blur | Motion Deblur |\n| Out of Focus | Optical Deblur |\n| Unknown | Blind Deconvolution |",
    "5.4 Sharpening Selection.md": "# 5.4 Sharpening Selection\n\n- **Unsharp Mask:** General purpose sharpening\n- **High Pass:** Preserve low frequency details\n- **Laplacian:** Edge enhancement",
    "5.5 Multi-Frame Processing Selection.md": "# 5.5 Multi-Frame Processing Selection\n\n- **Frame Averaging:** Static scenes, noise reduction\n- **Super Resolution:** Increase resolution from multiple frames\n- **HDR Merge:** Combine different exposures",
    "6. Common Mistakes and cautions.md": "# 6. Common Mistakes and Cautions\n\n- **Over-sharpening:** Creates halos and fake details.\n- **Incorrect Aspect Ratio:** Distorts objects (e.g., cars look too thin).\n- **Lossy Export:** Don't export intermediate steps in JPEG.",
    "7. Parameter Quick Reference.md": "# 7. Parameter Quick Reference\n\n## Common Parameters\n\n- **Sigma:** Controls filter strength (higher = stronger effect)\n- **Kernel Size:** Area of effect (larger = more smoothing)\n- **Threshold:** Minimum difference to apply effect",
    "8. Forensic Best Practice for Amped 5.md": "# 8. Forensic Best Practice\n\n## Core Principles\n\n1. **Never modify originals** - Always work on copies\n2. **Document everything** - Maintain detailed workflow logs\n3. **Use scientifically validated methods** - Stick to peer-reviewed techniques\n4. **Ensure reproducibility** - Others should achieve same results",
    "9. Cheatsheet and quick reference guide.md": "# 9. Cheatsheet\n\n## Keyboard Shortcuts\n- **Ctrl+I:** Invert\n- **Ctrl+Z:** Undo\n- **F5:** Refresh\n- **F9:** Run Script\n\n## Quick Workflow\n1. Load → 2. Analyze → 3. Enhance → 4. Present",
    "amped_five_filters (1).png": "image",
    "amped_five_modules.png": "image",
    "Amped_FIVE_Filter_Categories_Reference_-_Comprehensive_overview_of_all_major_filter_groups,_functions,_and_use_cases.png": "image",
    "Amped_FIVE_Filter_Reference_Matrix_-_Comprehensive_guide_for_each_filter_with_parameters,_situations,_and_workflow_placement.png": "image",
    "Amped_FIVE_Filter_Selection_Decision_Tree_-_Diagnostic_flowchart_for_choosing_correct_filters_based_on_image_problems-removebg.jpg": "image",
    "Amped_FIVE_Real-World_Forensic_Scenarios_-_Filter_sequences_for_common_image_analysis_situations.png": "image",
    "forensic_filter_table (1).png": "image",
    "forensic_reference_table.png": "image"
};
const notesStructure = [

    {
        name: "1. Introduction to Amped 5.md",
        title: "1. Introduction to Amped 5",
        type: "file"
    },
    {
        name: "2. Modules",
        title: "2. Modules",
        type: "folder",
        children: [
            {
                name: "2.1 Load Module.md",
                title: "2.1 Load Module",
                type: "file"
            },
            {
                name: "2.2 Interlace Module.md",
                title: "2.2 Interlace Module",
                type: "file"
            },
            {
                name: "2.3 Analyze Module.md",
                title: "2.3 Analyze Module",
                type: "file"
            },
            {
                name: "2.4 Deblur Module.md",
                title: "2.4 Deblur Module",
                type: "file"
            },
            {
                name: "2.5 Extract Module.md",
                title: "2.5 Extract Module",
                type: "file"
            },
            {
                name: "2.6 Edit Module.md",
                title: "2.6 Edit Module",
                type: "file"
            },
            {
                name: "2.7 Sharpend Module.md",
                title: "2.7 Sharpend Module",
                type: "file"
            },
            {
                name: "2.8 Denoise Module.md",
                title: "2.8 Denoise Module",
                type: "file"
            },
            {
                name: "2.9 Integrate Module.md",
                title: "2.9 Integrate Module",
                type: "file"
            },
            {
                name: "2.10 Adjust Module.md",
                title: "2.10 Adjust Module",
                type: "file"
            },
            {
                name: "2.11 Measure Module.md",
                title: "2.11 Measure Module",
                type: "file"
            },
            {
                name: "2.12 Present Module.md",
                title: "2.12 Present Module",
                type: "file"
            }
        ]
    },
    {
        name: "3. Workflow Guide",
        title: "3. Workflow Guide",
        type: "folder",
        children: [
            {
                name: "3.1 Recommended Workflow sequence.md",
                title: "3.1 Recommended Workflow Sequence",
                type: "file"
            },
            {
                name: "3.2 Critical Workflow Priniciples.md",
                title: "3.2 Critical Workflow Principles",
                type: "file"
            }
        ]
    },
    {
        name: "4. Forensic Scenario Workflows",
        title: "4. Forensic Scenario Workflows",
        type: "folder",
        children: [
            {
                name: "Scenario 1- Licence Plate Motion Blur.md",
                title: "Scenario 1 - Licence Plate Motion Blur",
                type: "file"
            },
            {
                name: "Scenario 2 - Fingerprint on Textured Wall.md",
                title: "Scenario 2 - Fingerprint on Textured Wall",
                type: "file"
            },
            {
                name: "Scenario 3 - DarkFace or Backlit Object.md",
                title: "Scenario 3 - Dark Face or Backlit Object",
                type: "file"
            },
            {
                name: "Scenario 4 - Noisy Low-Light Video.md",
                title: "Scenario 4 - Noisy Low-Light Video",
                type: "file"
            },
            {
                name: "Scenario 5 - Compressed DVR Footage H.264.md",
                title: "Scenario 5 - Compressed DVR Footage H.264",
                type: "file"
            },
            {
                name: "Scenario 6 - Fisheye Dome camera ( Height Measurement).md",
                title: "Scenario 6 - Fisheye Dome Camera (Height Measurement)",
                type: "file"
            },
            {
                name: "Scenario 7 - Footwear or Tire Mark Impression.md",
                title: "Scenario 7 - Footwear or Tire Mark Impression",
                type: "file"
            },
            {
                name: "Scenario 8 - Colored Text or Stamp on Colored Background.md",
                title: "Scenario 8 - Colored Text or Stamp on Colored Background",
                type: "file"
            },
            {
                name: "Scenario 9 - Moving Plate at Different Angles (Multi-Frame).md",
                title: "Scenario 9 - Moving Plate at Different Angles (Multi-Frame)",
                type: "file"
            },
            {
                name: "Scenario 10 - Shaky Handheld Video.md",
                title: "Scenario 10 - Shaky Handheld Video",
                type: "file"
            },
            {
                name: "Scenario 11 - Grid or Fence Pattern Interference.md",
                title: "Scenario 11 - Grid or Fence Pattern Interference",
                type: "file"
            },
            {
                name: "Scenario 12 - Mixed Lighting Environments.md",
                title: "Scenario 12 - Mixed Lighting Environments",
                type: "file"
            }
        ]
    },
    {
        name: "5. Decision Matrices",
        title: "5. Decision Matrices",
        type: "folder",
        children: [
            {
                name: "5.1 Denoise Filter Section.md",
                title: "5.1 Denoise Filter Selection",
                type: "file"
            },
            {
                name: "5.2 Contrast Enhancement.md",
                title: "5.2 Contrast Enhancement",
                type: "file"
            },
            {
                name: "5.3 Deblur Type selection.md",
                title: "5.3 Deblur Type Selection",
                type: "file"
            },
            {
                name: "5.4 Sharpening Selection.md",
                title: "5.4 Sharpening Selection",
                type: "file"
            },
            {
                name: "5.5 Multi-Frame Processing Selection.md",
                title: "5.5 Multi-Frame Processing Selection",
                type: "file"
            }
        ]
    },
    {
        name: "6. Common Mistakes and cautions.md",
        title: "6. Common Mistakes and Cautions",
        type: "file"
    },
    {
        name: "7. Parameter Quick Reference.md",
        title: "7. Parameter Quick Reference",
        type: "file"
    },
    {
        name: "8. Forensic Best Practice for Amped 5.md",
        title: "8. Forensic Best Practice for Amped 5",
        type: "file"
    },
    {
        name: "9. Cheatsheet and quick reference guide.md",
        title: "9. Cheatsheet and Quick Reference Guide",
        type: "file"
    },
    {
        name: "10. Images Hints",
        title: "10. Images Hints",
        type: "folder",
        children: [
            {
                name: "amped_five_filters (1).png",
                title: "Amped FIVE Filters",
                type: "file"
            },
            {
                name: "Amped_FIVE_Filter_Categories_Reference_-_Comprehensive_overview_of_all_major_filter_groups,_functions,_and_use_cases.png",
                title: "Filter Categories Reference",
                type: "file"
            },
            {
                name: "Amped_FIVE_Filter_Reference_Matrix_-_Comprehensive_guide_for_each_filter_with_parameters,_situations,_and_workflow_placement.png",
                title: "Filter Reference Matrix",
                type: "file"
            },
            {
                name: "Amped_FIVE_Filter_Selection_Decision_Tree_-_Diagnostic_flowchart_for_choosing_correct_filters_based_on_image_problems-removebg.jpg",
                title: "Filter Selection Decision Tree",
                type: "file"
            },
            {
                name: "amped_five_modules.png",
                title: "Amped FIVE Modules",
                type: "file"
            },
            {
                name: "Amped_FIVE_Real-World_Forensic_Scenarios_-_Filter_sequences_for_common_image_analysis_situations.png",
                title: "Real-World Forensic Scenarios",
                type: "file"
            },
            {
                name: "forensic_filter_table (1).png",
                title: "Forensic Filter Table",
                type: "file"
            },
            {
                name: "forensic_reference_table.png",
                title: "Forensic Reference Table",
                type: "file"
            }
        ]
    }
]

// Search index to cache note content
let searchIndex = [];


// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    // Set current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Initialize mobile menu
    initMobileMenu();

    // Initialize notes tree
    initNotesTree();

    // Initialize Mobile Sidebar Logic 
    initMobileSidebar();

    // Load note from URL parameter if present
    loadNoteFromURL();

    // Initialize search functionality
    initSearch();

    // Initialize toast
    initToast();

    // Build search index
    buildocsearchIndex();

    // Initialize markdown converter with custom extensions
    initMarkdownConverter();
});

// Load note from URL parameter (e.g., ?page=filename.md)
function loadNoteFromURL() {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');

    if (pageParam) {
        // Decode the filename
        const decodedFileName = decodeURIComponent(pageParam);

        // Find the file element with matching data-file attribute
        const fileElement = document.querySelector(`[data-file="${decodedFileName}"]`);

        if (fileElement) {
            // Trigger click on the file element to load it
            fileElement.click();
        }
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    if (!mobileMenuBtn || !mobileNav) return;

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        mobileMenuBtn.setAttribute('aria-expanded', mobileMenuBtn.classList.contains('active'));

        // Prevent body scrolling when menu is open
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileNav.classList.contains('active') &&
            !mobileNav.contains(e.target) &&
            !mobileMenuBtn.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

// Initialize notes tree
function initNotesTree() {
    const treeContainer = document.getElementById('notes-tree');
    if (!treeContainer) return;

    treeContainer.innerHTML = buildTreeHTML(notesStructure);

    // Use Event Delegation for better performance and reliability
    treeContainer.addEventListener('click', (e) => {
        // Handle folder clicks
        const folderHeader = e.target.closest('.tree-folder > .tree-content');
        if (folderHeader) {
            e.stopPropagation();
            const folder = folderHeader.closest('.tree-folder');
            folder.classList.toggle('expanded');
        }
    });
}

// Build HTML for tree structure
function buildTreeHTML(structure, level = 0) {
    let html = '';

    structure.forEach(item => {
        if (item.type === 'folder') {
            // Added expanded class by default
            html += `
                        <li class="tree-item tree-folder expanded"> 
                        <div class="tree-content" style="cursor: pointer;">
                            <i class="fas fa-chevron-right" style="transition: transform 0.3s;"></i>
                            <span>${item.title}</span>
                        </div>
                        <ul class="tree-children">
                            ${buildTreeHTML(item.children, level + 1)}
                        </ul>
                        </li>
                    `;
        } else if (item.type === 'file') {
            html += `
                        <li class="tree-item tree-file" data-file="${item.name}">
                        <i class="far fa-file"></i>
                        <span>${item.title}</span>
                        </li>
                    `;
        }
    });

    return html;
}

// Mobile Sidebar Logic 
function initMobileSidebar() {
    const sidebar = document.querySelector('.notes-sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    let sidebarOpen = false;

    function openSidebar() {
        sidebar.classList.add('active');
        sidebarOpen = true;
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOpen = false;
    }

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            if (sidebarOpen) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }

    // Close sidebar on resize if desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            closeSidebar();
        }
    });

    // Close sidebar if user clicks outside on mobile
    document.addEventListener('click', function (e) {
        if (sidebarOpen && window.innerWidth <= 1024) {
            if (!sidebar.contains(e.target) && e.target !== sidebarToggle) {
                closeSidebar();
            }
        }
    });
}

// Load and display markdown file or image
function loadMarkdownFile(fileElement) {
    const fileName = fileElement.getAttribute('data-file');
    const contentArea = document.getElementById('markdown-content');

    if (!contentArea) return;

    // Remove active class from all files
    document.querySelectorAll('.tree-file').forEach(f => f.classList.remove('active'));

    // Add active class to clicked file
    fileElement.classList.add('active');

    // Update URL with the note filename
    const pageTitle = fileElement.textContent.trim();
    window.history.pushState({ file: fileName }, pageTitle, `?page=${encodeURIComponent(fileName)}`);

    // Expand all parent folders of this file 
    let parent = fileElement.closest('.tree-children');
    while (parent) {
        const parentFolder = parent.closest('.tree-folder');
        if (parentFolder) {
            parentFolder.classList.add('expanded');
            parent = parentFolder.closest('.tree-children');
        } else {
            break;
        }
    }

    // Show loading state
    contentArea.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';

    // Check if it's an image file
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];
    const isImage = imageExtensions.some(ext => fileName.toLowerCase().endsWith(ext));

    if (isImage) {
        // Try to load image from content folder
        const imagePath = `content/10. Images Hints/${fileName}`;

        contentArea.innerHTML = `
            <div class="image-viewer" style="text-align: center; padding: 2rem 0;">
                <h2 style="margin-bottom: 2rem; color: var(--text-primary);">${fileElement.textContent.trim()}</h2>
                <div style="background: rgba(255, 255, 255, 0.03); padding: 2rem; border-radius: 12px; border: 1px solid var(--border-color);">
                <img src="${imagePath}" alt="${fileName}" 
                    style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);"
                    onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'padding: 4rem; color: var(--text-secondary); border: 2px dashed var(--border-color); border-radius: 8px;\\'><i class=\\'fas fa-exclamation-triangle\\' style=\\'font-size: 3rem; margin-bottom: 1rem; color: #eab308;\\'></i><p>Image not found</p><p style=\\'font-size: 0.8rem; opacity: 0.7;\\'>This is a standalone demo. Image assets are not available.</p></div>';">
                </div>
            </div>
            `;

        // Ensure scroll to top
        const notesContentEl = document.querySelector('.notes-content');
        if (notesContentEl) notesContentEl.scrollTop = 0;
        if (contentArea) contentArea.scrollTop = 0;
        window.scrollTo({ top: 0, behavior: 'auto' });

        // Update navigator state and UI (prev/next)
        if (typeof navigator !== 'undefined' && navigator.setCurrentFile) {
            navigator.setCurrentFile(fileName);
            navigator.updateNavigationUI();
        }

        // Show navigation buttons
        const notesNavigation = document.getElementById('notesNavigation');
        if (notesNavigation) notesNavigation.style.display = 'flex';

        // Close sidebar on mobile
        if (window.innerWidth <= 1024) {
            const sidebar = document.querySelector('.notes-sidebar');
            if (sidebar) sidebar.classList.remove('active');
        }

        return;
    }

    // LOAD CONTENT FROM INTERNAL OBJECT INSTEAD OF FETCH
    setTimeout(() => {
        // Get content from the internal fileContents object
        const markdown = fileContents[fileName] || `# ${fileName}\n\nContent for this topic is currently being updated.`;

        // Convert markdown to HTML
        const html = window.markdownConverter.makeHtml(markdown);
        contentArea.innerHTML = html;

        // Apply syntax highlighting and add copy buttons
        applySyntaxHighlighting();

        // Ensure notes-content and markdown-content scroll to top
        const notesContentEl = document.querySelector('.notes-content');
        if (notesContentEl) notesContentEl.scrollTop = 0;
        if (contentArea) contentArea.scrollTop = 0;
        window.scrollTo({ top: 0, behavior: 'auto' });

        // Update navigator state and UI (prev/next)
        if (typeof navigator !== 'undefined' && navigator.setCurrentFile) {
            navigator.setCurrentFile(fileName);
            navigator.updateNavigationUI();
        }

        // Show navigation buttons when a note is loaded
        const notesNavigation = document.getElementById('notesNavigation');
        if (notesNavigation) notesNavigation.style.display = 'flex';

        // Update page title
        document.title = `${fileElement.textContent.trim()} | Amped 5 Documentation`;

        // Close sidebar on mobile
        if (window.innerWidth <= 1024) {
            const sidebar = document.querySelector('.notes-sidebar');
            if (sidebar) sidebar.classList.remove('active');
        }
    }, 50); // Simulate brief network delay
}

// Build search index by pre-loading all markdown files
async function buildocsearchIndex() {
    const allFiles = getAllFiles(notesStructure);
    searchIndex = [];

    const searchInput = document.getElementById('search-notes');
    if (!searchInput) return;

    const originalPlaceholder = searchInput.placeholder;
    searchInput.placeholder = "Building search index...";
    searchInput.disabled = true;

    for (const file of allFiles) {
        try {
            // Use internal content
            const content = fileContents[file.fileName] || "";
            searchIndex.push({
                title: file.title,
                path: file.path,
                content: content.toLowerCase(),
                fileName: file.fileName
            });
        } catch (error) {
            console.warn(`Could not load ${file.path} for search index:`, error);
        }
    }

    searchInput.placeholder = originalPlaceholder;
    searchInput.disabled = false;
}

// Get all files from the structure
function getAllFiles(structure, basePath = '') {
    let files = [];

    for (const item of structure) {
        if (item.type === 'file') {
            files.push({
                title: item.title,
                path: basePath ? `${basePath}/${item.name}` : item.name,
                fileName: item.name
            });
        } else if (item.type === 'folder' && item.children) {
            const folderPath = basePath ? `${basePath}/${item.name}` : item.name;
            files = files.concat(getAllFiles(item.children, folderPath));
        }
    }

    return files;
}

// Enhanced search functionality
function initSearch() {
    const searchInput = document.getElementById('search-notes');
    const clearButton = document.querySelector('.clear-search');

    if (!searchInput) return;

    let searchTimeout;

    searchInput.addEventListener('input', function () {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(this.value.trim());
        }, 300);
    });

    if (clearButton) {
        clearButton.addEventListener('click', () => {
            searchInput.value = '';
            performSearch('');
            clearButton.style.display = 'none';
            searchInput.focus();
        });

        searchInput.addEventListener('input', function () {
            clearButton.style.display = this.value ? 'block' : 'none';
        });
    }

    // Clear search on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchInput.value) {
            searchInput.value = '';
            performSearch('');
            if (clearButton) clearButton.style.display = 'none';
        }
    });
}

// Perform search across titles and content ()
function performSearch(searchTerm) {
    if (!searchTerm) {
        // Reset to default view
        document.querySelectorAll('.tree-item').forEach(item => {
            item.style.display = '';
            if (item.classList.contains('tree-folder')) {
                // Keep folders expanded for easier navigation
                item.classList.add('expanded');
            }
        });

        document.querySelectorAll('.search-match').forEach(match => {
            match.classList.remove('search-match');
        });

        const searchInfo = document.getElementById('search-info');
        if (searchInfo) searchInfo.remove();

        return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    let matchCount = 0;

    if (searchIndex.length > 0) {
        const contentMatches = searchIndex.filter(item =>
            item.title.toLowerCase().includes(searchTermLower) ||
            item.content.includes(searchTermLower)
        );

        matchCount = contentMatches.length;

        document.querySelectorAll('.tree-file').forEach(file => {
            const fileName = file.getAttribute('data-file');
            const isMatch = contentMatches.some(match => match.fileName === fileName);

            if (isMatch) {
                file.style.display = '';
                // Expand all parent folders ()
                let parent = file.closest('.tree-folder');
                while (parent) {
                    parent.classList.add('expanded');
                    parent.style.display = '';
                    parent = parent.parentElement.closest('.tree-folder');
                }
                file.classList.add('search-match');
            } else {
                file.style.display = 'none';
                file.classList.remove('search-match');
            }
        });
    } else {
        // Fallback if index empty
        document.querySelectorAll('.tree-file').forEach(file => {
            const text = file.textContent.toLowerCase();
            if (text.includes(searchTermLower)) {
                file.style.display = '';
                matchCount++;
                // Expand all parent folders
                let parent = file.closest('.tree-folder');
                while (parent) {
                    parent.classList.add('expanded');
                    parent.style.display = '';
                    parent = parent.parentElement.closest('.tree-folder');
                }
                file.classList.add('search-match');
            } else {
                file.style.display = 'none';
                file.classList.remove('search-match');
            }
        });
    }

    // Hide empty folders
    document.querySelectorAll('.tree-folder').forEach(folder => {
        const children = folder.querySelectorAll('.tree-item');
        const visibleChildren = Array.from(children).filter(child =>
            child.style.display !== 'none'
        );

        if (visibleChildren.length === 0) {
            folder.style.display = 'none';
        } else {
            folder.style.display = '';
        }
    });

    showSearchInfo(searchTerm, matchCount);
}

// Show search results information
function showSearchInfo(searchTerm, matchCount) {
    const existingInfo = document.getElementById('search-info');
    if (existingInfo) existingInfo.remove();

    if (!searchTerm) return;

    const searchInfo = document.createElement('div');
    searchInfo.id = 'search-info';
    searchInfo.className = 'search-info';

    if (matchCount === 0) {
        searchInfo.innerHTML = `
                    <i class="fas fa-search"></i>
                    <span>No results found for "${searchTerm}"</span>
                    `;
        searchInfo.classList.add('search-info-no-results');
    } else {
        searchInfo.innerHTML = `
                    <i class="fas fa-search"></i>
                    <span>Found ${matchCount} result${matchCount === 1 ? '' : 's'} for "${searchTerm}"</span>
                    `;
        searchInfo.classList.add('search-info-results');
    }

    const notesContent = document.querySelector('.notes-content');
    const noteHeader = document.querySelector('.note-header');
    if (notesContent && noteHeader) {
        notesContent.insertBefore(searchInfo, noteHeader.nextSibling);
    }
}

// Initialize markdown converter
function initMarkdownConverter() {
    if (typeof showdown !== 'undefined') {
        window.markdownConverter = new showdown.Converter({
            tables: true,
            tasklists: true,
            strikethrough: true,
            smoothLivePreview: true,
            simpleLineBreaks: false,
            ghCodeBlocks: true
        });
    }
}

// Apply syntax highlighting and add copy buttons
function applySyntaxHighlighting() {
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }

    document.querySelectorAll('pre code[class*="language-"]').forEach((codeBlock) => {
        let preElement = codeBlock.parentElement;
        let wrapper = null;

        if (preElement.parentElement && preElement.parentElement.classList.contains('code-block-wrapper')) {
            wrapper = preElement.parentElement;
        } else if (preElement.classList.contains('code-block-wrapper')) {
            wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper';
            preElement.parentNode.insertBefore(wrapper, preElement);
            wrapper.appendChild(preElement);
            preElement.classList.remove('code-block-wrapper');
        } else {
            wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper';
            preElement.parentNode.insertBefore(wrapper, preElement);
            wrapper.appendChild(preElement);
        }

        if (wrapper.querySelector('.copy-button')) return;

        const languageClass = Array.from(codeBlock.classList).find(cls =>
            cls.startsWith('language-')
        );
        let language = languageClass ? languageClass.replace('language-', '') : 'text';

        const friendlyName = languageNames[language.toLowerCase()] ||
            language.charAt(0).toUpperCase() + language.slice(1);

        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = `<i class="far fa-copy"></i> ${friendlyName}`;
        copyButton.setAttribute('title', `Copy ${friendlyName} code`);
        copyButton.setAttribute('aria-label', `Copy ${friendlyName} code to clipboard`);

        copyButton.addEventListener('click', async (e) => {
            e.stopPropagation();
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(codeBlock.textContent);
                } else {
                    const textArea = document.createElement('textarea');
                    textArea.value = codeBlock.textContent;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999999px';
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                }

                showToast('Code copied to clipboard!');

                const originalHTML = copyButton.innerHTML;
                const originalBackground = copyButton.style.background;
                const originalBorder = copyButton.style.borderColor;

                copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyButton.style.background = 'rgba(34, 197, 94, 0.2)';
                copyButton.style.borderColor = '#22c55e';

                setTimeout(() => {
                    copyButton.innerHTML = originalHTML;
                    copyButton.style.background = originalBackground;
                    copyButton.style.borderColor = originalBorder;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy: ', err);
                showToast('Failed to copy code', 'error');
            }
        });

        const languageLabel = document.createElement('div');
        languageLabel.className = 'language-label';

        wrapper.appendChild(languageLabel);
        wrapper.appendChild(copyButton);
    });
}

// Toast notification system
function initToast() {
    window.showToast = function (message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');

        if (!toast || !toastMessage) return;

        toastMessage.textContent = message;

        const icon = toast.querySelector('i');
        if (icon) {
            if (type === 'error') {
                toast.style.borderLeftColor = '#ef4444';
                icon.className = 'fas fa-exclamation-circle';
                icon.style.color = '#ef4444';
            } else if (type === 'warning') {
                toast.style.borderLeftColor = '#eab308';
                icon.className = 'fas fa-exclamation-triangle';
                icon.style.color = '#eab308';
            } else {
                toast.style.borderLeftColor = '#22c55e';
                icon.className = 'fas fa-check-circle';
                icon.style.color = '#22c55e';
            }
        }

        toast.classList.add('visible');

        setTimeout(() => {
            toast.classList.remove('visible');
        }, 3000);
    };
}

// Scroll progress indicator
window.addEventListener('scroll', () => {
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / (docHeight - winHeight)) * 100;
        progressBar.style.width = `${progress}%`;
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('search-notes');
        if (searchInput) searchInput.focus();
    }

    if (e.key === 'Escape') {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileNav = document.querySelector('.mobile-nav');
        const notesSidebar = document.querySelector('.notes-sidebar');

        if (mobileMenuBtn && mobileMenuBtn.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            if (mobileNav) mobileNav.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }

        if (notesSidebar && notesSidebar.classList.contains('active')) {
            notesSidebar.classList.remove('active');
        }

        const searchInput = document.getElementById('search-notes');
        const clearButton = document.querySelector('.clear-search');
        if (searchInput && searchInput.value) {
            searchInput.value = '';
            performSearch('');
            if (clearButton) clearButton.style.display = 'none';
        }
    }
});

// Notes Navigation System
class NotesNavigator {
    constructor(notesStructure) {
        this.structure = notesStructure;
        this.fileList = [];
        this.currentFileIndex = -1;
        this.filePaths = {};
        this.extractAllFiles();
    }

    extractAllFiles() {
        const traverse = (items, breadcrumb = []) => {
            items.forEach(item => {
                if (item.type === 'file') {
                    this.fileList.push(item);
                    this.filePaths[item.name] = {
                        breadcrumb: breadcrumb,
                        title: item.title
                    };
                } else if (item.children) {
                    const newBreadcrumb = [...breadcrumb, item.title];
                    traverse(item.children, newBreadcrumb);
                }
            });
        };
        traverse(this.structure);
    }

    setCurrentFile(filename) {
        this.currentFileIndex = this.fileList.findIndex(f => f.name === filename);
    }

    getPreviousFile() {
        if (this.currentFileIndex > 0) {
            return this.fileList[this.currentFileIndex - 1];
        }
        return null;
    }

    getNextFile() {
        if (this.currentFileIndex < this.fileList.length - 1) {
            return this.fileList[this.currentFileIndex + 1];
        }
        return null;
    }

    getBreadcrumb(filename) {
        return this.filePaths[filename]?.breadcrumb || [];
    }

    generateBreadcrumbHTML(breadcrumb, filename) {
        if (breadcrumb.length === 0 && !filename) return '';

        const items = [...breadcrumb];
        if (filename) {
            items.push(filename);
        }

        return items
            .map((item, index) => `
                        <span class="nav-breadcrumb-item">
                        ${item}
                        ${index < items.length - 1 ? '<span class="nav-breadcrumb-separator">/</span>' : ''}
                        </span>
                    `)
            .join('');
    }

    updateNavigationUI() {
        const prevNote = document.getElementById('prevNote');
        const nextNote = document.getElementById('nextNote');
        const prevTitle = document.getElementById('prevNoteTitle');
        const nextTitle = document.getElementById('nextNoteTitle');
        const prevBreadcrumb = document.getElementById('prevBreadcrumb');
        const nextBreadcrumb = document.getElementById('nextBreadcrumb');

        if (!prevNote || !nextNote) return;

        const prev = this.getPreviousFile();
        const next = this.getNextFile();

        // Remove old event listeners by cloning nodes
        const prevClone = prevNote.cloneNode(true);
        const nextClone = nextNote.cloneNode(true);
        prevNote.parentNode.replaceChild(prevClone, prevNote);
        nextNote.parentNode.replaceChild(nextClone, nextNote);

        const newPrevNote = document.getElementById('prevNote');
        const newNextNote = document.getElementById('nextNote');
        const newPrevBreadcrumb = document.getElementById('prevBreadcrumb');
        const newNextBreadcrumb = document.getElementById('nextBreadcrumb');

        if (prev && prevTitle) {
            newPrevNote.style.display = 'flex';
            prevTitle.textContent = prev.title;
            const prevPath = this.getBreadcrumb(prev.name);
            if (newPrevBreadcrumb) {
                newPrevBreadcrumb.innerHTML = this.generateBreadcrumbHTML(prevPath, prev.title);
            }
            newPrevNote.href = `javascript:void(0);`;
            newPrevNote.addEventListener('click', (e) => {
                e.preventDefault();
                navigateToNote(prev.name);
            });
        } else {
            newPrevNote.style.display = 'none';
        }

        if (next && nextTitle) {
            newNextNote.style.display = 'flex';
            nextTitle.textContent = next.title;
            const nextPath = this.getBreadcrumb(next.name);
            if (newNextBreadcrumb) {
                newNextBreadcrumb.innerHTML = this.generateBreadcrumbHTML(nextPath, next.title);
            }
            newNextNote.href = `javascript:void(0);`;
            newNextNote.addEventListener('click', (e) => {
                e.preventDefault();
                navigateToNote(next.name);
            });
        } else {
            newNextNote.style.display = 'none';
        }
    }
}

// Initialize navigator
const navigator = new NotesNavigator(notesStructure);

// Function to navigate to a note and load its content
function navigateToNote(filename) {
    const fileElement = document.querySelector(`[data-file="${filename}"]`);
    if (fileElement) {
        fileElement.click();
        setTimeout(() => window.scrollTo(0, 0), 100);
    }
}

// Hook into the tree file click handler to update navigation
document.addEventListener('click', (e) => {
    if (e.target.closest('.tree-file')) {
        const fileElement = e.target.closest('.tree-file');
        const filename = fileElement.getAttribute('data-file');
        if (filename) {
            // Load the file content
            loadMarkdownFile(fileElement);

            // Update navigation
            navigator.setCurrentFile(filename);
            navigator.updateNavigationUI();
        }
    }
});
