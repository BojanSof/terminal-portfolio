# 💻 Terminal Portfolio

Terminal Portfolio is as the name suggests a terminal-themed portfolio showcasing a bit about myself and my projects.
It's lightning-fast featuring nearly perfect Lighthouse Scores and clean UI and good UX.

On Desktop the portfolio items will be displayed with Winbox instances allowing users to resize, move and treat them as separate instances of 'terminal'.
On Mobile, the portfolio items will be displayed as static sites generated by Gatsby for better User Experience and window controls of the device.

<p align="center">
    <a href="https://kielx-portfolio.netlify.app/">View Live</a>
    ·
    <a href="https://github.com/Kielx/terminal-portfolio/issues">Found a Bug</a>
    ·
    <a href="https://github.com/Kielx/terminal-portfolio/issues">Request Feature</a>
  </p>
</p>

![App Screenshot](https://raw.githubusercontent.com/Kielx/terminal-portfolio/master/static/PortfolioSS.png "Screenshot of app")

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
    </li>
    <li><a href="#usage">Usage</a>
    <ul>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#colors-and-styling">Colors and styling</a></li>
      <li><a href="#gatsby-config">Gatsby config</a></li>
    </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Built With

* [React](https://reactjs.org/)
* [Gatsby](https://www.gatsbyjs.com/)
* [Winbox.js](https://github.com/nextapps-de/winbox)
* [AWS API Gateway / Lambda Functions](https://aws.amazon.com/) - For contact form.

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the terminal portfolio

   ```sh
   git clone https://github.com/Kielx/terminal-portfolio.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
## Usage

Now that the portfolio is installed you can run it locally and make it your own. Where do you start?

### Projects

The list of projects and mini-projects are generated automatically by Gatsby from markdown files in this folder. Set up the list of your projects by opening ```/src/markdown-pages/``` projects folder. Next, you should delete all of my projects while leaving one .md file as a template. Then update it accordingly:

```markdown
/* src/markdown-pages/projects/your-project-name.md */
---
slug: "projects/country-quiz"
nameOfClass: "projects-items"
title: "Country Quiz"
listName: "🌎 /Country Quiz"
popupImageSrc: "country-quiz.webp"
popupImageAlt: "Country Quiz screenshot"
popupLiveLink: "https://country-quiz.pantak.net/"
popupGithubLink: "https://github.com/Kielx/country-quiz"
techIcons: [
        "react",
        "html5",
        "css3",
        "tailwindcss",
      ]
---

The project description goes here.
```

This is the frontmatter of the .md file. The rendered project will display information based on the contents of this part of .md file.

* Slug is the link that Gatsby will generate for the page.
* nameOfClass is the class name of the item in the project's lits. I've split projects into two lists - projects-items and mini-projects. If you would like to add a new project you can stick with projects-items if you want it to be a mini-project just add mini-project to the class name like this `nameOfClass: "projects-items miniProjects"`.
* title - The title of the project that will be displayed inside Window
* List name - the name that will be displayed in the main terminal window
* popupImageSrc - the image that will be displayed in the popup window. It should be an image that is inside the `/static` folder.
* techIcons - an array of tech icons that will be displayed in popup window. Just add slugs of technologies that you want from [Simple Icons Slugs](https://github.com/simple-icons/simple-icons/blob/develop/slugs.md)

The second part of .md file contains a description that you can provide for your project as you see fit.

### About

The same rules as for projects apply to the about page.

### Colors and styling

Changing colors couldn't be easier. Just adjust colors in `/src/styles/styles.scss` file.
The default theme is black so update the colors as you see fit.

```scss
/* src/styles/styles.scss */
:root {
  --primaryText: #ffc600;
  --secondaryText: #ccc;
  --linkText: #047be3;
  --bg: #1b2d3a;
  --windowBg: #193549;
  --focusBg: hsl(205, 51%, 16%);
  --borderColor: black;
}
```

All colors should be self-explanatory except for:

* bg - this is the color of the outer background
* windowBg - this is the color of displayed windows
* focusBg - the color of focused window title bars

### Gatsby config

You should update file `/gatsby-config.js` to match your project. You should change `siteMetada` and `gatsby-plugin-manifest` where you should provide an icon for PWA that should be included in `src/images/your-image.jpg`

<!-- LICENSE -->
## License

Distributed under MIT License. See `LICENSE` for more information.

## Acknowledgments

Idea inspiration by [Brad Traversy Terminal Style Landing Page](https://www.youtube.com/watch?v=jQCk2yo10YY)
Dark color theme inspired by [Cobalt2 Theme Official by Wes Bos](https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2)
Light color theme inspired by [Solarized Light](https://en.wikipedia.org/wiki/Solarized_(color_scheme)2)
Icons from [Simple Icons](https://github.com/simple-icons/simple-icons) and [Font Awesome](https://fontawesome.com/)

<!-- CONTACT -->
## Contact

Kielx.dev@gmail.com
<!-- MARK
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzc5ODUwNjQ3XX0=
-->
