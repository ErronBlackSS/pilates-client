export const ENV = {
  API_URL: process.env.NODE_ENV === 'production' ? 'https://1216649-cu21564.tw1.ru:8080/api' : 'http://localhost:8080/api',
  REACT_APP_FILE_PATH: process.env.NODE_ENV === 'production' ? 'https://1216649-cu21564.tw1.ru:8080/files' : 'http://localhost:8080/files'
}