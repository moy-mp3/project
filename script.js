function calculer() {
  let base = 25;

  let ids = [
    "contexte","look1","attitude1","corps1","approche",
    "timing","distance","voix1","profil2",
    "similarite","social1","duree","respect1"
  ];

  let score = base;

  ids.forEach(id => {
    score += parseInt(document.getElementById(id).value);
  });

  // BONUS / MALUS AVANCÉS
  let attitude = parseInt(document.getElementById("attitude1").value);
  let timing = parseInt(document.getElementById("timing").value);
  let respect = parseInt(document.getElementById("respect1").value);

  if (attitude === -60) score *= 0.3;
  if (timing === -40) score *= 0.6;
  if (respect === -80) score *= 0.2;

  if (score > 100) score = 100;
  if (score < 0) score = 0;

  score = Math.round(score);

  let resultat = document.getElementById("resultat");
  let bar = document.getElementById("bar");
  let conseil = document.getElementById("conseil");

  resultat.innerText = score + " %";
  bar.style.width = score + "%";

  if (score < 20) {
    bar.style.background = "red";
    conseil.innerText = "❌ Refus quasi certain";
  } else if (score < 40) {
    bar.style.background = "orange";
    conseil.innerText = "⚠️ Peu probable";
  } else if (score < 60) {
    bar.style.background = "gold";
    conseil.innerText = "🤔 Mitigé";
  } else if (score < 80) {
    bar.style.background = "lime";
    conseil.innerText = "✅ Bonne chance";
  } else {
    bar.style.background = "green";
    conseil.innerText = "🔥 Très favorable";
  }
}
