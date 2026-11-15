function groupConsecutiveRanges(numbers) {
  // Step 1: Jodi array khali thake, tahole empty array return korbo
  if (numbers.length === 0) return [];

  // Step 2: Prothome numbers gulo ke choto theke boro sajie (sort kore) nilam
  const sorted = [...numbers].sort((a, b) => a - b);
  const result = [];

  // Step 3: Range er start ebong end track korar jonno variable nilam
  let start = sorted[0];
  let end = sorted[0];

  // Step 4: Sorted array er upor loop chalacchi
  for (let i = 1; i < sorted.length; i++) {
    // Jodi duplicate number hoy (orthat ager number er soman), tahole skip korbo
    if (sorted[i] === end) {
      continue;
    }

    // Jodi current number-ti ager number er sathe consecutive (porpor) hoy
    if (sorted[i] === end + 1) {
      end = sorted[i]; // End barie dilam
    } else {
      // Sequence venge gele age range ti baniye result-e push korbo
      if (start === end) {
        result.push(String(start));
      } else {
        result.push(`${start}-${end}`);
      }
      // Notun range er jonno start ebong end update korlam
      start = sorted[i];
      end = sorted[i];
    }
  }

  // Step 5: Sesh range ba single number-ti result-e add kore dibo
  if (start === end) {
    result.push(String(start));
  } else {
    result.push(`${start}-${end}`);
  }

  return result;
}
