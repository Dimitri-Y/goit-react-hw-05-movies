import axios from 'axios';
const BaseURL = 'https://api.themoviedb.org/3';
const APIKEY = '00cb515606c3767771985834ed87ee26';
const TrendURL = `${BaseURL}/trending/all/day`;
const SearchURL = `${BaseURL}/search/movie`;
const DetailsURL = `${BaseURL}/movies/get-movie-details`;
const CreditsURL = `${BaseURL}/movies/get-movie-credits`;
const ReviewsURL = `${BaseURL}/movies/get-movie-reviews`;

const fetchRequest = async (condition, { searchQuery, page }) => {
  let RequestURL = '';
  switch (condition) {
    case 'trend':
      RequestURL = TrendURL + `?api_key=${APIKEY}&page=${page}`;
      break;
    case 'search':
      RequestURL =
        SearchURL + `?api_key=${APIKEY}&page=${page}&query=${searchQuery}`;
      break;
    case 'details':
      RequestURL = DetailsURL + `?api_key=${APIKEY}&${page}`;
      break;
    case 'credits':
      RequestURL = CreditsURL + `?api-key=${APIKEY}&${page}`;
      break;
    case 'reviews':
      RequestURL = ReviewsURL + `?api-key=${APIKEY}&${page}`;
      break;
    default:
      break;
  }
  const response = axios.get(RequestURL);
  console.log(RequestURL);
  return response;
};
export default fetchRequest;
