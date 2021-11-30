import axios from 'axios'

export const EnviornmentTypes = {
  DEV: "development",
  PROD: "production"
};
export const mode = process.env.NODE_ENV || EnviornmentTypes.DEV; //stage,dev,live
export const isProd = mode === EnviornmentTypes.PROD;
export const APP_URL = process.env.REACT_APP_CURRENT_APP_DOMAIN;
let data;
data = {
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT,
  DEFAULT_DATE_FORMAT: "LLL",
  BASE_URL: process.env.REACT_APP_IMG_BASE_URL,
};

export const AppConfig = data;

export const api = axios.create({
  baseURL: 'https://skin-sepia.herokuapp.com/api/v1',
  headers: {
    "Content-Type": "application/json",
  },
})
