# Netflix-Style Developer Portfolio

This is a personal developer portfolio built with **React**, **Vite**, and **Tailwind CSS**, designed to mimic the look, feel, and interactivity of the Netflix streaming platform.

It's fully responsive, fast, and built to be easily customized. All personal data (projects, experience, skills) is stored in a central JavaScript object, so no complex component-level changes are needed to make this portfolio your own.

---

## ✨ Features

- **Netflix-Inspired UI/UX:** A modern, dark-mode interface that users already know and love.
- **Dynamic Hero Section:** A full-bleed hero banner to introduce yourself, with a “More Info” button that smoothly scrolls to your **About** section.
- **Horizontally Scrolling “Rows”:** Projects and work experience are organized into “genres” (e.g., “Featured Projects,” “Work Experience”) that scroll horizontally.
- **Animated Gradient Titles:** Section titles feature a sleek, animated silver gradient text effect.
- **Click-to-Open Modals:** Clicking any project or work experience card opens a detailed modal with more information, including descriptions, tech stacks, and links.
- **Centralized Data:** All personal information (projects, skills, socials, etc.) is managed in a single `contact-detail.js` file for easy updates.
- **Responsive Design:** Looks great on all devices, from mobile phones to desktop monitors.
- **Comprehensive “About Me” Section:** A dedicated section at the bottom of the page that includes a detailed summary, skills, and social media links.

---

## 🚀 Tech Stack

- **Frontend:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

---

## 📦 Getting Started

You can easily get this project running on your local machine for development and customization.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

Using **npm**:

```bash
npm install
```

Or using **yarn**:

```bash
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
```

Or:

```bash
yarn dev
```

The site will now be available at `http://localhost:5173` (or a similar port).

---

## ⚙️ How to Customize (Make it Your Own)

This portfolio is designed for easy customization.

### 1. Update Your Personal Data

Almost all the content on the site is controlled by `src/assets/data/contact-detail.js`.

Open this file and edit the `contact` object with your own information:

- `name`: Your name
- `title`, `motto`, `summary`, `email`, etc.
- `socials`: Your social media links
- `skills`: A list of your skills
- `workExperience`: An array of your jobs
- `subProjects`: (Optional) Key projects for a specific job
- `featuredProjects`: An array of your best projects
- `webAppProjects`: An array for other web projects

### 2. Update Assets

Go to the `src/assets/` folder and replace the images with your own:

- `logo.jpg`: Your personal logo (or initials)
- `profile-icon.jpg`: Your profile icon
- `bg2.jpg`: The main hero background image
- `project1.jpg`, `project2.jpg`, etc.: Thumbnails for your projects and work experience

Make sure the `imageUrl` in your `contact-detail.js` file matches your new filenames.

### 3. (Optional) Customize Tailwind CSS

You can change the core theme (colors, fonts) by editing the `tailwind.config.js` file.
The custom silver gradient animation (`shimmer`) is already defined here.

---

## 📁 Project Structure

```text
netflix-portfolio/
├── public/
│   └── (Static assets)
├── src/
│   ├── assets/
│   │   ├── data/
│   │   │   └── contact-detail.js  <-- EDIT THIS FILE
│   │   └── (Your images: logo, bg, project thumbs...)
│   ├── components/
│   │   ├── AboutSection.jsx       (Main "About Me" page section)
│   │   ├── ExperienceModal.jsx    (Modal for work experience)
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── InfoModal.jsx          (The main modal "manager" component)
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx        (The "movie card" for projects/experience)
│   │   ├── ProjectModal.jsx       (Modal for projects)
│   │   └── ProjectRow.jsx         (The scrolling "Netflix row")
│   ├── App.jsx                    (Main application layout)
│   ├── index.css                  (Tailwind CSS base styles)
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 📜 License

This project is open-source. Feel free to clone, fork, and customize it for your own use.
