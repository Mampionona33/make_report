const checkUploadFile = (req, res, next) => {
  // Vérifiez si le fichier existe
  if (!req.file) {
    const error = new Error();
    error.statusCode = 400;
    error.message = "Veuillez sélectionner un fichier à télécharger.";
    return next(error);
  }

  // Vérifiez le type de fichier
  if (req.file.mimetype !== "text/csv") {
    const error = new Error();
    error.statusCode = 400;
    error.message = "Veuillez sélectionner un fichier CSV.";
    return next(error);
  }

  // Passez à la fonction suivante s'il n'y a pas d'erreur
  next();
};

export default checkUploadFile;
