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