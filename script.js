function calculer() {
  let base = 25;

  let contexte = parseInt(document.getElementById("contexte").value);
  let attitude = parseInt(document.getElementById("attitude").value);
  let timing = parseInt(document.getElementById("timing").value);

  let score = base + contexte + attitude + timing;

  // Limite entre 0 et 100
  if (score > 100) score = 100;
  if (score < 0) score = 0;

  // Affichage
  let resultat = document.getElementById("resultat");
  resultat.innerText = "Résultat : " + score + " %";

  // Couleur dynamique
  if (score < 20) resultat.style.color = "red";
  else if (score < 40) resultat.style.color = "orange";
  else if (score < 60) resultat.style.color = "gold";
  else if (score < 80) resultat.style.color = "green";
  else resultat.style.color = "darkgreen";
}
