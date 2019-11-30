export function getItems() {
  return fetchItems()
}

export function postItem(data) {
  return fetchItems({ method: 'POST', data })
}

export function patchItem(id, data) {
  return fetchItems({ method: 'PATCH', id, data })
}

function fetchItems({ method = 'GET', id = '', data } = {}) {
  return fetch('/items/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}