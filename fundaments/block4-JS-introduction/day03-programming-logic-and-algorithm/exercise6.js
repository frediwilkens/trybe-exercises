let n = 17;
let b = 16;

function verifyIfIsPrimeNumber(n){
  let divisors = 0;
  for (divisonTry = 1; divisonTry <= n; divisonTry += 1){
    if (n % divisonTry === 0){
      divisors += 1;
    }
  }
  if(divisors === 2) {
    console.log(n + " é primo");
  } else {
    console.log(n + " não é primo");
  }
}

verifyIfIsPrimeNumber(n);
verifyIfIsPrimeNumber(b);