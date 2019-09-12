import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import createToken from '../middlewares/createToken';


chai.use(chaiHttp);

describe('singup', () => {

  it('should have 201 as status when user account created', (done) => {
    chai.request(app)
      .post('/api/v2/signup')
      .send({
        firstName: 'rams',
        lastName: 'registe',
        email: 'goodpass@gmail.com',
        password: 'pol',
        isAdmin: 'false'
      })
      .end((err, res) => {
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).to.have.an('object')
        done();
      });
  });

  it('should have 409 as status when email already exist', (done) => {
    chai.request(app)
      .post('/api/v2/signup')
      .send({
        firstName: 'kikombe',
        lastName: 'registe',
        email: 'goodpass@gmail.com',
        password: '15423',
        isAdmin: 'true'
      })
      .end((err, res) => {
        chai.expect(res.status).to.equal(409);
        chai.expect(res.body).to.have.property('message');
        done();
      })
  });
});
describe('login', () => {

  it('should have 401 as status when incorrect data', (done)=>{
    chai.request(app)
      .post('/api/v2/signin')
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
      .post('/api/v2/signin')
      .send({
        email: 'goodpass@gmail.com',
        password: 'pol'
      })
      .end((err, res)=>{
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body.data.email).to.equal('goodpass@gmail.com');
        done();
      });
  })
});

describe('Admin', () => {
  it ('should have 200 when change user to mentor', (done) => {
    chai.request(app)
    .patch('/api/v2/adminChange/4')
    .set('Authorization', createToken('goodpass@gmail.com',true))
    .end((err, res) => {
      chai.expect(res.status).to.equal(200);
      chai.expect(res.body).to.be.an('object');
      chai.expect(res.body).to.have.property('message');
      (done);
    }); 
  });
});

