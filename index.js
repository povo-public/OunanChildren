window.onload = function () {
    const storage = localStorage;
    if(Number.isSafeInteger(storage.getItem('key')/853)){

    }else{
        window.location.href = './login/index.html';
    }
};