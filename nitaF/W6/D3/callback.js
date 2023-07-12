function fechData(callback) {
  setTimeout(() => {
    const data = "Data from My Server";
    callback(data);
  }, 3000); //3sec
}
function process(data) {
  console.log("Processing the Data:-", data);
}

fechData(process)