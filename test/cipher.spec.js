// Importamos o objeto `cipher`, que contém os métodos `encode` e `decode`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {
    it('should encode and decode a char in the 34-63 range (e.g., $)', () => {
      const original = '$';
      const encoded = cipher.encode(5, original);
      expect(encoded).not.toBe(original);
      expect(cipher.decode(5, encoded)).toBe(original);
    });

    it('should encode and decode a char in the 65-90 range (e.g., A)', () => {
      const original = 'A';
      const encoded = cipher.encode(5, original);
      expect(encoded).not.toBe(original);
      expect(cipher.decode(5, encoded)).toBe(original);
    });

    it('should encode and decode a char in the 97-122 range (e.g., a)', () => {
      const original = 'a';
      const encoded = cipher.encode(5, original);
      expect(encoded).not.toBe(original);
      expect(cipher.decode(5, encoded)).toBe(original);
    });

    it('should encode and decode a char in the 123-254 range (e.g., \u0082)', () => {
      const original = '\u0082';
      const encoded = cipher.encode(5, original);
      expect(encoded).not.toBe(original);
      expect(cipher.decode(5, encoded)).toBe(original);
    });

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    // Hacker edition

    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    });

    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    it('should return " !@" for " !@"', () => {
      expect(cipher.encode(33, ' !@')).toBe(' !@');
    });

    it('should leave characters outside all ranges unchanged', () => {
      // ASCII 0-33, 64, 255+ are outside all cases
      expect(cipher.encode(10, '\u0000\u001F @\u00FF')).toBe('\u0000\u001F @\u00FF');
    });

    it('should return empty string when input is empty', () => {
      expect(cipher.encode(10, '')).toBe('');
    });

    it('should throw TypeError for NaN offset', () => {
      expect(() => cipher.encode('notanumber', 'abc')).toThrow(TypeError);
    });
  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });


    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('should leave characters outside all ranges unchanged', () => {
      expect(cipher.decode(10, '\u0000\u001F @\u00FF')).toBe('\u0000\u001F @\u00FF');
    });

    it('should return empty string when input is empty', () => {
      expect(cipher.decode(10, '')).toBe('');
    });

    it('should throw TypeError for NaN offset', () => {
      expect(() => cipher.decode('notanumber', 'abc')).toThrow(TypeError);
    });

    /*// Hacker edition
    
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
      expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
    });

    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    it('should return " !@" para " !@"', () => {
      expect(cipher.decode(33, ' !@')).toBe(' !@');
    }); */
  });

}); 
