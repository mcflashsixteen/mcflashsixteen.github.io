let c = document.querySelector("canvas");
let ctx = c.getContext("2d");

let width = c.width;
let height = c.height;

let n = 20; 
let dx = width / n;
let dy = height / n;

function circle(t, r = 1, h = 0, k = 0) { 
    return [h + r * Math.cos(t), k + r * Math.sin(t)];
}

let N = 2 * n;
let origin = [width / 2, height / 2];
let r = 50;
let points = Array.from ( {length: N }, () => [0.0, 0.0]);
ctx.fillRect(origin[0], origin[1] , 1, 1); 
for (let i= 1; i < n; i++) { 
    let t = i  * (2* Math.PI / (N-1));
    let point = circle(t , r, origin[0], origin[1]); 
    ctx.fillRect(point[0], point[1], 1, 1);
    t = 2 * (i * (2 * Math.PI / (N-1)));
    let p = circle (t, r, origin[0], origin[1]);
    points[i] = p;
    ctx.fillRect(p[0], p[1], 1, 1);

}

for (let i= n; i < N; i++) { 
    let from = points[i - n];
    let to = points[(2 * i) % N];
    ctx.beginPath();
    ctx.moveTo(from[0], from[1]);
    ctx.lineTo(to[0], to[1]);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "pink";
    ctx.stroke();

    

}