const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (arrayofobjects) => {
    let result = arrayofobjects.find( result => result === "W")
    return !!result ? result.year : undefined
}
