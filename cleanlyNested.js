function isCleanlyNested(list) {
  return isAllEqual(list);
}

function isAllEqual(list) {
  let nested = 0;
  let empty = 0;

  for (const elem of list) {
    if (elem.length) {
      if (empty) return false;
      nested++;
      if (!isAllEqual(elem)) return false;
    } else {
      if (nested) return false;
      empty++;
    }
  }

  return true;
}