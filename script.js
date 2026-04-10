function calculer() {
  let base = 0;

  let ids1 = [
    "contexte","genre1","taille1","look1","attitude1","corps1","corps11","approche",
    "timing","distance","voix1","voix2","profil2",
    "similarite","social1","social2","duree","respect1","respect2"
  ];

    let ids2 = [
    "genre2","look2","attitude2","corps2","corps22"
  ];

  let score1 = base;

  ids1.forEach(id => {
    score1 += parseInt(document.getElementById(id).value);
  });

// HOMME FEMME TAILLE
  let genre1 = parseInt(document.getElementById("genre1").value);
  let genre2 = parseInt(document.getElementById("genre2").value);
  let taille1 = parseInt(document.getElementById("taille1").value);

  if (genre1 === 1 && genre2 === 1) {score1 +=20; // HOMME HOMME
    if (taille1 === 1) {score1 += 0}
    if (taille1 === 2) {score1 += 0}
    if (taille1 === 3) {score1 += 0}
    if (taille1 === 4) {score1 += 0}
    if (taille1 === 5) {score1 += 0}
    if (taille1 === 6) {score1 += 0}
    if (taille1 === 7) {score1 += 0}
    } 
  if (genre1 === 1 && genre2 === 2) {score1 +=10; // HOMME AUTRE
    if (taille1 === 1) {score1 += 0}
    if (taille1 === 2) {score1 += 0}
    if (taille1 === 3) {score1 += 0}
    if (taille1 === 4) {score1 += 0}
    if (taille1 === 5) {score1 += 0}
    if (taille1 === 6) {score1 += 0}
    if (taille1 === 7) {score1 += 0}
    } 
  if (genre1 === 1 && genre2 === 20) {score1 +=0; // HOMME FEMME
    if (taille1 === 1) {score1 -= 60}
    if (taille1 === 2) {score1 -= 50}
    if (taille1 === 3) {score1 -= 30}
    if (taille1 === 4) {score1 -= 10}
    if (taille1 === 5) {score1 += 10}
    if (taille1 === 6) {score1 += 40}
    if (taille1 === 7) {score1 += 30}
    } 

  if (genre1 === 2 && genre2 === 2) {score1 +=20; // AUTRE AUTRE
    if (taille1 === 1) {score1 += 0}
    if (taille1 === 2) {score1 += 0}
    if (taille1 === 3) {score1 += 0}
    if (taille1 === 4) {score1 += 0}
    if (taille1 === 5) {score1 += 0}
    if (taille1 === 6) {score1 += 0}
    if (taille1 === 7) {score1 += 0}
    }
  if (genre1 === 2 && genre2 === 1) {score1 +=10; // AUTRE HOMME
    if (taille1 === 1) {score1 -= 15}
    if (taille1 === 2) {score1 -= 10}
    if (taille1 === 3) {score1 -= 5}
    if (taille1 === 4) {score1 += 0}
    if (taille1 === 5) {score1 += 10}
    if (taille1 === 6) {score1 += 10}
    if (taille1 === 7) {score1 += 0}
    }
  if (genre1 === 2 && genre2 === 20) {score1 +=15; // AUTRE FEMME
    if (taille1 === 1) {score1 += 5}
    if (taille1 === 2) {score1 += 10}
    if (taille1 === 3) {score1 += 5}
    if (taille1 === 4) {score1 += 0}
    if (taille1 === 5) {score1 += 10}
    if (taille1 === 6) {score1 += 10}
    if (taille1 === 7) {score1 += 0}
    }

  if (genre1 === 20 && genre2 === 20) {score1 +=20; // FEMME FEMME
    if (taille1 === 1) {score1 += 0}
    if (taille1 === 2) {score1 += 0}
    if (taille1 === 3) {score1 += 0}
    if (taille1 === 4) {score1 += 0}
    if (taille1 === 5) {score1 += 0}
    if (taille1 === 6) {score1 += 0}
    if (taille1 === 7) {score1 += 0}
    }
  if (genre1 === 20 && genre2 === 1) {score1 +=10; // FEMME HOMME
    if (taille1 === 1) {score1 += 0}
    if (taille1 === 2) {score1 += 10}
    if (taille1 === 3) {score1 += 30}
    if (taille1 === 4) {score1 += 15}
    if (taille1 === 5) {score1 -= 10}
    if (taille1 === 6) {score1 -= 20}
    if (taille1 === 7) {score1 -= 40}
    } 
  if (genre1 === 20 && genre2 === 2) {score1 +=20; // FEMME AUTRE
    if (taille1 === 1) {score1 += 0}
    if (taille1 === 2) {score1 += 0}
    if (taille1 === 3) {score1 += 0}
    if (taille1 === 4) {score1 += 0}
    if (taille1 === 5) {score1 += 0}
    if (taille1 === 6) {score1 += 0}
    if (taille1 === 7) {score1 += 0}
    }

// LOOK
  let look1 = parseInt(document.getElementById("look1").value);
  let look2 = parseInt(document.getElementById("look2").value);
  if (look1 === look2) {score1 += 15} else {score1 -= 15}

// ATTITUDE
  let attitude2 = parseInt(document.getElementById("attitude2").value);
  if (attitude2 < 0 ) {score1 -=10} else {score1 +=5}

// CORPS
  let corps2 = parseInt(document.getElementById("corps2").value);
  let corps22 = parseInt(document.getElementById("corps22").value);

  if (corps2 < 0 ) {score1 -=40} else {score1 +=10}
  if (corps22 < 0 ) {score1 -=40} else {score1 +=10}

// TEMPS
  let timing = parseInt(document.getElementById("timing").value);
  let duree = parseInt(document.getElementById("duree").value);

  if (timing < 0 && duree < 0) {score1 -=11}
  if (timing < 0 && duree > 0) {score1 +=6}
  if (timing > 0 && duree < 0) {score1 +=11}
  if (timing > 0 && duree > 0) {score1 +=6}


if (score1 > 100) score1 = 100;
if (score1 < 0) score1 = 0;

  score1 = Math.round(score1);

  let resultat = document.getElementById("resultat");
  let bar = document.getElementById("bar");
  let conseil = document.getElementById("conseil");

  resultat.innerText = score1 + " %";
  bar.style.width = score1 + "%";

  if (score1 < 20) {
    bar.style.background = "red";
    conseil.innerText = "❌ Refus quasi certain";
  } else if (score1 < 40) {
    bar.style.background = "orange";
    conseil.innerText = "⚠️ Peu probable";
  } else if (score1 < 60) {
    bar.style.background = "gold";
    conseil.innerText = "🤔 Mitigé";
  } else if (score1 < 80) {
    bar.style.background = "lime";
    conseil.innerText = "✅ Bonne chance";
  } else {
    bar.style.background = "green";
    conseil.innerText = "🔥 Très favorable";
  }
}
