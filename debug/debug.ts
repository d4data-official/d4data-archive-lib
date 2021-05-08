import fs from 'fs'
import path from 'path'

const disabledExtensions = ['off', 'disable', 'ignore']
const debugFilesDir = path.resolve(__dirname, 'files')

const getExtensionPrefix = (path: string) => path.split('.').splice(-2).shift()

if (!fs.existsSync(debugFilesDir)) {
  fs.mkdirSync(debugFilesDir)
}

console.info('Debug mode: all files in debug/files folder will be imported.')
console.info('All files named like: (*.)?[off|disable|ignore].ts will be ignored (ex: off.ts, test.ignore.ts)\n')

fs.readdirSync(debugFilesDir)
  .filter(debugFilePath => !disabledExtensions.includes(getExtensionPrefix(debugFilePath) ?? ''))
  .forEach(debugFilePath => {
    const absoluteFilePath = path.resolve(debugFilesDir, debugFilePath)

    console.info(`ℹ Debug file imported: ${ absoluteFilePath }\n`)
    // eslint-disable-next-line import/no-dynamic-require,global-require
    require(path.resolve(debugFilesDir, debugFilePath))

    console.info('------ file end ------')
  })
