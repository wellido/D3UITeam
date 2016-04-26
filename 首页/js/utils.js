var fixTime = function(a) {
		return 10 > a ? "0" + a : "" + a
	},
	ts2dt = function(a) {
		return new Date(1e3 * parseInt(a))
	},
	dt2ts = function(a) {
		return Math.floor(a.getTime() / 1e3)
	},
	ts2str = function(a) {
		var b = ts2dt(a);
		return b.getFullYear() + "-" + fixTime(b.getMonth() + 1) + "-" + fixTime(b.getDate()) + " " + fixTime(b.getHours()) + ":" + fixTime(b.getMinutes()) + ":" + fixTime(b.getSeconds())
	},
	dt2str = function(a) {
		return a.getFullYear() + "-" + fixTime(a.getMonth() + 1) + "-" + fixTime(a.getDate())
	},
	parseDatetime = function(a) {
		for (var b = /(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})/g, c = b.exec(a), d = 0; d < c.length; ++d) c[d] = parseInt(c[d], 10);
		var e = new Date(c[1], c[2] - 1, c[3], c[4], c[5], c[6]);
		if (e.getFullYear() == c[1] && e.getMonth() == c[2] - 1 && e.getDate() == c[3] && e.getHours() == c[4] && e.getMinutes() == c[5] && e.getSeconds() == c[6]) return e;
		throw new Error("invalid datetime")
	},
	restrict_bytes = function(a) {
		return a >= 10 ? Math.round(a) : a >= 1 ? Math.round(10 * a) / 10 : a >= .01 ? Math.round(100 * a) / 100 : .01
	},
	restrict_count = function(a) {
		var b = b || 7,
			c = Math.pow(10, b),
			d = "";
		return a >= c && (a = Math.round(a / 1e3), d = "K", a >= c / 10 && (a = Math.round(a / 1e3), d = "M")), a + d
	},
	propToQueryString = function(a) {
		var b, c = [];
		for (var d in a) b = "" + a[d], c.push(encodeURIComponent(d) + "=" + encodeURIComponent(a[d]));
		return c.join("&")
	},
	queryStringToProp = function(a) {
		var b = null,
			c = {},
			d = null,
			e = null,
			f = null,
			g = null,
			h = function(a, b) {
				return b ? a.replace(new RegExp("^[\\s" + b + "]+"), "").replace(new RegExp("[\\s" + b + "]+$"), "") : a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
			};
		if ("" === a.trim()) return c;
		a = h(a, "&?#"), b = a.split("&"), g = b.length;
		for (var i = 0, j = g; j > i; i++) f = b[i].split("="), d = decodeURIComponent(f.shift()), e = f.join("="), c[d] = decodeURIComponent(e);
		return c
	},
	cleanQueryString = function(a, b, c) {
		var d = window.parent,
			c = c || !0,
			e = d.location.search,
			f = queryStringToProp(e);
		if (c)
			for (var g in f) 0 == g.indexOf("dim_") && delete f[g];
		for (var h in b) delete f[b[h]];
		return $.extend(f, a), propToQueryString(f)
	},
	setCleanUrl = function(a, b, c) {
		var d = window.parent,
			e = d.location.origin + d.location.pathname,
			f = d.location.hash,
			g = cleanQueryString(a || {}, b, c);
		g && (e += "?" + g), f && (e += f), d.history.replaceState({}, 0, e)
	},
	print_table_in_console = function(a) {
		var b = window.SHOW_DATA_IN_CONSOLE,
			c = window.SHOW_DATA_IN_CONSOLE_LIMIT;
		try {
			b = top.window.SHOW_DATA_IN_CONSOLE, c = top.window.SHOW_DATA_IN_CONSOLE_LIMIT
		} catch (d) {}
		if (b) {
			var e = [];
			if (c)
				for (var f in a) c > f && e.push(a[f]);
			else e = a;
			console.table(e)
		}
	},
	formatString = function(a, b, c) {
		return c ? a.replace(/%\(\w+\)s/g, function(a) {
			return String(b[a.slice(2, -2)])
		}) : a.replace(/%s/g, function() {
			return String(b.shift())
		})
	};
window.print_table_in_console = print_table_in_console;