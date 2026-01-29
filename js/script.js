(function () {
    'use strict';

    const CONFIG = [
        {
            category: "Getting Started",
            items: [
                { title: "Introduction", path: "content/1. Introduction to Amped 5.md" },
                { title: "Common Mistakes", path: "content/6. Common Mistakes and cautions.md" },
                { title: "Parameter Ref", path: "content/7. Parameter Quick Reference.md" },
                { title: "Best Practices", path: "content/8. Forensic Best Practice for Amped 5.md" },
                { title: "Cheatsheet", path: "content/9. Cheatsheet and quick reference guide.md" },
            ]
        },
        {
            category: "Modules",
            items: [
                { title: "Load Module", path: "content/2. Modules/2.1 Load Module.md" },
                { title: "Interlace", path: "content/2. Modules/2.2 Interlace Module.md" },
                { title: "Analyze", path: "content/2. Modules/2.3 Analyze Module.md" },
                { title: "Deblur", path: "content/2. Modules/2.4 Deblur Module.md" },
                { title: "Extract", path: "content/2. Modules/2.5 Extract Module.md" },
                { title: "Edit", path: "content/2. Modules/2.6 Edit Module.md" },
                { title: "Sharpen", path: "content/2. Modules/2.7 Sharpend Module.md" },
                { title: "Denoise", path: "content/2. Modules/2.8 Denoise Module.md" },
                { title: "Integrate", path: "content/2. Modules/2.9 Integrate Module.md" },
                { title: "Adjust", path: "content/2. Modules/2.10 Adjust Module.md" },
                { title: "Measure", path: "content/2. Modules/2.11 Measure Module.md" },
                { title: "Present", path: "content/2. Modules/2.12 Present Module.md" },
            ]
        },
        {
            category: "Workflow Guide",
            items: [
                { title: "Recommended Seq", path: "content/3. Workflow Guide/3.1 Recommended Workflow sequence.md" },
                { title: "Critical Principles", path: "content/3. Workflow Guide/3.2 Critical Workflow Priniciples.md" }
            ]
        },
        {
            category: "Forensic Scenarios",
            items: [
                { title: "License Plate Blur", path: "content/4. Forensic Scenario Workflows/Scenario 1- Licence Plate Motion Blur.md" },
                { title: "Fingerprints", path: "content/4. Forensic Scenario Workflows/Scenario 2 - Fingerprint on Textured Wall.md" },
                { title: "Dark Face/Backlit", path: "content/4. Forensic Scenario Workflows/Scenario 3 - DarkFace or Backlit Object.md" },
                { title: "Low-Light Video", path: "content/4. Forensic Scenario Workflows/Scenario 4 - Noisy Low-Light Video.md" },
                { title: "DVR H.264", path: "content/4. Forensic Scenario Workflows/Scenario 5 - Compressed DVR Footage H.264.md" },
                { title: "Fisheye Dome Camera", path: "content/4. Forensic Scenario Workflows/Scenario 6 - Fisheye Dome camera ( Height Measurement).md" },
                { title: "Footwear/Tire Marks", path: "content/4. Forensic Scenario Workflows/Scenario 7 - Footwear or Tire Mark Impression.md" },
                { title: "Colored Text", path: "content/4. Forensic Scenario Workflows/Scenario 8 - Colored Text or Stamp on Colored Background.md" },
                { title: "Multi-Angle Plates", path: "content/4. Forensic Scenario Workflows/Scenario 9 - Moving Plate at Different Angles (Multi-Frame).md" },
                { title: "Shaky Video", path: "content/4. Forensic Scenario Workflows/Scenario 10 - Shaky Handheld Video.md" },
                { title: "Grid/Fence Pattern", path: "content/4. Forensic Scenario Workflows/Scenario 11 - Grid or Fence Pattern Interference.md" },
                { title: "Mixed Lighting", path: "content/4. Forensic Scenario Workflows/Scenario 12 - Mixed Lighting Environments.md" }
            ]
        },
        {
            category: "Decision Matrices",
            items: [
                { title: "Denoise Filter", path: "content/5. Decision Matrices/5.1 Denoise Filter Section.md" },
                { title: "Contrast", path: "content/5. Decision Matrices/5.2 Contrast Enhancement.md" },
                { title: "Deblur Type", path: "content/5. Decision Matrices/5.3 Deblur Type selection.md" },
                { title: "Sharpening", path: "content/5. Decision Matrices/5.4 Sharpening Selection.md" },
                { title: "Multi-Frame", path: "content/5. Decision Matrices/5.5 Multi-Frame Processing Selection.md" }
            ]
        },
        {
            category: "Image Hints",
            items: [
                { title: "Filter Categories Overview", path: "content/10. Image Hints/Amped_FIVE_Filter_Categories_Reference_-_Comprehensive_overview_of_all_major_filter_groups,_functions,_and_use_cases.png" },
                { title: "Filter Reference Matrix", path: "content/10. Image Hints/Amped_FIVE_Filter_Reference_Matrix_-_Comprehensive_guide_for_each_filter_with_parameters,_situations,_and_workflow_placement.png" },
                { title: "Filter Decision Tree", path: "content/10. Image Hints/Amped_FIVE_Filter_Selection_Decision_Tree_-_Diagnostic_flowchart_for_choosing_correct_filters_based_on_image_problems-removebg.jpg" },
                { title: "Real-World Scenarios", path: "content/10. Image Hints/Amped_FIVE_Real-World_Forensic_Scenarios_-_Filter_sequences_for_common_image_analysis_situations.png" },
                { title: "Amped FIVE Filters", path: "content/10. Image Hints/amped_five_filters (1).png" },
                { title: "Amped FIVE Modules", path: "content/10. Image Hints/amped_five_modules.png" },
                { title: "Forensic Filter Table", path: "content/10. Image Hints/forensic_filter_table (1).png" },
                { title: "Forensic Reference Table", path: "content/10. Image Hints/forensic_reference_table.png" }
            ]
        }
    ];


    // Shortcuts
    const $ = id => document.getElementById(id);
    const $$ = sel => document.querySelectorAll(sel);

    // State with caching
    const state = {
        cache: {},
        currentDoc: null
    };

    const els = {
        landing: $('landing-view'),
        docs: $('docs-view'),
        content: $('markdown-output'),
        desktopSidebar: $('desktop-sidebar-content'),
        mobileSidebar: $('mobile-sidebar-content'),
        mobileMenu: $('mobile-menu'),
        mobileToggle: $('mobile-menu-toggle'),
        breadCat: $('breadcrumb-cat'),
        breadPage: $('breadcrumb-page'),
        searchGlobal: $('global-search'),
        searchMobile: $('mobile-search'),
        searchResults: $('search-results'),
        mobileSearchResults: $('mobile-search-results'),
        toc: $('toc-container')
    };

    // CORE FUNCTIONS (Assigned to window to be accessible from HTML)
    window.showLanding = () => {
        els.landing.classList.remove('hidden');
        els.docs.classList.add('hidden');
        els.searchResults.classList.add('hidden');
        els.mobileSearchResults.classList.add('hidden');
        els.searchGlobal.value = '';
        els.searchMobile.value = '';
        window.scrollTo(0, 0);
    };

    window.enterDocs = (startCategory, specificTitle) => {
        console.log('enterDocs called:', startCategory, specificTitle);
        els.landing.classList.add('hidden');
        els.docs.classList.remove('hidden');
        window.scrollTo(0, 0);

        let itemToLoad = null;
        let categoryToUse = null;

        if (startCategory) {
            const group = CONFIG.find(g => g.category === startCategory);
            if (group && group.items.length > 0) {
                itemToLoad = group.items[0];
                categoryToUse = group.category;

                if (specificTitle) {
                    const found = group.items.find(i => i.title === specificTitle);
                    if (found) itemToLoad = found;
                }
            }
        }

        if (!itemToLoad) {
            itemToLoad = CONFIG[0].items[0];
            categoryToUse = CONFIG[0].category;
        }

        loadDoc(itemToLoad, categoryToUse);
    };

    async function loadDoc(item, category) {
        state.currentDoc = { item, category };

        els.content.innerHTML = '<div class="flex items-center justify-center py-20"><div class="text-center"><i class="fas fa-spinner fa-spin text-4xl text-accent mb-4"></i><p class="text-zinc-400">Loading ' + item.title + '...</p></div></div>';

        try {
            const isImage = /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(item.path);

            if (isImage) {
                els.content.innerHTML = `
                    <div class="flex flex-col items-center justify-center py-8">
                        <h2 class="text-2xl font-bold text-white mb-6">${item.title}</h2>
                        <img src="${item.path}" alt="${item.title}" class="max-w-full h-auto rounded-lg border border-border shadow-xl" 
                             onerror="this.parentElement.innerHTML='<div class=\\'p-6 border-2 border-red-900 bg-red-900/20 text-red-200 rounded-lg\\'><i class=\\'fas fa-exclamation-triangle mr-2\\'></i>Image failed to load: ${item.path}</div>'">
                        <p class="text-zinc-400 text-sm mt-4 italic">Click image to view full size</p>
                    </div>
                `;
                els.breadCat.textContent = category;
                els.breadPage.textContent = item.title;
                els.toc.innerHTML = '<p class="text-xs text-zinc-600 italic">No sections (image view)</p>';
                updateActiveSidebar(item.title);
                return;
            }

            let content = state.cache[item.path];
            if (!content) {
                const res = await fetch(item.path);
                if (!res.ok) throw new Error('HTTP ' + res.status + ': ' + res.statusText);
                content = await res.text();
                state.cache[item.path] = content;
            }

            marked.setOptions({ breaks: true, gfm: true, headerIds: true });
            els.content.innerHTML = marked.parse(content);

            $$('#markdown-output pre code').forEach(block => hljs.highlightElement(block));

            $$('#markdown-output img').forEach(img => {
                const src = img.getAttribute('src');
                if (!src || src.startsWith('http') || src.startsWith('data:')) return;
                
                if (src.startsWith('../images/')) {
                    img.src = src.replace('../images/', 'content/images/');
                } else if (src.startsWith('images/')) {
                    img.src = 'content/' + src;
                } else if (!src.startsWith('content/')) {
                    const docPath = state.currentDoc.item.path;
                    const docDir = docPath.substring(0, docPath.lastIndexOf('/'));
                    img.src = docDir + '/' + src;
                }
                img.loading = 'lazy';
            });

            els.breadCat.textContent = category;
            els.breadPage.textContent = item.title;
            generateTOC();
            updateActiveSidebar(item.title);

        } catch (err) {
            console.error('Load error:', err);
            els.content.innerHTML = '<div class="p-6 border-2 border-red-900 bg-red-900/20 text-red-200 rounded-lg"><h3 class="font-bold text-lg mb-3"><i class="fas fa-exclamation-triangle mr-2"></i>Failed to Load Document</h3><p class="text-sm"><strong>File:</strong> <code>' + item.path + '</code></p><p class="text-sm"><strong>Error:</strong> ' + err.message + '</p></div>';
        }
    }

    function generateTOC() {
        els.toc.innerHTML = '';
        const headers = $$('#markdown-output h2, #markdown-output h3');
        if (headers.length === 0) {
            els.toc.innerHTML = '<p class="text-xs text-zinc-600 italic">No sections</p>';
            return;
        }
        headers.forEach((h, i) => {
            h.id = 'toc-' + i;
            const a = document.createElement('a');
            a.href = '#toc-' + i;
            a.className = 'block py-1.5 hover:text-accent transition-colors ' + (h.tagName === 'H3' ? 'pl-3 text-xs' : 'font-medium');
            a.textContent = h.textContent;
            a.onclick = e => {
                e.preventDefault();
                h.scrollIntoView({ behavior: 'smooth', block: 'start' });
            };
            els.toc.appendChild(a);
        });
    }

    function buildSidebar(container) {
        container.innerHTML = '';
        CONFIG.forEach(group => {
            const h5 = document.createElement('h5');
            h5.className = 'text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 mt-6 pl-3 first:mt-0';
            h5.textContent = group.category;
            container.appendChild(h5);

            const ul = document.createElement('ul');
            ul.className = 'space-y-1 border-l border-zinc-800 ml-3';

            group.items.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.className = 'block pl-4 py-2 text-sm text-zinc-400 hover:text-white border-l-2 border-transparent hover:border-zinc-500 transition-all cursor-pointer sidebar-link';
                a.textContent = item.title;
                a.dataset.title = item.title;
                a.onclick = () => {
                    loadDoc(item, group.category);
                    if (!els.mobileMenu.classList.contains('translate-x-full')) toggleMobile();
                };
                li.appendChild(a);
                ul.appendChild(li);
            });
            container.appendChild(ul);
        });
    }

    function updateActiveSidebar(title) {
        $$('.sidebar-link').forEach(link => {
            link.classList.toggle('sidebar-link-active', link.dataset.title === title);
        });
    }

    let searchTimer;
    async function performSearch(query, resultsEl) {
        if (!query || query.length < 2) {
            resultsEl.classList.add('hidden');
            return;
        }
        const q = query.toLowerCase();
        const results = [];

        for (const group of CONFIG) {
            for (const item of group.items) {
                let content = state.cache[item.path] || '';
                let score = 0;
                let context = '';

                if (item.title.toLowerCase().includes(q)) score += 10;
                if (group.category.toLowerCase().includes(q)) score += 5;
                if (content.toLowerCase().includes(q)) {
                    score += 3;
                    const idx = content.toLowerCase().indexOf(q);
                    const start = Math.max(0, idx - 40);
                    const end = Math.min(content.length, idx + q.length + 40);
                    context = '...' + content.substring(start, end).replace(/\n/g, ' ').trim() + '...';
                }

                if (score > 0) results.push({ item, category: group.category, score, context });
            }
        }

        results.sort((a, b) => b.score - a.score);
        if (results.length === 0) {
            resultsEl.innerHTML = '<div class="p-4 text-center text-zinc-500 text-sm">No results</div>';
        } else {
            resultsEl.innerHTML = results.slice(0, 10).map(r => `
                <div class="search-result-item" onclick="window.selectSearchResult('${r.item.path}', '${r.category}')">
                    <div class="search-result-category">${r.category}</div>
                    <div class="search-result-title">${r.item.title}</div>
                    ${r.context ? `<div class="text-xs text-zinc-500 mt-1 truncate">${r.context}</div>` : ''}
                </div>
            `).join('');
        }
        resultsEl.classList.remove('hidden');
    }

    window.selectSearchResult = (path, category) => {
        const item = CONFIG.flatMap(g => g.items).find(i => i.path === path);
        if (item) {
            window.enterDocs();
            loadDoc(item, category);
            els.searchResults.classList.add('hidden');
            els.mobileSearchResults.classList.add('hidden');
            els.searchGlobal.value = '';
            els.searchMobile.value = '';
        }
    };

    function toggleMobile() {
        const isClosed = els.mobileMenu.classList.contains('translate-x-full');
        els.mobileMenu.classList.toggle('translate-x-full');
        document.body.style.overflow = isClosed ? 'hidden' : '';
    }

    // EVENT LISTENERS
    els.searchGlobal.addEventListener('input', e => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => performSearch(e.target.value, els.searchResults), 300);
    });

    els.searchMobile.addEventListener('input', e => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => performSearch(e.target.value, els.mobileSearchResults), 300);
    });

    els.mobileToggle.addEventListener('click', toggleMobile);

    document.addEventListener('click', e => {
        if (!e.target.closest('#search-container')) els.searchResults.classList.add('hidden');
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            els.searchResults.classList.add('hidden');
            if (!els.mobileMenu.classList.contains('translate-x-full')) toggleMobile();
        }
    });

    // INIT
    buildSidebar(els.desktopSidebar);
    buildSidebar(els.mobileSidebar);
    console.log('%c✓ Amped FIVE Docs Ready', 'color: #fbbf24; font-weight: bold; font-size: 14px');

})();
