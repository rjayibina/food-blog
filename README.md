
## Delicious Food Blog

A clean and simple HTML/CSS-based food blog featuring a styled archive page and individual recipe pages. This project is designed as a static website and can be easily expanded or hosted on GitHub Pages or any static hosting service.

## Features

- Responsive blog archive page with 12 featured food posts
- Styled blog cards (4 per row × 3 rows)
- Static “Load More” button
- Individual single post templates with:
  - Featured image
  - Title, description, tags, and categories
  - Ingredients and instructions
  - 🖨 Print and social share buttons
  - Comment section
  - “← Back to Blog” button
- Clean, modular CSS files per page
- Mobile-friendly layout
- Favicon support

## Project Structure

```
food-blog/
├── archive.html
├── index.html (optional alias of archive)
├── assets/
│   ├── archive.css
│   ├── single-post.css
│   ├── icon/
│   │   └── food-truck.png
│   └── images/
│       ├── authentic-sushi.webp
│       ├── classic-lasagna.webp
│       ├── berry-smoothie.webp
│       ├── mac-and-cheese.webp
│       ├── fruit-tart.webp
│       └── ... (other food images)
├── sushi.html
├── lasagna.html
├── smoothie.html
├── mac-and-cheese.html
├── fruit-tart.html
├── ultimate-burger.html
├── cheesy-pizza.html
└── ... (other recipe pages)
```

## Usage

1. Clone or download this repository.
2. Open `archive.html` in your browser to view the blog archive.
3. Click any post to view its full recipe.
4. Add new recipes by duplicating a post template and updating its content.

## Hosting Options

You can easily host this static site using:

## GitHub Pages
- Push this repo to GitHub
- Go to **Settings > Pages**
- Choose the branch (e.g., `main`) and `/root` directory

## Netlify / Vercel / Surge
- Drag and drop your folder
- Or connect your GitHub repo for automatic deployment

## Tips

- To change the favicon: replace `assets/icon/food-truck.png` and update the `<link rel="icon">` tag if needed.
- All content uses dummy text/images so you can reuse the layout and styling easily for new recipes.

## License

This is a demo project created for educational and portfolio purposes. No license is applied by default. You may modify, use, and share freely.

---

Created by Rjay Ibina | Full-Stack Developer