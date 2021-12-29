var CryptoJS = require('crypto-js')

const PasswordEncryptDecrypt=(cipher)=>{
    //Encrypt
    var ciphertext = CryptoJS.AES.encrypt(cipher, 'iwannabecomeagoodwebdeveloper').toString();
    console.log(' The Encrypted Code is:      ', ciphertext)

    // Decrypt
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'iwannabecomeagoodwebdeveloper');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log(' THe Decrypted text is:       ', originalText);
    
    
//     var encryptedText = CryptoJS.AES.encrypt(cipher,'iamawebdeveloper')
//     encryptedText= encryptedText.toString()
//     console.log('our encrypted text is:', encryptedText )
}

var text = PasswordEncryptDecrypt('Lets Celebrate The New Year Together & Forever')


// const Encrypt=(cipher)=>{
//     var encryptedText = CryptoJS.AES.encrypt(cipher,'iwannabecomeagoodwebdeveloper')
//     encryptedText= encryptedText.toString()
//     console.log('our encrypted text is:', encryptedText )
// }

// const Decrypt=(print)=>{
//     var decryptedText= CryptoJS.AES.decrypt(print,'iwannabecomeagoodwebdeveloper')
//     decryptedText=decryptedText.toString(CryptoJS.enc.Utf8)
//     // console.log('our decrypted text is:', decryptedText)
//     return decryptedText
// }

// var text=Encrypt('hello world ')
// var dcrpt=Decrypt(text)
