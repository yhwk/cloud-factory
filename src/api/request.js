function request (req) {
  try {
    return new Promise((resolve, reject) => {
      wx.request ({
        url: req.url,
        data: req.data,
        // header: header,
        method: req.method,
        success: (res) => {
          if (res.data.code == 0 || res.data.status == 0) {
            resolve(res.data)
          } else {
          }
        },
        fail: (res) => {
          reject
        }
      })
    })
  } catch (error) {
    throw error
  }
}

export default request
