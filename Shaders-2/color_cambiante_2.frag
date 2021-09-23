#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec3 color=vec3(0.3,0.5,0.9);
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    float pct = 0.0;

    // distancia del pixel ...
    // se la cambiamos a cada instante. Y sabiendo que sin(x) va y vuelve
    pct = distance(st,vec2(sin(u_time)));

    // en función de la distancia más componente roja, y menos de las otras
    // como cerca del centro la distancia es casi 0 --> tiene a 0 (negro)
    color = vec3(pct*0.95,pct*.34,pct*0.2);

    gl_FragColor = vec4(color,0.5);
}
