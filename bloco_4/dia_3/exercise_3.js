let n = 5;
let starKey = "*";
let line = "";
let position = n;

for (let i = 1; i <= n; i +=1){
    for (let j = 1; j <= 5; j += 1){
        if (j < position) {
            line += " ";
        } else {
            line += starKey;
        }
    }
    console.log(line);
    line = "";
    position = position - 1;
}