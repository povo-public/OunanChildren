window.onload = function () {
    const storage = localStorage;
    storage.getItem('key')
    if(Number.isInteger(storage.getItem('key')/853) || storage.getItem('key') != null){
        
    }else{
        window.location.href = './login/index.html';
    }
};