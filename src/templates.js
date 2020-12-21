import {row, col, css} from './utils';

function title(block) {
	const {tag = 'h1', styles} = block.options;
	return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function text(block) {
return row(col(`<p>${block.value}</p>`));
}

function columns(block) {
	const htmlColumn = block.value.map(col).join('');
	return row(htmlColumn);
}

function image(block) {
	return row(`<img src="${block.value}" />`);
}

export const templates = {
	title,
	text,
	columns,
	image
};