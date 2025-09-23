import FilterOs from './FilterOs';
import * as Mui from '@mui/material';
import React, { FC, useState } from 'react';
import FilterBrands from './FilterBrands';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { categoryList, yearsList } from '../../../../utils/data/productsData';
import { CategoriesProps as Props } from '../../../../interfaces/productList.interface';
import useResponsive from '../../../../hooks/useResponsive';
import { useFilterNavigation } from '../../../../hooks/useFilterNavigation';

const Categories: FC<Props> = ({ category, brand, os, year, isPanel, text }) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const { isSm } = useResponsive();
  const { addFilter } = useFilterNavigation();

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) =>
    setExpanded(isExpanded ? panel : false);

  return (
    <Mui.Accordion sx={{ marginTop: '15px' }} expanded={expanded === isPanel} onChange={handleChange(isPanel)}>
      <Mui.AccordionSummary expandIcon={<ExpandMoreIcon fontSize={isSm ? 'small' : 'medium'} />}>
        {isSm ? (
          <h5>
            {text}:{category && <span style={{ fontSize: '10px', ...span }}>(choose 1)</span>}
          </h5>
        ) : (
          <h4>
            {text}:{category && <span style={{ fontSize: '12px', ...span }}>(choose 1)</span>}
          </h4>
        )}
      </Mui.AccordionSummary>
      <Mui.AccordionDetails>
        {category && (
          <Mui.FormGroup>
            {categoryList.slice(1).map((cat, index) => (
              <Mui.FormControlLabel
                key={index}
                control={<Mui.Checkbox size={isSm ? 'small' : 'medium'} />}
                label={cat.name}
                checked={window.location.search.includes(`toCategory=${cat.category}`)}
                onClick={() => addFilter({ category: cat.category })}
              />
            ))}
          </Mui.FormGroup>
        )}

        {brand && (
          <Mui.FormGroup>
            <FilterBrands brand={window.location.search.split('toCategory=')[1]?.split('&')[0] || ''} />
          </Mui.FormGroup>
        )}

        {os && (
          <Mui.FormGroup>
            <FilterOs brand={window.location.search.split('toCategory=')[1]?.split('&')[0] || ''} />
          </Mui.FormGroup>
        )}

        {year && (
          <Mui.FormGroup>
            {yearsList.map((y, index) => (
              <Mui.FormControlLabel
                key={index}
                control={<Mui.Checkbox />}
                label={y.year}
                checked={window.location.search.includes(`year=${y.year}`)}
                onClick={() => addFilter({ year: y.year })}
              />
            ))}
          </Mui.FormGroup>
        )}
      </Mui.AccordionDetails>
    </Mui.Accordion>
  );
};

export default Categories;

const span = {
  marginLeft: '5px',
  fontWeight: 'lighter',
};
