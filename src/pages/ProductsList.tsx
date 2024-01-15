import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Skeletons from '../widgets/ProductsList/Skeletons';
import ProductsListDisplay from '../widgets/ProductsList/ProductsList';
import { UseInfiniteData } from '../services/ProductsList/infiniteData';
import TopCategories from '../widgets/ProductsList/Categories/TopCategories';

const ProductsList: React.FunctionComponent = () => {
	const [searchParams] = useSearchParams();
	//set the category state, then pass it to change the query unique key to refresh the query:
	const os = searchParams.get('os');
	const year = searchParams.get('year');
	const brand = searchParams.get('brand');
	const toCategory = searchParams.get('toCategory');
	const { data, isSuccess, hasNextPage, fetchNextPage, isLoading } = UseInfiniteData(toCategory, year, os, brand);

	//mount the component every time that the hasNextPage is checked:
	useEffect(() => {
		//fetching the next page onScroll:
		let fetching: boolean = false;
		const handleScroll = async (e: any) => {
			const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
			if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
				fetching = true;
				if (hasNextPage) await fetchNextPage();
				fetching = false;
			}
		};

		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [fetchNextPage, hasNextPage]);

	//data to display: (2 items)
	const items = (data: any) => {
		const updated = data.pages.length - 1;
		return data.pages[updated];
	};

	return (
		<Box sx={{ height: '100vh' }}>
			<TopCategories />
			{isLoading && <Skeletons />}
			{isSuccess && <ProductsListDisplay items={items} data={data} />}
		</Box>
	);
};

export default ProductsList;
