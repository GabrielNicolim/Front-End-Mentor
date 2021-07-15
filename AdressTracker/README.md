# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0)
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

![View](public/design/desktop-preview.jpg)

### Links

- Solution URL: [AdressTracker](https://gabrielnicolim.github.io/AdressTracker/)

## My process
### Built with

- Semantic HTML5 markup
- SCSS
- JQuery 
- JavaScript

### What I learned

```js
    try {
        var response = await getInfo()
    } catch (ex) { 
        console.log(ex);
        alert(ex.responseJSON.messages);
        return;
    }
```

```js
    // Regex for IPv4 and IPv6

    const validRegIPv4 = /^[0-9]{1,3}(\.[0-9]{1,3}){3}$/;
    const validRegIPv6 = /^[0-9a-fA-F:]+$/;
```

## Author

- Frontend Mentor - [@GabrielNicolim](https://www.frontendmentor.io/profile/GabrielNicolim)
