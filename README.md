# project

1. 🎯 Objectif
Créer un site web interactif permettant d’estimer le % de chance qu’une personne accepte d’échanger avec un inconnu, en fonction de plusieurs paramètres sélectionnés par l’utilisateur.


2. 👤 Utilisateur cible
Personnes voulant améliorer leurs interactions sociales
Curieux / fun (aspect “simulateur”)


3. ⚙️ Fonctionnalité principale
🔢 Calcul du score
Le site calcule un pourcentage basé sur :
Une base probability
Des modificateurs (+ / −) selon les choix


4. 🧮 Logique de calcul
📌 Base
Base = 25 %


📌 Formule
Score final = Base + somme(des modificateurs)

Puis :
Score final limité entre 0 % et 100 %


📌 Exemple
25 % (base)
+ 20 % (parc)
+ 25 % (bonne attitude)
− 10 % (personne occupée)
= 60 %


5. 🧩 Variables à intégrer
5.1 CONTEXTE
Option                Valeur
Parc / lieu détendu   +20
Rue classique         0
Transports            −15
Soirée                +30
Nuit (rue vide)       −20
File d’attente        +25


5.2 LOOK
Option                Valeur
Propre simple         +20
Stylé naturel         +25
Négligé               −30
Excentrique           −20
Bonne hygiène         +15


5.3 ATTITUDE
Option              Valeur
Calme + sourire     +30
Neutre              0
Stressé             −15
Insistant           −60
Chaleureux          +25


5.4 LANGAGE CORPOREL
Option            Valeur
Regard naturel    +20
Regard fuyant     −10
Regard intense    −30
Posture ouverte   +15
Posture fermée    −15


5.5 APPROCHE (PHRASE)
Option        Valeur
Simple        +30
Originale     +20
Maladroite    −10
Lourde        −50
Humour léger  +15


5.6 TIMING
Option         Valeur
Détendu        +25
Occupé         −40
Moment social  +30


5.7 DISTANCE
Option       Valeur
Respectée    +15
Trop proche  −40
Surprise     −50


5.8 VOIX
Option           Valeur
Calme            +20
Stressée         −15
Forte/agressive  −30


5.9 PROFIL DE LA PERSONNE
Option              Valeur
Sociable            +30
Timide              −20
Mauvaise expérience −40


5.10 SIMILITUDE
Option           Valeur
Style similaire  +20
Différent        −15


5.11 CONTEXTE SOCIAL
Option      Valeur
Seule       +20
En groupe   −20


5.12 DURÉE
Option       Valeur
Courte       +25
Trop longue  −40


5.13 RESPECT DES SIGNAUX
Option     Valeur
Respect    +40
Insistance −80


6. 🖥️ Interface utilisateur
🎛️ Inputs
Dropdown ou boutons pour chaque catégorie
Possibilité de sélectionner 1 option par catégorie


📊 Output
Score en % (gros affichage)
Couleur dynamique :
🔴 0–20 %
🟠 20–40 %
🟡 40–60 %
🟢 60–80 %
💚 80–100 %


📈 Bonus UX
Barre de progression
Animation du score
Emoji selon résultat :
❌ refus probable
🤔 mitigé
✅ bonne chance
🔥 très favorable


7. 🧠 Logique avancée (optionnel mais puissant)
🔄 Pondération non linéaire
Ajouter un effet multiplicateur :
Si attitude = "insistant"
→ score final × 0.3
Si timing = "occupé"
→ score final × 0.6


🧩 Synergies
Exemple :
Si (parc + personne détendue)
→ +10 bonus


8. 🛠️ Stack technique suggérée
Front : HTML / CSS / JS (ou React)
Backend (optionnel) : Node.js
Stockage : localStorage (pour sauvegarder choix)


9. 📱 Responsive
Mobile first (important)
Boutons larges
UX rapide (moins de 10 secondes pour tester)


10. 🎯 Objectif produit
Fun + éducatif
Compréhension intuitive des interactions sociales
Partageable (résultat)


11. 💡 Bonus idées
Mode “réalité vs idéal”
Comparaison de scénarios
Conseils automatiques :
“Améliore ton score en changeant ton timing”
