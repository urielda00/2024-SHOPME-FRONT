import img1 from '../../assets/Home/5nd/Img1.jpg';
import img2 from '../../assets/Home/5nd/Img2.jpg';
import img3 from '../../assets/Home/5nd/Img3.jpg';
import * as style from '../../style/Home/Carousel';
import { CarouselItemProps } from '../../interfaces/home.interface';

export const items = [
	{
		img: 'Item1',
		h1: 'S23 Ultra Series',
		src: img1,
	},
	{
		img: 'Item2',
		h1: 'Apple Watch 4',
		src: img2,
	},
	{
		img: 'Item3',
		h1: 'EarBuds Pro 3',
		src: img3,
	},
];

export const Carousel = ({ item, width, isSmall }: CarouselItemProps) => {
	return (
		<div style={{ width: width, ...style.container }}>
			<h1 style={{ ...style.h1, top: isSmall ? '50.5vw' : '7.5vw' }}>{item.h1}</h1>
			<img alt='' src={item.src} style={style.img} />
		</div>
	);
};
