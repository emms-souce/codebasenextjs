export default function copyToClipboard(value: string): void {
  // Crée un élément <textarea> temporaire
  const textArea = document.createElement("textarea");

  // Place la valeur à copier dans l'élément <textarea>
  textArea.value = value;

  // Ajoute le <textarea> au document pour qu'il soit sélectionnable
  document.body.appendChild(textArea);

  // Sélectionne le contenu du <textarea>
  textArea.select();

  // Copie le texte sélectionné dans le presse-papiers
  document.execCommand("copy");

  // Supprime l'élément <textarea> du document
  document.body.removeChild(textArea);
}
