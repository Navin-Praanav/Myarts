# [Myarts](https://main--musical-faun-272f6f.netlify.app/)
 
 
CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Technologies
 * Project Description
   * Intro Page
   * Material Used
   * Gallery
   * My Other Drawings
* To Be Noted


INTRODUCTION
------------

  Hi 👋, Myself Navin Praanav and I made this blog to show my drawings.
  
  
TECHNOLOGIES
------------

A list of technologies used within the project:
* [HTML](https://en.wikipedia.org/wiki/HTML) 
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JAVASCRIPT](https://en.wikipedia.org/wiki/JavaScript)
  * [SROLL MAGIC](https://scrollmagic.io/)


PROJECT DESCRIPTION
------------

### INTRO PAGE
  This page of content is all about myself and my drawing career.
  
  ![image](https://user-images.githubusercontent.com/91049629/177570238-9d341558-7bd1-40ef-ab5c-f389847cc684.png)

  
### MATERIAL USED
  This page of content mainly focuses on different types of materials used by me.
  
  ![image](https://user-images.githubusercontent.com/91049629/177571287-544207c7-5320-4fc4-b493-fdfce8317ee4.png)

### GALLERY
  This page of content displays my master pieces.
  
  ![image](https://user-images.githubusercontent.com/91049629/177571409-785ef03a-ec27-4697-81df-edd53b1581c7.png)
  
### MY OTHER DRAWINGS
  This page of content my entire collection of my artworks.
  
  ![image](https://user-images.githubusercontent.com/91049629/177571536-fa74a115-9c6a-426c-8a8e-816051af825e.png)
  

TO BE NOTED
------------

### Used ScrollMagic
  ScrollMagic is a tool used for achieving on scroll animation.It is used with javascript.
  
  
### Implemented Lazy loading Concept
  Lazy loading is a strategy to identify resources as non-blocking (non-critical) and load these only when needed. It's a way to shorten the length of the critical rendering path, which translates into reduced page load times.
  ```javascript
    let options= {
    root: null,
    rootMargin:'0px',
    threshold:0.20
    };
    let callback = (entries,observer)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting && entry.target.className ==='test')
            {
                let imageUrl= entry.target.getAttribute('data-img');
                if(imageUrl)
                {
                    entry.target.src=imageUrl;
                    observer.unobserve(entry.target);
                }
            }
        });
    }
    let observer =new IntersectionObserver(callback, options)
    observer.observe(document.querySelector('#image1'));
    .
    .
    .
    observer.observe(document.querySelector('#imageN'));
  ```
