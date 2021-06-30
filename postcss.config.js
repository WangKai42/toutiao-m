/* 
postcss的配置文件 
*/

module.exports = {
    plugins: {
        /*  'autoprefixer': {
             browsers: ['Android >= 4.0', 'iOS >= 8']
         }, */
        'postcss-pxtorem': {
            // 750宽的设计稿，750 / 10 = 75
            // 375宽的设计稿，375 / 10 = 37.5
            // Vant 组件库是基于375 宽写的
            // Vant组件库是基于逻辑像素375写的
            /* 设计稿都是基于物理像素750宽设计的,所以如果设置成75，那么我们就可以在设计稿中测量多少就写多少，
            但是Vant的样式就会变得很小，小了一半  所以我们还必须设置成37.5，
            但是在测量我们的设计稿的时候我们必须让你的测量单位/2 */


            // 解决方法 ：在ps中测量是 ctrl Alt +i 调整图片大小 取消重新采用 厘米改为点 宽 /2  
            // iphone 6 7 8下 一个点==2像素
            rootValue: 37.5,
            propList: ['*']
        }
    }
}