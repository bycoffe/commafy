# Commafy

Commafy is a bookmarklet that adds thousands separators to numbers on a web page.

It was initially created to make reading FEC reports easier, but it works on any web page.

To use, drag the following link to your bookmark bar: <a href='javascript:(function(){var%20a=document.body.innerHTML,b,c,d,e=a.match(/\b\d{3,}\b/gm),f={},g=function(a){b=/(\d+)(\d{3})/;while(b.test(a)){a=a.replace(b,"$1"+","+"$2")}return%20a};for(c=0,d=e.length;c<d;c++){if(e[c]in%20f){continue}f[e[c]]=1;b=new%20RegExp(e[c],"g");a=a.replace(b,g(e[c]))}document.body.innerHTML=a})()' title="commafy">commafy</a>

## Notes & Warnings

Commafy currently supports only commas as a thousands separator.

Commafy will add thousands separators to *every* set of numeric digits with spaces or other word boundaries around it. This sometimes results in false positives (in the digits that represent years or ZIP codes, for example) and in parts of pages appearing broken.
