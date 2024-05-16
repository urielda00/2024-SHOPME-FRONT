import * as React from 'react';
import * as Mui from '@mui/material';
import { Link } from 'react-router-dom';
import { Carousel, items } from './Carousel';
import * as style from '../../style/Home/Carousel';
import { CarouselViewProps } from '../../interfaces/home.interface';

//Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const generateFormControlLabel = (index: number, setActiveIndex: any) => (
	<Mui.FormControlLabel key={index} onClick={() => setActiveIndex(index)} value={index} control={<Mui.Radio />} label={''} />
);

const CarouselView: React.FC<CarouselViewProps> = ({ isSmall = false }) => {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const updateIndex = (newIndex: any) => {
		if (newIndex < 0) {
			newIndex = 0;
		} else if (newIndex >= items.length) {
			newIndex = items.length - 1;
		}
		setActiveIndex(newIndex);
	};

	return (
		<Mui.Box sx={{...style.viewContainer,height: isSmall?'80vh':'100vh'}}>
			<Mui.Box
				style={{
					...style.inlineViewContainer,
					transform: `translate(-${activeIndex * 100}%)`,
				}}
			>
				{items.map((item, index) => {
					return <Carousel isSmall={isSmall} item={item} width={'100%'} key={index} />;
				})}
			</Mui.Box>

			<Mui.Box style={{ ...style.buttonContainer, top: isSmall ? '65vh' : '97vh' }}>
				{/* the button to the left */}
				<Mui.Button className='button-arrow' onClick={() => updateIndex(activeIndex - 1)}>
					<span className='material-symbols-outlined'>
						<ChevronLeftIcon fontSize='large' />
					</span>{' '}
				</Mui.Button>

				{/* LEFT BUTTON */}
				<Mui.Box className='indicators'>
					<Mui.RadioGroup value={activeIndex}  row>
						<Mui.FormControlLabel onClick={() => setActiveIndex(0)} value={0} control={<Mui.Radio />} label={''} />

						<Mui.FormControlLabel onClick={() => setActiveIndex(1)} value={1} control={<Mui.Radio />} label={''} />

						<Mui.FormControlLabel onClick={() => setActiveIndex(2)} value={2} control={<Mui.Radio />} label={''} />
					</Mui.RadioGroup>
				</Mui.Box>

				{/* RIGHT BUTTON */}
				<Mui.Button className='button-arrow' onClick={() => updateIndex(activeIndex + 1)}>
					<span className='material-symbols-outlined'>
						<ChevronRightIcon fontSize='large' />
					</span>
				</Mui.Button>
			</Mui.Box>

			{/* LINK - BUY NOW*/}
			<Link to='/productsList?toCategory' style={style.linkStyle}>
				<Mui.Box sx={{ ':hover': { opacity: '0.7' }, ...style.secondContainerStyle, left: isSmall ? '25vw' : '42vw', top: isSmall? '80vh':'93vh' }}>
					<Mui.Box style={style.infoContainer}>
						More Info
						<ChevronRightIcon />
					</Mui.Box>
				</Mui.Box>
			</Link>
		</Mui.Box>
	);
};

export default CarouselView;
