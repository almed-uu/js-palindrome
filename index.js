let s = 'racec';

s_split = s.split('');
s_len = s_split.length;
s_pol1 = [];
s_pol2 = [];


let i;
let j;
let k;
let m;
let n;

for (i = 0; i < s_len; i++) {
    x1 = s_split[i];
    x2 = s_split[i + 2];

    if (x1 === x2) {
        // console.log(x1 + x2 + 'found' + i);
        for (j = 0; j <= i - 1; j++) {
            s_pol1.push(s_split[j]);
        }
    }
}

for (k = s_pol1.length - 1; k >= 0; k--) {
    // console.log(k);
    s_pol2.push(s_pol1[k]);
}

for (m = 0; m < s_pol2.length; m++) {
    s_split.push(s_pol2[m]);
    s = s + s_pol2[m].toString();
}



// console.log(s.split(''));
// console.log(s_len);
// console.log(s_pol1);
// console.log(s_pol2);
// console.log(s_split);
console.log(s);
