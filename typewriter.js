const sentence = "to infinity and beyond";

const animation = () => {
  let counter = 0;
  for (const char of sentence) {
    counter += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, counter);
  }
  setTimeout(() => {
    console.log();
  }, counter + 50
  );

};


animation();