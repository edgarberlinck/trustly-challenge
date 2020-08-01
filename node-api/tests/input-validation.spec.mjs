import chai from 'github-webscrap/config/tests/chai'
import { validateRepositoryURL, checkRepositoryStatus } from 'github-webscrap/modules'

const { expect, assert } = chai

describe('Input Valdation Tests', () => {
  describe('Url pattern', () => {
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

  describe('Url accessibility', () => {
    it('Should accept a valid and accessible URL', async () => {
      const url = validateRepositoryURL('https://github.com/edgarberlinck/trustly-challenge')
      const response = await checkRepositoryStatus(url)
      expect(response).to.be.equal(true)
    })

    it('Should not accept privates repositories', () => {
      const url = validateRepositoryURL('https://github.com/edgarberlinck/bk-ecomerce')
      const response = checkRepositoryStatus(url)
      assert.isRejected(response)
    })

    it('Should not accept private repositories', () => {
      const url = validateRepositoryURL('https://github.com/edgarberlinck/invalid-repository')
      const response = checkRepositoryStatus(url)
      assert.isRejected(response)
    })
  })
})
