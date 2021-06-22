const cipher = {

  encode: function (offset, string) {
    let encodeText = '';
    let encrypt;
    if (offset == '' || offset == null || string == '' || string == null) {
      throw TypeError('Entrada inválida!', 'cipher.js');
    }

    for (let i = 0; i < string.length; i++) {
      let stringASC = string.charCodeAt(i);

      if (stringASC >= 65 && stringASC <= 90) {
        encrypt = ((stringASC - 65 + offset) % 26 + 65);
        encodeText += String.fromCharCode(encrypt);
      }
      else if (stringASC >= 97 && stringASC <= 122) {
        encrypt = ((stringASC - 97 + offset) % 26 + 97)
        encodeText += String.fromCharCode(encrypt);
      }
      else if (string.charCodeAt(i) == 32 || string.charCodeAt(i) == 44) {
        encodeText += string.charAt(i);
      }
    } return encodeText;
  },

  decode: function (offset, string) {
    let decodeText = '';
    let decrypt;
    if (offset == '' || offset == null || string == '' || string == null) {
      throw new TypeError('Entrada inválida!', 'cipher.js');
    }

    for (let i = 0; i < string.length; i++) {
      let stringASC = string.charCodeAt(i);

      if (stringASC >= 65 && stringASC <= 90) {
        let decrypt = ((stringASC - 90 - offset) % 26 + 90);
        decodeText += String.fromCharCode(decrypt);
      }
      else if (stringASC >= 97 && stringASC <= 122) {
        decrypt = ((stringASC - 122 - offset) % 26 + 122);
        decodeText += String.fromCharCode(decrypt);
      }
      else if (string.charCodeAt(i) == 32 || string.charCodeAt(i) == 44) {
         encodeText += string.charAt(i);
      }
    } return decodeText;
  }
}
export default cipher;