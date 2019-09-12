import { comparePassword } from '../helpers/hashPassword';
import { deleteTestUser } from '../models/Queries';
import pool from '../config/dbConfig';
import createToken from '../middlewares/createToken';
import responseFormatter from '../helpers/responseFormatter';

export default function deleteUser(req, res) {

  pool.query(deleteTestUser())
    .then((result) => {
     console.log(result);
    }).catch(err => {
console.log(err);
    })
}

