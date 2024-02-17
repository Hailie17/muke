/**
 * 泛型在类中的使用
 */
class Queen<T> {
  private data: T[] = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop() {
    return this.data.shift()
  }
}

const queen = new Queen<number>()

queen.push(1)

const poped = queen.pop()

if(poped) {
  poped.toFixed()
}

/**
 * 泛型在接口中的使用
 */
interface KeyPair<T,U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number,string> = {key: 1, value: 'str'}
let kp2: KeyPair<string, number> = {key: 'str', value: 1}
let arr: number[] = [1,2,3]
let arrTwo: Array<number> = [1,2]