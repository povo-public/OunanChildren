window.onload = function () {
    const storage = localStorage;
    if(!Number.isInteger(storage.getItem('kagi')/853)){
        window.location.href = './login/index.html';
    };
    if(storage.getItem('kagi') == null){
        window.location.href = './login/index.html';
    };
};