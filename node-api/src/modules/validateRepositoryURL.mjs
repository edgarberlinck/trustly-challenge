import URL from 'url'

export default function (repositoryUrl) {
  try {
    const url = URL.parse(repositoryUrl)
    
    if (url.host !== 'github.com') {
      return null
    }

    if (!['http:', 'https:'].includes(url.protocol)) {
      return null
    }

    if (url.pathname === '/') {
      return null
    }
    
    return url
  } catch {
    return null
  }
    
}
