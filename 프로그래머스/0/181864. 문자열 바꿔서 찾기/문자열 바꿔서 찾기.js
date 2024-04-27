const solution = (myString, pat) => {
  return myString.replace(/A|B/g, char => char === 'A' ? 'B' : 'A').includes(pat) ? 1 : 0;
};