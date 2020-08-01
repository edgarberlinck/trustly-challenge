import chai from 'github-webscrap/config/tests/chai'
import { validateRepositoryURL } from 'github-webscrap/modules'

const { assert } = chai

describe('Input Valdation Tests', () => {
    it('Should understand a valid URL repository', () => {
        assert.isFulfilled(validateRepositoryURL('https://github.com/edgarberlinck/trustly-challenge'))
    })
})
