import bcrypt from 'bcrypt';

const saltRounds = 10;

const plainPassword = 'mySuperSecretPassword';
const inputPassword = 'userEnteredPassword';

bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
      console.error('Error generating salt:', err);
  } else {
    bcrypt.hash(plainPassword, salt, (err, hash) => {
      if (err) {
        console.error('Error hashing password:', err);
      } else {
        console.log('Hashed Password:', hash);

        const storedHash = hash;

        bcrypt.compare(inputPassword, storedHash, (err, result) => {
          if (err) {
            console.error('Error comparing passwords:', err);
          } else if (result) {
            console.log('Password matches!');
          } else {
            console.log('Password does not match!');
          }
        });
      }
    });
  }
});
