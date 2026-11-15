function removeDuplicateCharacters(str) {
  // Step 1: Ekta Set banalam eta track korar jonno je konta konta character already chole asheche
  const seen = new Set();

  // Step 2: Unique character gulo store korar jonno ekta khali string nilam
  let result = "";

  // Step 3: Strtring er protita character er opor loop chalacchi
  for (let char of str) {
    // Step 4: Jodi character ti age na thake ('seen' er moddhe), taholei shudhu kaj korbo
    if (!seen.has(char)) {
      seen.add(char); // Set er moddhe character ti entry kore dilam
      result += char; // Result string er sathe character ti jog korlam
    }
  }

  // Step 5: Duplicate char chara final string ti return kore dilam
  return result;
}
