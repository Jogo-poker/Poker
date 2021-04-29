window.onload = () =>{
    menuLateral();  
}

function menuLateral(){
    console.log("oiiiiii");
    const opt_inf = document.querySelector(".opt_inf");
    const opt_hit = document.querySelector(".opt_hit");
    const opt_pri = document.querySelector(".opt_pri");
    const opt_amg = document.querySelector(".opt_amg");

    const inf = document.querySelector(".inf");
    const hit = document.querySelector(".hit");
    const pri = document.querySelector(".pri");
    const amg = document.querySelector(".amg");

    opt_inf.addEventListener("click", () =>{
        inf.style.display = 'flex';
        hit.style.display = 'none';
        pri.style.display = 'none';
        amg.style.display = 'none';

        opt_inf.style.background = '#1D2227';
        opt_hit.style.background = '#21262D';
        opt_pri.style.background = '#21262D';
        opt_amg.style.background = '#21262D';
    })

    opt_hit.addEventListener("click", () =>{
        inf.style.display = 'none';
        hit.style.display = 'flex';
        pri.style.display = 'none';
        amg.style.display = 'none';

        opt_hit.style.background = '#1D2227';
        opt_inf.style.background = '#21262D';
        opt_pri.style.background = '#21262D';
        opt_amg.style.background = '#21262D';
    })

    opt_pri.addEventListener("click", () =>{
        inf.style.display = 'none';
        hit.style.display = 'none';
        pri.style.display = 'flex';
        amg.style.display = 'none';

        opt_pri.style.background = '#1D2227';
        opt_inf.style.background = '#21262D';
        opt_hit.style.background = '#21262D';
        opt_amg.style.background = '#21262D';
    })

    opt_amg.addEventListener("click", () =>{
        inf.style.display = 'none';
        hit.style.display = 'none';
        pri.style.display = 'none';
        amg.style.display = 'flex';

        opt_amg.style.background = '#1D2227';
        opt_inf.style.background = '#21262D';
        opt_hit.style.background = '#21262D';
        opt_pri.style.background = '#21262D';
    })
}