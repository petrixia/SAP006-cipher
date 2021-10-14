const cipher = {

  encode: function encode(offset, string) {

    let message = ""
    let offsetNumber = parseInt(offset)

    if (typeof offsetNumber === "number" && typeof string === "string") {

      for (let i = 0; i < string.length; i++) {
        let crypt = string.charCodeAt(i)

        if (offsetNumber < 0) {
          offsetNumber = Math.abs(offsetNumber);
        }
        else if (crypt >= 34 && crypt <= 63) {
          crypt = ((crypt - 34 + offsetNumber) % 29  + 34);
        }
        else if (crypt >= 65 && crypt <= 90) {
          crypt = ((crypt - 65 + offsetNumber) % 26 + 65) ;
        }
        else if (crypt >= 97 && crypt <= 122) {
          crypt = ((crypt - 97 + offsetNumber) % 26 + 97) ;
        }
        else if (crypt >= 123 && crypt <= 254) {
          crypt = ((crypt - 123 + offsetNumber) % 131 + 123) ;
        }
        message += String.fromCharCode(crypt)
      }
      return message

    } else {
      throw new TypeError("Erro inesperado")
    }
  },

  decode: function decode(offset, string) {
    let message = ""
    let offsetNumber = parseInt(offset)

    if (typeof offsetNumber === "number" && typeof string === "string") {

      for (let i = 0; i < string.length; i++) {
        let decode = string.charCodeAt(i)

        if (offsetNumber < 0) {
          offsetNumber = Math.abs(offsetNumber);
        }
        else if (decode >= 34 && decode <= 63) {
          decode =  63 - ((63 - decode + offsetNumber) % 29);
        }
        else if (decode >= 65 && decode <= 90) {
          decode = 90 - ((90 - decode + offsetNumber) % 26);
        }
        else if (decode >= 97 && decode <= 122) {
          decode = 122 - ((122 - decode + offsetNumber) % 26);
        }
        else if (decode >= 123 && decode <= 254) {
          decode = 254 - ((254 - decode + offsetNumber) % 131);
        }
        message += String.fromCharCode(decode)
      }
      return message

    } else {
      throw new TypeError("Erro inesperado.")
    }
  }

};

export default cipher;
