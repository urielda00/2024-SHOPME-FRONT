import React, { FC } from 'react';
import Accordions from './FilterWidgets/FilterAccordions';
import { Box, InputAdornment, TextField } from '@mui/material';
import { FilterProps as Props } from '../../../interfaces/productList.interface';

const Filter: FC<Props> = ({ pStyle, isMedium }) => {
	return (
		<Box>
			<Box sx={containerLSStyle}>
				<Box style={{ textAlign: 'center' }}>
					<p style={{ ...pStyle, marginBottom: '10px' }}>Filter by</p>
				</Box>

				<Box sx={{ width: '95%' }}>
					{isMedium ? <h5>Price:</h5> : <h4>Price:</h4>}

					<Box sx={{ display: 'flex', marginTop: '10px', marginBottom: '10px' }}>
						<TextField label='From' size={isMedium ? 'small' : 'medium'} InputProps={{ endAdornment: <InputAdornment position='end'>$</InputAdornment> }} />

						<TextField size={isMedium ? 'small' : 'medium'} label='To' InputProps={{ endAdornment: <InputAdornment position='end'>$</InputAdornment> }} />
					</Box>

					<Accordions />
				</Box>
			</Box>
		</Box>
	);
};

export default Filter;

const containerLSStyle = {
	width: '100%',
	height: 'auto',
	alignItems: 'center',
	flexDirection: 'column',
	display: { xs: 'none', sm: 'flex', md: 'flex' },
};
