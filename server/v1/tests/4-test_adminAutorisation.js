import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);

describe('Admin settings', () => {
  it('should have 200 as status when admin change user to mentor', (donne) => {
    chai.request(app)
      .patch('/api/v1/adminChange/1')
      .send({
        userId: 1
      })
  });
});