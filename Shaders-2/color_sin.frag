#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;


void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec3 color = vec3(sin(st.x*5.),cos(st.y*9.),0);


    gl_FragColor = vec4(color,1.0);
}