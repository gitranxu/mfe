let fs = require('fs');
let config = require('./config.js');
function replaceFile(opt) {
    fs.exists(opt.path, function(exists) {
        if(exists) {
            fs.readFile(opt.path, function(error, data) {
                if(error){
                    console.log(error);
                    return false;
                }
                let indexS = data.toString();
                let arr1 = indexS.split(opt.splitStartS);
                let arr2 = indexS.split(opt.splitEndS);

                if(arr1.length != 2) {
                    console.log(`%c ${opt.path}中没有必须的注释[${opt.splitStartS}]`,"color:red;");
                    return;
                }
                if(arr2.length != 2) {
                    console.log(`%c ${opt.path}中没有必须的注释[${opt.splitEndS}]`,"color:red;");
                    return;
                }
                
                let replaceRouterIndexS = `${arr1[0]} ${opt.splitStartS}\n ${opt.insertContent}\n ${opt.splitEndS} ${arr2[1]}`;
                fs.writeFile(opt.path, replaceRouterIndexS, 'utf8', function(error) {
                    if(error){
                        console.log(error);
                        return false;
                    }
                    console.log(opt.path+'替换成功');
                    opt.sucFn && opt.sucFn();
                });
            });
        }else {
            console.log(`${opt.path}不存在,未执行替换操作.`)
        }
    });
}

function writeFile(path, content, sucFn) {
    fs.writeFile(path, content, 'utf8', function(error) {
        if(error){
            console.log(error);
            return false;
        }
        console.log(`写入${path}成功`);
        sucFn && sucFn();
    });
}

function subProjectNamesLoop(fn) {
    let result = '';
    fs.readdirSync(`${__dirname}/../src/sub-projects`)
        .forEach(subProjectName => {
            let projectNameNoPrefix = getProjectNameRegExp().exec(subProjectName)[1];
            if(!config.isProjectClosed(subProjectName)) {
                result += fn(projectNameNoPrefix);
            }
        });
    return result;
}

function getProjectNameRegExp() {
    return new RegExp(`${config.childProjectPrefix}-(.*)`);
}

module.exports = {
    replaceFile: replaceFile,
    writeFile: writeFile,
    subProjectNamesLoop: subProjectNamesLoop,
    getProjectNameRegExp: getProjectNameRegExp
}