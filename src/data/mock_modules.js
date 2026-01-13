// src/data/mock_modules.js
export const MOCK_MODULES = [
  {
    id: "m-001",
    courseId: "c-001",
    title: "Module 1: Gear and Setup",
    description: "Essential equipment for high-quality video.",
    position: 1,
    lessons: [
      { 
        id: "l-101", 
        title: "Choosing Your Camera", 
        description: "A technical evaluation of 2026 sensor tech, focusing on dynamic range and bitrate requirements for 4K mastering.",
        contentUrl: "/videos/camera-intro.mp4", 
        duration: 450, 
        position: 1 
      },
      { 
        id: "l-102", 
        title: "Lighting for Depth", 
        description: "Implementing three-point lighting protocols to create separation and professional texture in high-resolution frames.",
        contentUrl: "/videos/lighting.mp4", 
        duration: 720, 
        position: 2 
      }
    ]
  },
  {
    id: "m-002",
    courseId: "c-001",
    title: "Module 2: Editing Basics",
    description: "Post-production workflow for 2026 content.",
    position: 2,
    lessons: [
      { 
        id: "l-103", 
        title: "Intro to Final Cut Pro", 
        description: "Establishing a non-destructive editing environment. Mapping libraries, events, and proxy workflows for 4K raw footage.",
        contentUrl: "/videos/editing-01.mp4", 
        duration: 600, 
        position: 1 
      }
    ]
  },
  {
    id: "m-003",
    courseId: "c-002",
    title: "Module 1: Acoustic Treatment",
    description: "How to prep your room for audio recording.",
    position: 1,
    lessons: [
      { 
        id: "l-201", 
        title: "DIY Sound Panels", 
        description: "Protocol for identifying first-reflection points and neutralizing room reverb using custom-built acoustic absorbers.",
        contentUrl: "/audio/panels.mp3", 
        duration: 900, 
        position: 1 
      }
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
    courseId: "c-005",
    title: "Module 1: Platform Specs",
    description: "Audio loudness standards for TikTok vs. YouTube.",
    position: 1,
    lessons: [
      { 
        id: "l-501", 
        title: "Normalization Basics", 
        description: "Targeting LUFS standards (-14 for YouTube, -9 for TikTok) to ensure consistent audio delivery across mobile platforms.",
        contentUrl: "/videos/audio-mix.mp4", 
        duration: 540, 
        position: 1 
      }
    ]
  },
  {
    id: "m-006",
    courseId: "c-001",
    title: "Module 3: Advanced Color Grading",
    description: "Using 2026 AI tools for cinematic color correction.",
    position: 3,
    lessons: [
      { 
        id: "l-104", 
        title: "Working with LOG Footage", 
        description: "Technical workflow for de-logging footage and applying professional Rec.709 conversion without losing highlight detail.",
        contentUrl: "/videos/color-01.mp4", 
        duration: 800, 
        position: 1 
      },
      { 
        id: "l-105", 
        title: "AI Sky Replacement", 
        description: "Integrating neural engine tools to mask and replace horizons while maintaining natural light-wrap on subjects.",
        contentUrl: "/videos/color-02.mp4", 
        duration: 500, 
        position: 2 
      }
    ]
  },
  {
    id: "m-007",
    courseId: "c-001",
    title: "Module 4: Exporting for Multi-Platform",
    description: "Best settings for TikTok, YouTube, and VR.",
    position: 4,
    lessons: [
      { 
        id: "l-106", 
        title: "Bitrate Optimization", 
        description: "Selecting the optimal H.265/HEVC profiles for cloud-based delivery to minimize compression artifacts.",
        contentUrl: "/videos/export.mp4", 
        duration: 400, 
        position: 1 
      }
    ]
  },
  {
    id: "m-008",
    courseId: "c-002",
    title: "Module 3: Removing Noise & Echo",
    description: "Digital cleanup for imperfect recording environments.",
    position: 3,
    lessons: [
      { 
        id: "l-202", 
        title: "Spectral Repair Basics", 
        description: "Using spectral visualization to isolate and remove transient noises like chair squeaks and mouth clicks.",
        contentUrl: "/audio/noise-removal.mp3", 
        duration: 1100, 
        position: 1 
      }
    ]
  },
  {
    id: "m-009",
    courseId: "c-002",
    title: "Module 4: Hosting and Distribution",
    description: "Getting your audio on all major streaming apps.",
    position: 4,
    lessons: [
      { 
        id: "l-203", 
        title: "RSS Feed Setup", 
        description: "Standardizing metadata for RSS distribution across Spotify, Apple, and 2026 decentralized audio nodes.",
        contentUrl: "/audio/distribution.mp3", 
        duration: 600, 
        position: 1 
      }
    ]
  },
  {
    id: "m-010",
    courseId: "c-003",
    title: "Module 1: Vertical Video Fundamentals",
    description: "Why vertical content dominates 2026 social media.",
    position: 1,
    lessons: [
      { 
        id: "l-301", 
        title: "The 9:16 Aspect Ratio", 
        description: "Composition protocols for vertical frames, focusing on the safe zone for captions and UI overlays.",
        contentUrl: "/videos/mobile-01.mp4", 
        duration: 300, 
        position: 1 
      }
    ]
  },
  {
    id: "m-011",
    courseId: "c-004",
    title: "Module 2: Character Development",
    description: "Making your audience care about your subject.",
    position: 2,
    lessons: [
      { 
        id: "l-402", 
        title: "The Relatable Protagonist", 
        description: "Architecting narrative arcs that establish emotional stakes within the first 60 seconds of a digital module.",
        contentUrl: "/videos/story-02.mp4", 
        duration: 950, 
        position: 1 
      }
    ]
  },
  {
    id: "m-012",
    courseId: "c-004",
    title: "Module 3: Hooking the Viewer",
    description: "Strategies for the first 5 seconds of your video.",
    position: 3,
    lessons: [
      { 
        id: "l-403", 
        title: "The Visual Hook", 
        description: "Using 'In-Media-Res' visual starts to maximize viewer retention and satisfy algorithm watch-time triggers.",
        contentUrl: "/videos/story-03.mp4", 
        duration: 420, 
        position: 1 
      }
    ]
  },
  {
    id: "m-013",
    courseId: "c-005",
    title: "Module 2: Dynamic Processing",
    description: "Using compression to make audio punchy.",
    position: 2,
    lessons: [
      { 
        id: "l-502", 
        title: "Compressor Settings for Voice", 
        description: "Fine-tuning threshold, ratio, and make-up gain to ensure vocal clarity against heavy background tracks.",
        contentUrl: "/videos/audio-02.mp4", 
        duration: 680, 
        position: 1 
      }
    ]
  },
  {
    id: "m-014",
    courseId: "c-006",
    title: "Module 1: SEO for Video",
    description: "Optimizing your video descriptions for search engines.",
    position: 1,
    lessons: [
      { 
        id: "l-601", 
        title: "Keyword Research", 
        description: "Identifying high-volume search terms to index content effectively within the Oaks Protocol framework.",
        contentUrl: "/videos/marketing-01.mp4", 
        duration: 750, 
        position: 1 
      }
    ]
  },
  {
    id: "m-015",
    courseId: "c-006",
    title: "Module 2: Paid Ads Strategy",
    description: "Managing budgets for video-based ad campaigns.",
    position: 2,
    lessons: [
      { 
        id: "l-602", 
        title: "A/B Testing Creatives", 
        description: "Implementing variable testing on ad intros to determine the highest conversion protocol for mobile ads.",
        contentUrl: "/videos/marketing-02.mp4", 
        duration: 1200, 
        position: 1 
      }
    ]
  }
];