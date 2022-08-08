import axios from "axios";

export const cancelTokenSource = axios.CancelToken.source();

const isLocalHost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const API_URL = isLocalHost
  ? "http://localhost:8000"
  : "https://personal-page-jennifer.herokuapp.com";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  cancelToken: cancelTokenSource.token,
});

