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
observer.observe(document.querySelector('#image2'));
observer.observe(document.querySelector('#image3'));
observer.observe(document.querySelector('#image4'));
observer.observe(document.querySelector('#image5'));
observer.observe(document.querySelector('#image6'));
observer.observe(document.querySelector('#image7'));
observer.observe(document.querySelector('#image8'));
observer.observe(document.querySelector('#image9'));
observer.observe(document.querySelector('#image10'));
observer.observe(document.querySelector('#image11'));
observer.observe(document.querySelector('#image12'));
observer.observe(document.querySelector('#image14'));
observer.observe(document.querySelector('#image15'));
observer.observe(document.querySelector('#image16'));
observer.observe(document.querySelector('#image17'));
observer.observe(document.querySelector('#image18'));
observer.observe(document.querySelector('#image19'));
observer.observe(document.querySelector('#image20'));
observer.observe(document.querySelector('#image21'));
observer.observe(document.querySelector('#image22'));
observer.observe(document.querySelector('#image23'));
observer.observe(document.querySelector('#image24'));
observer.observe(document.querySelector('#image25'));
observer.observe(document.querySelector('#image26'));
observer.observe(document.querySelector('#image27'));
