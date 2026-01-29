const name = "Ashon Shakya";

export const contact = {
  name,
  website: "https://ashonshakya.com.np",
  title: "Software Engineer",
  email: "shakya.ashon@gmail.com",
  address: "Harris Park, NSW",
  degree: "Bachelor's in Computer Engineering",
  motto:
    "Crafting immersive and user-friendly web experiences from concept to deployment",
  summary: `Versatile Software Engineer with 7+ years' experience in JavaScript,
            Node.js, TypeScript, Python, React. Led development at a successful
            navigation startup. Skilled in APIs, web plugins, agile methods,
            technical writing. Blend coding, design, 3D rendering for creative
            solutions. Seeking opportunities to apply diverse abilities in a
            dynamic team.`,
  extra: `Beyond that, I'm always here to lend a helping hand, making the
            journey of discovery in the world of technology a collaborative and
            supportive experience.`,
  copyright: `${new Date().getFullYear()} ${name}. All Rights Reserved.`,
  socials: {
    linkedin: "www.linkedin.com/in/ashon-shakya",
    github: "https://github.com/ashon-shakya",
    youtube: "https://www.youtube.com/@ashonshakya",
    instagram: "https://www.instagram.com/ashon.shakya/",
  },
  trailer: {
    title: "Trailer",
    videoUrl: "/assets/ashon_trailer_2.mp4",
    poster: "/assets/bg3.jpg",
    description:
      "In a shadowy server room, software engineer Ashon Shakya pushes the final build of his latest creation. The deploy succeeds, but as the terminal’s cursor blinks in the dark, one question hangs in the air: after crafting the experience, what comes next?",
  },
  // Updated skill data (just names)
  skills: [
    "Node.js",
    "Python",
    "React.js",
    "Git",
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDB",
    "Docker",
    "Blender",
    "Babylon.js",
    "MySQL",
    "CI/CD, Ansible",
    "PHP (Laravel)",
    "PostgreSQL",
    "Progress OpenEdge 4GL",
    "WordPress/CMS",
    "Photoshop",
    "InDesign",
    "Illustrator",
    "Premier Pro",
  ],
  largeScaleProject: [
    {
      id: 1,
      title: "CupQuest",
      description:
        "The ultimate social prediction game for the FIFA World Cup 2026. Create private leagues, compete on global leaderboards, and prove your football knowledge with live scoring and real-time updates.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Auth.js"],
      imageUrl: "/assets/projects/cup-quest.jpg",
      liveUrl: "https://worldcup-2026.vercel.app",
      githubUrl: "https://github.com/ashon-shakya/worldcup-2026",
    },
  ],

  featuredProjects: [
    {
      id: 1,
      title: "Resume Builder",
      description:
        "A modern web application for creating, editing, and exporting professional resumes. Built with React and Vite, featuring multiple export formats (PDF, Word, HTML) and a responsive design powered by Tailwind CSS.",
      tech: ["React", "Vite", "Tailwind CSS", "Bootstrap", "Framer Motion"],
      imageUrl: "/assets/projects/resume.png",
      liveUrl: "https://resume-builder-kohl-mu.vercel.app/",
      githubUrl: "https://github.com/ashon-shakya/resume-builder",
    },
    {
      id: 2,
      title: "ClickUp Task Dashboard",
      description:
        "A modern React app that lists ClickUp tasks by workspace and assignee with dynamic filtering, assignee badges, and a sleek bluish-black UI.",
      tech: ["React", "Tailwind CSS", "Axios", "Lucide React"],
      imageUrl: "/assets/projects/clickup.png",
      liveUrl: "https://clickup-dashboard-eta.vercel.app/",
      githubUrl: "https://github.com/ashon-shakya/clickup-dashboard",
    },
    {
      id: 3,
      title: "Tailwind DaisyUI Portfolio",
      description:
        "A modern, responsive portfolio built with React 19, Vite, Tailwind CSS 4, and DaisyUI. Features fast HMR, beautiful components and React Icons for clean code.",
      tech: ["React", "Vite", "Tailwind CSS", "DaisyUI", "React Icons"],
      imageUrl: "/assets/projects/tailwind-portfolio.png",
      liveUrl: "https://tailwind-daisyui-portfolio.vercel.app/",
      githubUrl: "https://github.com/ashon-shakya/tailwind-daisyui-portfolio",
    },
    {
      id: 5,
      title: "Chatter",
      description:
        "A modern AI-powered chat application built with React 19 and Vite. Integrates the Gemini API for intelligent, real-time conversations. Features a fast, responsive UI styled with Tailwind CSS and maintains clean code",
      tech: ["React", "Vite", "Tailwind CSS", "Gemini API"],
      imageUrl: "/assets/projects/chatter.png",
      liveUrl: "https://dented-chat.vercel.app/",
      githubUrl: "https://github.com/ashon-shakya/dented-chat",
    },
    {
      id: 6,
      title: "Who Wants to be a Millionaire",
      description:
        'A fun, nostalgic web-based trivia game inspired by the iconic TV show "Who Wants to Be a Millionaire?"',
      tech: ["HTML", "CSS3", "JavaScript"],
      imageUrl: "/assets/projects/millionaire.png",
      liveUrl: "https://ashon-shakya.github.io/millionaire-quiz/",
      githubUrl: "https://github.com/ashon-shakya/millionaire-quiz",
    },
    {
      id: 7,
      title: "Tailwind CSS Cheatsheet",
      description:
        "A comprehensive, interactive Tailwind CSS utility classes cheatsheet by Dented Code Academy. Features visual examples of key classes in a themed card layout with dark mode, blue/red accents, and responsive design. Built as a single HTML file using Tailwind via CDN.",
      tech: ["HTML", "Tailwind CSS", "CDN"],
      imageUrl: "/assets/projects/tailwind-cheatsheet.png",
      liveUrl: "https://tailwind-demo-cheatsheet.vercel.app/",
      githubUrl: "https://github.com/ashon-shakya/tailwind-demo-cheatsheet",
    },
    {
      id: 8,
      title: "DSA Visualizer",
      description:
        "An interactive, animated React application for learning Data Structures and Algorithms. Features visualizations for Linear (Arrays, Lists, Stacks, Queues), Non-Linear (Trees, BST, AVL, Graphs), and Algorithms (Sorting, Searching, DP), wrapped in a responsive UI with Dark Mode support.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Lucide React"],
      imageUrl: "/assets/projects/dsa.png",
      liveUrl: "https://dsa-visualizer-rho-sandy.vercel.app/",
      githubUrl: "https://github.com/ashon-shakya/dsa-visualizer",
    },
    {
      id: 9,
      title: "Weather Application",
      description:
        "A real-time weather tracking application providing instant forecasts. Features a search functionality to check weather conditions for different cities, displaying key metrics like temperature, humidity, wind speed, and rain probability in a clean, responsive interface.",
      tech: ["HTML", "CSS", "JavaScript", "Weather API"],
      imageUrl: "/assets/projects/weather-app.png",
      liveUrl: "https://ashon-shakya.github.io/weather-app/",
      githubUrl: "https://github.com/ashon-shakya/weather-app",
    },
  ],
  webAppProjects: [
    {
      id: 1,
      title: "RippaDay",
      description:
        "A Dutch betting calculator that lets you back multiple selections to achieve equal profit no matter which one wins. Simply input odds and desired profit, and it calculates exact stakes across all selections. Perfect for horse racing, sports, and matched betting.",
      tech: ["JavaScript", "React"],
      imageUrl: "/assets/projects/rippaday.png",
      liveUrl: "https://rippaday.com/",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Health Action and Research",
      description:
        "A Nepal-based health innovation company founded in 2019, focused on evidence-based health solutions through consulting, research, training & workshops, and storytelling. Bridges conventional health gaps with digital tools, videos, and blogs, led by expert medical and global health professionals.",
      tech: ["WordPress", "Digital Health Solutions"],
      imageUrl: "/assets/projects/har.png",
      liveUrl: "https://healthactionandresearch.com/",
      githubUrl: "#",
    },
    // Add more projects
  ],
  // Inside your 'contact' object, alongside 'skills', 'featuredProjects', etc.

  workExperience: [
    {
      id: 1,
      title: "Software Engineer",
      imageUrl: "/assets/works/rebb-tech.png",

      company: "Rebb Tech Pty Ltd",
      location: "NSW, Australia",
      dates: "2024 - Present",
      responsibilities: [
        "Led MERN stack job portal development from architecture to deployment",
        "Built scalable, responsive software meeting client needs and industry standards",
        "Mentored junior developers through code reviews and knowledge sharing",
        "Implemented CI/CD pipelines for streamlined deployments",
        "Designed modular React/Node.js architecture for enhanced maintainability",
      ],
      tech: ["Node.js", "TypeScript", "Python", "AWS", "MongoDB"],
    },
    {
      id: 1,
      title: "Senior Software Engineer",
      imageUrl: "/assets/works/galli-express.png",

      company: "Galli Express Pvt. Ltd.",
      location: "Nepal",
      dates: "2023 - Present",
      responsibilities: [
        "Lead full-cycle API-to-UI development, including requirements, coding, deployment, and support.",
        "Analysed client needs for innovative navigation solutions.",
        "Employed Node.js and TypeScript for efficient API development, leveraging Node.js's asynchronous architecture with utilizing Python scripts for data extraction.",
        "Employed Azure Function App for Node deployment and Implemented Blob Storage for image retrieval.",
      ],
      tech: [
        "Node.js",
        "TypeScript",
        "Python",
        "Azure",
        "MongoDB",
        "Shell Script",
        "Postgres",
      ],
    },
    {
      id: 2,
      title: "Technical Lead",
      imageUrl: "/assets/works/javra.png",
      company: "Javra Software",
      location: "Nepal / Netherlands",
      dates: "2019 - 2023",
      responsibilities: [
        "Led agile teams in SaaS development and R&D Department.",
        "Implemented microservices (Node, TypeScript, Python, Blender) with MongoDB, enabling 2D/3D visualization (React, Babylon) for e-commerce, resulting in boosted sales.",
        "Integrated third-party APIs and services to extend functionality and enhance user experience.",
        "Implemented Redis caching to reduce database load, enhance app performance, and implement server-sent events for real-time updates.",
        "Implemented JWT and OAuth 2.0 for secure plugin feature access.",
        "Established automated testing framework (GitLab CI/CD, Ansible) for reliable deployments using Kubernetes and Docker containers.",
      ],
      subProjects: [
        {
          id: "2a",
          title: "Logotool",
          description:
            "A product visualizer tool where users upload custom logos to visualize products. Developed new backend modules in Node.js, Python and MongoDB leveraging OpenCV, imagemagick, ghostscript, inkscape and autotrace for image manipulation.",
        },
        {
          id: "2b",
          title: "3D Visualizer",
          description:
            "Conducted research on 3D technology for web applications and developed a product visualizer using Babylon.js, allowing users to upload custom logos onto 3D objects to visualize products.",
        },
        {
          id: "2c",
          title: "Mood Scene",
          description:
            "Conducted research on incorporating logos into product images and implemented end-to-end processes, from data preparation to backend operations, utilizing Blender Python.",
        },
      ],
      tech: ["Node.js", "TypeScript", "Python", "MongoDB"],
    },
    {
      id: 3,
      title: "Software Engineer",
      imageUrl: "/assets/works/javra.png",
      company: "Javra Software",
      location: "Nepal / Netherlands",
      dates: "2016 - 2019",
      responsibilities: [
        "Successfully developed customized Enterprise Resource Planning (ERP) systems based on customer requirements, delivering tailored solutions to meet their specific business needs.",
        "Led the migration of legacy systems to modern HTML5 web platforms, ensuring enhanced usability and improved performance.",
        "Implemented seamless communication between the ERP system and external devices, enabling efficient data exchange and integration.",
        "Played a key role in data analysis, providing valuable insights and support for bug fixing and error resolution within the system.",
        "Proficiently coded and provided support using OpenEdge Progress 4GL, JavaScript, and HTML5, ensuring efficient development and maintenance of the system.",
      ],
      tech: ["Progress 4GL", "JavaScript", "HTML5", "ERP"],
    },
    {
      id: 4,
      title: "IT/ Graphic Designer",
      imageUrl: "/assets/works/sxg.png",
      company: "St. Xavier's School, Godavari",
      location: "Nepal",
      dates: "2015 - 2016",
      responsibilities: [
        "Re-designed and managed the company's website (www.sxg.edu.np) using WordPress CMS.",
        "Designed and managed content for annual magazine (The Xavierian).",
        "Developed canteen fee payment application using .Net windows form.",
        "Supported the existing legacy system for student management and provided research on upgrades with new technology.",
      ],
      tech: ["WordPress", ".NET", "Graphic Design", "Legacy Systems"],
    },
  ],
};
