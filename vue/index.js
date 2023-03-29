var vm = new Vue({
    el: '#app',
    data: {
        message: 'hello world',
        list: [{
            title: '课程1',
            del: false
        }, {
            title: '课程2',
            del: true
        }],
    }
})