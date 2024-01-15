import FilterOs from './FilterOs';
import * as Mui from '@mui/material';
import React, { FC, useState } from 'react';
import FilterBrands from './FilterBrands';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { categoryList, yearsList } from '../../../../utils/data/productsData';
import { CategoriesProps as Props}  from '../../../../interfaces/productList.interface';


const Categories: FC<Props> = ({ category, brand, os, year, isPanel, text }) => {
	const navigate = useNavigate();
	const currentUrl = window.location.href;
	const [searchParams] = useSearchParams();
	const [expanded, setExpanded] = useState<string | false>(false);

	const isOs = searchParams.get('os') || '';
	const isBrand = searchParams.get('brand') || '';
	const isCategory = searchParams.get('toCategory') || '';

	const hasQueryParams = (url: string, brand: any, os: any, year: any) => {
		if (year) {
			return url.includes('&os');
		} else if (os) {
			return url.includes('&brand');
		} else if (brand) {
			return url.includes('?');
		}
	};

	const handleAddFilter = (passedCategory: any, brand?: any, os?: any, year?: any) => {
		if (year) {
			navigate(`/productsList?toCategory=${passedCategory}&brand=${brand}&os=${os}&year=${year}`);
		} else if (os) {
			navigate(`/productsList?toCategory=${passedCategory}&brand=${brand}&os=${os}`);
		} else if (brand) {
			navigate(`/productsList?toCategory=${passedCategory}&brand=${brand}`);
		} else {
			navigate(`/productsList?toCategory=${passedCategory}`);
		}
	};

	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

	// Check the screen size:
	const isSm = Mui.useMediaQuery('(min-width:601px) and (max-width:960px)');

	return (
		<>
			<Mui.Accordion sx={{ marginTop: '15px' }} expanded={expanded === isPanel} onChange={handleChange(isPanel)}>
				<Mui.AccordionSummary expandIcon={<ExpandMoreIcon fontSize={isSm ? 'small' : 'medium'} />}>
					{isSm ? (
						<h5>
							{text}:{category && <span style={{ fontSize: isSm ? '10px' : '12px', ...span }}>(choose 1)</span>}
						</h5>
					) : (
						<h4>
							{text}:{category && <span style={{ fontSize: isSm ? '10px' : '12px', ...span }}>(choose 1)</span>}
						</h4>
					)}
				</Mui.AccordionSummary>
				<Mui.AccordionDetails>
					{category ? (
						<Mui.FormGroup>
							{categoryList.slice(1).map((category: any, index: number) => (
								<Mui.FormControlLabel
									key={index}
									control={<Mui.Checkbox size={isSm ? 'small' : 'medium'} />}
									label={category.name}
									checked={searchParams.get('toCategory') === `${category.category}`}
									onClick={() => handleAddFilter(category.category)}
								/>
							))}
						</Mui.FormGroup>
					) : brand ? (
						<Mui.FormGroup>
							{hasQueryParams(currentUrl, true, false, false) ? <FilterBrands brand={isCategory} /> : <div>choose category first</div>}
						</Mui.FormGroup>
					) : os ? (
						<Mui.FormGroup>{hasQueryParams(currentUrl, false, true, false) ? <FilterOs brand={isCategory} /> : <div>choose Brand first</div>}</Mui.FormGroup>
					) : (
						<Mui.FormGroup>
							{hasQueryParams(currentUrl, false, false, true) ? (
								yearsList.map((year, index) => (
									<Mui.FormControlLabel
										key={index}
										control={<Mui.Checkbox />}
										label={year.year}
										checked={searchParams.get('year') === `${year.year}`}
										onClick={() => handleAddFilter(isCategory, isBrand, isOs, year.year)}
									/>
								))
							) : (
								<div>choose OS first</div>
							)}
						</Mui.FormGroup>
					)}
				</Mui.AccordionDetails>
			</Mui.Accordion>
		</>
	);
};

export default Categories;

const span = {
	marginLeft: '5px',
	fontWeight: 'lighter',
};
