import React, { FC } from 'react';
import { Checkbox, FormControlLabel, Box } from '@mui/material';
import { brandsList } from '../../../../utils/data/productsData';
import { useFilterNavigation } from '../../../../hooks/useFilterNavigation';
import { FilterBrandsProps as Props } from '../../../../interfaces/productList.interface';

const FilterBrands: FC<Props> = ({ brand }) => {
	const { addFilter, currentBrand, currentCategory } = useFilterNavigation();

	const renderCheckboxList = (options: string[]) => (
		<Box display='grid'>
			{options.map((item) => (
				<FormControlLabel key={item} control={<Checkbox />} label={item} checked={currentBrand === item} onClick={() => addFilter({ brand: item })} />
			))}
		</Box>
	);

	const handleTest = (brand: string) => {
		switch (brand) {
			case 'phone':
				return renderCheckboxList(brandsList.phones);
			case 'watches':
				return renderCheckboxList(brandsList.watches);
			case 'tablets':
				return renderCheckboxList(brandsList.tablets);
			case 'laptops':
			case 'pc':
				return renderCheckboxList(brandsList.laptops);
			case 'headphones':
				return renderCheckboxList(brandsList.headphones);
			default:
				return null;
		}
	};

	return <div>{handleTest(brand)}</div>;
};

export default FilterBrands;
