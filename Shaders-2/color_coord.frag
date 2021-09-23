#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    vec3 color=vec3(0.3,0.5,0.9);

    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    color = vec3(st.x,st.y,0);

    gl_FragColor = vec4(color,1.0);
}