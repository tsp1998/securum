let SERVER_API, SERVER_URL;

if (process.env.NODE_ENV === "development") {
  SERVER_URL = "http://localhost:5000"
  SERVER_API = "http://localhost:5000/api"
} else {
  SERVER_URL = "https://securum.herokuapp.com"
  SERVER_API = "https://securum.herokuapp.com/api"
}

export {
  SERVER_API,
  SERVER_URL
}