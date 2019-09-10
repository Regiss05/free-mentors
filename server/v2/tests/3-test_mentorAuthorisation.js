import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
describe('Mentor settings', () => {
  it ('mentor accept request', (done) => {
    chai.request(app)
      .patch('/api/v1/sessions/1/accept')
      .send({
        sessionId: 1
      })
      .end((err, res) => {
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.have.an('object');
        done();
      });
  });

  it ('mentor reject request', (done) => {
    chai.request(app)
      .patch('/api/v1/sessions/1/reject')
      .send({
        sessionId: 1
      })
      .end((err, res) => {
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.have.an('object');
        done();
      });
  });
});
