# Space Junk

url: https://www.spacejunk.me

Space Junk is a collection of widgets designed to display interesting space information from various APIs. I built it partly because I love all things space, but mostly to practice working with sass, retrieving and manipulation data from APIs, and writing custom hooks. More widgets to come!

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Sass](https://sass-lang.com/) - Created mixins and variables to make styling quick and scalable
- [CSS modules](https://github.com/css-modules/css-modules) - Styling is broken down and scoped to each individual component.
- deployed to [Netlify](https://www.netlify.com/)

### Other libraries

- [React Medium Image Zoom](https://www.npmjs.com/package/react-medium-image-zoom) - The original medium.com-inspired image zooming library for React.

- [Classnames](https://www.npmjs.com/package/classnames) - A simple JavaScript utility for conditionally joining classNames together.

- [Framer-Motion](https://www.npmjs.com/package/framer-motion) - An open source motion library for React, made by Framer.

- [React-Icons](https://react-icons.github.io/react-icons/) - Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.

- [React-Map-GL](https://visgl.github.io/react-map-gl/docs) - react-map-gl is a suite of React components designed to provide a React API for Mapbox GL JS-compatible libraries. More information in the online documentation.

## Widgets

### Astronomy Picture of the Day

This widget uses NASA's APOD API to display a fascinating image every day curated by actual astronomers. It also features a searchbar to see pictures from previous dates all the way back to its inception on July 16, 1995!

- [APOD API documentation](https://github.com/nasa/apod-api)

### Mars Rover Photos

Photos taken by the Mars Perseverence Rover updated daily. It uses NASA's Mars Rover Photos API and features a dropdown menu to query by the different cameras onboard the rover along with a searchbar to query by sol (Martian day).

- [Mars Rover API documentation](https://github.com/chrisccerami/mars-photo-api)

### ISS Tracker

An International Space Station tracker that gives you the real time position, speed, and altitude of the ISS updated every 3 seconds. The map is provided by the React-Map-GL library and Mapbox. ISS data is provided by the Where The ISS At? API.

- [React-Map-GL documentation](https://visgl.github.io/react-map-gl/docs)

- [Where The ISS At? documentation](https://wheretheiss.at/w/developer)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### James Webb Space Telescope

Uses the JWST API by [Kyle Redelinghuys](https://www.ksred.com/) to fetch paginated pages of raw pictures from the James Webb Telescope. A planned feature is to display finished images from the JWST.

[JWST API documentation](https://documenter.getpostman.com/view/10808728/UzQyphjT)
