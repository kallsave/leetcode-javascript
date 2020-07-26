const obj = {
  _a: {
    n: 1,
    _x: undefined,
    get x() {
      console.log('getter x', this._x)
      return this._x
    },
    set x(value) {
      console.log('setter x', value)
      this._x = value
    }
  },
  get a() {
    console.log('getter a', this._a)
    return this._a
  },
  set a(value) {
    console.log('setter a', value)
    this._a = value
  }
}

let a = {
  n: 1,
  _x : undefined,
  get x() {
    console.log('getter x', this._x)
    return this._x
  },
  set x(value) {
    console.log('setter x', value)
    this._x = value
  }
}

// 并不会先触发a.x,因为a.x是最尾部,是个赋值语句
// 但是.语法前面的会被执行,即b作为a的内存地(变量)b.x = b = {}
// 1.把{n : 2}的引用地址给a内存地址(变量)b
// 2.把{n : 2}的引用地址给b.x
// 3.即b.x = (a最终的地址b = 新的地址

a.x = a = {
  n: 2
}

console.log(a.x)

// let b = obj.a

// obj.a.c的obj.a和obj.a.x的obj.a会在赋值语句之前解析
// 赋值语句倒数第二的语句的.语法不会在赋值语句之前解析
// obj.a.c =
// obj.a.x = obj.a = {
//   n: 2
// }

// console.log(obj.a)
// console.log(b)
