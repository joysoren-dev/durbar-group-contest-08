function simplifyPath(path) {
  // Step 1: Path ke slash ('/') diye split kore ekta array baniye nilam
  const parts = path.split("/");
  const stack = [];

  // Step 2: Array-er protita part-er opor loop chalacchi
  for (let part of parts) {
    // Jodi part ti '..' hoy, tahole stack theke pop korbo (ek dhape upore jabo)
    if (part === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    }
    // Jodi part ti empty string ('') ba '.' hoy, tahole shegula ignore korbo
    else if (part !== "" && part !== ".") {
      stack.push(part); // Valid directory ba file name stack-e dhukacchi
    }
  }

  // Step 3: Stack-er elements gulo ke '/' diye join kore final absolute path baniye return korbo
  return "/" + stack.join("/");
}
