// Monsieur Roger
var _q_pirocas = 5;
var vel_min = 5000;
var vel_max = 5500;
var tempo = 30;
var timer;
var _track = true;
var piroca = new Image();
var pirocas = new Array();
var habilitado = true;
var _codigo = "38384040373937396665";
var codigo_buffer = "";

var monsieur_roger = function () {
    if (!habilitado) return;
    var aleatorio = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
    piroca.src = 'data:image/png;base64,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';
    var _pos_x_inicial = -piroca.width,
        _pos_x_final = window.innerWidth + 50,
        _pos_y_inicial = $(window).height() + 500,
        _pos_y_final = -piroca.height - 500;
    for (var i = 0; i < _q_pirocas; i++) {
		pirocas[i] = new Image();
		pirocas[i].src = piroca.src;
        $(pirocas[i]).css({
            display: 'block',
            position: 'fixed',
            top: aleatorio(_pos_y_inicial, _pos_y_inicial + 50),
            left: _pos_x_inicial
        }).appendTo('body').animate(
		    {left: _pos_x_final, top: aleatorio(_pos_y_inicial, _pos_y_final)},
		    aleatorio(vel_min, vel_max),
		    function () { $(this).remove(); }
	    );
    }
}

$(document).keyup(function (e) {
    codigo_buffer += e.keyCode;
    console.log("press: "+e.keycode+" atual: "+codigo_buffer+"\n");
    if (_codigo.substring(0,codigo_buffer.length) == codigo_buffer) {
	if(_codigo == codigo_buffer){
		if (_track) { _track = false; }
			monsieur_roger();
			codigo_buffer = _codigo.substring(0,_codigo.length-2);
			if (timer) clearTimeout(timer);
			timer = setTimeout(function(){ codigo_buffer = ""; }, tempo * 1000);
		}
    } else {
		_track = true;
        codigo_buffer = "";
    }
});
