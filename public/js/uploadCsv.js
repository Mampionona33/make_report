const form = document.getElementById("csv-form");
const fileInput = document.getElementById("csv-file");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("csv-file", fileInput.files[0]);

  fetch("/upload-csv", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      // Gérer la réponse du serveur
    })
    .catch((error) => {
      // Gérer les erreurs
    });
});
