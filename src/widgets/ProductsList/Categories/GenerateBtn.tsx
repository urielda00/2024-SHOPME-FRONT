import { FC } from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { categoryList } from '../../../utils/data/productsData';
import * as style from '../../../style/ProductsList/Categories';

// Icon
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

export interface BtnProps {
	setExpanded: any;
	isSmall?: boolean;
	isMedium?: boolean;
}

const GenerateBtn: FC<BtnProps> = ({ setExpanded, isSmall, isMedium }) => {
	const navigate = useNavigate();
	const baseUrl = '/productsList?toCategory';
	const handleNavigate = (passedCategory: string) => navigate(`${baseUrl}=${passedCategory}`);
	const setStyle = () => {
		if (isMedium) {
			return style.buttonMStyle;
		} else {
			return style.buttonStyle;
		}
	};

	return (
		<>
			<Button
				sx={setStyle}
				onClick={() => {
					navigate(`${baseUrl}`);
					isSmall && setExpanded('false');
				}}
			>
				<Box sx={{ marginRight: '5px' }}>See All</Box>
				{<AllInclusiveIcon />}
			</Button>
			{!isSmall &&
				categoryList.slice(1).map((category: any, index: any) => {
					return (
						<Button size='medium' sx={style.buttonStyle} key={index} onClick={() => handleNavigate(category.category)}>
							<Box sx={{ marginRight: '5px' }}>{category.name}</Box>
							{category.icon}
						</Button>
					);
				})}
		</>
	);
};

export default GenerateBtn;
