/*
    Chrono
    Descrição: Cronômetro com métodos start, stop, reset e getTime.
    Criado por Janderson costa em 10/10/2016.

    Uso: ver demo.html
*/

function Chrono() {
	var _this = this,
		H = 0,
		M = 0,
		S = 0,
		interval;

	this.isStoped = true;
	this.isRunning = false;

	this.start = function(time, callback) {
		// time: "hh:mm:ss"

		_this.isRunning = true;
		_this.isStoped = false;

		if (time) {
			time = time.split(":");
			H = Number(time[0] || 0);
			M = Number(time[1] || 0);
			S = Number(time[2] || 0);
		}

		if (interval)
			clearInterval(interval);

		interval = setInterval(function() {
			setS();

			if (callback)
				callback(formatTime());
		}, 1000);
	};

	this.stop = function() {
		_this.isStoped = true;
		_this.isRunning = false;
		clearInterval(interval);
	};

	this.reset = function() {
		H = 0;
		M = 0;
		S = 0;
	};

	this.getTime = function() {
		return formatTime();
	};

	function setS() {
		if (S < 59) {
			S += 1;
		} else {
			S = 0;
			setM();
		}
	}

	function setM() {
		if (M < 59) {
			M += 1;
		} else {
			M = 0;
			setH();
		}
	}

	function setH() {
		H += 1;
	}

	function formatTime() {
		var h = H < 10 ? "0" + H : H,
			m = M < 10 ? "0" + M : M,
			s = S < 10 ? "0" + S : S;

		return h + ":" + m + ":" + s;
	}
}
