<template>
    <a-menu
     
    >
        <template v-for="item in list">
            <a-menu-item v-if="!item.children" :key="item.key">
                <a-icon type="pie-chart" />
                <span>{{item.title}}</span>
            </a-menu-item>
            <a-sub-menu v-else :menu-info="item" :key="item.key">
                <span slot="title"><a-icon type="appstore" /><span>{{item.title}}</span></span>
                <a-menu-item v-for="secondMenu in item.children" :key="secondMenu.key">
                    <span>{{secondMenu.title}}</span>
                </a-menu-item>
            </a-sub-menu>
        </template>
    </a-menu>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    key: '1',
                    title: 'Option 1',
                }, 
                {
                    key: '2',
                    title: 'Navigation 2',
                    children: [
                        {
                            key: '2.1',
                            title: 'Navigation 3',
                            children: [
                                { 
                                    key: '2.1.1',
                                    title: 'Option 2.1.1',
                                },
                            ],
                        },
                    ]
                }
            ]
        }
    }
}
</script>