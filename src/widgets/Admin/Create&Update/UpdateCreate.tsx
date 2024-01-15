import { FC } from 'react';
import Images from './Images';
import RenderBtn from './RenderBtn';
import * as Mui from '@mui/material';
import * as validate from '../validate';
import * as style from '../../../style/Update/bothStyle';
import useCreateUpdate from '../../../hooks/useCreateUpdate';
import { FormProps } from '../../../interfaces/admin.interface';

//  Icons
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const UpdateCreate: FC<FormProps> = ({ isUpdate, isCreate }) => {
	const {
		step,
		errors,
		isValid,
		isDirty,
		nextStep,
		prevStep,
		register,
		onSubmit,
		changeState,
		handleSubmit,
		image1Length,
		image2Length,
		image3Length,
		image4Length,
	} = useCreateUpdate();

	return (
		<Mui.Container sx={style.containerStyle} maxWidth='sm' component='main'>
			<Mui.Box sx={style.insideContainerStyle}>
				<Mui.Avatar sx={{ m: 2, bgcolor: 'success.main' }}>{isCreate ? <AddIcon /> : <UpdateIcon />}</Mui.Avatar>

				<Mui.Typography sx={{ mb: 2, position: 'relative' }} component='h1' variant='h5'>
					{step <= 3 && <p style={style.stepsP}>Step {step} of 4 </p>}
					{step < 4 && step > 1 ? (
						<Mui.IconButton size='small' style={style.stepIconButton} onClick={prevStep}>
							<ArrowBackIosIcon fontSize='small' />
						</Mui.IconButton>
					) : (
						<div hidden></div>
					)}
					{step === 4 ? (
						<Mui.IconButton size='small' style={style.stepIconButton} onClick={() => window.location.reload()}>
							reset
						</Mui.IconButton>
					) : (
						<div hidden></div>
					)}
					{step <= 4
						? isCreate
							? 'Create Item'
							: 'Update: Fill Only What Needed- need to check if need this page.'
						: isCreate
						? 'Item Created Successfully'
						: 'Item Updated Successfully'}
				</Mui.Typography>

				<form encType='multipart/form-data' noValidate onSubmit={handleSubmit(onSubmit)}>
					{step === 1 && (
						<>
							{isUpdate && (
								<Mui.Grid container spacing={2}>
									<Mui.Grid item xs={12} sm={12}>
										<Mui.TextField
											fullWidth
											id='productID'
											label='Product ID'
											type='text'
											{...register('productID', validate.validateID)}
											error={!!errors.productID}
											helperText={errors.productID?.message}
										/>
									</Mui.Grid>
								</Mui.Grid>
							)}

							{/* Display this code whether isUpdate is true or false */}
							<Mui.Grid container spacing={2}>
								<Mui.Grid item xs={12} sm={12}>
									<Mui.TextField
										fullWidth
										id='productName'
										label='Product Name'
										type='text'
										{...register('productName', {
											required: isCreate && 'Product Name Is Required',
											...validate.validateProductNameObj,
										})}
										error={!!errors.productName}
										helperText={errors.productName?.message}
									/>
								</Mui.Grid>

								<Mui.Grid item xs={12} sm={12}>
									<Mui.TextField
										fullWidth
										label='Short Description'
										id='shortDescription'
										type='text'
										{...register('shortDescription', {
											required: isCreate && 'Short Description Is Required',
											...validate.validateShortObj,
										})}
										error={!!errors.shortDescription}
										helperText={errors.shortDescription?.message}
									/>
								</Mui.Grid>

								<Mui.Grid item xs={12} sm={12}>
									<Mui.TextField
										fullWidth
										label='Long Description'
										id='longDescription'
										type='text'
										{...register('longDescription', {
											required: isCreate && 'Required',
											...validate.validateLongObj,
										})}
										error={!!errors.longDescription}
										helperText={errors.longDescription?.message}
									/>
								</Mui.Grid>
							</Mui.Grid>
						</>
					)}

					{step === 2 && (
						<Mui.Grid container spacing={2}>
							<Mui.Grid item xs={12} sm={12}>
								<Mui.TextField
									fullWidth
									label='Item Quantity'
									id='quantity'
									type='number'
									{...register('quantity', { ...(isCreate && validate.required) })}
									error={!!errors.quantity}
									helperText={errors.quantity?.message}
								/>
							</Mui.Grid>

							<Mui.Grid item xs={12} sm={12}>
								<Mui.TextField
									fullWidth
									label='Release Year'
									id='releaseYear'
									type='number'
									{...register('releaseYear', { ...(isCreate && validate.required) })}
									error={!!errors.releaseYear}
									helperText={errors.releaseYear?.message}
								/>
							</Mui.Grid>

							<Mui.Grid item xs={12} sm={12}>
								<Mui.TextField
									fullWidth
									label='Item Price'
									id='price'
									type='number'
									InputProps={validate.priceInputProps}
									{...register('price', { ...(isCreate && validate.required) })}
									error={!!errors.price}
									helperText={errors.price?.message}
								/>
							</Mui.Grid>
						</Mui.Grid>
					)}

					{step === 3 && (
						<Mui.Grid container spacing={2}>
							<Mui.Grid item xs={12} sm={12}>
								<Mui.TextField
									fullWidth
									label='Company'
									id='company'
									type='text'
									{...register('company', {
										required: isCreate && 'Company Is Required',
										...validate.companyObj,
									})}
									error={!!errors.company}
									helperText={errors.company?.message}
								/>
							</Mui.Grid>

							<Mui.Grid item xs={12} sm={12}>
								<Mui.TextField
									fullWidth
									label='Item Operation System'
									id='os'
									type='text'
									{...register('os', {
										required: isCreate && 'Operation System Is Required',
										...validate.osObj,
									})}
									error={!!errors.os}
									helperText={errors.os?.message}
								/>
							</Mui.Grid>

							<Mui.Grid item xs={12} sm={12}>
								<Mui.TextField
									fullWidth
									label='Brand'
									id='brand'
									type='text'
									{...register('brand', {
										required: isCreate && 'Brand Is Required',
										...validate.brandObj,
									})}
									error={!!errors.brand}
									helperText={errors.brand?.message}
								/>
							</Mui.Grid>

							<Mui.Grid item xs={12} sm={12}>
								<Mui.TextField
									fullWidth
									label='Category'
									id='category'
									type='text'
									{...register('category', {
										required: isCreate && 'Category Is Required',
										...validate.categoryObj,
									})}
									error={!!errors.category}
									helperText={errors.category?.message}
								/>
							</Mui.Grid>
						</Mui.Grid>
					)}

					{step === 4 && (
						<Mui.Grid container spacing={2}>
							<Mui.Grid item xs={12} sm={12}>
								<Images
									id='image1'
									register={register}
									image='image1'
									buttonId='uploadBtn1'
									imageLength={image1Length}
									changeState={changeState}
									imageNumber={1}
									errorsPerImage={errors.image1}
									isCreate={isCreate}
								/>
							</Mui.Grid>

							<Mui.Grid item xs={12} sm={12}>
								<Images
									id='image2'
									register={register}
									image='image2'
									buttonId='uploadBtn2'
									imageLength={image2Length}
									changeState={changeState}
									imageNumber={2}
									errorsPerImage={errors.image2}
									isCreate={isCreate}
								/>
							</Mui.Grid>

							<Mui.Grid item xs={12} sm={12}>
								<Images
									id='image3'
									register={register}
									image='image3'
									buttonId='uploadBtn3'
									imageLength={image3Length}
									changeState={changeState}
									imageNumber={3}
									errorsPerImage={errors.image3}
									isCreate={isCreate}
								/>
							</Mui.Grid>

							<Mui.Grid item xs={12} sm={12}>
								<Images
									id='image4'
									register={register}
									image='image4'
									buttonId='uploadBtn4'
									imageLength={image4Length}
									changeState={changeState}
									imageNumber={4}
									errorsPerImage={errors.image4}
									isCreate={isCreate}
								/>
							</Mui.Grid>
						</Mui.Grid>
					)}
					{step === 5 && (
						<Mui.Grid container spacing={2}>
							the item saved (later need to add here component.)
						</Mui.Grid>
					)}

					{RenderBtn(step, nextStep, isValid, isDirty)}
				</form>
			</Mui.Box>
		</Mui.Container>
	);
};

export default UpdateCreate;
