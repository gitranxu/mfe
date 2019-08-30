export default {
    translateRouter(projectName, data) {
        translateRouteArr(projectName, data.children);
        translateRouteArr(projectName, data.siblings);
    },
    translateStore(projectName, data) {
        for(let key in data) {
            _translateStore(projectName, key, data[key]);
            data[projectName + firstWordUpperCase(key)] = data[key];
            delete data[key];
        }
    }
}

function translateRouteArr(projectName, routeArr) {
    if(routeArr && routeArr.length) {
        routeArr.forEach(routeItem => {
            console.log('routeItem.path', routeItem.path);
            routeItem.path = `/${projectName}-${routeItem.path.substr(1)}`
        });
    }
}
function _translateStore(projectName, storeName, store) {
    console.log(store);
    for(let key in store) {
        //console.log(key, store[key]);
        let storeKeyObj = store[key];
        
        for(let storeKeyKey in storeKeyObj) {
            //console.log(storeKeyKey, storeKeyObj[storeKeyKey]);

            storeKeyObj[projectName+firstWordUpperCase(storeKeyKey)] = storeKeyObj[storeKeyKey];
            delete storeKeyObj[storeKeyKey];
        }
    }
}

function firstWordUpperCase(str){
    return str.replace(/(\s|^)[a-z]/g, function(char){
        return char.toUpperCase();
    });
}