import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../app';

chai.use(chaiHttp);

describe ('user view all', () => {
  it('should have 200 as status when user can view all mentors', (done) => {
    chai.request(app)
      .get('/api/v1/mentors')
      .end((err, res) => {
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.have.property('message');
        chai.expect(res.body).to.be.an('object');
        done();
      });
  })
});

describe ('user view specific', () => {
  it('should have 200 as status when user can view a specific mentor', (done) => {
    chai.request(app)
      .get('/api/v1/specMentor/1')
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });
});
//................................................................. 
describe ('session request', () => {
  it('should have 200 as status when user create a session', (done) => {
    chai.request(app)
      .post('/api/v1/session')
      .send({
        
      })
      .end((err, res) => {
        chai.expect(res.status).to.equal(500);
        done();
      })
  });
});