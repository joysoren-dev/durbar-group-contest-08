function compareVersions(version1, version2) {
  // Step 1: Ami prothome dot (.) diye split kore duita version-kei array banai nilam
  // Jemon: "1.10" hoye jabe ["1", "10"]
  const v1Array = version1.split(".");
  const v2Array = version2.split(".");

  // Step 2: Duita array-er moddhe jeta boro, setar length ber kore nilam jate shobgulo check kora jay
  const maxLength = Math.max(v1Array.length, v2Array.length);

  // Step 3: Ekhon shuru theke shesh porjonto loop chalabo
  for (let i = 0; i < maxLength; i++) {
    // String theke Number-e convert korchi (leading zero thakle auto bad pore jabe)
    // Ar jodi kono array-te element kom thake (undefined hoy), tahole 0 dhore nichi
    const num1 = i < v1Array.length ? Number(v1Array[i]) : 0;
    const num2 = i < v2Array.length ? Number(v2Array[i]) : 0;

    // Step 4: Ekhon duita number compare korbo
    if (num1 > num2) {
      return 1; // version1 boro hole sathe sathe 1 return korbo
    }
    if (num1 < num2) {
      return -1; // version1 choto hole sathe sathe -1 return korbo
    }
    // Jodi সমান hoy, tahole loop porer index check korte thakbe
  }

  // Step 5: Puro loop shesh hoye geleo jodi choto-boro na paoa jay, tar mane duita version-i shoman
  return 0;
}
