import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Checkbox, FormControlLabel } from '@mui/material';
import { osCaseList } from '../../../../utils/data/productsData';
import { FilterOsProps as Props } from '../../../../interfaces/productList.interface';

const FilterOs: FC<Props> = ({ brand }) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	// URL Query variables:
	const isBrand: string = searchParams.get('brand') || '';
	const isCategory: string = searchParams.get('toCategory') || '';

	const handleAddFilter = (passedCategory: string, brand: string, os: string) => {
		navigate(`/productsList?toCategory=${passedCategory}&brand=${brand}&os=${os}`);
	};

	const handleTest = (brand: string | null) => {
		const renderCheckboxList = (options: string[]) => (
			<div style={{ display: 'grid' }}>
				{options.map((option: string) => (
					<FormControlLabel
						key={option}
						control={<Checkbox />}
						label={option}
						checked={searchParams.get('os') === option}
						onClick={() => handleAddFilter(isCategory, isBrand, option)}
					/>
				))}
			</div>
		);

		switch (brand) {
			case 'phone':
				return renderCheckboxList(osCaseList.phones);
			case 'watches':
				return renderCheckboxList(osCaseList.phones);
			case 'tablets':
				return renderCheckboxList(osCaseList.phones);
			case 'laptops':
				return renderCheckboxList(osCaseList.laptops);
			case 'pc':
				return renderCheckboxList(osCaseList.laptops);
			default:
				return null;
		}
	};

	return <div>{handleTest(brand)}</div>;
};
export default FilterOs;
