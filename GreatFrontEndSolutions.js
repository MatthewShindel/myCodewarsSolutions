export default function minBy(array, iteratee) {
  if(!Array.isArray(array) || array.length === 0){
    return undefined;
  }

  return array.reduce((minElement, currentElement) => {
    return iteratee(currentElement) < iteratee(minElement) ? currentElement : minElement;
  });
}

export default function functionLength(fn) {
  return fn.length
}