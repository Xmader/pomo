const cv = document.getElementById('cv');
const ctx = cv.getContext('2d');

const img = document.getElementById('img1');
var uploadBtn = document.getElementById("upload-button");

const init = () => {
    const img_width = img.naturalWidth
    const img_height = img.naturalHeight

    cv.width = img_width
    cv.height = img_height

    ctx.drawImage(img, 0, 0, img_width, img_height)
}

cv.addEventListener("click", (e) => {
    const mo = document.querySelector("#mo")

    const width = 160
    const height = 200
    ctx.drawImage(mo, e.layerX - 8 - width / 2, e.layerY - 8 - height / 2, width, height)
})

img.onload = init
init()

// 获取上传的文件
const getFile = () => {
    var reader = new FileReader();
    reader.readAsDataURL(uploadBtn.files[0]);

    reader.onload = function () {
        img.src = reader.result; // 是一个base64 Data URL字符串
    }
}

uploadBtn.onchange = getFile
