// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    // bottom-left
    //vec2 bl = step(vec2(0.1),st);
    // quiero mover los bordes entonces uso la función sin
    // min_borde+sin(tiempo)*max_borde
    // uso ABS para que el sin no de valores negativos
    vec2 bl = step(vec2(0.1+abs(sin(u_time))*0.6),st); // Similar to ( X greater than 0.1 )
    float pct = bl.x * bl.y; // la multiplicación es como un AND

    // top-right
    vec2 tr = step(vec2(0.1),1.0-st);
    pct *= tr.x * tr.y;

    // al sumar un color todo lo que era 0.0 (negro) toma el color deseado
    // pero lo multiplico el color que quiero en el borde por el inverso de los pixels que
    // quedaron "prendidos" (1.0)
    // para el centro quiero un color verde
    color = vec3(1.0,0.0,0.0)*(1.0-vec3(pct))+vec3(pct)*vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}