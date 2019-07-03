let allFeaturedNews = document.querySelectorAll('.featured-new');
let allRecentNews = document.querySelectorAll('.recent-new');

function filterNews() {
    allFeaturedNews.forEach(featuredNew => {
        featuredNew.style.display = 'none';
    });

    /*
    allRecentNews.forEach(recentNew => {
        recentNew.style.cssText = 'display: none';
    });
    */
}


function selectElement(element) {
    let navbarElements = document.querySelectorAll('.header-navbar-content a'); // get all elements in navbar
    let thisElement = document.querySelector('.' + element); // get element with samenamed parameter as class

    navbarElements.forEach(navbarElement => { //remove class 'actived-alement' from every element 
        navbarElement.classList.remove('actived-element');
    });

    thisElement.classList.add('actived-element'); // add class 'actived-element' to selected element by function's parameter

    document.title = 'Jiří Šrytr | ' + element.toUpperCase(); // rename the title of page by function's parameter

    filterNews();

    let featuredNewElement = document.querySelector('.featured-new-' + element);
    let recentNewElement = document.querySelector('.recent-new-' + element); 

    featuredNewElement.style.display = 'block';
    //recentNewElement.style.cssText = 'display: block;';
}


