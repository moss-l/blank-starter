document.getElementById("piano");



const keyMap = {
  a: { note: "C4", freq: 261.63 },
  w: { note: "C#4", freq: 277.18 },
  s: { note: "D4", freq: 293.66 },
  e: { note: "D#4", freq: 311.13 },
  d: { note: "E4", freq: 329.63 },
  f: { note: "F4", freq: 349.23 },
  t: { note: "F#4", freq: 369.99 },
  g: { note: "G4", freq: 392.00 },
  y: { note: "G#4", freq: 415.30 },
  h: { note: "A4", freq: 440.00 },
  u: { note: "A#4", freq: 466.16 },
  j: { note: "B4", freq: 493.88 },
  k: { note: "C5", freq: 523.25 }
};

var sawToothWave = new Pizzicato.Sound({ 
    source: 'wave',
    Options: {
        type: 'sawtooth',
        frequency: keyMap
    }
}, function(error) {
    if (!error)
        console.log('Sawtooth loaded');
});

/* ima leave this cooked until i have more time to test this */