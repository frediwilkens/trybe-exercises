let n = 5;

function asteriskTriangle(n){
  let asterisk = "*";
  let line = "";
  let midOfPyramid = (n - 1) / 2;
  let controlRight = midOfPyramid;
  let controlLeft = midOfPyramid;
  if(n > 1){
    for(let lineIndex = 0; lineIndex <= midOfPyramid; lineIndex += 1){
      for (let columnIndex = 0; columnIndex <= n; columnIndex += 1){
        if (columnIndex >= controlLeft && columnIndex <= controlRight){
          line = line + asterisk
        } else {
          line = line + " ";
        }
      }
      console.log(line);
      line = "";
      controlLeft -= 1;
      controlRight += 1;
    }
  }
}
asteriskTriangle(n);