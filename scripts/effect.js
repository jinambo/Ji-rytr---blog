let recentNews = document.querySelectorAll('.recent-new'); // get all elements with this class
let recentNewsContainer = document.querySelector('.recent-news'); // get it's container
let offset = document.querySelector('.header').offsetHeight + document.querySelector('.featured-news-container').offsetHeight + document.querySelector('.personal-ad').offsetHeight; // get height of each element upper recent news' container

window.addEventListener("scroll", function() { // add event listener for scrolling
    let scroll = this.scrollY; // get Y scroll

    if (scroll >= (offset - (window.innerHeight - 200))) { // if Y scroll is greather or equal to the offset - 300px do effect
        recentNews.forEach(recentNew => {
            recentNew.classList.add('slide-in-bottom');
        });
    } else {
        recentNews.forEach(recentNew => { // hide if scrolled to the top 
            recentNew.style.opacity = 0;
            recentNew.classList.remove('slide-in-bottom');
        });
    }
}); 


