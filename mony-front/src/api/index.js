const initialPath = '/api'

const fetchData = (method, data) => { 
  const headers = {
    method: method,
    headers:{
      'Content-Type': 'application/json'
    }
  }
  return data ? {...headers, body: JSON.stringify(data)} : headers
}

const doFetch = async (method, path, data) => {
  let resp
  try {
    resp = await fetch(initialPath+path, fetchData(method, data))
    return await resp.json()
  } catch (e) {
    // eslint-disable-next-line
    console.log(`ERROR en get.\n   Path: ${path}\nStacktrace: `, e)
  }
}

const post = async (path, data) => {
  return await doFetch('POST', path, data)
}

const get = async (path) => {
  return await doFetch('GET', path)
}

const handleError = async (accion, mensaje) => { 
  try {
    return await accion()
  } catch (error) {
    // eslint-disable-next-line   
    console.log(mensaje, error)
  }
}

const api = {
  seed: async () => {
    return handleError(
      async () => {
        post('/ceco', {ceco: {titulo: 'Auto'}})
        post('/ceco', {ceco: {titulo: 'Nafta'}})
        post('/ceco', {ceco: {titulo: 'Seguro'}})
        post('/ceco', {ceco: {titulo: 'Cochera'}})
        post('/ceco', {ceco: {titulo: 'Patente'}})
        post('/ceco', {ceco: {titulo: 'Casa'}})
      },
      `Error al guardar ceco.\nStackTrace: `
    )
  },
  cecos: async () => {
    return await handleError(
      async () => {
        return get('/cecos')
      },
      `Error al obtener cecos.\nStackTrace: `
    )
  },
  postGasto: async (gasto, cecoId) => {
    return handleError(
      () => post('/gasto', {gasto: {costo: gasto}, cecoId}),
      `Error al postear gasto con cecoId: ${cecoId} y gasto: ${gasto}.\nStackTrace: `
    )
  },
}

export default api
