var pushButton = function(){
    var pass_hash;
    sha256('password').then(hash => hash_ivent(hash))
    console.log(pass_hash)
    if(pass_hash == ''){

    }
    window.location.href = '../admin/index.html';
};

function hash_ivent(hash){
    pass_hash = hash
}

async function sha256(text){
    const uint8  = new TextEncoder().encode(text)
    const digest = await crypto.subtle.digest('SHA-256', uint8)
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
}