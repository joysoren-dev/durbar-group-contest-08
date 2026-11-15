function moveZeros(nums) {
  // Step 1: Shob non-zero number gulo ekta alada array-te collect korchi
  const nonZeros = [];
  for (let num of nums) {
    if (num !== 0) {
      nonZeros.push(num);
    }
  }

  // Step 2: Original array-te total koyta zero chilo ta ber korar jonno length biyog korlam
  const zeroCount = nums.length - nonZeros.length;

  // Step 3: Non-zero array-er sheshe tototai zero push kore dilam
  for (let i = 0; i < zeroCount; i++) {
    nonZeros.push(0);
  }

  // Step 4: Final array ti return kore dilam jar shob zero sheshe chole geche
  return nonZeros;
}
