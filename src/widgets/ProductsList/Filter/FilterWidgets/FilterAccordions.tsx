import * as Mui from '@mui/material';
import Categories from './Categories';
import useResponsive from '../../../../hooks/useResponsive';
import { useFilterNavigation } from '../../../../hooks/useFilterNavigation';

const Accordions = () => {
  const { isSm } = useResponsive();
  const { addFilter } = useFilterNavigation();

  const handleClearFilters = () => {
    addFilter({ category: '', brand: '', os: '', year: '' });
  };

  return (
    <Mui.Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
      <Categories category={true} brand={false} os={false} year={false} isPanel={'panel1'} text='Categories' />
      <Categories category={false} brand={true} os={false} year={false} isPanel={'panel2'} text='Brands' />
      <Categories category={false} brand={false} os={true} year={false} isPanel={'panel3'} text='OS' />
      <Categories category={false} brand={false} os={false} year={true} isPanel={'panel4'} text='Year' />

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
        <Mui.Button
          size={isSm ? 'small' : 'medium'}
          sx={{ backgroundColor: '#FFA41B', color: 'var(--black)', ':hover': { backgroundColor: '#F86F03' } }}
          variant='contained'
          onClick={handleClearFilters}
        >
          Clear Filters
        </Mui.Button>
      </div>
    </Mui.Box>
  );
};

export default Accordions;
