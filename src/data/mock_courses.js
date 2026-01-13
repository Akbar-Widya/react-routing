export const MOCK_COURSES = [
  {
    id: "c-001",
    title: "Mastering 4K Video Production",
    description: "A complete guide to lighting, sound, and editing for 2026 streamers.",
    instructorId: "u-instructor-01",
    status: "published",
    price: 59.99,
    createdAt: "2026-01-05T09:00:00Z",
    lessons: [
      { id: "l-101", title: "Choosing Your Camera", contentUrl: "/videos/camera-intro.mp4", duration: 450, position: 1 },
      { id: "l-102", title: "Lighting for Depth", contentUrl: "/videos/lighting.mp4", duration: 720, position: 2 }
    ]
  },
  {
    id: "c-002",
    title: "Advanced Podcast Engineering",
    description: "Focusing on spatial audio and high-fidelity podcasting techniques.",
    instructorId: "u-instructor-02",
    status: "published",
    price: 29.99,
    createdAt: "2026-01-08T14:30:00Z",
    lessons: [
      { id: "l-201", title: "Room Treatment", contentUrl: "/audio/room-treatment.mp3", duration: 900, position: 1 }
    ]
  },
  {
    id: "c-003",
    title: "Mobile Content Strategy",
    description: "Draft course: Creating viral content using only a smartphone.",
    instructorId: "u-instructor-01",
    status: "draft",
    price: 15.00,
    createdAt: "2026-01-10T12:00:00Z",
    lessons: []
  },
  {
    id: "c-004",
    title: "The Art of Storytelling",
    description: "Mastering narrative arcs for video and audio formats.",
    instructorId: "u-instructor-03",
    status: "published",
    price: 0, // Free course
    createdAt: "2025-12-20T08:00:00Z",
    lessons: [
      { id: "l-401", title: "The Hero's Journey", contentUrl: "/videos/story-01.mp4", duration: 1200, position: 1 }
    ]
  },
  {
    id: "c-005",
    title: "Mixing for Social Media",
    description: "How to ensure your audio sounds perfect on every platform.",
    instructorId: "u-instructor-02",
    status: "published",
    price: 39.99,
    createdAt: "2026-01-02T11:15:00Z",
    lessons: [
      { id: "l-501", title: "Normalization Standards", contentUrl: "/videos/audio-mix.mp4", duration: 540, position: 1 }
    ]
  }
];
