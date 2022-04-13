let images = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3819/1163819-h-79a5abfea732                                         ", "https://cineynews.com/wp-content/uploads/2021/06/The-Avengers-2012-Review.jpeg", "https://www.heyuguys.com/images/2012/03/The-Avengers-banner-2.jpg", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1511/1161511-h-a103f5d4c916", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4226/1084226-h-7c2d08d39e53","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4621/1114621-h-9781e2d5b694","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9575/499575-h"]

let i = 0;
let id;

let img = document.createElement("img");

id = setInterval(function () {

    if (images.length === i) {
        i = 0;
    }

    img.src = images[i];
    document.querySelector("#slideshow").append(img);
    i++;

}, 1500);

// Create a database of movies of your choice. Each movie object will have properties like ‘name, release date, poster (add url of a poster), IMDb rating, etc.

// Create at least 9 movies object, push all of them as array items. Store the array in local storage with key 'movies'.

// Whenever the user visits index.html, show the movies in 3*3 grid ( 3 columns, 3 rows ).

let movieData = [
    { name: "Arjun Reddy", releaseDate: 2017, poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/700/600700-h", imdb: 9 },
    { name: "Khuda Haafiz", releaseDate: 2021, poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7436/747436-h", imdb: 7 },
    { name: "Hate Story 2", releaseDate: 2014, poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1713/1121713-h-ea93eeab5db6", imdb: 4 },
    { name: "Baaghi 3", releaseDate: 2020, poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6535/846535-h", imdb: 3 },
    { name: "Tadap", releaseDate: 2021, poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6715/1106715-h-7b88aaf59197", imdb: 3.5 },
    { name: "Shiddat", releaseDate: 2021, poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2068/1062068-h-54b155e41999", imdb: 4 },
    { name: "Atrangi Re", releaseDate: 2021, poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2937/1092937-h-c5a68e3db9f9", imdb: 2.5 },
    { name: "MS Dhoni: The Untold Story", releaseDate: 2016, poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h", imdb: 4.5 },
    { name: "Doctor Strange", releaseDate: 2016, poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4619/674619-h", imdb: 4 },
    { name: "Chhichhore", releaseDate: 2019, poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1331/641331-h", imdb: 4 },
    { name: "The Lion King", releaseDate: 2019, poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4600/674600-h", imdb: 3 },
    { name: "Shang-Chi", releaseDate: 2021, poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8720/1078720-h-125f68c67f48", imdb: 4 }
  
];


movieData.map(function (elem) {
    let div = document.createElement("div");
    div.setAttribute("class", "zoom");
    
    let name = document.createElement("h2");
    name.innerText = elem.name;

    let release = document.createElement("h2");
    release.innerText = "Release Year: " + elem.releaseDate;

    let poster = document.createElement("img");
    poster.src = elem.poster;

    let rating = document.createElement("h2");
    rating.innerText = "IMDb Rating: " + elem.imdb;

    div.append(poster, name, release, rating);
    document.querySelector("#movies").append(div);
})

document.querySelector("#sortLh").addEventListener("click", sortLh);
document.querySelector("#sortHl").addEventListener("click", sortHl);


function sortLh() {
    console.log("here");
    movieData.sort(function(a,b) {return a.imdb-b.imdb});

    document.querySelector("#movies").innerHTML = null;
    movieData.map(function (elem) {
        let div = document.createElement("div");
        div.setAttribute("class", "zoom");
        
        let name = document.createElement("h2");
        name.innerText = elem.name;
    
        let release = document.createElement("h2");
        release.innerText = "Release Year: " + elem.releaseDate;
    
        let poster = document.createElement("img");
        poster.src = elem.poster;
    
        let rating = document.createElement("h2");
        rating.innerText = "IMDb Rating: " + elem.imdb;
    
        div.append(poster, name, release, rating);
        document.querySelector("#movies").append(div);
    })
}

function sortHl() {
    console.log("here");
    movieData.sort(function(a,b) {return b.imdb-a.imdb});

    document.querySelector("#movies").innerHTML = null;
    movieData.map(function (elem) {
        let div = document.createElement("div");
        div.setAttribute("class", "zoom");
        
        let name = document.createElement("h2");
        name.innerText = elem.name;
    
        let release = document.createElement("h2");
        release.innerText = "Release Year: " + elem.releaseDate;
    
        let poster = document.createElement("img");
        poster.src = elem.poster;
    
        let rating = document.createElement("h2");
        rating.innerText = "IMDb Rating: " + elem.imdb;
    
        div.append(poster, name, release, rating);
        document.querySelector("#movies").append(div);
    })
}