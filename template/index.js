function test() {
    return new Error('ddd')
}
function sayHi(hi) {
    if (hi) {
        try {
            test()
            console.log(333)
        } catch (error) {
            throw new Error('hhh')
        }
        console.log(111111)
    }
    console.log(2222)
}

sayHi('hi')