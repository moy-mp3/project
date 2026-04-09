function calculer() {
  let base = 25;

  let contexte = parseInt(document.getElementById("contexte").value);
  let attitude = parseInt(document.getElementById("attitude").value);
  let timing = parseInt(document.getElementById("timing").value);
  let look = parseInt(document.getElementById("look").value);

  let score = base + contexte + attitude + timing + look;

  // BONUS / MALUS INTELLIGENTS
  if (attitude === -60) score *= 0.3; // insistant
  if (timing === -40) score *= 0.6; // occupé
  if (contexte === 20 && timing === 25) score += 10; // combo parfait

  // Limites
  score = Math.max(0, Math.min(100, Math.round(score)));

  // UI
  let resultat = document.getElementById("resultat");
  let bar = document.getElementById("bar");
  let conseil = document.getElementById("conseil");

  resultat.innerText = score + " %";
  bar.style.width = score + "%";

  // Couleurs
  if (score < 20) bar.style.background = "red";
  else if (score < 40) bar.style.background = "orange";
  else if (score < 60) bar.style.background = "gold";
  else if (score < 80) bar.style.background = "lime";
  else bar.style.background = "green";

  // Conseils dynamiques
  if (score < 30) {
    conseil.innerText = "❌ Mauvais contexte, change d’approche";
  } else if (score < 60) {
    conseil.innerText = "🤔 Ça peut passer, améliore ton timing";
  } else if (score < 80) {
    conseil.innerText = "✅ Bonne situation";
  } else {
    conseil.innerText = "🔥 Conditions parfaites";
  }
}
