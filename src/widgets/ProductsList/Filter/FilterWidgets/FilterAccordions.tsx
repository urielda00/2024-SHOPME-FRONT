import * as Mui from '@mui/material';
import Categories from './Categories';

const Accordions = () => {
	// Check the screen size:
	const isSm = Mui.useMediaQuery('(min-width:601px) and (max-width:960px)');

	return (
		<>
			<Mui.Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
				<Categories category={true} brand={false} os={false} year={false} isPanel={'panel1'} text='Categories' />
				<Categories category={false} brand={true} os={false} year={false} isPanel={'panel2'} text='Brands' />
				<Categories category={false} brand={false} os={true} year={false} isPanel={'panel3'} text='OS' />
				<Categories category={false} brand={false} os={false} year={true} isPanel={'panel4'} text='Categories' />

				<div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
					<Mui.Button
						size={isSm ? 'small' : 'medium'}
						sx={{ backgroundColor: '#FFA41B', color: 'var(--black)', ':hover': { backgroundColor: '#F86F03' } }}
						href='/productsList'
						variant='contained'
					>
						Clear Filters
					</Mui.Button>
				</div>
			</Mui.Box>
		</>
	);
};

export default Accordions;
