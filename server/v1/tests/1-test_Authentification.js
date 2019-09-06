import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);

describe('login', () => {

  it('should have 401 as status when incorrect data', (done)=>{
    chai.request(app)
      .post('/api/v1/signin')
      .send({
        email: 'wrongInput@gmail.com',
        password: '321'
      })
      .end((err, res)=>{
        chai.expect(res.status).to.equal(401);
        chai.expect(res.body).to.be.an('object');
        chai.expect(res.body).to.have.property('message');
        done();
      });
  })
  
  it('should have 200 as status when correct data', (done)=>{
    chai.request(app)
      .post('/api/v1/signin')
      .send({
        email: 'lenovo@lemoisson.com',
        password: 'rec'
      })
      .end((err, res)=>{
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body.data.email).to.equal('lenovo@lemoisson.com');
        done();
      });
  })
});

describe('singup', () => {

  it('should have 201 as status when user account created', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .send({
        firstName: 'kikombe',
        lastName: 'registe',
        email: 'goodPass@gmail.com',
        password: 'pol'
      })
      .end((err, res) => {
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).to.have.an('object')
        done();
      });
  });

  it('should have 409 as status when email already exist', (done) => {
    chai.request(app)
      .post('/api/v1/signup')
      .send({
        email: 'lenovo@lemoisson.com',
      })
      .end((err, res) => {
        chai.expect(res.status).to.equal(409);
        chai.expect(res.body).to.have.property('message');
        done();
      })
  });
});