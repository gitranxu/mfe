//开始创建新子项目
let fs = require('fs');
let projectName = '';
function createProject(opt) {
    projectName = opt.projectName;
    fs.mkdir(`${opt.projectRootPath}`, function(error) {
        console.log('opt', opt)
        copy(`${__dirname}/child-project-template`, opt.projectRootPath);
    });
}

module.exports = {
    createProject: createProject
}

var copy=function(src,dst){
    let paths = fs.readdirSync(src); //同步读取当前目录
    paths.forEach(function(path){
        var _src=src+'/'+path;
        var _dst=dst+'/'+path;
        fs.stat(_src,function(err,stats){  //stats  该对象 包含文件属性
            if(err)throw err;
            if(stats.isFile()){ //如果是个文件则拷贝 
                fs.readFile(_src, 'utf8', function(error, data) {
                    if(error){
                        console.log(error);
                        return false;
                    }
                    let content = data.toString().replace(/\[\[projectName\]\]/g, projectName);
                    fs.writeFile(_dst, content, 'utf8',function(error) {
                        if(error){
                            console.log(error);
                            return false;
                        }
                        console.log(`写入${path}成功`);
                    });
                });
                // let  readable=fs.createReadStream(_src);//创建读取流
                // console.log('readable', readable);
                // let  writable=fs.createWriteStream(_dst);//创建写入流
                // readable.pipe(writable);
            }else if(stats.isDirectory()){ //是目录则 递归 
                checkDirectory(_src,_dst,copy);
            }
        });
    });
}
var checkDirectory=function(src,dst,callback){
    fs.access(dst, fs.constants.F_OK, (err) => {
        if(err){
            fs.mkdirSync(dst);
            callback(src,dst);
        }else{
            callback(src,dst);
        }
      });
};