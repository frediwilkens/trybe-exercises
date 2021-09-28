const myFizzBuzz = require('./fizzBuzz');

describe('fizzBuzz Function', () => {
  it ('Retorna fizzbuzz se o número é divisivel por 3 e por 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it ('Retorna fizz se o número é divisivel por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it ('Retorna buzz se o número é divisivel por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })
  it ('Retorna o próprio número caso não seja divisivel por 3 nem por 5', () => {
    expect(myFizzBuzz(13)).toBe(13);
  })
  it ('Retorna false se o parâmetro não for um número', () => {
    expect(myFizzBuzz('12')).toBe(false);
  })
})