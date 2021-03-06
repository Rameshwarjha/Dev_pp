const fs = require("fs");
const path = require("path");

let extensions = require("./util");
let folderPath = "./Downloads";

let extFolderPath;

function checkFolder(extension){


    for(key in extensions){
        if(extensions[key].includes(extension)){

            extFolderPath = `${folderPath}/${key}`;
            
            break;

        }
    }
    return fs.existsSync(extFolderPath);

}


function moveFile(fileName) {

    let sourceFilePath = `${folderPath}/${fileName}`;
    let destinationFilePath = `${extFolderPath}/${fileName}`;

    fs.copyFileSync(sourceFilePath , destinationFilePath);

    //delete path 

    fs.unlinkSync(sourceFilePath);

}


function createFolder(){
    fs.mkdirSync(extFolderPath);

}

function sortFolder(folderPath){
    //get content of folderPath
    let content= fs.readdirSync(folderPath);
    for(let i=0; i<content.length;i++){
        //get extension of each file

        let extensionName =path.extname(content[i]);
        console.log(extensionName);

        let extensionFolderExist = checkFolder(extensionName);
        if(extensionFolderExist){
            moveFile(content[i]);
        

        } else {
            createFolder();
            moveFile(content[i]);

        }
    }
}
sortFolder(folderPath);
