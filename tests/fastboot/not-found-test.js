import { setup, visit } from 'ember-cli-fastboot-testing/test-support';
import { module, test } from 'qunit';

module('FastBoot | not-found', function (hooks) {
  setup(hooks);

  test('it returns the correct status code', async function (assert) {
    let { statusCode } = await visit('/');

    assert.strictEqual(
      statusCode,
      200,
      'The user sees 200 status code when they visit a URL that exists.'
    );

    ({ statusCode } = await visit('/foo-bar-baz'));

    assert.strictEqual(
      statusCode,
      404,
      'The user sees 404 status code when they visit a URL that does not exist.'
    );
  });
});
