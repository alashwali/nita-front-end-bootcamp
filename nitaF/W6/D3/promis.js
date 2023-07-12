function fechData() {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      const data = "Data from My Server";
      resole(data);
    }, 10000);
  });
}
fechData()
  .then((data) => {
    console.log("Data my server handled:", data);
  })
  .catch((error) => {
    console.log("sorry. There was an error.");
  });
