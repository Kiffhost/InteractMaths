function lton(l) {
    var charcode = (l.charCodeAt(0))-97;
    return charcode;
}

function numconversion(ciphernum) {
    var ciphertext = '';
    for (var i=0; i < ciphernum.length; i++){
        ciphertext += String.fromCharCode(ciphernum[i]+97);
    }
    return ciphertext;
}

function flatten(m) {
    var a = new Array(m.length**2), i=0;
    for (var r=0; r < m.length; r++) {
        for (var c=0; c < m[r].length; c++) {
            a[i] = m[r][c];
            i++;
        }
    }
    return a;
}

function textconversion(plaintext) {
    plaintext = plaintext.toLowerCase();
    var plaintextnum = [];
    var i;
    for (i=0; i < plaintext.length; i++) {
        plaintextnum[i] = lton(plaintext.substr(i,1));
    }
    return plaintextnum;
}


function mslice(plaintextnum, key) {
    var plainm=[];
    for (var i=0; i < key.length; ++i) {
        plainm[i] = [plaintextnum[i*3],plaintextnum[i*3+1],plaintextnum[i*3+2]];
    }
    return plainm;
}


function hillcypher(plain) {
    multiply(mslice(textconversion(plain), [[12,18,13],[0,20,14],[10,12,18]]), [[12,18,13],[0,20,14],[10,12,18]]);
}

function multiply(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
          m[r][c] = m[r][c]%26;
        
        }
      }
    }
    return m;
}

var plain='catsatmat';

document.getElementById('print').innerHTML = hillcypher(plain, [[12,18,13],[0,20,14],[10,12,18]])