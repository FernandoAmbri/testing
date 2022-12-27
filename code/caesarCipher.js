export function caesarEncription(text, shift = 13) {
  const charMin = 96;
  const charMax = 123;
  const minValue = 97;
  const textToConvert = text;

  const newText = textToConvert.toLowerCase();
  const letters = newText.split("").map((_, i) => newText.charCodeAt(i));

  const lettersEncripted = letters.map((char) => {
    if (char > charMin && char < charMax) {
      return ((char - minValue + shift) % 26) + minValue;
    }
    return char;
  });

  return String.fromCharCode(...lettersEncripted);
}
