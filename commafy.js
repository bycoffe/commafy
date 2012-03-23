(function(){
    var text = document.body.innerHTML,
        regex,
        i,
        len,
        matches = text.match(/\b\d{3,}\b/gm),
        uniques = {},
        commafy = function (str) {
            regex = /(\d+)(\d{3})/;
            while (regex.test(str)) {
                str = str.replace(regex, '$1' + ',' + '$2'); 
            }
            return str;
        };
    for (i=0, len=matches.length; i<len; i++) {
        if (matches[i] in uniques) {
            continue;
        };
        uniques[matches[i]] = 1;
        regex = new RegExp(matches[i], 'g');
        text = text.replace(regex, commafy(matches[i]));
    };
    document.body.innerHTML = text;
})();
