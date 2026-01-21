/**
 * FILE STRUCTURE CONFIGURATION
 */
const notesStructure = [
    { name: "1. Introduction to Amped 5.md", title: "1. Introduction to Amped 5", type: "file" },
    {
        name: "2. Modules",
        title: "2. Modules",
        type: "folder",
        children: [
            { name: "2.1 Load Module.md", title: "2.1 Load Module", type: "file" },
            { name: "2.2 Interlace Module.md", title: "2.2 Interlace Module", type: "file" },
            { name: "2.3 Analyze Module.md", title: "2.3 Analyze Module", type: "file" },
            { name: "2.4 Deblur Module.md", title: "2.4 Deblur Module", type: "file" },
            { name: "2.5 Extract Module.md", title: "2.5 Extract Module", type: "file" },
            { name: "2.6 Edit Module.md", title: "2.6 Edit Module", type: "file" },
            { name: "2.7 Sharpend Module.md", title: "2.7 Sharpen Module", type: "file" },
            { name: "2.8 Denoise Module.md", title: "2.8 Denoise Module", type: "file" },
            { name: "2.9 Integrate Module.md", title: "2.9 Integrate Module", type: "file" },
            { name: "2.10 Adjust Module.md", title: "2.10 Adjust Module", type: "file" },
            { name: "2.11 Measure Module.md", title: "2.11 Measure Module", type: "file" },
            { name: "2.12 Present Module.md", title: "2.12 Present Module", type: "file" }
        ]
    },
    {
        name: "3. Workflow Guide",
        title: "3. Workflow Guide",
        type: "folder",
        children: [
            { name: "3.1 Recommended Workflow sequence.md", title: "3.1 Recommended Workflow Sequence", type: "file" },
            { name: "3.2 Critical Workflow Priniciples.md", title: "3.2 Critical Workflow Principles", type: "file" }
        ]
    },
    {
        name: "4. Forensic Scenario Workflows",
        title: "4. Forensic Scenario Workflows",
        type: "folder",
        children: [
            { name: "Scenario 1- Licence Plate Motion Blur.md", title: "Scenario 1 - Licence Plate Motion Blur", type: "file" },
            { name: "Scenario 2 - Fingerprint on Textured Wall.md", title: "Scenario 2 - Fingerprint on Textured Wall", type: "file" },
            { name: "Scenario 3 - DarkFace or Backlit Object.md", title: "Scenario 3 - Dark Face or Backlit Object", type: "file" },
            { name: "Scenario 4 - Noisy Low-Light Video.md", title: "Scenario 4 - Noisy Low-Light Video", type: "file" },
            { name: "Scenario 5 - Compressed DVR Footage H.264.md", title: "Scenario 5 - Compressed DVR Footage H.264", type: "file" },
            { name: "Scenario 6 - Fisheye Dome camera ( Height Measurement).md", title: "Scenario 6 - Fisheye Dome Camera", type: "file" },
            { name: "Scenario 7 - Footwear or Tire Mark Impression.md", title: "Scenario 7 - Footwear or Tire Mark Impression", type: "file" },
            { name: "Scenario 8 - Colored Text or Stamp on Colored Background.md", title: "Scenario 8 - Colored Text on Colored Background", type: "file" },
            { name: "Scenario 9 - Moving Plate at Different Angles (Multi-Frame).md", title: "Scenario 9 - Moving Plate (Multi-Frame)", type: "file" },
            { name: "Scenario 10 - Shaky Handheld Video.md", title: "Scenario 10 - Shaky Handheld Video", type: "file" },
            { name: "Scenario 11 - Grid or Fence Pattern Interference.md", title: "Scenario 11 - Grid or Fence Pattern Interference", type: "file" },
            { name: "Scenario 12 - Mixed Lighting Environments.md", title: "Scenario 12 - Mixed Lighting Environments", type: "file" }
        ]
    },
    {
        name: "5. Decision Matrices",
        title: "5. Decision Matrices",
        type: "folder",
        children: [
            { name: "5.1 Denoise Filter Section.md", title: "5.1 Denoise Filter Selection", type: "file" },
            { name: "5.2 Contrast Enhancement.md", title: "5.2 Contrast Enhancement", type: "file" },
            { name: "5.3 Deblur Type selection.md", title: "5.3 Deblur Type Selection", type: "file" },
            { name: "5.4 Sharpening Selection.md", title: "5.4 Sharpening Selection", type: "file" },
            { name: "5.5 Multi-Frame Processing Selection.md", title: "5.5 Multi-Frame Processing Selection", type: "file" }
        ]
    },
    { name: "6. Common Mistakes and cautions.md", title: "6. Common Mistakes and Cautions", type: "file" },
    { name: "7. Parameter Quick Reference.md", title: "7. Parameter Quick Reference", type: "file" },
    { name: "8. Forensic Best Practice for Amped 5.md", title: "8. Forensic Best Practice", type: "file" },
    { name: "9. Cheatsheet and quick reference guide.md", title: "9. Cheatsheet", type: "file" },
    {
        name: "10. Image Hints",
        title: "10. Image Hints",
        type: "folder",
        children: [
            { name: "Amped_FIVE_Filter_Categories_Reference_-_Comprehensive_overview_of_all_major_filter_groups,_functions,_and_use_cases.png", title: "Filter Categories Reference", type: "file" },
            { name: "Amped_FIVE_Filter_Reference_Matrix_-_Comprehensive_guide_for_each_filter_with_parameters,_situations,_and_workflow_placement.png", title: "Filter Reference Matrix", type: "file" },
            { name: "Amped_FIVE_Filter_Selection_Decision_Tree_-_Diagnostic_flowchart_for_choosing_correct_filters_based_on_image_problems-removebg.jpg", title: "Filter Selection Decision Tree", type: "file" },
            { name: "Amped_FIVE_Real-World_Forensic_Scenarios_-_Filter_sequences_for_common_image_analysis_situations.png", title: "Real-World Forensic Scenarios", type: "file" },
            { name: "amped_five_filters (1).png", title: "Amped Five Filters", type: "file" },
            { name: "amped_five_modules.png", title: "Amped Five Modules", type: "file" },
            { name: "forensic_filter_table (1).png", title: "Forensic Filter Table", type: "file" },
            { name: "forensic_reference_table.png", title: "Forensic Reference Table", type: "file" }
        ]
    }
];

// Variables
let searchIndex = [];
let isIndexing = false;

// Initialize
document.addEventListener('DOMContentLoaded', async function () {
    const yearElement = document.getElementById('current-year');
    if (yearElement) yearElement.textContent = new Date().getFullYear();

    initMarkdownConverter();
    initNotesTree();
    initMobileMenu();
    initMobileSidebar();
    initSearch();
    loadNoteFromURL();

    buildSearchIndex();
});

/**
 * HELPER: Find file path
 */
function findFilePath(structure, fileName, currentPath = '') {
    for (const item of structure) {
        if (item.type === 'file' && item.name === fileName) {
            return currentPath ? `${currentPath}/${item.name}` : item.name;
        }
        if (item.type === 'folder' && item.children) {
            const path = findFilePath(item.children, fileName, currentPath ? `${currentPath}/${item.name}` : item.name);
            if (path) return path;
        }
    }
    return null;
}

/**
 * CORE: Search Indexer
 */
async function buildSearchIndex() {
    if (isIndexing) return;
    isIndexing = true;

    const allFiles = [];
    const flatten = (items) => {
        items.forEach(i => {
            if (i.type === 'file' && i.name.endsWith('.md')) allFiles.push(i);
            else if (i.children) flatten(i.children);
        });
    };
    flatten(notesStructure);

    for (const file of allFiles) {
        try {
            const path = findFilePath(notesStructure, file.name);
            const response = await fetch(`content/${path}`);
            if (response.ok) {
                const text = await response.text();
                searchIndex.push({
                    name: file.name,
                    title: file.title,
                    content: text.toLowerCase()
                });
            }
        } catch (e) {
            console.warn(`Could not index ${file.name}`);
        }
    }
    isIndexing = false;
    console.log("Deep search index ready.");
}

/**
 * HELPER: Check if file is an image
 */
function isImageFile(fileName) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];
    return imageExtensions.some(ext => fileName.toLowerCase().endsWith(ext));
}

/**
 * CORE: Content Loader with Image Support
 */
async function loadMarkdownFile(fileElement) {
    const fileName = fileElement.getAttribute('data-file');
    const contentArea = document.getElementById('markdown-content');
    if (!contentArea) return;

    document.querySelectorAll('.tree-file').forEach(f => f.classList.remove('active'));
    fileElement.classList.add('active');

    const pageTitle = fileElement.textContent.trim();
    window.history.pushState({ file: fileName }, pageTitle, `?page=${encodeURIComponent(fileName)}`);

    contentArea.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';

    // Check if it's an image file
    if (isImageFile(fileName)) {
        const relativePath = findFilePath(notesStructure, fileName);
        const imagePath = `content/${relativePath}`;

        contentArea.innerHTML = `
            <div class="image-viewer" style="text-align: center; padding: 2rem 0;">
                <h2 style="margin-bottom: 2rem; color: var(--text-primary);">${pageTitle}</h2>
                <div style="background: rgba(255, 255, 255, 0.03); padding: 2rem; border-radius: 12px; border: 1px solid var(--border-color);">
                    <img src="${imagePath}" alt="${fileName}" 
                        style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);"
                        onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'padding: 4rem; color: var(--text-secondary); border: 2px dashed var(--border-color); border-radius: 8px;\\'><i class=\\'fas fa-exclamation-triangle\\' style=\\'font-size: 3rem; margin-bottom: 1rem; color: #eab308;\\'></i><p>Image not found</p><p style=\\'font-size: 0.8rem; opacity: 0.7;\\'>Path: ${imagePath}</p></div>';">
                </div>
            </div>
        `;

        document.querySelector('.notes-content')?.classList.remove('hide-note-header');
        window.scrollTo(0, 0);
        return;
    }

    // Load markdown file
    try {
        const relativePath = findFilePath(notesStructure, fileName);
        const response = await fetch(`content/${relativePath}`);
        if (!response.ok) throw new Error("File not found");

        const markdown = await response.text();
        const html = window.markdownConverter.makeHtml(markdown);

        contentArea.innerHTML = html;
        document.querySelector('.notes-content')?.classList.remove('hide-note-header');

        if (typeof Prism !== 'undefined') Prism.highlightAll();
        window.scrollTo(0, 0);
    } catch (error) {
        contentArea.innerHTML = `<div class="error-msg">Error: ${error.message}</div>`;
    }
}

/**
 * CORE: Search Logic
 */
function initSearch() {
    const input = document.getElementById('search-notes');
    const clearBtn = document.querySelector('.clear-search');
    if (!input) return;

    input.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();

        if (term.length > 0) {
            clearBtn.style.display = 'block';
            performSearch(term);
        } else {
            clearBtn.style.display = 'none';
            resetSidebar();
        }
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        resetSidebar();
    });
}

function performSearch(term) {
    const treeFiles = document.querySelectorAll('.tree-file');
    const folders = document.querySelectorAll('.tree-folder');

    let visibleFiles = new Set();

    treeFiles.forEach(file => {
        const fileName = file.getAttribute('data-file');
        const titleText = file.textContent.toLowerCase();

        let isMatch = titleText.includes(term);

        if (!isMatch && searchIndex.length > 0) {
            const indexed = searchIndex.find(idx => idx.name === fileName);
            if (indexed && indexed.content.includes(term)) {
                isMatch = true;
            }
        }

        if (isMatch) {
            file.style.display = 'flex';
            file.classList.add('search-match');
            visibleFiles.add(file);

            let parent = file.closest('.tree-folder');
            while (parent) {
                parent.classList.add('expanded');
                parent.style.display = 'block';
                parent = parent.parentElement.closest('.tree-folder');
            }
        } else {
            file.style.display = 'none';
            file.classList.remove('search-match');
        }
    });

    folders.forEach(folder => {
        const hasVisibleChildren = folder.querySelector('.tree-file[style*="display: flex"]');
        folder.style.display = hasVisibleChildren ? 'block' : 'none';
    });
}

function resetSidebar() {
    document.querySelectorAll('.tree-file').forEach(f => {
        f.style.display = 'flex';
        f.classList.remove('search-match');
    });
    document.querySelectorAll('.tree-folder').forEach(f => {
        f.style.display = 'block';
    });
}

// UI Setup Helpers
function initNotesTree() {
    const treeContainer = document.getElementById('notes-tree');
    if (!treeContainer) return;

    function buildTreeHTML(structure) {
        let html = '';
        structure.forEach(item => {
            if (item.type === 'folder') {
                html += `
                    <li class="tree-item tree-folder expanded">
                        <div class="tree-content">
                            <i class="fas fa-chevron-right"></i>
                            <span>${item.title}</span>
                        </div>
                        <ul class="tree-children">${buildTreeHTML(item.children)}</ul>
                    </li>`;
            } else {
                const icon = isImageFile(item.name) ? 'fa-image' : 'fa-file';
                html += `<li class="tree-item tree-file" data-file="${item.name}"><i class="far ${icon}"></i><span>${item.title}</span></li>`;
            }
        });
        return html;
    }

    treeContainer.innerHTML = buildTreeHTML(notesStructure);

    treeContainer.addEventListener('click', (e) => {
        const folder = e.target.closest('.tree-content');
        if (folder) folder.parentElement.classList.toggle('expanded');

        const file = e.target.closest('.tree-file');
        if (file) loadMarkdownFile(file);
    });
}

function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.mobile-nav');
    btn?.addEventListener('click', () => {
        btn.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

function initMobileSidebar() {
    const sidebar = document.querySelector('.notes-sidebar');
    const toggle = document.getElementById('sidebarToggle');
    const close = document.getElementById('closeSidebar');
    toggle?.addEventListener('click', () => sidebar.classList.add('active'));
    close?.addEventListener('click', () => sidebar.classList.remove('active'));
}

function initMarkdownConverter() {
    window.markdownConverter = new showdown.Converter({ tables: true, tasklists: true });
}

function loadNoteFromURL() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    if (page) {
        const el = document.querySelector(`[data-file="${page}"]`);
        if (el) loadMarkdownFile(el);
    }
}
