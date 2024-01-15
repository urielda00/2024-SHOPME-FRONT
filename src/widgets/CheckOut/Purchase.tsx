import { useState } from 'react';
import * as Mui from '@mui/material';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const Purchase = () => {
	const [cvc, SetCvc] = useState('');
	const [name, SetName] = useState('');
	const [date, SetDate] = useState('');
	const [number, SetNumber] = useState('');
	const [focus, SetFocus] = useState<any>('');

	return (
		<>
			<Cards number={number} name={name} expiry={date} cvc={cvc} focused={focus} />
			<Mui.Box component='form' noValidate sx={{ mt: 3 }}>
				<Mui.Grid container spacing={2}>
					<Mui.Grid item xs={12} sm={6}>
						<Mui.TextField
							size='small'
							required
							autoFocus
							fullWidth
							name='number'
							type='number'
							value={number}
							id='Card Number'
							label='Card Number'
							inputProps={{ maxLength: 16 }}
							onFocus={(e) => SetFocus(e.target.name)}
							onChange={(e) => SetNumber(e.target.value)}
						/>
					</Mui.Grid>

					<Mui.Grid item xs={12} sm={6}>
						<Mui.TextField
							required
							fullWidth
							id='name'
							name='name'
							type='text'
							size='small'
							value={name}
							label='Full Name'
							autoComplete='full-name'
							inputProps={{ maxLength: 12 }}
							onFocus={(e) => SetFocus(e.target.name)}
							onChange={(e) => SetName(e.target.value)}
						/>
					</Mui.Grid>

					<Mui.Grid item xs={12} sm={6}>
						<Mui.TextField
							required
							fullWidth
							id='expiry'
							size='small'
							value={date}
							type='number'
							name='expiry'
							autoComplete='expiry'
							label='Expiration Date'
							inputProps={{ maxLength: 4 }}
							onFocus={(e) => SetFocus(e.target.name)}
							onChange={(e) => SetDate(e.target.value)}
						/>
					</Mui.Grid>

					<Mui.Grid item xs={12} sm={6}>
						<Mui.TextField
							id='cvc'
							required
							fullWidth
							name='cvc'
							type='tel'
							label='CVV'
							value={cvc}
							size='small'
							autoComplete='cvc'
							inputProps={{ maxLength: 3 }}
							onFocus={(e) => SetFocus(e.target.name)}
							onChange={(e) => SetCvc(e.target.value)}
						/>
					</Mui.Grid>

					<Mui.Grid item xs={12} sm={6}>
						<Mui.TextField size='small' required fullWidth id='email' label='Email Address' name='email' autoComplete='email' />
					</Mui.Grid>
				</Mui.Grid>
			</Mui.Box>
		</>
	);
};

export default Purchase;
