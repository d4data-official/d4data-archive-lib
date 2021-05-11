import anyTest, { TestInterface } from 'ava'
import { Readable } from 'stream'
import { preProcessors } from '../../../../src/classes/Standardizer/plugins/Facebook/Facebook'
import Pipeline from '../../../../src/classes/Pipeline'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Context {
}

const test = anyTest as TestInterface<Context>

test('Preprocessors must fix encoding', async t => {
  const pipeline = new Pipeline([
    Readable.from(Buffer.from('Freaky Beats pr\\u00c3\\u00a9sente : Vortek\'s & Ketamane !')),
    ...preProcessors,
  ])

  const pipelineOutput = await pipeline.toString()

  t.assert(pipelineOutput === 'Freaky Beats présente : Vortek\'s & Ketamane !')
})
