import Cookie from 'js-cookie'

function setItem(key, value) {
  if (process.client) localStorage.setItem(key, value)
  Cookie.set(key, value)
}

function getItem(key) {
  let item = null
  if (process.client) item = localStorage.getItem(key)

  item ??= Cookie.get(key)

  return item
}

function getItemFromCookie(cookie, selectedKey) {
  const itemCookie = cookie
    .split(';')
    .find((key) => key.trim().startsWith(selectedKey + '='))

  return itemCookie?.split?.('=')?.[1] || null
}

const persistency = { setItem, getItem, getItemFromCookie }

export { persistency }
