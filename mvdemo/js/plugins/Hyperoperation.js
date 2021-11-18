function hyp(a,b,n) {
 if (n == 1) {
  ergebnis = a + b;
 } else if (n == 0) {
  if (a < b) {
   ergebnis = b + 1;
  } else if (a > b) {
   ergebnis = a + 1;
  } else if (a == b) {
   ergebnis = a + 2;
  }
 } else if (n < 0) {
  ergebnis = "NaN";
 } else {
  ergebnis = a;
  
  while (b-1 > 0) {
   
   ergebnis = hyp(a,ergebnis,n-1);
   
   b = b - 1;
  }
  
 }
 return ergebnis;
}

function hypc(a,b,n) {
 if (n == 1) {
  ergebnis = a + b;
 } else if (n == 0) {
  if (a < b) {
   ergebnis = b + 1;
  } else if (a > b) {
   ergebnis = a + 1;
  } else if (a == b) {
   ergebnis = a + 2;
  }
 } else if (n < 0) {
  ergebnis = "NaN";
 } else {
  ergebnis = a;
  
  while (b-1 > 0) {
   console.log(ergebnis);
   ergebnis = hypc(a,ergebnis,n-1);
   
   b = b - 1;
  }
  
 }
 
 return ergebnis;
 console.log(ergebnis);
}

function lhyp(a,b,n) {
 if (n == 1) {
  ergebnis = a + b;
 } else if (n == 0) {
  if (a < b) {
   ergebnis = b + 1;
  } else if (a > b) {
   ergebnis = a + 1;
  } else if (a == b) {
   ergebnis = a + 2;
  }
 } else if (n < 0) {
  ergebnis = "NaN";
 } else {
  ergebnis = a;
  
  while (b-1 > 0) {
   
   ergebnis = lhyp(ergebnis,a,n-1);
   
   b = b - 1;
  }
  
 }
 return ergebnis;
}

function lhypc(a,b,n) {
 if (n == 1) {
  ergebnis = a + b;
 } else if (n == 0) {
  if (a < b) {
   ergebnis = b + 1;
  } else if (a > b) {
   ergebnis = a + 1;
  } else if (a == b) {
   ergebnis = a + 2;
  }
 } else if (n < 0) {
  ergebnis = "NaN";
 } else {
  ergebnis = a;
  
  while (b-1 > 0) {
   console.log(ergebnis);
   ergebnis = lhypc(ergebnis,a,n-1);
   
   b = b - 1;
  }
  
 }
 
 return ergebnis;
 console.log(ergebnis);
}

