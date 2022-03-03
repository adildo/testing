import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './index';

test('capitalize first letter', () => {
    expect(capitalize('dog')).toBe('Dog');
  }); 

test('revere the string', () => {
    expect(reverseString('dog')).toBe('god')
});

test('add the 2 numbers', () => {
    expect(calculator.add(4, 6)).toBe(10)
});

test('each char is moved 5 steps in the alphabetical order', () => {
    expect(caesarCipher('i am a Fog')).toBe('n fr f ktl')
});

test('return properties of array of numbers', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
});
