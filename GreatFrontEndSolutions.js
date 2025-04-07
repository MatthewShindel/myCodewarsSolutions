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

export default async function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve,duration))
}

Array.prototype.square = function () {
  const length = this.length;
  const results = new Array(length);

  for(let i = 0; i< length; i++) {
    results[i] = this[i] * this[i];
  }
  return results;
}; // this function is a prototype method that works on arrays, reading each elements in an array, and squares them
//The array sets up a new array that's the same length as the original

export default function setCancellableInterval(callback, delay, ...args) {
  const timerID = setInterval(callback, delay, ...args);
  return () => {
    clearInterval(timerID)
  }
}

export default function setCancellableTimeout(callback, delay, ...args) {
  const timerId = setTimeout(callback,delay,...args);
  return function cancel(){
    clearTimeout(timerId)
  }
}