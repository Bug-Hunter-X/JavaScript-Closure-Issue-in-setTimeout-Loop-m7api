function myFunc() {
  for (let i = 0; i < 10; i++) {
    (function(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    })(i);
  }
}

myFunc();