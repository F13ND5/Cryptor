const { encrypt, decrypt } = require('./cryptor');

const hash = encrypt('hello');
console.log(hash);

const text = decrypt(hash);
console.log(text);
