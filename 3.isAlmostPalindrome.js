function isAlmostPalindrome(s) {
  // Helper function: check korar jonno je nirdisto substring-ti palindrome kina
  function checkPalindrome(str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  // Two pointer diye shuru theke shesh porjonto check korchi
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      // Mismatch paile duita option check korbo:
      // 1. Left er ta skip kore (left + 1 to right)
      // 2. Right er ta skip kore (left to right - 1)
      return (
        checkPalindrome(s, left + 1, right) ||
        checkPalindrome(s, left, right - 1)
      );
    }
  }

  // Jodi kono mismatch chara loop shesh hoy, tar mane eta already ekta full palindrome
  return true;
}
