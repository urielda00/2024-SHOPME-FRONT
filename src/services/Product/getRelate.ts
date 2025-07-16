import axios from 'axios';
import { useQuery } from 'react-query';

const fetchItem = (itemCategory: string | null) => {
	return axios.get(`${process.env.BASE_BACK_URL}/product/readRelateProducts?category=${itemCategory}`);
};

export const UseRelateItemsData = (itemCategory: string | null) => {
	let query = useQuery(['singleItemPage', itemCategory], () => fetchItem(itemCategory), {
		refetchInterval: 1000 * 60 * 2,
		refetchIntervalInBackground: true,
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 2,
		select: (data) => {
			return data.data;
		},
	});
	return query;
};
