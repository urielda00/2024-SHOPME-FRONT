import { FC } from 'react';
import { Checkbox, FormControlLabel, Box } from '@mui/material';
import { osCaseList } from '../../../../utils/data/productsData';
import { useFilterNavigation } from '../../../../hooks/useFilterNavigation';
import { FilterOsProps as Props } from '../../../../interfaces/productList.interface';

const FilterOs: FC<Props> = ({ brand }) => {
	const { addFilter, currentOs, currentCategory } = useFilterNavigation();

	const renderCheckboxList = (options: string[]) => (
		<Box display='grid'>
			{options.map((option) => (
				<FormControlLabel key={option} control={<Checkbox />} label={option} checked={currentOs === option} onClick={() => addFilter({ os: option })} />
			))}
		</Box>
	);

	const handleTest = (brand: string | null) => {
		switch (brand) {
			case 'phone':
			case 'watches':
			case 'tablets':
				return renderCheckboxList(osCaseList.phones);
			case 'laptops':
			case 'pc':
				return renderCheckboxList(osCaseList.laptops);
			default:
				return null;
		}
	};

	return <div>{handleTest(brand)}</div>;
};

export default FilterOs;
