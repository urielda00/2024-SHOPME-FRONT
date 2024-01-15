function toggleUpload(id: string) {
	const uploadInput = document.getElementById(id) as HTMLInputElement;
	uploadInput?.click();
}

export default toggleUpload;
