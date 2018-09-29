const cv = document.getElementById('cv');
const ctx = cv.getContext('2d');

const img = document.getElementById('img1');
const upload_btn = document.getElementById("upload-button");
const save_btn = document.getElementById("save-button");

const mo = document.querySelector("#mo")
const size_range = document.querySelector("#size_range")
const size_span = document.querySelector("#size")

const init = () => {
    const img_width = img.naturalWidth
    const img_height = img.naturalHeight

    cv.width = img_width
    cv.height = img_height

    ctx.drawImage(img, 0, 0, img_width, img_height)
}


// 获取上传的文件
const getFile = () => {
    var reader = new FileReader();
    reader.readAsDataURL(upload_btn.files[0]);

    reader.onload = function () {
        img.src = reader.result; // 是一个base64 Data URL字符串
    }
}


const change_size = () => {
    size_span.textContent = size_range.value
}


// 保存画板
let saved = false
save_btn.onclick = (e) => {

    if (!saved) {
        cv.toBlob(function (blob) {
            url = URL.createObjectURL(blob);
            // URL.revokeObjectURL(url);
            e.target.value = "再点一下就可以另存为到本地了"
            e.target.parentElement.href = url;
            e.target.parentElement.download = "泼墨画板.png"
        });
        saved = true
    }
    else {
        e.target.value = "保存画板"
    }
}

cv.addEventListener("click", (e) => {
    const _width = size_range.value || 160
    const _height = _width * 1.25

    ctx.drawImage(mo, e.layerX - 8 - _width / 2, e.layerY - 8 - _height / 2, _width, _height)
})


img.onload = init
upload_btn.onchange = getFile

init()
change_size()
