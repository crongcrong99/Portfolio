/*
 * ============================================================
 *  YOUR CONTENT — edit this file to fill in your portfolio.
 * ============================================================
 *
 *  Translatable text is written as { en: "...", ko: "...", zh: "..." }.
 *  If a language is missing, English is shown instead.
 *  A plain string ("...") is shown the same in every language.
 *
 *  Images: put files in assets/images/ and write the path,
 *  e.g. image: "assets/images/project-1.jpg". Leave "" for a placeholder.
 */
window.CONTENT = {
  profile: {
    initials: "YN",
    name: { en: "Your Name", ko: "이름", zh: "你的名字" },
    role: { en: "Your role / title", ko: "직무 / 한 줄 소개", zh: "职位 / 一句话介绍" },
    email: "hello@example.com",
    photo: "", // e.g. "assets/images/profile.jpg" (a square photo works best)
    year: "2026"
  },

  // Hero tiles (the colored boxes at the top)
  hero: {
    featured: {
      image: "", // e.g. "assets/images/featured.jpg"
      caption: { en: "Featured work", ko: "대표 작업", zh: "代表作品" },
      link: "#works"
    },
    stats: [
      { value: "00", label: { en: "Projects", ko: "프로젝트", zh: "项目" } },
      { value: "00", label: { en: "Works", ko: "작업물", zh: "作品" } }
    ],
    highlight: {
      value: "00",
      label: { en: "Your highlight here.", ko: "강조하고 싶은 성과", zh: "你的亮点成就" }
    }
  },

  // ABOUT section
  about: {
    intro: [
      {
        en: "Write a short introduction about yourself here.",
        ko: "여기에 자기소개 글을 작성하세요.",
        zh: "在这里写一段自我介绍。"
      },
      {
        en: "Add another paragraph — your background, values, or what you're working on now.",
        ko: "배경, 가치관, 지금 하고 있는 일 등을 추가로 적어 보세요.",
        zh: "可以再加一段——你的背景、价值观或正在做的事情。"
      }
    ],
    details: [
      { label: { en: "Location", ko: "지역", zh: "所在地" }, value: { en: "—", ko: "—", zh: "—" } },
      { label: { en: "Education", ko: "학력", zh: "学历" }, value: { en: "—", ko: "—", zh: "—" } },
      { label: { en: "Experience", ko: "경력", zh: "经历" }, value: { en: "—", ko: "—", zh: "—" } },
      { label: { en: "Languages", ko: "언어", zh: "语言" }, value: { en: "—", ko: "—", zh: "—" } }
    ],
    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"]
  },

  // PROJECTS section — add as many as you like
  projects: [
    {
      title: { en: "Project Title", ko: "프로젝트 제목", zh: "项目名称" },
      period: "2026",
      role: { en: "Your role", ko: "담당 역할", zh: "担任角色" },
      description: {
        en: "Short description of the project.",
        ko: "프로젝트에 대한 짧은 설명.",
        zh: "项目的简短介绍。"
      },
      tags: ["Tag"],
      image: "",
      link: ""
    },
    {
      title: { en: "Project Title", ko: "프로젝트 제목", zh: "项目名称" },
      period: "2026",
      role: { en: "Your role", ko: "담당 역할", zh: "担任角色" },
      description: {
        en: "Short description of the project.",
        ko: "프로젝트에 대한 짧은 설명.",
        zh: "项目的简短介绍。"
      },
      tags: ["Tag"],
      image: "",
      link: ""
    },
    {
      title: { en: "Project Title", ko: "프로젝트 제목", zh: "项目名称" },
      period: "2026",
      role: { en: "Your role", ko: "담당 역할", zh: "担任角色" },
      description: {
        en: "Short description of the project.",
        ko: "프로젝트에 대한 짧은 설명.",
        zh: "项目的简短介绍。"
      },
      tags: ["Tag"],
      image: "",
      link: ""
    }
  ],

  // PORTFOLIO WORKS section — your gallery
  works: [
    { title: { en: "Work Title", ko: "작업 제목", zh: "作品名称" }, category: { en: "Category", ko: "분류", zh: "类别" }, year: "2026", image: "", link: "" },
    { title: { en: "Work Title", ko: "작업 제목", zh: "作品名称" }, category: { en: "Category", ko: "분류", zh: "类别" }, year: "2026", image: "", link: "" },
    { title: { en: "Work Title", ko: "작업 제목", zh: "作品名称" }, category: { en: "Category", ko: "분류", zh: "类别" }, year: "2026", image: "", link: "" },
    { title: { en: "Work Title", ko: "작업 제목", zh: "作品名称" }, category: { en: "Category", ko: "분류", zh: "类别" }, year: "2026", image: "", link: "" },
    { title: { en: "Work Title", ko: "작업 제목", zh: "作品名称" }, category: { en: "Category", ko: "분류", zh: "类别" }, year: "2026", image: "", link: "" },
    { title: { en: "Work Title", ko: "작업 제목", zh: "作品名称" }, category: { en: "Category", ko: "분류", zh: "类别" }, year: "2026", image: "", link: "" }
  ],

  // CONTACT section links
  links: [
    { label: "GitHub", url: "" },
    { label: "LinkedIn", url: "" },
    { label: "Instagram", url: "" }
  ]
};
