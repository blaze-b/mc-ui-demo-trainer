promise
  .then((result) => {
    console.log("Success");
  })
  .catch((error) => {

    console.log("Failure");

  })
  .finally(() => {

    console.log("Finally");

  });


