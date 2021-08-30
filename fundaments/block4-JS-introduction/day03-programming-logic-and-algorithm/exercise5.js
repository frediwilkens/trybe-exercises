let n = 11;
function asteriskTriangle(n){
  let midOfPyramid = (n + 1) / 2;
  let controlLeft = midOfPyramid;
  let controlRight = midOfPyramid;
  let asterisk = "*";
  for (let line = 1; line <= midOfPyramid; line += 1) {
    let pLine = '';
    for (let col = 1; col <= n; col += 1) {
      if (col == controlLeft || col == controlRight || line == midOfPyramid) {
        pLine += asterisk;
      } else {
        pLine += ' ';
      }
    }
    controlLeft -= 1;
    controlRight += 1;
    console.log(pLine);
  }
}
asteriskTriangle(n);