import { FC } from 'react';
import { FadeProps } from '../../interfaces/home.interface';

const Fade: FC<FadeProps> = ({ height, degrees }) => {
	return (
		<div
			style={{
				width: 'var(--width)',
				height: `${height}`,
				display: 'flex',
				justifyContent: 'center',
				background: `linear-gradient(${degrees}deg, rgba(0,0,0,1) 0%, rgba(241,241,241,0.8) 92%)`,
			}}
		></div>
	);
};
export default Fade;
