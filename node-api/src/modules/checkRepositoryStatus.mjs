import http from 'http'
import https from 'https'

export default function (url) {
  try { 
    return new Promise (function (resolve, reject) {
      const { host, path, protocol } = url
      const requestMethod = protocol === 'https:' ? https.request : http.request
      const req = requestMethod({ method: 'HEAD', host, path })
      
      req.end()
      req.on('response', ({statusCode}) => {
        if (statusCode === 200) {
          resolve(true)
        } else {
          reject('Invalid git repository: No existis or is private')
        }
      })
    })
  } catch {
    throw new Error('Could not connect to the provided URL.')
  }
}