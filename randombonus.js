function randombonus() {
    var link;
    var x = Math.floor(Math.random()*17);
    switch (x) {
        case 0: 
            link='http://endless.horse/';
            break;
        case 1:
            link='http://www.koalastothemax.com/';
            break;
        case 2:
            link='http://www.rrrgggbbb.com/';
            break;
        case 3:
            link='http://eelslap.com/';
            break;
        case 4:
            link='https://theuselessweb.site/blueballmachine/';
            break;
        case 5:
            link='https://chickenonaraft.com/';
            break;
        case 6:
            link='https://sinerider.com/';
            break;
        case 7:
            link='https://www.youtube.com/playlist?list=PLL0602iqqyizcNoYCgDEZe7QgHEMMpvje';
            break;
        case 8:
            link='https://woodgears.ca/eyeball/';
            break;
        case 9:
            link='http://www.randomthink.net/labs/html5drums/#10001000100010000010001000100010000000000000000000000000000000001000100000000100110110000001010010101011101111101010101010010101101010111101010100000000000000000000000000000000000000000000000000000000000000000000000000000000|60';
            break;
        case 10:
            link='https://lab.hakim.se/keylight/03b/#410x761_270x641_283x379_401x311_638x306_762x392_781x629_642x755_2';
            break;
        case 11:
            link='http://www.fallingfalling.com/';
            break;
        case 12:
            link='http://www.electricboogiewoogie.com/';
            break;
        case 13:
            link='http://www.bureauofcommunication.com/compose/unsolicitedfeedback';
            break;
        case 14:
            link='http://fluky.io/';
            break;
        case 15:
            link='http://tylervigen.com/page?page=1';
            break;
        case 16:
            link='https://cliclock.netlify.com/';
    }
    document.getElementById('bonus').href=link;
}