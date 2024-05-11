import * as React from 'react';
import * as Mui from '@mui/material';
import GenerateBtn from './GenerateBtn';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { categoryList } from '../../../utils/data/productsData';
import * as style from '../../../style/ProductsList/Categories';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TopCategories = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const baseUrl = '/productsList?toCategory';

	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleNavigate = (passedCategory: string) => navigate(`${baseUrl}=${passedCategory}`);

	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

	return (
		<Mui.Box>
			{/* Large screen: */}
			<Mui.Box sx={{ ...style.baseContainer, ...style.containerLStyle }}>
				<GenerateBtn setExpanded={setExpanded} isMedium={false} isSmall={false} />
			</Mui.Box>

			{/* Medium screen: */}
			<Mui.Box sx={{ ...style.baseContainer, ...style.containerMStyle }}>
				<GenerateBtn setExpanded={setExpanded} isMedium={true} isSmall={false} />
			</Mui.Box>

			{/* Small screen: */}
			<Mui.Box sx={{ ...style.baseContainer, ...style.containerSStyle }}>
				<Mui.Accordion sx={{ position: 'absolute', zIndex: '5', top: '108px' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
					<Mui.AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<h4>
							Categories:
							<span style={{ fontSize: '12px', fontWeight: 'lighter', marginLeft: '5px' }}>(choose 1)</span>
						</h4>
					</Mui.AccordionSummary>
					<Mui.AccordionDetails>
						<Mui.FormGroup>
							<GenerateBtn setExpanded={setExpanded} isMedium={false} isSmall={true} />

							{categoryList.slice(1).map((category: any, index: any) => {
								return (
									<Mui.FormControlLabel
										key={index}
										control={<Mui.Checkbox />}
										label={category.name}
										checked={searchParams.get('toCategory') === `${category.category}`}
										onClick={() => {
											handleNavigate(category.category);
											setExpanded('false');
										}}
									/>
								);
							})}
						</Mui.FormGroup>
					</Mui.AccordionDetails>
				</Mui.Accordion>
			</Mui.Box>
		</Mui.Box>
	);
};
export default TopCategories;
