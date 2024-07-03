var pass_hash;
let pass_input = document.getElementById('pass');

pass_input.addEventListener("keydown", keydown);

function keydown(e){
    if (e.key === "Enter") {
        authentication();
      }
}

var pushButton = function(){
    authentication();
};

function authentication(){
    document.getElementById('error_text').textContent = '';//エラー表示のクリア

    sha256(pass_input.value).then(hash => hash_ivent(hash));//入力された文字のハッシュ化
        
    if(pass_hash == '928ec81630eb87325aa5202f23809cfa8c86c798680826d57f8657b650d2f64a'){
        /*キーを作り保存する*/
        var random = Math.floor( Math.random() * 73917287314); //乱数発生
        var key = random * 853; //キー化
        localStorage.setItem("kagi",key);//LocalStrageに保存

        /*トップページへ飛ぶ*/
        window.location.href = '../index.html';
    }else{
            document.getElementById('error_text').textContent = 'パスワードが違います';
    }
}

/*ハッシュ化文字列の代入*/
function hash_ivent(hash){
    pass_hash = hash;
    return;
}


/*ハッシュ化関数*/
async function sha256(text){
    const uint8  = new TextEncoder().encode(text)
    const digest = await crypto.subtle.digest('SHA-256', uint8)
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
}