# 🖼️ Gallery Project

A modern, infinite-scrolling image gallery built with **React 19**, **Vite**, and **Tailwind CSS v4**.  
This project was created as part of my React learning journey to practice API integration, infinite scroll, component composition, and working with external data sources.

Images are fetched from the free [Picsum Photos](https://picsum.photos/) API and displayed in a clean, dark-themed masonry-style layout.

---

**Live Demo** : [https://gallery-app-by-noman.vercel.app/](https://gallery-app-by-noman.vercel.app/)

---

## ✨ Features

- Infinite scroll — load more images automatically as you scroll
- Fetches high-quality photos from the Picsum Photos API
- Responsive flex-wrap gallery layout
- Each card shows the image and the photographer’s name
- Clicking a card opens the original photo page in a new tab
- Clean dark theme with a black background
- Loading indicator and end-of-list message
- Built with modern React patterns and Tailwind utility classes

---

## 🛠️ Tech Stack

| Technology                      | Purpose                                      |
|--------------------------------|----------------------------------------------|
| React 19                       | UI library                                   |
| Vite 8                         | Fast build tool & development server         |
| Tailwind CSS 4                 | Utility-first styling                        |
| Axios                          | HTTP client for API requests                 |
| react-infinite-scroll-component| Infinite scrolling functionality             |
| Picsum Photos API              | Free placeholder images                      |
| ESLint                         | Code quality                                 |

---

## 🧠 How It Works

### State Management
The app uses three pieces of state:

- `result` — array that accumulates all loaded images
- `num` — current page number for the API
- `hasMore` — boolean that controls whether more data can be loaded

### Data Fetching
When more items are needed, the app calls the Picsum API:
https://picsum.photos/v2/list?page={page}&limit=40

New results are appended to the existing list using the spread operator:

```js
setResult((prev) => [...prev, ...response.data])

```
### Infinite Scroll
The `react-infinite-scroll-component` library wraps the gallery.  
It automatically calls the `next` function (`getData`) when the user approaches the bottom of the list.  
A loading message is shown while fetching, and an end message appears when no more data is available.

### Card Component
Each image is rendered through a reusable `Card` component that receives the photo object as a prop.  
The card displays:

- The photo (`download_url`)
- The author’s name
- A link to the original image page (`url`) that opens in a new tab

---

## 🎨 UI Overview

- Full-screen dark background for a modern look
- Flexible wrapping grid of image cards
- Consistent card size with rounded corners
- Author name centered under each image
- Smooth loading experience with infinite scroll
- Minimal and distraction-free design

---

## 🔮 Possible Future Improvements

This is a learning project, so there’s room to expand it:

- [ ] Initial data load on component mount (`useEffect`)
- [ ] Search / filter by author
- [ ] Lightbox / full-screen image view
- [ ] Lazy loading of images
- [ ] Skeleton loaders instead of text
- [ ] Favorite / save images (localStorage)
- [ ] Different layout options (masonry, grid columns)
- [ ] Dark / Light theme toggle
- [ ] Image download button
- [ ] Error handling and retry logic for failed requests

---

## 📚 Learning Goals Achieved

While building this project I practiced:

- Fetching data from a public API with Axios
- Managing paginated data and infinite scroll
- Using the functional update form of `useState`
- Creating reusable presentational components
- Passing props and rendering dynamic lists
- Working with Tailwind CSS for responsive layouts
- Integrating third-party React libraries
- Building a clean, user-friendly UI

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
