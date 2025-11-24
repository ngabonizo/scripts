function groupBy(array, classifier, downstream, accumulatorSupplier) {
  const result = new Map();

  for (const element of array) {
    const key = classifier(element);

    // if key isn’t in the map, create a fresh accumulator
    if (!result.has(key)) {
      result.set(key, accumulatorSupplier());
    }

    const acc = result.get(key);

    // downstream may return a *new* accumulator (immutable case)
    const updated = downstream(acc, element);

    // always store back in case downstream returns a new value
    result.set(key, updated);
  }

  return result;
}


const profession2totalIncome = groupBy(
  employees,
  e => e.profession,
  (acc, e) => acc + e.income,
  () => 0,
);

console.log(profession2totalIncome);
// Map { 'developer' => 4100, 'qa' => 2500, 'designer' => 2500 }


const profession2names = groupBy(
  employees,
  e => e.profession,
  (acc, e) => [...acc, e.name],
  () => [],
);

console.log(profession2names);
// Map {
//   'developer' => [ 'James', 'Jennifer', 'Max' ],
//   'qa' => [ 'Robert', 'Patricia' ],
//   'designer' => [ 'John', 'Mary' ],
// }
