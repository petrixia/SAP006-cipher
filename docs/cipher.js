const cipher = {

  encode: function encode(offset, string) {
    let message = "";
    let offsetNumber = parseInt(offset);

    if (isNaN(offsetNumber) || typeof string !== "string") {
      throw new TypeError("Erro inesperado");
    }

    for (let i = 0; i < string.length; i++) {
      let crypt = string.charCodeAt(i);
      let newChar = crypt;
      switch (true) {
        case (crypt >= 34 && crypt <= 63):
          newChar = ((crypt - 34 + offsetNumber) % 29);
          if (newChar < 0) newChar += 29;
          newChar += 34;
          break;
        case (crypt >= 65 && crypt <= 90):
          newChar = ((crypt - 65 + offsetNumber) % 26);
          if (newChar < 0) newChar += 26;
          newChar += 65;
          break;
        case (crypt >= 97 && crypt <= 122):
          newChar = ((crypt - 97 + offsetNumber) % 26);
          if (newChar < 0) newChar += 26;
          newChar += 97;
          break;
        case (crypt >= 123 && crypt <= 254):
          newChar = ((crypt - 123 + offsetNumber) % 131);
          if (newChar < 0) newChar += 131;
          newChar += 123;
          break;
        default:
          // leave newChar as crypt
      }
      message += String.fromCharCode(newChar);
    }
    return message;
  },

  decode: function decode(offset, string) {
    let message = "";
    let offsetNumber = parseInt(offset);

    if (isNaN(offsetNumber) || typeof string !== "string") {
      throw new TypeError("Erro inesperado.");
    }

    for (let i = 0; i < string.length; i++) {
      let decode = string.charCodeAt(i);
      let newChar = decode;
      switch (true) {
        case (decode >= 34 && decode <= 63):
          newChar = ((decode - 34 - offsetNumber) % 29);
          if (newChar < 0) newChar += 29;
          newChar += 34;
          break;
        case (decode >= 65 && decode <= 90):
          newChar = ((decode - 65 - offsetNumber) % 26);
          if (newChar < 0) newChar += 26;
          newChar += 65;
          break;
        case (decode >= 97 && decode <= 122):
          newChar = ((decode - 97 - offsetNumber) % 26);
          if (newChar < 0) newChar += 26;
          newChar += 97;
          break;
        case (decode >= 123 && decode <= 254):
          newChar = ((decode - 123 - offsetNumber) % 131);
          if (newChar < 0) newChar += 131;
          newChar += 123;
          break;
        default:
          // leave newChar as decode
      }
      message += String.fromCharCode(newChar);
    }
    return message;
  }

};

export default cipher;
