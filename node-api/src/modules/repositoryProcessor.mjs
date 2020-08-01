import https from 'https'

export default function (url) {
  // target element a.js-navigation-open
  // href
  // Se href termina com .alguma coisa eh um arquivo, caso contrario e uma pasta
  // /edgarberlinck/trustly-challenge/tree/master/node-api/tests
  // 1 - A request to raw content should return 200 if the path point to a file, otherwise 404
}

async function isDirectory (path) {
  const rawUrl = 'raw.githubusercontent.com'
  const status = await checkUrlStatus({ url: rawUrl, path: path.replace(/\/blob\//g, '') })
  return status !== 200
}

function checkUrlStatus (url) {
  return new Promise((resolve, reject) => {
    const { host, path } = url

    const req = https.request({ method: 'HEAD', host, path })
    req.end()

    req.on('response', ({statusCode}) => {
      resolve(statusCode)
    })
  })
}