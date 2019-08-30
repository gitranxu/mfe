//根据sub-projects目录下的子项目,重新动态生成alias,router,store相应文件
let util = require('./util.js');

util.replaceFile({
    path: `${__dirname}/../build/webpack.base.conf.js`,
    splitStartS: '//这行注释不要动1(webpack)start',
    splitEndS: '//这行注释不要动1(webpack)end',
    insertContent: getWebpackInsertContent()
});

util.replaceFile({
    path: `${__dirname}/../src/router/index.js`,
    splitStartS: '//这行注释不要动(router)start',
    splitEndS: '//这行注释不要动(router)end',
    insertContent: getRouterInsertContent()
});

util.replaceFile({
    path: `${__dirname}/../src/store/index.js`,
    splitStartS: '//这行注释不要动1(store)start',
    splitEndS: '//这行注释不要动1(store)end',
    insertContent: getStoreInsertContent1(),
    sucFn() {
        util.replaceFile({
            path: `${__dirname}/../src/store/index.js`,
            splitStartS: '//这行注释不要动2(store)start',
            splitEndS: '//这行注释不要动2(store)end',
            insertContent: getStoreInsertContent2()
        });
    }
});

function getWebpackInsertContent() {
    return util.subProjectNamesLoop(projectNameNoPrefix => {
        return `
            '@${projectNameNoPrefix}': 'sub/${projectNameNoPrefix}/src/',
            '${projectNameNoPrefix}-api': '@${projectNameNoPrefix}/api/',
            '${projectNameNoPrefix}-components': '@${projectNameNoPrefix}/components/',
            '${projectNameNoPrefix}-pages': '@${projectNameNoPrefix}/pages/',
            '${projectNameNoPrefix}-static': '@${projectNameNoPrefix}/static/',
            '${projectNameNoPrefix}-utils': '@${projectNameNoPrefix}/utils/',
            '${projectNameNoPrefix}-consts': '@${projectNameNoPrefix}/consts/',
        `;
    });
}

function getRouterInsertContent() {
    return util.subProjectNamesLoop(projectNameNoPrefix => {
        return `
import ${projectNameNoPrefix}ProjectRoutes from 'sub/${projectNameNoPrefix}/src/router';
translate.translateRouter('${projectNameNoPrefix}', ${projectNameNoPrefix}ProjectRoutes);
children = children.concat(${projectNameNoPrefix}ProjectRoutes.children || []);
siblings = siblings.concat(${projectNameNoPrefix}ProjectRoutes.siblings || []);
        `;
    });
}

function getStoreInsertContent1() {
    return util.subProjectNamesLoop(projectNameNoPrefix => {
        return `
import ${projectNameNoPrefix}State from '@${projectNameNoPrefix}/store';
translate.translateStore('${projectNameNoPrefix}', ${projectNameNoPrefix}State);
        `;
    });
}

function getStoreInsertContent2() {
    return util.subProjectNamesLoop(projectNameNoPrefix => {
        return `
        ...${projectNameNoPrefix}State,`;
    });
}