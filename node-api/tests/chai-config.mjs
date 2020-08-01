import chai from 'chai'
import chaiHttp from 'chai-http'
import chaiJson from 'chai-json'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiHttp)
chai.use(chaiJson)
chai.use(chaiAsPromised)

export default chai
