const btn = document.querySelector('#btn');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color_code = document.querySelector('#color_code');

btn.addEventListener('click', function () {
    let hex_code = "#";
    for (let i = 0; i < 6; i++) {
        hex_code += hex[randomNumber()];
    }
    color_code.textContent = hex_code;
    document.body.style.backgroundColor = hex_code;
});

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}

const color_box = document.querySelector('#color_box');
const copy_icon = document.querySelector('#copy_icon');
const overlay_cover = document.querySelector('#overlay_cover');

color_box.addEventListener('click', function (event) {
    if (event.target.id == 'color_code' || event.target.id == 'copy_icon') 
    {
        let text_content = document.querySelector('#bgcolor_text');
        let input_element = document.createElement('TEXTAREA');
        input_element.value  = text_content.textContent;
        document.body.appendChild(input_element);
        input_element.select();
        document.execCommand("Copy");
        input_element.remove();

        overlay_cover.style.display = 'block';
        const heading = document.createElement('H1');
        copy_icon.style.color = 'rgb(4, 122, 4)';
        overlay_cover.appendChild(heading);

        setTimeout(function () {
            overlay_cover.style.display = 'none';
            copy_icon.style.color = 'black'
        
        }, 200);
        console.log("HEX Copied !!!");
    }
})





