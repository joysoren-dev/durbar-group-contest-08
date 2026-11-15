function nextGreaterElement(nums) {
  // Step 1: Result array ti -1 diye fill kore rakhlam, jader dane boro keu thakbe na tader jonno -1 thakbe
  const result = new Array(nums.length).fill(-1);

  // Step 2: Stack use korbo dan pasher boro element gulo track korar jonno
  const stack = [];

  // Step 3: Array er shesh theke shuru kore samner dike (right to left) loop chalacchi
  for (let i = nums.length - 1; i >= 0; i--) {
    // Stack er top e jodi current number er cheye choto ba soman element thake, tahole ogula pop kore feli
    while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }

    // Step 4: Jodi stack faka na thake, tahole stack er top er tai hobe next greater element
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }

    // Step 5: Current number-ti stack e push kore dilam porer element er jonno check korar
    stack.push(nums[i]);
  }

  // Step 6: Final result array ti return korlam
  return result;
}
