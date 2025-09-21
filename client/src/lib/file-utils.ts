/**
 * Save a string as an XML file.
 * @param data - The string to save.
 * @param filename - The filename to save the file as.
 */
export const saveAsXML = (data: string, filename: string) => {
	const blob = new Blob([data], {
		type: "application/xml",
	});
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
};
