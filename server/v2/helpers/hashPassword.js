import bcrypt from 'bcrypt';

const saltRounds = 10;
export function hashPassword(password) {
  if (password) { return bcrypt.hashSync(password, saltRounds, (err, hash) => hash); }
  return undefined;
}

export function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash, (err, res) => res);
}