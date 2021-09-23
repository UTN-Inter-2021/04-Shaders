#ifdef GL_ES
precision mediump float;
#endif


void main(){
    vec3 color=vec3(0.1843, 0.3216, 0.6157);
    gl_FragColor = vec4(color,1.0);
}


