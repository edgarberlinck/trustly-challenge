import chai from 'github-webscrap/config/tests/chai'
import { validateRepositoryURL } from 'github-webscrap/modules'

const { expect } = chai

describe('Input Valdation Tests', () => {
  it('Should understand a valid URL repository', () => {
    expect(validateRepositoryURL('https://github.com/edgarberlinck/trustly-challenge'))
      .to.be.not.equal(null)
  })

  it('Should reject an URL with domain doferent from github', () => {
    expect(validateRepositoryURL('https://bitbucket.com/edgarberlinck/trustly-challenge'))
      .to.be.equal(null)        
  })

  it('Should reject an github URL without url path', () => {
    expect(validateRepositoryURL('https://github.com'))
      .to.be.equal(null)
  })
})
