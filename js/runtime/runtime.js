var now = new Date; function createtime() {
    var t = new Date("10/01/2022 00:00:00");
    now.setTime(now.getTime() + 250); var e = (now - t) / 1e3 / 60 / 60 / 24, a = Math.floor(e), n = (now - t) / 1e3 / 60 / 60 - 24 * a, r = Math.floor(n); 1 == String(r).length && (r = "0" + r);
    var s = (now - t) / 1e3 / 60 - 1440 * a - 60 * r, i = Math.floor(s); 1 == String(i).length && (i = "0" + i); var o = (now - t) / 1e3 - 86400 * a - 3600 * r - 60 * i, l = Math.round(o); 1 == String(l).length && (l = "0" + l); let g = "";
    g = r < 18 && r >= 9 ? `<img class='boardsign' src='/img/bg/moyu.svg' 
    title='加油努力，未来等你'><span class='textTip'> <br> 本站居然运行了 ${a} 天</span><span id='runtime'> ${r} 小时 ${i} 分 ${l} 秒 </span> 
    <i class='fas fa-heartbeat' style='color:red'></i>` : `<img class='boardsign' src='/img/bg/moyu2.svg' title='下班了，休息休息，再战百世轮回！'>
    <span class='textTip'> <br> 本站居然运行了 ${a} 天</span><span id='runtime'> ${r} 小时 ${i} 分 ${l} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`, document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = g)
} setInterval((() => { createtime() }), 250);