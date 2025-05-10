function generateSchedule() {
  const year = parseInt(document.getElementById("year").value);
  const cycle = "BRAAARVVVRNNNRRRBBBRAAARRRRRNNNRRRBBBRAAARVVRRNNNRRRBBBRAAARRRRRNNNRRRBBBRAAARVVRRNNNRRRBBBRAAARRRRRNNNRRRBB";
  const cycleLength = cycle.length;  // Longueur du cycle (126 jours)
  
  const startDate = new Date(year, 0, 1); // 1er janvier de l'année choisie
  
  // Détermine le jour de la semaine du 01/01/2025
  const startDay = 0; // Le cycle commence par B le 01/01/2025
  
  // Pour chaque année suivante, on calcule où on se trouve dans le cycle
  const daysSince2025 = Math.floor((startDate - new Date(2025, 0, 1)) / (1000 * 60 * 60 * 24)); // Nombre de jours depuis le 01/01/2025
  const startOffset = daysSince2025 % cycleLength; // Décalage dans le cycle modulo 126

  const planningContainer = document.getElementById("planning");

  // Vider le contenu précédent
  planningContainer.innerHTML = "";

  for (let i = 0; i < 365; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    // Calcul de la position dans le cycle en tenant compte du décalage
    const dayOfCycle = cycle[(i + startOffset) % cycleLength];

    // Créer une nouvelle ligne pour chaque jour
    const planningEntry = document.createElement("div");
    planningEntry.classList.add("planning-entry");

    // Si la position est 'R', on applique la classe 'r-background' pour le jaune
    if (dayOfCycle === 'R') {
      planningEntry.classList.add("r-background");
    }

    const dateElement = document.createElement("span");
    dateElement.classList.add("date");
    dateElement.textContent = `${currentDate.toLocaleDateString()}`;

    const cycleDayElement = document.createElement("span");
    cycleDayElement.classList.add("cycle-day");
    cycleDayElement.textContent = dayOfCycle;

    planningEntry.appendChild(dateElement);
    planningEntry.appendChild(cycleDayElement);

    planningContainer.appendChild(planningEntry);
  }
}



