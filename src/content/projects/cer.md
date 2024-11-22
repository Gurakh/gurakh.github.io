---
title: "Caisse d'épargne Riviera"
subtitle: "fullstack, astro, tinacms"
website: "https://www.cer.ch"
order: 3
---

![Site CER](../../assets/cer.jpeg)

The Caisse d'Épargne Riviera is an independant bank based in Vevey and Montreux. I was one of the main developer for this project at Antistatique, working on the frontend and the backend.

## Challenges

As the first project done in Astro.js it was really interesting to discover its potential and to minimize the quantity of shipped JavaScript to the client. On the website, only one page uses a React component and therefore needs JS but all the other pages, animations and interactions are done without it.<br><br>

For the backend part, as the website wouldn't need frequent updates, we used TinaCMS only in local to structure and write all needed content, which was then stored as Markdown (MDX) directly in the repository. Since there is small differences in how the content needs to be typed between Astro and Tina (like references to other contents), we relied extensively on Zod to validate the data and transform it if necessary for Astro to understand it all.

## Stack

- Astro.js | React
- TypeScript
- Zod
- Tailwind CSS
- TinaCMS
