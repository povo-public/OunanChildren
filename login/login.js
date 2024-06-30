var pass_hash;

var pushButton = function(){
    let error_text = document.getElementById('error_text');
    error_text.value = '';

    let pass_input = document.getElementById('pass');
    sha256(pass_input.value).then(hash => hash_ivent(hash));
    
    if(pass_hash == '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'){
        window.location.href = '../admin/index.html';
    }else{
        error_text.value = '入力内容が不正です';
    }
};

function hash_ivent(hash){
    pass_hash = hash;
    return;
}

async function sha256(text){
    const uint8  = new TextEncoder().encode(text)
    const digest = await crypto.subtle.digest('SHA-256', uint8)
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
}