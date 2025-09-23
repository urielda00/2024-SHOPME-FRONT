import { useNavigate, useSearchParams } from 'react-router-dom';

interface FilterOptions {
  category?: string | boolean;
  brand?: string | boolean;
  os?: string | boolean;
  year?: string | number | boolean;
}

export const useFilterNavigation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const sanitize = (value: string | number | boolean | null) =>
    value === false || value === null || value === undefined ? '' : String(value);

  const addFilter = (options: FilterOptions) => {
    const currentCategory = sanitize(options.category ?? searchParams.get('toCategory'));
    const currentBrand = sanitize(options.brand ?? searchParams.get('brand'));
    const currentOs = sanitize(options.os ?? searchParams.get('os'));
    const currentYear = sanitize(options.year ?? searchParams.get('year'));

    let url = `/productsList?toCategory=${currentCategory}`;
    if (currentBrand) url += `&brand=${currentBrand}`;
    if (currentOs) url += `&os=${currentOs}`;
    if (currentYear) url += `&year=${currentYear}`;

    navigate(url);
  };

  return {
    addFilter,
    currentCategory: sanitize(searchParams.get('toCategory')),
    currentBrand: sanitize(searchParams.get('brand')),
    currentOs: sanitize(searchParams.get('os')),
    currentYear: sanitize(searchParams.get('year')),
  };
};