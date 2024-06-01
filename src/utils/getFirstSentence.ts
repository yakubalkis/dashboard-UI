export const getFirstSentence = (text: string): string => {
  const firstSentence = text.split(". ")[0];
  const capitalizedSentence =
    firstSentence.charAt(0).toUpperCase() + firstSentence.slice(1);
  return capitalizedSentence + ".";
};
