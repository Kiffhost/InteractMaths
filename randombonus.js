function randombonus() {
    var link;
    var x = Math.floor(Math.random()*5);
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
        
    }
    document.getElementById('bonus').href=link;
}