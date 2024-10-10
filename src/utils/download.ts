
const downloadBlob = (blob: any, filename: string) =>{
    // Create a URL for the blob
    const url = (window as any).URL.createObjectURL(blob);

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;  // Specify the file name for the download

    // Append the anchor to the document and trigger a click
    document.body.appendChild(a);
    a.click();

    // Remove the anchor from the document
    document.body.removeChild(a);

    // Revoke the object URL to release memory
    (window as any).URL.revokeObjectURL(url);
}

export { downloadBlob };