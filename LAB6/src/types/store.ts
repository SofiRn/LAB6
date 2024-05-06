import { Song } from './song';

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	songs: Song[];

	// something: {};
};

export enum songActions {
	'GETSONGS' = 'GETSONGS',
}



export interface GetsongsAction {
	action: songActions.GETSONGS;
	payload: Song[];
	// Pick<AppState, 'something'>;
}

export type Actions = GetsongsAction;
