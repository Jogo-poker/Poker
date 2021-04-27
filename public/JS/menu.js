window.onload = () =>{
    MenuRetratio();
}

function MenuRetratio(){
    const menu = document.querySelector('.menuRetratio'); 
    let AbrirMenuind = 0;
    const click = document.querySelector('.option i');
    click.addEventListener("click", () =>{
        AbrirMenu(AbrirMenuind);
        AbrirMenuind++;
    })
    function AbrirMenu(n) {
        console.log(n);
        const menu = document.querySelector('.menuRetratio');
        // if(menu.style.display == 'block')
        if(n % 2 == 0){
            menu.style.display = "block";
        }else if(n % 2 == 1){
            menu.style.display = "none";
        }
    }
}

function redire(){
    redireAccont();
    function redireAccont(){
        window.location.href = "/login";
    }
}

