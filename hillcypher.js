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