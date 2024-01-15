// Address Slice:
export interface InitialAddressState {
	isAddress: {
		Zip: string | undefined;
		City: string | undefined;
		Region: string | undefined;
		Country: string | undefined;
		LastName: string | undefined;
		FirstName: string | undefined;
		AddressLine: string | undefined;
	};
}

// Cart Slice:
export interface InitialCartState {
	cart: any;
	totalPrice: number;
	totalQuantity: number;
	warningMessage: null | string | boolean;
}

export type IsLoggedAndUserName = string | null;

// Order Slice:
export interface InitialOrderState {
	test: string;
}

// User Slice:
export interface InitialUserState {
	profile: string;
	user: boolean | undefined;
	loginError: boolean | string;
	isAdmin: boolean | undefined;
	userId: string | undefined | boolean;
}
