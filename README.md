# 🍽️ EatWell — Restaurant Recommender

> Make the world a tastier place!

EatWell is a web application for food enthusiasts to **share and discover restaurants**. The project started as a static HTML/CSS site and was then evolved into a Node.js + Express app with EJS templates and local JSON persistence.

## 🔖 Version

**v2.0 — Node.js + Express + EJS**  
This version replaces the static pages with server-rendered views and a simple backend flow to store restaurant submissions in a local JSON file.

## ✅ What was added in v2

- Node.js server with Express
- EJS templates for page rendering
- Reusable partials for `<head>` and `<header>`
- Routes for `index`, `about`, `restaurants`, `recommend`, and `confirm`
- Form submission handled by `POST /recommend`
- Local storage using `data/restaurant.json`
- Static assets served from `public/`
- Auto-reload during development with Nodemon

## 📄 Main Routes

| Route | Description |
|------|-------------|
| `/` | Homepage |
| `/about` | About the project |
| `/restaurants` | List of recommended restaurants |
| `/recommend` | Form to submit a new restaurant |
| `/confirm` | Submission confirmation page |

## 🛠️ Tech Stack

- HTML5
- CSS3
- Node.js
- Express.js
- EJS
- Nodemon

## 📌 Requirements

- Node.js installed on your machine
- Dependencies already declared in `package.json`

The project already includes:

```json
{
	"main": "app.js",
	"scripts": {
		"start": "nodemon app.js"
	},
	"dependencies": {
		"express": "^5.2.1",
		"ejs": "^3.1.10"
	},
	"devDependencies": {
		"nodemon": "^3.1.14"
	}
}
```

## 🚀 How to Run

1. Install dependencies from `package.json`: `npm install`
2. Start the project: `npm start`
3. Open `http://localhost:3001`

## 📦 Project Structure

- `app.js` — Express server and routes
- `view/` — EJS views and partials
- `public/` — CSS and client-side scripts
- `data/restaurant.json` — Local restaurant storage

## 🛣️ Roadmap

- **v1.0** ✅ — Static HTML/CSS frontend
- **v2.0** ✅ — Node.js + Express.js + EJS + local JSON storage
- **v3.0** 🔜 — Improvements to validation, styling, and data handling