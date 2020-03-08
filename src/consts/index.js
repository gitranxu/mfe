export let footerHeight = 48; //页面底部区域高度
export let row1Height = 36; //第一行的高度
export let row2Height = 36; //第二行的高度
export let taskHeight = 32; //第二行中tab的高度
export let secondMenuHeight = 40; //二级菜单行的高度
export let navButtonsHeight = 94; //左则应用列表下的按钮级高度,这个涉及到与上面的应用高度的计算
export let pageLeftPadding = 50;
export let pageRightPadding = 30;

export let homeMenuObj = {
    name: '欢迎页',
    openType: 0,
    url: '/home',
    gid: '0',
    isHome: true,
    lock: true,
}


export function getHost(apiHttpPrefix = '//baidu.com') {
    if(process.env.NODE_ENV == 'development') {
        return '';
    }else {
        return apiHttpPrefix + '/gateway';
    }
};

export let tmpHome = '//localhost:8089/home';



