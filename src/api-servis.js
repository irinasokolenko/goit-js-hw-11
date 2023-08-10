import axios from "axios";

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.PER_PAGE = 40;
  }
  async fetchGallery() {
    const axiosOptions = {
      method: 'get',
      url: 'https://www.istockphoto.com/en/search/2/image?mediatype=photography&phrase=animal+cat&utm_source=pixabay&utm_medium=affiliate&utm_campaign=ADP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fanimal-cat-mammal-feline-pet-fur-8165466%2F&utm_term=animal+cat',
      params: {
        key: '34523545-f21683fd59bfc3e4e2549fe07',
        q: `${this.searchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: `${this.page}`,
        per_page: `${this.PER_PAGE}`,
      },
    };
    try {
      const response = await axios(axiosOptions);

      const data = response.data;

      this.incrementPage();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  resetEndOfHits() {
    this.endOfHits = false;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}