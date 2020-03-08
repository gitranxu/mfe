function firstWordUpperCase(str) {
    return str.replace(/(\s|^)[a-z]/g, char => {
        char.toUpperCase();
    });
}

function translateRouteArr(projectName, routeArr) {
    if (routeArr && routeArr.length) {
        routeArr.forEach(routeItem => {
            // console.log('routeItem.path', routeItem.path);
            routeItem.path = `/${projectName}-${routeItem.path.substr(1)}`;
        });
    }
}
function innerTranslateStore(projectName, storeName, store) {
    // console.log(store);
    Object.keys(store).forEach(key => {
        // console.log(key, store[key]);
        const storeKeyObj = store[key];

        Object.keys(storeKeyObj).forEach(storeKeyKey => {
            // console.log(storeKeyKey, storeKeyObj[storeKeyKey]);
            storeKeyObj[projectName + firstWordUpperCase(storeKeyKey)] = storeKeyObj[storeKeyKey];
            delete storeKeyObj[storeKeyKey];
        });
    });
}

export default {
    translateRouter(projectName, data) {
        translateRouteArr(projectName, data.children);
        translateRouteArr(projectName, data.siblings);
    },
    translateStore(projectName, data) {
        Object.keys(data).forEach(key => {
            innerTranslateStore(projectName, key, data[key]);
            data[projectName + firstWordUpperCase(key)] = data[key];
            delete data[key];
        });
    },
};
