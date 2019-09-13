import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import { deleteTestUser,  deleteSessions } from '../models/queries';
import createToken from '../middlewares/createToken';
import pool from '../config/dbConfig';

chai.use(chaiHttp);
describe('Mentor settings', () => {
  it ('mentor accept request', (done) => {
    chai.request(app)
      .patch('/api/v2/sessions/1/accept')
      .set('Authorization', createToken('goodpass@gmail.com', true))
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
      .patch('/api/v2/sessions/1/reject')
      .set('Authorization', createToken('goodpass@gmail.com', true))
      .send({
        sessionId: 1
      })
      .end((err, res) => {
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.have.an('object');

        pool.query(deleteTestUser()).then(res =>{
        pool.query(deleteSessions());
        });
        
        done();
      });
  });
});
