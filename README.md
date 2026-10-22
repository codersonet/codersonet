<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Profile README Studio | Liquid Motion Edition</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        mono: ['Fira Code', 'monospace'],
                    },
                    colors: {
                        gh: {
                            bg: '#0d1117',
                            card: '#161b22',
                            border: '#30363d',
                            text: '#c9d1d9',
                            muted: '#8b949e',
                            accent: '#2ea043'
                        }
                    },
                    animation: {
                        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
                        'float': 'float 4s infinite ease-in-out',
                        'shimmer': 'shimmer 2s linear infinite',
                    },
                    keyframes: {
                        pulseGlow: {
                            '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                            '50%': { opacity: '0.8', transform: 'scale(1.05)' },
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-6px)' },
                        },
                        shimmer: {
                            '0%': { backgroundPosition: '-200% 0' },
                            '100%': { backgroundPosition: '200% 0' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #0b0f14;
            color: #c9d1d9;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }

        /* Glassmorphism Styles */
        .glass-panel {
            background: rgba(22, 27, 34, 0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .glass-card {
            background: rgba(13, 17, 23, 0.6);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.06);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
            border-color: var(--theme-primary, #2ea043);
            box-shadow: 0 8px 24px -6px var(--theme-glow, rgba(46, 160, 67, 0.3));
            transform: translateY(-2px);
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0d1117;
        }
        ::-webkit-scrollbar-thumb {
            background: #30363d;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #484f58;
        }

        /* Custom Glow Animations */
        .theme-glow {
            box-shadow: 0 0 20px -3px var(--theme-glow, rgba(46, 160, 67, 0.4));
        }

        .theme-text-glow {
            text-shadow: 0 0 12px var(--theme-glow, rgba(46, 160, 67, 0.5));
        }

        /* Tech Pill Hover Physics */
        .tech-pill {
            transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .tech-pill:hover {
            transform: scale(1.08) translateY(-3px);
        }

        /* Cursor Blinking for Typing Animation */
        .cursor-blink {
            animation: blink 1s infinite;
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
    </style>
</head>
<body class="min-h-screen flex flex-col antialiased selection:bg-emerald-500 selection:text-white">

    <!-- TOP NAV / HEADER -->
    <header class="sticky top-0 z-50 glass-panel border-b border-gh-border px-4 lg:px-8 py-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
            <div class="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-white shadow-lg theme-glow">
                <i class="fa-brands fa-github text-2xl"></i>
            </div>
            <div>
                <h1 class="font-bold text-base md:text-lg tracking-tight text-white flex items-center gap-2">
                    README Studio <span class="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Liquid v2.5</span>
                </h1>
                <p class="text-xs text-gh-muted hidden sm:block">Ultra-Modern Profile Builder & Dynamic Motion Preview</p>
            </div>
        </div>

        <!-- Header Actions -->
        <div class="flex items-center gap-3">
            <button id="toggleConfigBtn" class="flex items-center gap-2 px-3 py-2 text-xs md:text-sm font-medium rounded-lg bg-gh-card border border-gh-border hover:bg-gh-border transition text-gh-text">
                <i class="fa-solid fa-sliders text-emerald-400"></i>
                <span class="hidden md:inline">Customize Profile</span>
            </button>
            <button id="copyMarkdownBtn" class="flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition shadow-lg theme-glow active:scale-95">
                <i class="fa-regular fa-copy"></i>
                <span>Copy README.md</span>
            </button>
        </div>
    </header>

    <!-- MAIN APP CONTAINER -->
    <div class="flex-1 flex flex-col lg:flex-row relative overflow-hidden">

        <!-- LEFT CUSTOMIZATION SIDEBAR PANEL -->
        <aside id="configSidebar" class="w-full lg:w-96 glass-panel border-r border-gh-border p-5 overflow-y-auto max-h-[calc(100vh-65px)] transition-all duration-300 z-40">
            <div class="flex items-center justify-between mb-6 pb-3 border-b border-gh-border">
                <h2 class="font-semibold text-lg text-white flex items-center gap-2">
                    <i class="fa-solid fa-wand-magic-sparkles text-emerald-400"></i> Editor Controls
                </h2>
                <span class="text-xs text-gh-muted">Real-time update</span>
            </div>

            <!-- Configuration Sections -->
            <div class="space-y-6">

                <!-- Color Theme Selector -->
                <div>
                    <label class="block text-xs font-semibold uppercase tracking-wider text-gh-muted mb-3">Color Theme Preset</label>
                    <div class="grid grid-cols-2 gap-2">
                        <button onclick="setTheme('emerald')" class="theme-btn flex items-center gap-2 p-2.5 rounded-lg border border-emerald-500/50 bg-emerald-950/30 text-xs font-medium text-emerald-300 hover:border-emerald-400 transition">
                            <span class="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-sm"></span> Neon Emerald
                        </button>
                        <button onclick="setTheme('cyberpunk')" class="theme-btn flex items-center gap-2 p-2.5 rounded-lg border border-gh-border bg-purple-950/30 text-xs font-medium text-purple-300 hover:border-purple-400 transition">
                            <span class="w-3.5 h-3.5 rounded-full bg-purple-400 shadow-sm"></span> Cyber Cyan
                        </button>
                        <button onclick="setTheme('tokyo')" class="theme-btn flex items-center gap-2 p-2.5 rounded-lg border border-gh-border bg-blue-950/30 text-xs font-medium text-blue-300 hover:border-blue-400 transition">
                            <span class="w-3.5 h-3.5 rounded-full bg-blue-400 shadow-sm"></span> Tokyo Night
                        </button>
                        <button onclick="setTheme('sunset')" class="theme-btn flex items-center gap-2 p-2.5 rounded-lg border border-gh-border bg-amber-950/30 text-xs font-medium text-amber-300 hover:border-amber-400 transition">
                            <span class="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm"></span> Sunset Fire
                        </button>
                    </div>
                </div>

                <!-- Personal Info -->
                <div class="space-y-3">
                    <label class="block text-xs font-semibold uppercase tracking-wider text-gh-muted">Developer Profile Info</label>
                    <div>
                        <span class="text-xs text-gh-muted mb-1 block">Full Name / Display Name</span>
                        <input type="text" id="inputName" value="Sanah Worldh" class="w-full px-3 py-2 text-sm rounded-lg bg-gh-card border border-gh-border focus:border-emerald-500 focus:outline-none text-white">
                    </div>
                    <div>
                        <span class="text-xs text-gh-muted mb-1 block">GitHub Username</span>
                        <input type="text" id="inputUsername" value="sanahworldh" class="w-full px-3 py-2 text-sm rounded-lg bg-gh-card border border-gh-border focus:border-emerald-500 focus:outline-none text-white">
                    </div>
                    <div>
                        <span class="text-xs text-gh-muted mb-1 block">Sub-Headline Tagline</span>
                        <input type="text" id="inputHeadline" value="Full Stack Architect | Open Source & Animation Enthusiast" class="w-full px-3 py-2 text-sm rounded-lg bg-gh-card border border-gh-border focus:border-emerald-500 focus:outline-none text-white">
                    </div>
                </div>

                <!-- Dynamic Typing Phrases -->
                <div>
                    <label class="block text-xs font-semibold uppercase tracking-wider text-gh-muted mb-2">Animated Typing Lines (Comma Separated)</label>
                    <textarea id="inputTyping" rows="3" class="w-full px-3 py-2 text-sm rounded-lg bg-gh-card border border-gh-border focus:border-emerald-500 focus:outline-none text-white font-mono text-xs">Building scalable & modern web apps..., Passionate about UI/UX & Fluid Animations..., Always learning, always building...</textarea>
                </div>

                <!-- Tech Stack Badges Config -->
                <div>
                    <label class="block text-xs font-semibold uppercase tracking-wider text-gh-muted mb-2">Tech Stack Badges (Comma Separated)</label>
                    <input type="text" id="inputTech" value="TypeScript, React, Next.js, Node.js, Python, TailwindCSS, Docker, AWS" class="w-full px-3 py-2 text-sm rounded-lg bg-gh-card border border-gh-border focus:border-emerald-500 focus:outline-none text-white">
                </div>

                <!-- Banner Wave Physics Control -->
                <div class="space-y-2">
                    <label class="block text-xs font-semibold uppercase tracking-wider text-gh-muted">Fluid Banner Wave Speed</label>
                    <input type="range" id="waveSpeedRange" min="1" max="10" value="4" class="w-full accent-emerald-500 bg-gh-card">
                </div>

                <!-- Snake Animation Control -->
                <div class="flex items-center justify-between p-3 rounded-lg bg-gh-card border border-gh-border">
                    <span class="text-xs font-medium text-white">Live Contribution Snake</span>
                    <input type="checkbox" id="snakeToggle" checked class="w-4 h-4 accent-emerald-500 rounded cursor-pointer">
                </div>

            </div>
        </aside>

        <!-- CENTER PREVIEW CANVAS AREA -->
        <main class="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center justify-start min-h-[calc(100vh-65px)]">

            <!-- PREVIEW CONTAINER CARD -->
            <div id="previewCard" class="w-full max-w-4xl bg-gh-bg border border-gh-border rounded-2xl shadow-2xl overflow-hidden my-auto transition-all duration-300">

                <!-- FLUID SVG CANVAS HEADER BANNER -->
                <div class="relative w-full h-56 md:h-64 overflow-hidden border-b border-gh-border bg-gradient-to-b from-gray-950 via-gh-card to-gh-bg">
                    
                    <!-- Animated Canvas background for Fluid Motion -->
                    <canvas id="fluidCanvas" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>

                    <!-- Banner Overlay Content -->
                    <div class="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-6 bg-black/20 backdrop-blur-[2px]">
                        <div class="inline-block px-4 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md mb-3 shadow-xl">
                            <span id="bannerTitleText" class="font-mono font-extrabold text-2xl md:text-4xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400 theme-text-glow">
                                HELLO WORLD! 🐳
                            </span>
                        </div>
                        <p id="previewHeadline" class="text-sm md:text-base text-gh-text font-medium max-w-xl drop-shadow-md">
                            Full Stack Architect | Open Source & Animation Enthusiast
                        </p>

                        <!-- Quick Badges Overlay -->
                        <div class="flex items-center gap-2 mt-4 flex-wrap justify-center">
                            <span class="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Available for Hire
                            </span>
                            <span class="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                                🚀 100+ PRs Merged
                            </span>
                        </div>
                    </div>
                </div>

                <!-- MAIN README CONTENT CONTAINER -->
                <div class="p-6 md:p-10 space-y-8">

                    <!-- PROFILE HEADER & TYPING TEXT SECTION -->
                    <div class="flex flex-col md:flex-row items-center md:items-start gap-6 pb-8 border-b border-gh-border">
                        <!-- Profile Avatar with Glow Ring -->
                        <div class="relative group">
                            <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
                            <img id="avatarImage" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" alt="Avatar" class="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-gh-border shadow-2xl">
                        </div>

                        <!-- Info & Dynamic Typing -->
                        <div class="flex-1 text-center md:text-left space-y-3">
                            <div>
                                <h2 id="previewName" class="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Sanah Worldh</h2>
                                <p id="previewUserTag" class="text-sm font-mono text-gh-muted">@sanahworldh</p>
                            </div>

                            <!-- TYPING ANIMATION CONTAINER -->
                            <div class="min-h-[40px] flex items-center justify-center md:justify-start px-4 py-2 rounded-xl bg-gh-card border border-gh-border/60 font-mono text-xs md:text-sm text-emerald-400 shadow-inner">
                                <span class="text-gh-muted mr-2">&gt;</span>
                                <span id="typingText"></span><span class="cursor-blink text-emerald-400 font-bold">|</span>
                            </div>
                        </div>
                    </div>

                    <!-- TECH STACK SECTION -->
                    <div>
                        <h3 class="text-xs font-semibold uppercase tracking-widest text-gh-muted mb-4 flex items-center gap-2">
                            <i class="fa-solid fa-layer-group text-emerald-400"></i> Tech Stack & Toolkit
                        </h3>
                        <div id="techPillsContainer" class="flex flex-wrap gap-2.5">
                            <!-- Dynamically generated pills will render here -->
                        </div>
                    </div>

                    <!-- GITHUB ANALYTICS & STATS GRID -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        
                        <!-- Top Languages Card -->
                        <div class="glass-card p-5 rounded-xl space-y-4">
                            <div class="flex items-center justify-between pb-2 border-b border-gh-border/50">
                                <h4 class="text-sm font-semibold text-white flex items-center gap-2">
                                    <i class="fa-solid fa-code text-cyan-400"></i> Top Languages
                                </h4>
                                <span class="text-[11px] font-mono text-gh-muted">Most Used</span>
                            </div>
                            
                            <!-- Language Bars -->
                            <div class="space-y-3 font-mono text-xs">
                                <div>
                                    <div class="flex justify-between text-gh-text mb-1">
                                        <span class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> TypeScript</span>
                                        <span class="text-gh-muted">45%</span>
                                    </div>
                                    <div class="w-full h-2 rounded-full bg-gh-card overflow-hidden">
                                        <div class="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full" style="width: 45%;"></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex justify-between text-gh-text mb-1">
                                        <span class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Python</span>
                                        <span class="text-gh-muted">28%</span>
                                    </div>
                                    <div class="w-full h-2 rounded-full bg-gh-card overflow-hidden">
                                        <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full" style="width: 28%;"></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex justify-between text-gh-text mb-1">
                                        <span class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-purple-400"></span> JavaScript</span>
                                        <span class="text-gh-muted">17%</span>
                                    </div>
                                    <div class="w-full h-2 rounded-full bg-gh-card overflow-hidden">
                                        <div class="h-full bg-purple-500 rounded-full" style="width: 17%;"></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex justify-between text-gh-text mb-1">
                                        <span class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span> HTML/CSS</span>
                                        <span class="text-gh-muted">10%</span>
                                    </div>
                                    <div class="w-full h-2 rounded-full bg-gh-card overflow-hidden">
                                        <div class="h-full bg-amber-400 rounded-full" style="width: 10%;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- GitHub Streak Stats -->
                        <div class="glass-card p-5 rounded-xl space-y-4 flex flex-col justify-between">
                            <div class="flex items-center justify-between pb-2 border-b border-gh-border/50">
                                <h4 class="text-sm font-semibold text-white flex items-center gap-2">
                                    <i class="fa-solid fa-fire text-amber-500"></i> Contribution Stats
                                </h4>
                                <span class="text-[11px] font-mono text-gh-muted">2026 Activity</span>
                            </div>

                            <div class="grid grid-cols-3 gap-2 text-center py-2">
                                <div class="p-2.5 rounded-lg bg-gh-card border border-gh-border/40">
                                    <span class="text-xl font-bold text-emerald-400 block font-mono">1,482</span>
                                    <span class="text-[10px] text-gh-muted uppercase font-medium">Total Commits</span>
                                </div>
                                <div class="p-2.5 rounded-lg bg-gh-card border border-gh-border/40">
                                    <span class="text-xl font-bold text-amber-400 block font-mono">48 Days</span>
                                    <span class="text-[10px] text-gh-muted uppercase font-medium">Current Streak</span>
                                </div>
                                <div class="p-2.5 rounded-lg bg-gh-card border border-gh-border/40">
                                    <span class="text-xl font-bold text-cyan-400 block font-mono">126 Days</span>
                                    <span class="text-[10px] text-gh-muted uppercase font-medium">Longest Streak</span>
                                </div>
                            </div>

                            <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                                <i class="fa-solid fa-award text-emerald-400 text-base"></i>
                                <span>Top 1% Contributor status in Open Source ecosystems.</span>
                            </div>
                        </div>

                    </div>

                    <!-- LIVE CONTRIBUTION SNAKE GRID -->
                    <div id="snakeContainer" class="glass-card p-5 rounded-xl space-y-3">
                        <div class="flex items-center justify-between">
                            <h4 class="text-sm font-semibold text-white flex items-center gap-2">
                                <i class="fa-solid fa-staff-snake text-emerald-400"></i> Contribution Snake Simulation
                            </h4>
                            <span class="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Active Motion
                            </span>
                        </div>
                        
                        <!-- Canvas for Snake Grid -->
                        <div class="w-full overflow-x-auto p-2 bg-gh-bg/80 rounded-lg border border-gh-border/40">
                            <canvas id="snakeCanvas" width="700" height="110" class="mx-auto block"></canvas>
                        </div>
                    </div>

                    <!-- FOOTER FLUID LIQUID WAVE BANNER -->
                    <div class="relative w-full h-24 rounded-xl overflow-hidden border border-gh-border bg-gradient-to-r from-gh-card via-gray-900 to-gh-card flex items-center justify-between px-6">
                        <canvas id="footerCanvas" class="absolute inset-0 w-full h-full pointer-events-none opacity-40"></canvas>
                        <div class="relative z-10 flex items-center gap-3">
                            <i class="fa-solid fa-eye text-emerald-400 text-lg animate-pulse"></i>
                            <div>
                                <span class="text-xs text-gh-muted block">Profile Visitors</span>
                                <span id="visitorCounter" class="text-lg font-mono font-bold text-white tracking-wider">18,563</span>
                            </div>
                        </div>
                        <div class="relative z-10 text-right">
                            <span class="text-xs text-gh-muted">Designed with Liquid Physics</span>
                            <span class="text-[11px] font-mono text-emerald-400 block">README Studio © 2026</span>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    </div>

    <!-- MARKDOWN GENERATED MODAL -->
    <div id="markdownModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 hidden">
        <div class="w-full max-w-3xl bg-gh-card border border-gh-border rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
            <div class="p-4 border-b border-gh-border flex items-center justify-between bg-gh-bg">
                <h3 class="font-semibold text-white flex items-center gap-2 text-sm md:text-base">
                    <i class="fa-brands fa-markdown text-emerald-400"></i> Generated README.md Source Code
                </h3>
                <button id="closeModalBtn" class="text-gh-muted hover:text-white text-lg px-2">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="p-4 flex-1 overflow-y-auto">
                <textarea id="markdownOutput" readonly class="w-full h-96 p-4 bg-gh-bg border border-gh-border rounded-xl font-mono text-xs text-emerald-300 focus:outline-none selection:bg-emerald-600 selection:text-white"></textarea>
            </div>
            <div class="p-4 border-t border-gh-border bg-gh-bg flex justify-end gap-3">
                <button id="copyModalCodeBtn" class="px-5 py-2.5 text-xs md:text-sm font-medium rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition shadow-lg theme-glow">
                    <i class="fa-regular fa-copy mr-2"></i> Copy Code
                </button>
            </div>
        </div>
    </div>

    <!-- SCRIPT LOGIC -->
    <script>
        // --- APP STATE & CONFIGURATION ---
        const state = {
            name: "Sanah Worldh",
            username: "sanahworldh",
            headline: "Full Stack Architect | Open Source & Animation Enthusiast",
            typingLines: [
                "Building scalable & modern web apps...",
                "Passionate about UI/UX & Fluid Animations...",
                "Always learning, always building..."
            ],
            techStack: ["TypeScript", "React", "Next.js", "Node.js", "Python", "TailwindCSS", "Docker", "AWS"],
            waveSpeed: 0.04,
            snakeEnabled: true,
            theme: "emerald"
        };

        const themePresets = {
            emerald: { primary: '#2ea043', glow: 'rgba(46, 160, 67, 0.4)', text: '#3fb950', border: '#238636' },
            cyberpunk: { primary: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)', text: '#c084fc', border: '#9333ea' },
            tokyo: { primary: '#38bdf8', glow: 'rgba(56, 189, 248, 0.4)', text: '#38bdf8', border: '#0284c7' },
            sunset: { primary: '#f59e0b', glow: 'rgba(245, 158, 11, 0.4)', text: '#fbbf24', border: '#d97706' }
        };

        // DOM Elements
        const inputName = document.getElementById('inputName');
        const inputUsername = document.getElementById('inputUsername');
        const inputHeadline = document.getElementById('inputHeadline');
        const inputTyping = document.getElementById('inputTyping');
        const inputTech = document.getElementById('inputTech');
        const waveSpeedRange = document.getElementById('waveSpeedRange');
        const snakeToggle = document.getElementById('snakeToggle');

        const previewName = document.getElementById('previewName');
        const previewUserTag = document.getElementById('previewUserTag');
        const previewHeadline = document.getElementById('previewHeadline');
        const typingText = document.getElementById('typingText');
        const techPillsContainer = document.getElementById('techPillsContainer');
        const snakeContainer = document.getElementById('snakeContainer');

        const modal = document.getElementById('markdownModal');
        const markdownOutput = document.getElementById('markdownOutput');

        // --- INIT LISTENERS ---
        function initControls() {
            inputName.addEventListener('input', (e) => {
                state.name = e.target.value || 'Your Name';
                previewName.textContent = state.name;
            });

            inputUsername.addEventListener('input', (e) => {
                state.username = e.target.value || 'username';
                previewUserTag.textContent = '@' + state.username;
            });

            inputHeadline.addEventListener('input', (e) => {
                state.headline = e.target.value;
                previewHeadline.textContent = state.headline;
            });

            inputTyping.addEventListener('input', (e) => {
                state.typingLines = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                resetTypingAnimation();
            });

            inputTech.addEventListener('input', (e) => {
                state.techStack = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                renderTechPills();
            });

            waveSpeedRange.addEventListener('input', (e) => {
                state.waveSpeed = e.target.value * 0.01;
            });

            snakeToggle.addEventListener('change', (e) => {
                state.snakeEnabled = e.target.checked;
                snakeContainer.style.display = state.snakeEnabled ? 'block' : 'none';
            });

            document.getElementById('toggleConfigBtn').addEventListener('click', () => {
                const sidebar = document.getElementById('configSidebar');
                sidebar.classList.toggle('hidden');
            });

            document.getElementById('copyMarkdownBtn').addEventListener('click', openMarkdownModal);
            document.getElementById('closeModalBtn').addEventListener('click', () => modal.classList.add('hidden'));
            document.getElementById('copyModalCodeBtn').addEventListener('click', copyMarkdownToClipboard);
        }

        // --- THEME SWITCHER ---
        function setTheme(themeKey) {
            state.theme = themeKey;
            const preset = themePresets[themeKey];
            document.documentElement.style.setProperty('--theme-primary', preset.primary);
            document.documentElement.style.setProperty('--theme-glow', preset.glow);

            // Update UI buttons feedback
            document.querySelectorAll('.theme-btn').forEach(btn => {
                btn.classList.remove('border-emerald-500/50', 'border-purple-500/50', 'border-blue-500/50', 'border-amber-500/50');
            });
        }

        // --- RENDER TECH STACK PILLS ---
        function renderTechPills() {
            techPillsContainer.innerHTML = '';
            state.techStack.forEach(tech => {
                const pill = document.createElement('span');
                pill.className = 'tech-pill px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-gh-card border border-gh-border text-gh-text hover:text-white hover:border-emerald-500 hover:shadow-lg cursor-default flex items-center gap-1.5';
                pill.innerHTML = `<i class="fa-solid fa-code-commit text-emerald-400 text-[10px]"></i> ${tech}`;
                techPillsContainer.appendChild(pill);
            });
        }

        // --- DYNAMIC TYPING ANIMATION ---
        let typingIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingTimeout = null;

        function handleTyping() {
            if (state.typingLines.length === 0) return;
            const currentLine = state.typingLines[typingIndex % state.typingLines.length];

            if (isDeleting) {
                charIndex--;
                typingText.textContent = currentLine.substring(0, charIndex);
            } else {
                charIndex++;
                typingText.textContent = currentLine.substring(0, charIndex);
            }

            let typeSpeed = isDeleting ? 30 : 70;

            if (!isDeleting && charIndex === currentLine.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                typingIndex++;
                typeSpeed = 500; // Pause before typing next line
            }

            typingTimeout = setTimeout(handleTyping, typeSpeed);
        }

        function resetTypingAnimation() {
            clearTimeout(typingTimeout);
            typingIndex = 0;
            charIndex = 0;
            isDeleting = false;
            handleTyping();
        }

        // --- FLUID CANVAS BANNER ANIMATION ---
        function initFluidCanvas() {
            const canvas = document.getElementById('fluidCanvas');
            const ctx = canvas.getContext('2d');
            let step = 0;

            function resize() {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            }
            window.addEventListener('resize', resize);
            resize();

            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                step += state.waveSpeed;

                // Wave Colors based on theme
                const colors = [
                    'rgba(46, 160, 67, 0.2)',
                    'rgba(56, 189, 248, 0.15)',
                    'rgba(168, 85, 247, 0.1)'
                ];

                for (let i = 0; i < 3; i++) {
                    ctx.beginPath();
                    ctx.fillStyle = colors[i];

                    for (let x = 0; x <= canvas.width; x += 10) {
                        const y = Math.sin(x * 0.008 + step + i) * 20 +
                                  Math.cos(x * 0.003 + step * 0.5) * 15 +
                                  (canvas.height / 1.5);
                        if (x === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }

                    ctx.lineTo(canvas.width, canvas.height);
                    ctx.lineTo(0, canvas.height);
                    ctx.closePath();
                    ctx.fill();
                }

                requestAnimationFrame(draw);
            }
            draw();
        }

        // --- FOOTER CANVAS ANIMATION ---
        function initFooterCanvas() {
            const canvas = document.getElementById('footerCanvas');
            const ctx = canvas.getContext('2d');
            let step = 0;

            function resize() {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            }
            window.addEventListener('resize', resize);
            resize();

            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                step += 0.03;

                ctx.beginPath();
                ctx.fillStyle = 'rgba(46, 160, 67, 0.15)';
                for (let x = 0; x <= canvas.width; x += 10) {
                    const y = Math.sin(x * 0.01 + step) * 10 + (canvas.height / 2);
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.lineTo(canvas.width, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.closePath();
                ctx.fill();

                requestAnimationFrame(draw);
            }
            draw();
        }

        // --- LIVE CONTRIBUTION SNAKE ANIMATION ---
        function initSnakeCanvas() {
            const canvas = document.getElementById('snakeCanvas');
            const ctx = canvas.getContext('2d');

            const rows = 7;
            const cols = 45;
            const cellSize = 11;
            const gap = 3;

            // Generate matrix simulation
            const grid = [];
            for (let r = 0; r < rows; r++) {
                grid[r] = [];
                for (let c = 0; c < cols; c++) {
                    grid[r][c] = Math.random() > 0.65 ? Math.floor(Math.random() * 4) + 1 : 0;
                }
            }

            // Snake body initial positions
            let snake = [
                { r: 3, c: 5 },
                { r: 3, c: 4 },
                { r: 3, c: 3 },
                { r: 3, c: 2 }
            ];
            let dir = { r: 0, c: 1 };

            function getCellColor(level) {
                switch(level) {
                    case 0: return '#161b22';
                    case 1: return '#0e4429';
                    case 2: return '#006d32';
                    case 3: return '#26a641';
                    case 4: return '#39d353';
                    default: return '#161b22';
                }
            }

            function updateSnake() {
                const head = { r: snake[0].r + dir.r, c: snake[0].c + dir.c };

                // Randomly change directions or bounce off bounds
                if (head.r < 0 || head.r >= rows || head.c < 0 || head.c >= cols || Math.random() < 0.15) {
                    const dirs = [
                        { r: 0, c: 1 }, { r: 0, c: -1 },
                        { r: 1, c: 0 }, { r: -1, c: 0 }
                    ];
                    dir = dirs[Math.floor(Math.random() * dirs.length)];
                    head.r = Math.max(0, Math.min(rows - 1, snake[0].r + dir.r));
                    head.c = Math.max(0, Math.min(cols - 1, snake[0].c + dir.c));
                }

                snake.unshift(head);
                snake.pop();

                // Snake "eats" grid dot into higher contribution
                grid[head.r][head.c] = 4;
            }

            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Render Grid Cells
                for (let r = 0; r < rows; r++) {
                    for (let c = 0; c < cols; c++) {
                        ctx.fillStyle = getCellColor(grid[r][c]);
                        ctx.beginPath();
                        ctx.roundRect(c * (cellSize + gap), r * (cellSize + gap), cellSize, cellSize, 2);
                        ctx.fill();
                    }
                }

                // Render Snake Body
                snake.forEach((segment, i) => {
                    ctx.fillStyle = i === 0 ? '#6ee7b7' : '#34d399';
                    ctx.beginPath();
                    ctx.roundRect(segment.c * (cellSize + gap), segment.r * (cellSize + gap), cellSize, cellSize, 3);
                    ctx.fill();
                });
            }

            setInterval(() => {
                if (state.snakeEnabled) {
                    updateSnake();
                    draw();
                }
            }, 180);

            draw();
        }

        // --- MARKDOWN CODE GENERATION ---
        function generateMarkdown() {
            const typingFormatted = state.typingLines.map(s => `${s}`).join(';');
            const techBadges = state.techStack.map(t => `![${t}](https://img.shields.io/badge/-${t.replace(/\s+/g, '%20')}-161b22?style=for-the-badge&logo=${t.toLowerCase()}&logoColor=white)`).join(' ');

            return `<div align="center">

  <!-- FLUID HEADER BANNER -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,24,30&height=260&section=header&text=HELLO%20WORLD!%20%F0%9F%90%B3&fontSize=50&animation=twinkling" width="100%" alt="Header Banner" />

  <!-- DYNAMIC TYPING SVG -->
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=2EA043&center=true&vCenter=true&width=500&lines=${encodeURIComponent(typingFormatted)}" alt="Typing SVG" />
  </a>

</div>

## ⚡ About Me

\`\`\`yaml
developer:
  name: ${state.name}
  role: Full Stack Architect
  status: 🚀 Building sleek digital experiences
  interests: [UI/UX, WebGL, Distributed Systems]
\`\`\`

- 🔭 **Currently working on:** Next-generation web applications.
- 🌱 **Learning:** High performance graphics & cloud automation.
- 👯 **Looking to collaborate on:** Open source tools & component libraries.

---

## 🚀 Tech Stack

<p align="center">
  ${techBadges}
</p>

---

## 📈 GitHub Analytics

<div align="center">

  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${state.username}&theme=tokyonight&hide_border=true" width="48%" />
  <img src="https://github-readme-stats.vercel.app/api?username=${state.username}&show_icons=true&theme=tokyonight&hide_border=true" width="48%" />

  <br/><br/>

  <!-- CONTRIBUTION SNAKE -->
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/${state.username}/${state.username}/output/github-contribution-grid-snake-dark.svg">
    <img alt="github contribution snake" src="https://raw.githubusercontent.com/${state.username}/${state.username}/output/github-contribution-grid-snake.svg" width="100%">
  </picture>

</div>

---

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,24,30&height=100&section=footer" width="100%" />

  <sub>Profile Views: <img src="https://profile-counter.glitch.me/${state.username}/count.svg" alt="Visitors" /></sub>

</div>`;
        }

        function openMarkdownModal() {
            markdownOutput.value = generateMarkdown();
            modal.classList.remove('hidden');
        }

        function copyMarkdownToClipboard() {
            markdownOutput.select();
            document.execCommand('copy');

            const btn = document.getElementById('copyModalCodeBtn');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Copied!';
            btn.classList.replace('bg-emerald-600', 'bg-teal-600');

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.classList.replace('bg-teal-600', 'bg-emerald-600');
            }, 2000);
        }

        // --- VISITOR COUNTER ANIMATION ---
        function animateVisitorCounter() {
            const el = document.getElementById('visitorCounter');
            let count = 18500;
            const target = 18563;
            const timer = setInterval(() => {
                count += 2;
                if (count >= target) {
                    count = target;
                    clearInterval(timer);
                }
                el.textContent = count.toLocaleString();
            }, 30);
        }

        // --- ON INITIAL LOAD ---
        window.onload = function () {
            initControls();
            renderTechPills();
            resetTypingAnimation();
            initFluidCanvas();
            initFooterCanvas();
            initSnakeCanvas();
            animateVisitorCounter();
        };
    </script>
</body>
</html>
