import path from 'path'
import anyTest, { ExecutionContext, TestInterface } from 'ava'
import extractTestArchives, { EXTRACTION_DIR } from '../extractTestArchives'
import Getters from '../../../src/types/standardizer/Getters'
import Standardizer from '../../../src/classes/Standardizer/Standardizer'
import deleteUndefinedProperties from '../deleteUndefinedProperties'

export interface Context {
}

const { LOCAL_ARCHIVE_DIR } = process.env

type SkippedGetters =
  | Getters.CHAT_MESSAGES
const skippedGetters = [Getters.CHAT_MESSAGES]
const getterValidators = Standardizer.getterDataAssertions()
const parsingOptions = {
  pagination: {
    offset: 0,
    items: 10,
  },
}

const test = anyTest as TestInterface<Context>
const maybeTest = LOCAL_ARCHIVE_DIR ? test : test.skip

async function macro(t: ExecutionContext<Context>, standardizer: Standardizer, getter: Getters) {
  if (skippedGetters.includes(getter)) {
    throw new Error(`Can not test ${ getter }, spacial test required for this getter`)
  }

  const result = await standardizer[getter as Exclude<Getters, SkippedGetters>]({ parsingOptions })

  if (result === null) {
    t.pass()
    return
  }

  // Remove all properties with undefined value
  // Workaround for the typescript-is lib special behavior (design choice) with optional interface fields
  // https://github.com/woutervh-/typescript-is/issues/25
  const cleanData = (data: any): any => {
    if (Array.isArray(data)) {
      return data.map(item => deleteUndefinedProperties(item))
    }
    if (typeof data === 'object') {
      return deleteUndefinedProperties(result.data)
    }
    return data
  }

  t.notThrows(() => getterValidators[getter](cleanData(result.data)))
}

export default function standardizerPluginsGetters(standardizer: Standardizer) {
  test.before('Extract test archives', async t => {
    await extractTestArchives(LOCAL_ARCHIVE_DIR!, {
      onSkip: reason => t.log(reason),
      onExtracted: archivePath => t.log(`Archive extracted: ${ archivePath }`),
    })
    t.log(`Test archives extracted in ${ path.resolve(LOCAL_ARCHIVE_DIR!, EXTRACTION_DIR) }`)
  })

  for (const getter of Object.values(Getters)) {
    if (skippedGetters.includes(getter)) {
      test.todo(`${ standardizer.service }: ${ getter } must return valid type`)
    } else {
      maybeTest(`${ standardizer.service }: ${ getter } must return valid type`, macro, standardizer, getter)
    }
  }
}
