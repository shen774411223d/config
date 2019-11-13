
export const setBaseMsg = function(payload) {
  return {
    type: 'SET_BASE_MSG',
    payload
  }
}

export const setBaseNum = function(payload) {
  return {
    type: 'SET_BASE_NUM',
    payload
  }
}

const fetchMsg = (payload) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(payload), 1000)
  })
}

export const fetchBaseMsg = function(payload) {
  return async (dispatch) => {
    return fetchMsg(payload).then(result => {
      dispatch(setBaseMsg(result))
      return result
    })
  }
}