function lton(l) {
    var charcode = (l.charCodeAt(0))-97;
    return charcode;
}

function textconversion(plaintext) {
    plaintext = plaintext.toLowerCase();
    var plaintextnum = [];
    var i;
    for (i=0; i < plaintext.length; i++) {
        plaintextnum[i] = lton(plaintext.substr(i,1));
    }
    return plaintextnum
}


function mslice(plaintextnum, key) {
    var key=[[12,18,13],[0,20,14],[10,12,18]],
    for (var i=0; i < key.length; ++i) {
        
    }

}


function hillcypher(plaintextnum, key) {
    var keydim = Math.sqrt(length(key));
    var cyphertextnum  = [];
    var i; var j;
    for (i=0; i < plaintextnum.length; i++) {
        for (j=0; j < keydim; j++) {
            cyphertextnum[i] += (plaintextnum[i])*(key[j])
        }

    }
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
        }
      }
    }
    return m;
  }
  