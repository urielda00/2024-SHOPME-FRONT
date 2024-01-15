import axios from 'axios';
import { useQuery } from 'react-query';

const fetchItem = (itemId: string | undefined) => {
	return axios.get(`${process.env.BASE_BACK_URL}/product/readSingleProduct/${itemId}`);
};

export const UseSingleItemData = (itemId: string | undefined) => {
	return useQuery(['singleItemPage', itemId], () => fetchItem(itemId), {
		refetchInterval: 1000 * 60 * 2,
		refetchIntervalInBackground: true,
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 2,
		select: (data) => {
			return data.data;
		},
	});
};
