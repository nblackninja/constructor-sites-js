import {row, col, css} from '../utils';

export class Block {
	constructor(value, options) {
		this.options = options;
		this.value = value;
	}

	toHTML() {
		throw new Error('Метод toHTML не реализован');
	}
}

export class TitleBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		const {tag = 'h1', styles} = this.options;
		return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
	}
}

export class ImageBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		const {imageStyles, alt, styles} = this.options;
		return row(`<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}" />`, css(styles));
	}
}

export class ColumnsBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		const htmlColumn = this.value.map(col).join('');
		return row(htmlColumn, css(this.options.styles));
	}
}	

export class TextBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		return row(col(`<p>${this.value}</p>`), css(this.options.styles));
	}
}
