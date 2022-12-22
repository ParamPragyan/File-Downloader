const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault()// preventing from form submission
    fetchFile(fileInput.value);
});

function fetchFile(url) {
    //fetching file and returning responce as blob
    fetch(url).then(res => res.blob()).then(file => {
        //URL.createObjectURL create a url of passed object
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        //passing tempUrl as href value of <a> tag
        aTag.href = tempUrl;
        //passing file last name and extension as download value of <a> tag
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);// adding <a> tag inside body
        aTag.click(); // clicking <a> tag so that file download
        aTag.remove(); // removing <a> tag once file download
        URL.revokeObjectURL(tempUrl); 

    })
}