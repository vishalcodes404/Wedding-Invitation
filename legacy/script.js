(function(){
  var $=function(i){return document.getElementById(i)};
  var intro=$('intro'),song=$('song'),btn=$('music'),ac,tm,useTune=false,playing=false;

  // ---- music: plays assets/song.mp3 if present, else a soft generated tune ----
  song.addEventListener('error',function(){useTune=true;if(playing){playing=false;start()}});
  var notes=[392,440,523.3,587.3,659.3,784,659.3,587.3,523.3,440];
  function note(f){var o=ac.createOscillator(),g=ac.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(0,ac.currentTime);g.gain.linearRampToValueAtTime(.05,ac.currentTime+.05);g.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+1.8);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+1.9)}
  function tune(){try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();ac.resume();var i=0;note(notes[0]);tm=setInterval(function(){note(notes[++i%notes.length])},700)}catch(e){}}
  function start(){
    if(playing)return;playing=true;btn.classList.add('on');
    if(useTune){tune();return}
    var p=song.play();if(p&&p.catch)p.catch(function(){useTune=true;tune()});
  }
  function stop(){playing=false;btn.classList.remove('on');song.pause();if(tm){clearInterval(tm);tm=null}}
  btn.onclick=function(){playing?stop():start()};

  // ---- intro: tap badge to open ----
  function openInvite(){
    if(intro.classList.contains('go'))return;
    intro.classList.add('go');
    setTimeout(function(){document.body.classList.add('opened')},900);
    setTimeout(function(){intro.style.display='none'},2300);
    start();
  }
  $('badge').onclick=openInvite;

  // ---- golden gates ----
  $('ring').onclick=function(){$('gates').classList.add('open')};

  // ---- countdown to 13 Nov 2026, 5:00 AM IST ----
  var target=new Date('2026-11-13T05:00:00+05:30').getTime(),cd=$('cd');
  function tick(){
    var d=Math.max(0,target-Date.now()),v=[Math.floor(d/864e5),Math.floor(d%864e5/36e5),Math.floor(d%36e5/6e4),Math.floor(d%6e4/1e3)],l=['DAYS','HOURS','MINS','SECS'];
    cd.innerHTML=v.map(function(x,i){return '<div><b>'+x+'</b><span>'+l[i]+'</span></div>'}).join('');
  }
  tick();setInterval(tick,1000);

  // ---- RSVP on WhatsApp (change the number here) ----
  $('wa').href='https://wa.me/919894882269?text='+encodeURIComponent('Hello! I will attend the wedding of Sunil Kumar & Santhiya.');

  // ---- fade-in on scroll ----
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add('in')})},{threshold:.12});
  document.querySelectorAll('.fade').forEach(function(e){io.observe(e)});
})();
