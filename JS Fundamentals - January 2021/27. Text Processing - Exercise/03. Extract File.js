function extractFile(string) {

    let lastSlashesIndex = string.lastIndexOf('\\');
    
    let fileInfo = string.substring(lastSlashesIndex + 1);

    let lastDotIndex = fileInfo.lastIndexOf('.')

    let fileName = fileInfo.substring(fileInfo, lastDotIndex);

    let fileExtension = fileInfo.substring(lastDotIndex + 1);
    console.log(`File name: ${fileName}\nFile extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');