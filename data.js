const testData = {
    main: {
      type: "dataset",
      name: "test-dataset",
      dateCreated: new Date(Date.now()).toISOString().split(".")[0] + "Z",
      author: "test",
      license: "MIT",
      files: [
        {
          url:
            "https://people.sc.fsu.edu/~jburkardt/data/csv/addresses.csv",
          contentType: "xlsx",
        },
      ],
    },
   };
   
   module.exports = { testData };