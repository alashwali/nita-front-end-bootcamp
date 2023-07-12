function fechData() {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      const data = "Data from My Server";
      resole(data);
    }, 3000);
  });
}
async function process() {
  try {
    const data = await fechData();
    console.log("This is the data my server Processed", data);
  } catch (error) {
    console.log("There was an error");
  }
}
process()