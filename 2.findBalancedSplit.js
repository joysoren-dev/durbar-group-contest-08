function findBalancedSplit(nums) {
  // Step 1: Prothome puro array-er total sum ber kore nilam
  let totalSum = 0;
  for (let num of nums) {
    totalSum += num;
  }

  // Step 2: Running left sum track korar jonno variable nilam
  let leftSum = 0;

  // Step 3: Loop chalabo length - 1 porjonto, karon dan pashe oboshshoi 1ta element thakte hobe
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i]; // Protibar current element leftSum-er sathe jog korchi

    // Dan pasher sum hobe totalSum theke current leftSum biyog korle ja thake
    let rightSum = totalSum - leftSum;

    // Step 4: Jodi leftSum ar rightSum soman hoy, tahole current index i return kore dibo
    if (leftSum === rightSum) {
      return i;
    }
  }

  // Step 5: Jodi kono balanced split na paoa jay, tahole -1 return korbo
  return -1;
}
