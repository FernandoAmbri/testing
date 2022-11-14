export function caesarEncription(text, shift = 13) {
  const charMin = 96;
  const charMax = 123;
  const minValue = 97;

  const newText = text.toLowerCase();
  const letters = newText.split("").map((_, i) => newText.charCodeAt(i));

  const lettersEncripted = letters.map((letter) => {
    if (letter > charMin && letter < charMax) {
      return ((letter - minValue + shift) % 26) + minValue;
    }
    return letter;
  });

  return String.fromCharCode(...lettersEncripted);
}
