import { Box } from '@mui/material';
import { ReactElement } from 'react';

// Components:
import Fade from '../widgets/Home/Fade';
import Home1 from '../widgets/Home/Home1';
import Home3 from '../widgets/Home/Home3';
import CarouselView from '../widgets/Home/CarouselView';
import ClickAbleItems from '../widgets/Home/ClickAbleItems';
import MobileClickAble from '../widgets/Home/MobileClickAble';

// Style:
import * as first from '../style/Home/Home1';
import * as third from '../style/Home/Home3';

const useHome = () => {
	const getHome1stComponent = (small?: boolean, medium?: boolean): ReactElement => {
		if (small) {
			return (
				<>
					<Box sx={{ ...first.container1, ...first.smContainer1 }}>
						<Home1 large={false} linkStyle={{ ...first.link1, ...first.smLink1 }} />
					</Box>

					<Fade height='30vh' degrees={0} />

					<Home3
						container={{ ...third.Container3, ...third.smContainer3 }}
						imgHeight={third.smImgHeight3}
						linkStyle={{ ...third.link3, ...third.smLink3 }}
						boxStyle={{ ...third.inlineContainer3, ...third.smInlineContainer3 }}
					/>
					<Fade height='30vh' degrees={180} />
					<CarouselView isSmall={true} />
					<MobileClickAble />
				</>
			);
		} else if (medium) {
			return (
				<>
					<Box sx={{ ...first.container1, ...first.lgContainer1 }}>
						<Home1 large={false} linkStyle={{ ...first.link1, ...first.mdLink1 }} />
					</Box>

					<Fade height='60vh' degrees={0} />

					<Home3
						container={{ ...third.Container3, ...third.lgContainer3 }}
						imgHeight={third.imgHeight3}
						linkStyle={{ ...third.link3, ...third.smLink3 }}
						boxStyle={{ ...third.inlineContainer3, ...third.smInlineContainer3 }}
					/>
					<Fade height='60vh' degrees={180} />
					<CarouselView />
					<ClickAbleItems />
				</>
			);
		} else {
			return (
				<>
					<Box sx={{ ...first.container1, ...first.lgContainer1 }}>
						<Home1 large={true} linkStyle={{ ...first.link1, ...first.lgLink1 }} />
					</Box>

					<Fade height='60vh' degrees={0} />

					<Home3
						container={{ ...third.Container3, ...third.lgContainer3 }}
						imgHeight={third.imgHeight3}
						linkStyle={{ ...third.link3, ...third.lgLink3 }}
						boxStyle={{ ...third.inlineContainer3, ...third.lgInlineContainer3 }}
					/>
					<Fade height='60vh' degrees={180} />
					<CarouselView />
					<ClickAbleItems />
				</>
			);
		}
	};

	return {
		getHome1stComponent,
	};
};

export default useHome;
