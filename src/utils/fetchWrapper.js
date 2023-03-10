import getConfig from "next/config"

import { userService } from "../services"
import { URL } from "./constants"

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
  deleteBody: _deleteBody,
  patch,
  patchForm,
  putForm,
  postWithoutToken,
}

function get(url) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(url),
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function post(url, body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    body: JSON.stringify(body),
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function postWithoutToken(url, body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }
  return fetch(url, requestOptions)
}
function patchForm(url, body) {
  const requestOptions = {
    method: "PATCH",
    headers: { ...authHeader(url) },
    body: body,
  }
  return fetch(url, requestOptions)
}

function putForm(url, body) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(url) },
    body: body,
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function put(url, body) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    body: JSON.stringify(body),
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function patch(url, body) {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    body: JSON.stringify(body),
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function _delete(url) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(url),
  }
  return fetch(url, requestOptions).then(handleResponse)
}
function _deleteBody(url, body) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    body: JSON.stringify(body),
  }
  return fetch(url, requestOptions).then(handleResponse)
}

function authHeader(url) {
  const user = userService.userValue
  const isLoggedIn = user && user.token
  const isApiUrl = url.startsWith(URL)
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.token}` }
  } else {
    return {}
  }
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)

    if (!response.ok) {
      if ([401, 403].includes(response.status) && userService.userValue) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        userService.logout()
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}

function handleResponseForm(response) {
  return response.text().then((text) => {
    const data = text

    if (!response.ok) {
      // if ([401, 403].includes(response.status) && userService.userValue) {
      //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      //   userService.logout()
      // }

      const error = (data && data.message) || response.statusText
      console.error(`Fetch wrapper error: ${error}`)
      return Promise.reject(error)
    }

    return data
  })
}
