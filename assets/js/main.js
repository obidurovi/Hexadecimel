const root = document.getElementById('root');
const btn = document.getElementById('change-btn');
const hexcode = document.getElementById('hexcode');

window.onload = () => {
	main();
};

function generateHexColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}


btn.onclick = () => {
    const bgColor = generateHexColor();
	root.style.backgroundColor = bgColor;
    hexcode.value = bgColor;
}