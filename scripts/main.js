var str = document.getElementById('introbit').innerHTML,
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    document.getElementById('introbit').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 80);
}());