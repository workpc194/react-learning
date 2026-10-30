# 📝 Notes App

A clean, minimal, and fully client-side notes application built with **React 19**, **Vite**, and **Tailwind CSS v4**.  
This project was created as part of my React learning journey to practice core concepts like state management, form handling, and dynamic list rendering.

**Live Demo:** [https://notes-app-by-noman.vercel.app/](https://notes-app-by-noman.vercel.app/)

---

## ✨ Features

- Create notes with a **title** and **detailed content**
- Instantly display notes as cards in a horizontal scrollable list
- Clean dark theme with modern UI
- Fully responsive design
- Form validation (prevents empty submission via controlled inputs)
- Smooth user experience with Tailwind utility classes
- Zero external backend — everything runs in the browser

---

## 🛠️ Tech Stack

| Technology       | Version / Purpose                          |
|------------------|--------------------------------------------|
| React            | 19.x – UI library                          |
| Vite             | 8.x – Fast build tool & dev server         |
| Tailwind CSS     | 4.x – Utility-first styling                |
| Lucide React     | Icons (ready for future enhancements)      |
| ESLint           | Code quality & best practices              |

---


## 🧠 How It Works

The app uses React’s `useState` hook to manage three pieces of state:

- `title` → controlled input for the note title  
- `details` → controlled textarea for the note body  
- `notes` → array that stores all created notes  

When the form is submitted:
1. The default form behavior is prevented.
2. A new note object `{ title, detail }` is created.
3. The note is added to the `notes` array using the spread operator.
4. Both input fields are cleared.
5. The notes list re-renders automatically, displaying the new card.

Notes are currently stored only in component state (they disappear on page refresh). This keeps the app simple while focusing on core React concepts.

---

## 🎨 UI Overview

- **Dark theme** – Full-screen black background for a modern look
- **Form section** – Title input + large textarea + “Save Notes” button
- **Notes gallery** – Horizontal scrollable row of note cards
- Hidden scrollbars for a cleaner visual experience
- Cards show title (bold) and content with overflow handling

---

## 🔮 Possible Future Improvements

This is a learning project, so there’s plenty of room to grow:

- [ ] Persist notes using `localStorage`
- [ ] Add ability to delete notes
- [ ] Edit existing notes
- [ ] Search / filter functionality
- [ ] Color tags or categories
- [ ] Markdown support
- [ ] Responsive card grid instead of horizontal scroll
- [ ] Animations when adding/removing notes
- [ ] Dark / Light theme toggle
- [ ] Export notes as JSON or Markdown

---

## 📚 Learning Goals Achieved

While building this project I practiced:

- Controlled form components in React
- Managing state with `useState`
- Rendering dynamic lists with `.map()`
- Handling form submission
- Using Tailwind CSS utility classes effectively
- Setting up a modern React + Vite project
- Deploying a frontend app to Vercel

---

## 🤝 Contributing

This is a personal learning project, but suggestions and improvements are welcome!  
Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ while learning React**  
Author: [workpc194](https://github.com/workpc194)
