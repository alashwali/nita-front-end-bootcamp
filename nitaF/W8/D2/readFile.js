$("#FileForm").submit(function (e) {
  e.preventDefault();
  const FileInput = document.getElementById("FileInput");
  const file = FileInput.files[0];
  if (file) {
    const reader = new FileReader();
    if (file.type == "text/plain") {
      reader.onload = function (event) {
        const FileContent = event.target.result;
        displayFileContent(FileContent);
      };
      reader.readAsText(file);
    } else if (
      file.type == "image/jpeg" ||
      file.type == "image/png" ||
      file.type == "image/jpg"
    ) {
      reader.onload = function (event) {
        const FileContent = event.target.result;
        displayFileContent2(FileContent);

      };
      reader.readAsDataURL(file);
    }
  } else {
    alert("please select a Text file");
  }
});
const FileContent1 = document.getElementById("FileContent");
function displayFileContent(content) {
  FileContent1.innerHTML = `<pre>${content}</pre>`;
}

function displayFileContent2(content) {
  FileContent1.innerHTML = `<img src="${content}"></img>`;
}
