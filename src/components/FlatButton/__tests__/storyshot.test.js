import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots'

const createNodeMock = el => {
  if (el.type === 'div') {
    const mockEl = document.createElement('div')
    return mockEl
  }
  return null
}

initStoryshots({
  storyKindRegex: /^FlatButton$/,
  test: snapshotWithOptions({
    createNodeMock
  })
})
