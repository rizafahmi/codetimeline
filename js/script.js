/* global CodeMirror, MirrorConsole*/
let myCodeEditor = CodeMirror(document.getElementById('codes'), {
  mode: 'javascript',
  lineNumbers: true,
  value: '// your code here...\n',
  theme: 'material'
})

myCodeEditor.focus()
myCodeEditor.setCursor(myCodeEditor.lineCount(), 0)

function doRun() {
  const code = myCodeEditor.getValue()
  debugger
}
