// Sélectionner la barre de navigation et la section#Accueil
const header = document.querySelector('#header'); // Sélectionne le nav avec la classe .navbar
const main = document.getElementById('#main'); // Sélectionne la section#Accueil

// Fonction pour ajuster le padding de la section#Accueil
function adjustSectionPadding() {
  // Obtenir la hauteur de la barre de navigation
  const header_height = header.offsetHeight;

  // Appliquer un padding-top à la section#Accueil pour éviter que le contenu ne soit caché
  main.style.paddingTop = `${header_height}rem`;
}

// Appeler la fonction pour ajuster le padding lors du chargement de la page
adjustSectionPadding();

// Ajouter un événement pour ajuster le padding lorsque la taille de la fenêtre change
window.addEventListener('resize', () => {
  // Mettre à jour le padding-top à chaque redimensionnement de la fenêtre
  adjustSectionPadding();
});