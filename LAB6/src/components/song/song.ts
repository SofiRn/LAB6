import styles from './song.css';

import { loadCss } from '../../utils/styles';
// import '../../export';

export enum Attribute {
	'image' = 'image',
	'titlee' = 'titlee',
	'album' = 'album',
	'date_added' = 'date_added',
	'duration' = 'duration',
	'autor' = 'autor',
}

class Song extends HTMLElement {
	image?: string;
	titlee?: string;
	autor?: string;
	album?: string;
	date_added?: string;
	duration?: string;
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			titlee: null,
			autor: null,
			album: null,
			date_added: null,
			duration: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			loadCss(this, styles);
			this.shadowRoot.innerHTML = `
      <section>

      <img src="${this.image}">
      <h3 class="text">${this.titlee}</h3>
      <p class="text">${this.autor}</p>
      <p class="text">${this.album}</p>
      <p class="text">${this.date_added}</p>
      <p class="text">${this.duration}</p>

      </section>
      `;
		}
		const cssProduct = this.ownerDocument.createElement('style');
		cssProduct.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProduct);
	}
}

export default Song;
customElements.define('my-song', Song);
