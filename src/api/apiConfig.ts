import axios from "axios";
import { HOST_API } from "./apiUrl";

//Auth api
export const authApi = axios.create({
  baseURL: HOST_API,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

authApi.interceptors.request.use(
  async function (options) {
    return options;
  },
  function (error) {
    return Promise.reject(error);
  }
);

authApi.interceptors.response.use(
  async function (options) {
    return options;
  },
  function (error) {
    // if (error?.response?.status == 503) {
    // }
    // if (error?.response?.status == 500) {
    //   window.location.href = "/500";
    // }
    return Promise.reject({ error, data: error.response.data });
  }
);

//Authorized api
export const daApi = axios.create({
  baseURL: HOST_API,
  // timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

daApi.interceptors.request.use(
  async function (options) {
    options.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
    return options;
  },
  function (error) {
    return Promise.reject(error);
  }
);

daApi.interceptors.response.use(
  async function (response) {
    if (response?.status == 401 || response?.status == 403) {
    }
    if (response?.status == 500) {
    }
    return response;
  },
  async (error) => {
    if (error?.response?.status == 503) {
    }
    if (error?.response?.status == 500) {
    }
    if (error.response?.status == 401) {
    }
    if (error.response?.status == 403) {
    }
    return Promise.reject({ error, data: error.response.data });
  }
);

//Authorized api
export const daImageUploadApi = axios.create({
  baseURL: HOST_API,
  // timeout: 30000,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

daImageUploadApi.interceptors.request.use(
  async function (options) {
    options.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
    return options;
  },
  function (error) {
    return Promise.reject(error);
  }
);

daImageUploadApi.interceptors.response.use(
  async function (response) {
    if (response?.status == 401 || response?.status == 403) {
    }
    if (response?.status == 500) {
    }
    return response;
  },
  function (error) {
    if (error?.response?.status == 503) {
    }
    if (error?.response?.status == 500) {
    }
    if (error.response?.status == 401) {
    }
    if (error.response?.status == 403) {
    }
    return Promise.reject({ error, data: error.response.data });
  }
);
