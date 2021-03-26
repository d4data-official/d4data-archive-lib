import anyTest, { TestInterface } from 'ava'
import Standardizer from '../../src/classes/Standardizer/Standardizer'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Context {
}

const test = anyTest as TestInterface<Context>

test('Get plugins synchronously', (t) => {
  const plugins: Array<any> = Standardizer.getPluginsSync()

  t.plan(plugins.length)

  plugins.forEach((plugin, idx) => {
    const message = 'A plugin is not a child class of Standardizer '
      + `(index: ${ idx }, name: ${ plugin?.constructor?.name })`

    t.assert(plugin.prototype instanceof Standardizer, message)
  })
})

test('Get plugins asynchronously', async (t) => {
  const plugins: Array<any> = await Standardizer.getPlugins()

  t.plan(plugins.length)

  plugins.forEach((plugin, idx) => {
    const message = 'A plugin is not a child class of Standardizer '
      + `(index: ${ idx }, name: ${ plugin?.constructor?.name })`

    t.assert(plugin.prototype instanceof Standardizer, message)
  })
})
