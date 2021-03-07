window.onload = function(){
    var icon = document.querySelector('#Icon li');
    icon.addEventListener('focus', function(){
        AbrirMenu(1);
    })
    icon.addEventListener('blur', function(){
        AbrirMenu(0);
    })
}

function AbrirMenu(n) {
    var container = document.querySelector('#Icon li ul');

    if (n == 1) {
        container.style.display = 'block';
        setTimeout(function(){
            container.style.opacity = '1';
        }, 100);
    } else if (n == 0) {
        container.style.opacity = '0';
        setTimeout(function(){
            container.style.display = 'none';
        }, 300);
    }


}