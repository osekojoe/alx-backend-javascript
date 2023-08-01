export default function cleanSet(set, startString) {
  const matchingValues = [...set]
    .filter((value) => value
      .startsWith(startString));
  const cleanedValues = matchingValues
    .map((value) => ((startString || startString.length) ? value
      .slice(startString.length) : ''));

  return cleanedValues.join('-');
}
