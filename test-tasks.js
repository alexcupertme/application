Promise.resolve().then(() => {
  process.nextTick(() => {
    console.log('cool');
  });

  function block() {
    Promise.resolve().then(block);
  }

  block();
});

// Что будет?
