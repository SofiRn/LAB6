import './components/export';
import './types/song';
import styles from './components/song/song.css';
import { getSongs } from './utils/firebaseConfig';
import { Song } from './components/song/song';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		// const dataProducts = await getProducts();
		// console.log(dataProducts);
		const data = await getSongs();
		console.log(data);
		this.render(data);
	}

	async render(data: Song[]) {
		// Usa el argumento de datos tipeado
		data.forEach((element) => {
			const something = this.ownerDocument.createElement('my-song');
			something.setAttribute('image', element.image); // Coincide con los nombres de campo
			something.setAttribute('titlee', element.title);
			something.setAttribute('autor', element.autor);
			something.setAttribute('album', element.album);
			something.setAttribute('date_added', element.date_added);
			something.setAttribute('duration', element.duration);
			this.shadowRoot?.appendChild(something);
		});
	}
}

customElements.define('app-container', AppContainer);
