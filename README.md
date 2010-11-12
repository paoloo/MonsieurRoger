Monsieur Roger

A simple jquery implementation of konami code with a flying penis example. A tribute to a friend and connoisseur of flying penises: Rogers a.k.a Monsieur Roger

var _codigo = "38384040373937396665";
is the konami code, if you want to use another code, just put an ascii chain over there.
All other params are on the start of the file

on line 45, there is a bonus, something I've found somewhere on a code: after code is fully inserted, buffer isn't cleaned, only the last letter, so, after the code, just press the last letter(A) multiple times for a cascade effect. If you don't want that, change codigo_buffer = _codigo.substring(0,_codigo.length-2); to codigo_buffer = "";

