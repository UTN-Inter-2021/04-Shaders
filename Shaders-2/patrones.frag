#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circle(in vec2 _st, in float _radius){
    vec2 l = _st-vec2(0.5);
    return 1.-smoothstep(_radius-(_radius*0.01),
                         _radius+(_radius*0.01),
                         dot(l,l)*4.0);
}

vec2 spaces(in vec2 _st, in vec2 _num){
    return fract(_st*_num);
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0706, 0.8314, 0.1333);

    st = spaces(st,vec2(3.0)); 

    color = vec3(circle(st,0.5));

	gl_FragColor = vec4(color,1.0);
}