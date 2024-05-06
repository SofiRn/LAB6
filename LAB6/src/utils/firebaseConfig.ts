import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import '../types/song';
import { Song } from '../types/song'
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyDkU8T7hNAzWtJVXl7AdGWZSxdpPh9eU6A',
	authDomain: 'dca-7d103.firebaseapp.com',
	projectId: 'dca-7d103',
	storageBucket: 'dca-7d103.appspot.com',
	messagingSenderId: '56439818923',
	appId: '1:56439818923:web:27778ebad5d9a2bad5c5ee',
	measurementId: 'G-Q92PG2S5V1',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addSong = async (song: Omit<Song, 'id'>) => {
	try {
		const docRef = await addDoc(collection(db, 'songs'), song);

		console.log('Document written with ID:', docRef.id);
	} catch (error) {
		console.error(error);
	}
};

export const getSongs = async () => {
	const querySnapshot = await getDocs(collection(db, 'songs'));
	const transformed: Array<Song> = [];

	querySnapshot.forEach((doc: any) => {
		const data: Omit<Song, 'id'> = doc.data() as any;
		transformed.push({ id: doc.id, ...data });
	});

	return transformed;
};

export default {
	addSong,
	getSongs,
};

// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
// });

// export default {
//   apiKey: "AIzaSyCsv8Q3gid_H4ZnOopsR2LsrfmVtENfCig",
//   authDomain: "ejemplo-18.firebaseapp.com",
//   projectId: "ejemplo-18",
//   storageBucket: "ejemplo-18.appspot.com",
//   messagingSenderId: "331457677220",
//   appId: "1:331457677220:web:b4e71557f7df5708126331",
// };

