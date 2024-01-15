import axios from 'axios';
import * as React from 'react';
import * as Mui from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import * as style from '../../../style/NavBar/Search';

const Search = () => {
	const [data, setData] = React.useState([]);
	const [query, setQuery] = React.useState('');

	// Check the screen size:
	const isXs = Mui.useMediaQuery('(max-width:600px)');
	const isSm = Mui.useMediaQuery('(min-width:601px) and (max-width:960px)');
	const url = `${process.env.BASE_BACK_URL}/product/searchProduct?key=${query}`;
	const setListStyle = isXs ? style.smList : isSm ? style.mdList : style.lgList;

	const anchorRef = React.useRef<HTMLElement>(null);
	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}
		setQuery('');
	};

	//Send get request with the key as req.query:
	React.useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(url);
			setData(res.data);
		};

		if (query.length > 3) {
			fetchData();
		} else {
			setData([]);
		}
	}, [query]);

	return (
		<Mui.Stack width={'150px'} style={{ marginLeft: '-50px' }} id='ScrollStyle'>
			<Mui.Stack sx={{ display: 'flex' }}>
				<Mui.TextField
					value={query}
					type='search'
					autoComplete=''
					variant='standard'
					placeholder='Search here...'
					onChange={(e) => setQuery(e.target.value)}
					InputProps={{
						startAdornment: (
							<Mui.InputAdornment position='start'>
								<SearchIcon />
							</Mui.InputAdornment>
						),
					}}
				/>

				<Mui.ClickAwayListener onClickAway={handleClose}>
					<Mui.List style={{ ...style.baseListStyle, ...setListStyle }}>
						{data?.map((product: any) => (
							<Link to={`/product/${product._id}`} style={style.link}>
								<Mui.ListItemButton key={product._id} onClick={handleClose} style={style.ListItemButtonStyle}>
									<Mui.ListItem
										style={{
											display: 'flex',
											justifyContent: 'space-around',
										}}
									>
										<img alt='' src={`${process.env.BASE_BACK_URL}/searchProduct/${product.image}`} style={style.imgStyle} />
										<Mui.ListItemText primary={product.shortDescription} secondary={`${product.price}$`} />
									</Mui.ListItem>
								</Mui.ListItemButton>
							</Link>
						))}
					</Mui.List>
				</Mui.ClickAwayListener>
			</Mui.Stack>
		</Mui.Stack>
	);
};

export default Search;
