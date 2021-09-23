#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){

    // transformo las coord entre (-0.5 a 0.5)
    vec2 st = (gl_FragCoord.xy - u_resolution.xy * 0.5) / u_resolution.xy;

    vec3 color = vec3(ceil(st.x),ceil(st.y),0);

    gl_FragColor = vec4(color,1.0);
}