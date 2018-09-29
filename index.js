const cv = document.getElementById('cv');
const ctx = cv.getContext('2d');

const img = document.getElementById('img1');

const init = () => {
    const img_width = img.naturalWidth
    const img_height = img.naturalHeight

    cv.width = img_width
    cv.height = img_height

    ctx.drawImage(img, 0, 0, img_width, img_height)
}

init()

cv.addEventListener("click", (e) => {
    const mo = document.querySelector("#mo")

    const width = 160
    const height = 200
    ctx.drawImage(mo, e.layerX - 8 - width / 2, e.layerY - 8 - height / 2, width, height)
})
