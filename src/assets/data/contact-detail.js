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
        "A modern, responsive portfolio built with React 19, Vite, Tailwind CSS 4, and DaisyUI. Features fast HMR, beautiful components, React Icons, and ESLint for clean code.",
      tech: ["React", "Vite", "Tailwind CSS", "DaisyUI", "React Icons"],
      imageUrl: "/assets/projects/tailwind-portfolio.png",
      liveUrl: "https://tailwind-daisyui-portfolio.vercel.app/",
      githubUrl: "https://github.com/ashon-shakya/tailwind-daisyui-portfolio",
    },
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce site with payment integration.",
      tech: ["React", "Node.js", "Stripe"],
      imageUrl: "/assets/project1.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce site with payment integration.",
      tech: ["React", "Node.js", "Stripe"],
      imageUrl: "/assets/project1.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce site with payment integration.",
      tech: ["React", "Node.js", "Stripe"],
      imageUrl: "/assets/project1.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce site with payment integration.",
      tech: ["React", "Node.js", "Stripe"],
      imageUrl: "/assets/project1.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description: "Interactive charts displaying real-time analytics.",
      tech: ["D3.js", "React", "Firebase"],
      imageUrl: "/assets/project2.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    // Add more projects
  ],
  webAppProjects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce site with payment integration.",
      tech: ["React", "Node.js", "Stripe"],
      imageUrl: "/assets/project1.jpg",
      liveUrl: "#",
      githubUrl: "#",
    },
    // Add more projects
  ],
  // Inside your 'contact' object, alongside 'skills', 'featuredProjects', etc.

  workExperience: [
    {
      id: 1,
      title: "Senior Software Engineer",
      imageUrl: "/assets/works/rebb-tech.png",

      company: "Galli Express Pvt. Ltd.",
      location: "Nepal",
      dates: "2023 - Present",
      responsibilities: [
        "Lead full-cycle API-to-UI development, including requirements, coding, deployment, and support.",
        "Analysed client needs for innovative navigation solutions.",
        "Employed Node.js and TypeScript for efficient API development, leveraging Node.js's asynchronous architecture with utilizing Python scripts for data extraction.",
        "Employed Azure Function App for Node deployment and Implemented Blob Storage for image retrieval.",
      ],
      tech: ["Node.js", "TypeScript", "Python", "Azure"],
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
      tech: ["Node.js", "TypeScript", "Python", "Azure"],
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
