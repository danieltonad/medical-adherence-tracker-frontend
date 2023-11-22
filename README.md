<div align="center">
<a href="https://github.com/vidder5/"><img src="./public/logo.png" width="60px"></a>
</div>

<div align="center">
<h1>Vidder5</h1>
<p>A medication tracking system</p>
</div>

## Run Locally

Follow the steps to run this project locally:

```bash
git clone https://github.com/vidder5/medical-adherence-tracker-frontend.git

cd medical-adherence-tracker-frontend

npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

- UI is built with [Nextjs](https://nextjs.org/docs/) and [TypeScript](https://www.typescriptlang.org/)
- Styling is handled by [Tailwind CSS](https://tailwindcss.com/docs/utility-first)

## Folder Structure

```bash
app/
├── components/ (components)/
│   ├── global (components that appear on every page)
│   ├── pages (components for page sections)
│   └── shared (components used in multiple files)
├── dashboard/ (dashboard pages)
├── data/ (local js/json objects)
├── utils/ (reusable functions)
├── globals.css (main css file)
├── layout.tsx (app root)
└── page.tsx (home page)
public/ (asset files)
redux/ (state management)
```
