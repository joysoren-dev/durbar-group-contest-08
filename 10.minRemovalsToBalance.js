function minRemovalsToBalance(s) {
  // Step 1: Unmatched opening brackets track korar jonno stack baniye nilam
  const stack = [];

  // Step 2: Extra ba unmatched closing brackets count korar jonno variable nilam
  let unmatchedClosing = 0;

  // Step 3: String er protita bracket er opor loop chalacchi
  for (let char of s) {
    if (char === "(") {
      // Opening bracket hole stack-e push kore dilam
      stack.push(char);
    } else if (char === ")") {
      // Closing bracket hole check korbo stack-e match korar moto '(' ache kina
      if (stack.length > 0) {
        stack.pop(); // Pair mile gelo, tai stack theke ta ber kore dilam
      } else {
        unmatchedClosing++; // Jodi stack khali thake, tahole eta ekta extra closing bracket
      }
    }
  }

  // Step 4: Sheshe stack-e je koyta '(' baki thakbe (unmatched opening)
  // ebong age-er unmatchedClosing jog kore total minimum removals return korbo
  return unmatchedClosing + stack.length;
}
