export const openBase64InNewTab = (data, mimeType)  => {
    var byteCharacters = atob(data);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var file = new Blob([byteArray], { type: mimeType + ';base64' });
    var weta = new FormData()
    weta.append("file", file, "file.pdf")
    const fileName = weta.get("file")
    var fileURL = URL.createObjectURL(fileName);
    window.open(fileURL);
}

