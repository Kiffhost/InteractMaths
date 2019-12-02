function lton(l) {
    var charcode = (l.charCodeAt(0))-97;
    return charcode;
}

function numconversion(ciphernum) {
    var ciphertext = '';
    for (var i=0; i < ciphernum.length; i++){
        if (!isNaN(ciphernum[i])) {
            ciphertext += String.fromCharCode(ciphernum[i]+97);
        }
        else {break;}
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

function unflatten(a, d) { //d for dimension of the matrix, I've been using 3x3
    var m = new Array(a.length/d), i=0;
    for (var r=0; r<a.length/d; ++r) {
        m[r] = new Array(d)
        for (var c=0; c < d; ++c) {
            m[r][c] = a[i]
            ++i
        }
    }
    return m;
}

function textconversion(plaintext) {
    plaintext = plaintext.toLowerCase();
    var end = plaintext.length%3;
    switch (end) {
        case 0:
            break;
        case 1:
            plaintext = plaintext.concat('vv');
            break;
        case 2:
            plaintext = plaintext.concat('v');
            break;
    }
    var plaintextnum = [];
    var i=0;
    for (i=0; i < plaintext.length; ++i) {
        if (-1 < lton(plaintext.substr(i,1)) < 26 ) {
            plaintextnum[i] = lton(plaintext.substr(i,1));
        } else {
            break;
        }
    }
    return plaintextnum;
}


function mslice(plaintextnum, d) {
    var plainm=[], i=0;
    for (var r=0; r < plaintextnum.length/d; ++r) {
        plainm[r] = []
        for (var c=0; c < d; ++c) {
            plainm[r][c] = plaintextnum[i]
            ++i
        }
    }
    return plainm;
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



function inversify(m) {
    var det=0, dad=new Array(m.length);
    for (var r=0; r < m.length; ++r) {
        for (var c=0; r < m[0].length; ++c) {
            dad[c] = new Array(m[0].length);
            dad[c][r]=0;
            switch (10*r+c) { //Cofactors written straight into transform
                case 0: //A
                    dad[c][r] = (m[1][1]*m[2][2]-m[3][2]*m[2][3]);
                    break;
                case 1: //B
                    dad[c][r] = -(m[1][0]*m[2][2]-m[1][2]*m[2][0]);
                    break;
                case 2: //C
                    dad[c][r] = (m[1][0]*m[2][1]-m[1][1]*m[2][0]);
                    break;
                case 10: //D
                    dad[c][r] = -(m[0][1]*m[2][2]-m[0][2]*m[2][1]);
                    break;
                case 11: //E
                    dad[c][r] = (m[0][0]*m[2][2]-m[0][2]*m[2][0]);
                    break;
                case 12: //F
                    dad[c][r] = -(m[0][0]*m[2][1]-m[0][1]*m[2][0]);
                    break;
                case 20: //G
                    dad[c][r] = (m[0][1]*m[1][2]-m[0][2]*m[1][1]);
                    break;
                case 21: //H
                    dad[c][r] = -(m[0][0]*m[1][2]-m[0][2]*m[1][0]);
                    break;
                case 22: //I
                    dad[c][r] = (m[0][0]*m[1][1]-m[0][1]*m[1][0]);
                    break;
            }
        }
    }
    det = m[0][0]*dad[0][0]+m[0][1]*dad[0][1]+m[0][2]*dad[0][2];
    for (var r=0; r < m.length; ++r) {
        for (var c=0; r < m[0].length; ++c) {
            dad[r][c] = (dad[r][c]/det)%26;
        }
    }
    return dad;
}





function hillcypher(plain, key) {
    var cypher = numconversion(flatten(multiply(mslice(textconversion(plain), key.length), key)));
    return cypher;
}

function decipher(ciphertext, invkey) {
    var truth = hillcypher(ciphertext, invkey);
    while (truth.substr(-1)=='v') {
        truth = truth.slice(0,-1);
    }
    return truth;
}


var plain='catsathatmatjathatkatcatfvv', key=[[6,24,1],[13,16,10],[20,17,15]], invkey=[[8,5,10],[21,8,21],[21,12,8]];

document.getElementById('print').innerHTML = hillcypher(plain, [[12,18,13],[0,20,14],[10,12,18]])