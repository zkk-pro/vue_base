import http from "./http";

// xxx
export function get(params) {
  return http("url", { params });
}
