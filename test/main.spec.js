import assert from 'assert'

describe('the index page', () => {
  const expectedTitle = 'e2e testing using gulp-babel, webdriverio and selenium'

  it('has correct title (oldstyle callbacks)', (done) => {
    browser.url('/').getTitle().then(title => {
      assert.equal(title, expectedTitle, `has wrong title: ${expectedTitle}`)
    })
    return done()
  })

  it('has correct title (using promises)', () => {
    return browser.url('/').getTitle().then(title => assert.equal(title, expectedTitle, `has wrong title: ${expectedTitle}`))
  })

  it('has correct title (using generators)', function* () {
    yield browser.url('/') // require babel plugin: transform-runtime (see package.json)

    let title = yield browser.getTitle()

    return assert.equal(title, expectedTitle, `has wrong title: ${expectedTitle}`)
  })
})
