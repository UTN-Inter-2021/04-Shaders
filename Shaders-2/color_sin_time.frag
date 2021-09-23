#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 color = vec3(sin(st.x*5.+u_time),cos(st.y*9.+u_time),0);

    gl_FragColor = vec4(color,1.0);
}

