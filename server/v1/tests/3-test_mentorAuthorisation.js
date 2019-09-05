// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../../../app';

// chai.use(chaiHttp);

// describe ('responser mentor', (done) => {
//   chai.request(app)
//     .patch('/api/v1/:sessionId/accept')
//     .send({
//       sessionId: 1
//     })
//     .end((err, res) => {
//       chai.expect(res.status).to.equal(200)
//       chai.expect(res.body).to.have.an('object')
//       chai.expect(res.body).to.have.property('message')
//       done();
//     });
// });