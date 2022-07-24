interface Geo {
	type: string,
	coordinates: number[]
}

interface Props {
	name: string,
	dcode: string,
	type: string,
	address: string,
	tel: string,
	fax: string,
	web: string
}

export interface College {
	type: string,
	id: string,
	geometry: Geo,
	getmetry_name: string,
	properties: Props
}