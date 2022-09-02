const { encrypt, decrypt } = require('./cryptor');

const hash = encrypt(Buffer.from('Hello', 'utf8'));
console.log(hash);

const text = decrypt(hash);
console.log(text);