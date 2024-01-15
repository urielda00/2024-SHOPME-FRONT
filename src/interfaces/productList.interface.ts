// Categories:

export interface CategoriesProps {
	os: boolean;
	text: string;
	year: boolean;
	brand: boolean;
	isPanel: string;
	category: boolean;
}

// Filter Brand:
export interface FilterBrandsProps {
	brand: string;
}

// Filter Os:
export interface FilterOsProps {
	brand: string | null;
}

// Filter:
export interface FilterProps {
	isMedium: boolean;
	pStyle: React.CSSProperties;
}
