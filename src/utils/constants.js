// paths
export const HOME_PATH = '/';
export const SEARCH_PATH = '/search';
// api urls
export const PRODUCT_URL = '%5B%5B%3Ad+%3D+at%28document.id%2C+%22';
export const API_BASE_URL = 'https://wizeline-academy.cdn.prismic.io/api/v2';
export const PRODUCTS_URL = '%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&lang=en-us';
export const CATEGORIES_URL = '%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30';
export const SEARCH_URL = '%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bfulltext(document%2C%20%22';
export const FEATURED_URL = '%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16';
