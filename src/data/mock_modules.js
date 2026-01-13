// src/data/modules.js
export const MOCK_MODULES = [
  {
    id: "m-001",
    courseId: "c-001", // Links to "Mastering 4K Video Production"
    title: "Module 1: Gear and Setup",
    description: "Essential equipment for high-quality video.",
    position: 1,
    lessons: [
      { id: "l-101", title: "Choosing Your Camera", contentUrl: "/videos/camera-intro.mp4", duration: 450, position: 1 },
      { id: "l-102", title: "Lighting for Depth", contentUrl: "/videos/lighting.mp4", duration: 720, position: 2 }
    ]
  },
  {
    id: "m-002",
    courseId: "c-001",
    title: "Module 2: Editing Basics",
    description: "Post-production workflow for 2026 content.",
    position: 2,
    lessons: [
      { id: "l-103", title: "Intro to Final Cut Pro", contentUrl: "/videos/editing-01.mp4", duration: 600, position: 1 }
    ]
  },
  {
    id: "m-003",
    courseId: "c-002", // Links to "Advanced Podcast Engineering"
    title: "Module 1: Acoustic Treatment",
    description: "How to prep your room for audio recording.",
    position: 1,
    lessons: [
      { id: "l-201", title: "DIY Sound Panels", contentUrl: "/audio/panels.mp3", duration: 900, position: 1 }
    ]
  },
  {
    id: "m-004",
    courseId: "c-002",
    title: "Module 2: Microphone Selection",
    description: "Finding the right mic for your voice type.",
    position: 2,
    lessons: []
  },
  {
    id: "m-005",
    courseId: "c-005", // Links to "Mixing for Social Media"
    title: "Module 1: Platform Specs",
    description: "Audio loudness standards for TikTok vs. YouTube.",
    position: 1,
    lessons: [
      { id: "l-501", title: "Normalization Basics", contentUrl: "/videos/audio-mix.mp4", duration: 540, position: 1 }
    ]
  },
  // Continuing for "Mastering 4K Video Production" (c-001)
  {
    id: "m-006",
    courseId: "c-001",
    title: "Module 3: Advanced Color Grading",
    description: "Using 2026 AI tools for cinematic color correction.",
    position: 3,
    lessons: [
      { id: "l-104", title: "Working with LOG Footage", contentUrl: "/videos/color-01.mp4", duration: 800, position: 1 },
      { id: "l-105", title: "AI Sky Replacement", contentUrl: "/videos/color-02.mp4", duration: 500, position: 2 }
    ]
  },
  {
    id: "m-007",
    courseId: "c-001",
    title: "Module 4: Exporting for Multi-Platform",
    description: "Best settings for TikTok, YouTube, and VR.",
    position: 4,
    lessons: [
      { id: "l-106", title: "Bitrate Optimization", contentUrl: "/videos/export.mp4", duration: 400, position: 1 }
    ]
  },

  // Continuing for "Advanced Podcast Engineering" (c-002)
  {
    id: "m-008",
    courseId: "c-002",
    title: "Module 3: Removing Noise & Echo",
    description: "Digital cleanup for imperfect recording environments.",
    position: 3,
    lessons: [
      { id: "l-202", title: "Spectral Repair Basics", contentUrl: "/audio/noise-removal.mp3", duration: 1100, position: 1 }
    ]
  },
  {
    id: "m-009",
    courseId: "c-002",
    title: "Module 4: Hosting and Distribution",
    description: "Getting your audio on all major streaming apps.",
    position: 4,
    lessons: [
      { id: "l-203", title: "RSS Feed Setup", contentUrl: "/audio/distribution.mp3", duration: 600, position: 1 }
    ]
  },

  // New modules for "Mobile Content Strategy" (c-003) - testing empty state or updates
  {
    id: "m-010",
    courseId: "c-003",
    title: "Module 1: Vertical Video Fundamentals",
    description: "Why vertical content dominates 2026 social media.",
    position: 1,
    lessons: [
      { id: "l-301", title: "The 9:16 Aspect Ratio", contentUrl: "/videos/mobile-01.mp4", duration: 300, position: 1 }
    ]
  },

  // New modules for "Art of Storytelling" (c-004)
  {
    id: "m-011",
    courseId: "c-004",
    title: "Module 2: Character Development",
    description: "Making your audience care about your subject.",
    position: 2,
    lessons: [
      { id: "l-402", title: "The Relatable Protagonist", contentUrl: "/videos/story-02.mp4", duration: 950, position: 1 }
    ]
  },
  {
    id: "m-012",
    courseId: "c-004",
    title: "Module 3: Hooking the Viewer",
    description: "Strategies for the first 5 seconds of your video.",
    position: 3,
    lessons: [
      { id: "l-403", title: "The Visual Hook", contentUrl: "/videos/story-03.mp4", duration: 420, position: 1 }
    ]
  },

  // Continuing for "Mixing for Social Media" (c-005)
  {
    id: "m-013",
    courseId: "c-005",
    title: "Module 2: Dynamic Processing",
    description: "Using compression to make audio punchy.",
    position: 2,
    lessons: [
      { id: "l-502", title: "Compressor Settings for Voice", contentUrl: "/videos/audio-02.mp4", duration: 680, position: 1 }
    ]
  },

  // Brand new Course/Module for 2026 Digital Marketing (Testing a new course link)
  {
    id: "m-014",
    courseId: "c-006", // Assuming a new course ID
    title: "Module 1: SEO for Video",
    description: "Optimizing your video descriptions for search engines.",
    position: 1,
    lessons: [
      { id: "l-601", title: "Keyword Research", contentUrl: "/videos/marketing-01.mp4", duration: 750, position: 1 }
    ]
  },
  {
    id: "m-015",
    courseId: "c-006",
    title: "Module 2: Paid Ads Strategy",
    description: "Managing budgets for video-based ad campaigns.",
    position: 2,
    lessons: [
      { id: "l-602", title: "A/B Testing Creatives", contentUrl: "/videos/marketing-02.mp4", duration: 1200, position: 1 }
    ]
  }
];
