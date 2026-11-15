function findMajorityElement(nums) {
  // Step 1: Protita number koybar ache ta track korar jonno ekta khali object (frequency map) nilam
  const counts = {};
  const n = nums.length;

  // Step 2: Array er protita number er opor loop chalacchi
  for (let num of nums) {
    // Number guli koybar asheche tar count update korchi
    counts[num] = (counts[num] || 0) + 1;

    // Step 3: Check korchi current number-ti total length er (n / 2) er cheye beshi bar aseche kina
    if (counts[num] > Math.floor(n / 2)) {
      return num; // Majority element peye gele sathe sathe return kore dibo
    }
  }

  // Step 4: Jodi kono majority element na thake, tahole null return korbo
  return null;
}
