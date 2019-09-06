

let ranges = document.getElementsByClassName('range');
document.body.style.background = `rgba(255, 255, 255, 1)`;

let r_value = 255;
let g_value = 255;
let b_value = 255;
let opacity = 1;

for( let i = 0; i < ranges.length; i++ ){
	ranges[i].addEventListener('input', function( event ){
		
		updateValue(i, Number(event.target.value));
	});
}

function updateValue(index, value){

	switch( index ){
		case 0: r_value = value; break;
		case 1: g_value = value; break;
		case 2: b_value = value; break;
		case 3: opacity = value; break;
	}

	document.body.style.background = `rgba(${ r_value }, ${ g_value }, ${ b_value }, ${ opacity })`;

	let rgbaInput = document.getElementById('generated-color');
	rgbaInput.value = `rgba(${ r_value }, ${ g_value }, ${ b_value }, ${ opacity })`;
	rgbaInput.style.background = `rgba(${ r_value }, ${ g_value }, ${ b_value }, ${ opacity })`;
	document.getElementById('theme-color').content = `rgba(${ r_value }, ${ g_value }, ${ b_value }, ${ opacity })`;
}