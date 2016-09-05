var tmax_options = {
  delay: 0.25, // init pause time
  repeat: -1, // make it repeat
  repeatDelay: 0.25, // delay this amount on repeat
  yoyo: true // also play sequence in reverse
};

var svg_length  = $('svg.blue-quartz > polygon').length,
    svg_shapes  = [],
    stagger_val = 0.00475,
    duration    = 2.5;

var tmax_tl = new TimelineMax(tmax_options);

for (var i = 1, l = svg_length; i <= l; i++) {
  svg_shapes.push($('svg.blue-quartz > polygon:nth-of-type('+ i +')'));
}

var stagger_opts_from = {
  css: {
    scale: 0,
    transformOrigin: 'center center',
    opacity: 0
  },
  ease: Elastic.easeInOut,
  force3D: true
};

var stagger_opts_to = {
  css: {
    scale: 1,
    opacity: 1,
  },
  ease: Elastic.easeInOut,
  force3D: true
};

tmax_tl.staggerFromTo(svg_shapes, duration, stagger_opts_from, stagger_opts_to, stagger_val, 0);
