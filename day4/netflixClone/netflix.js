const API_KEY = "8125db8f67d23da1d30f6063b1b794b8";
const base_url = "https://api.themoviedb.org/3";
const img_base_path = "https://image.tmdb.org/t/p/original";
const main = document.querySelector("main");
const headings = [
  "Netflix Originals",
  "Trending Now",
  "Top Rated",
  "Action Movies",
  "Comedy Movies",
  "Horror Movies",
  "Romantic Movies",
  "Documentaries",
];

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
async function getDataFromAPI(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

async function resolvePromises() {
  const finalData = await Promise.all(promises);
  console.log(finalData);
  showMovies(finalData);
}

function showMovies(data) {
  data.forEach((obj, index) => {
    const moviesWrapper = document.createElement("div");
    moviesWrapper.classList.add("moviesWrapper");

    const header = document.createElement("header");
    const h2 = document.createElement("h2");
    h2.innerHTML = headings[index];
    header.append(h2);
    moviesWrapper.append(header);

    const section = document.createElement("section");
    section.classList.add("section");

    obj.results.forEach((movie) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movieDiv");

      const poster = document.createElement("img");
      poster.classList.add("poster");
      poster.src = img_base_path + movie.poster_path;

      movieDiv.append(poster);
      section.append(movieDiv);
    });
    moviesWrapper.append(section);
    main.append(moviesWrapper);
  });
}

let promises = [];
for (let x in requests) promises.push(getDataFromAPI(base_url + requests[x]));

resolvePromises();
