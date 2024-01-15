import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Checkbox, FormControlLabel } from '@mui/material';
import { brandsList } from '../../../../utils/data/productsData';
import { FilterBrandsProps as Props } from '../../../../interfaces/productList.interface';


const FilterBrands: React.FC<Props> = ({ brand }) => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const isCategory = searchParams.get('toCategory') || '';

	const handleAddFilter = (isCategory: string, isBrand?: string) => {
		navigate(`/productsList?toCategory=${isCategory}&brand=${isBrand}`);
	};

	const renderCheckboxList = (options: string[]) => (
		<div style={{ display: 'grid' }}>
			{options.map((item: string, index: number) => (
				<FormControlLabel
					key={index}
					control={<Checkbox />}
					label={item}
					checked={searchParams.get('brand') === item}
					onClick={() => handleAddFilter(isCategory, item)}
				/>
			))}
		</div>
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
				return renderCheckboxList(brandsList.laptops);
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
