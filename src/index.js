// proxy.js
class RealImg {
    constructor(fileName) {
        this.fileName = fileName
        this.loadFormDisk()
    }
    loadFormDisk() {
        console.log('loading', this.fileName);
    }
    display() {
        console.log('display', this.fileName);
    }
}
class ProxyImg {
    constructor(fileName) {
        this.realImg = new RealImg(fileName)
    }
    display() {
        this.realImg.display()
    }
}
let p = new ProxyImg('1.png')
p.display()