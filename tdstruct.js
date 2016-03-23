
var ns = {
    svg: 'http://www.w3.org/2000/svg',
    xlink: 'http://www.w3.org/1999/xlink',
    xhtml: 'http://www.w3.org/1999/xhtml'
}

function toHtml (td) {
    return '<!doctype html>\n' + parseTDStruct(td);
}

function parseTDStruct (td) {
    var html = '',
        ident = td.shift(),
        classlist = [],
        id,
        elem,
        elemname,
        identparts = ident.split(/([\.#])/);
    identparts.forEach(function (identpart, i) {
        if (i === 0) {
            nsparts = identpart.split(':');
            if (ns[nsparts[0]]) {
                elem = 'window.document.createElementNS(ns[nsparts[0]], nsparts[1] || nsparts[0])';
            } else {
                elemname = (nsparts[1] || nsparts[0]);
                elem = '<' + elemname;
            }
        } else {
            if (elem && identparts[i - 1] === '.') {
                classlist.push(identpart);
            } else if (identparts[i - 1] === '#') {
                id = identpart;
            }
        }
    });
    if (id) {
        elem += ' id="' + id + '"';
    }
    if (classlist.length > 0) {
        elem += ' class="' + classlist.join(' ') + '"';
    }
    td.forEach(function (tdparam) {
        if (typeof tdparam === 'object' && !Array.isArray(tdparam)) {
            Object.keys(tdparam).forEach(function (attr) {
                elem += ' ' + attr + '="' + tdparam[attr] + '"';
            });
        }
    });
   html += elem + '>';
    td.forEach(function (tdparam) {
        if (typeof tdparam === 'object') {
            if (Array.isArray(tdparam)) {
                html += parseTDStruct(tdparam);
            }
        } else {
            html += tdparam;
        }
    });
    html += '</' + elemname + '>';
    return html;
}


module.exports = {
    version: '0.1.0',
    toHtml: toHtml
}


