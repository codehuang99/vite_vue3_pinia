import request from "../index.js";

export function getCityAll() {
  return request.get("/city/all");
}
