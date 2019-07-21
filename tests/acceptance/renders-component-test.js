import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | renders component', function(hooks) {
  setupApplicationTest(hooks);

  test('renders the clashing-name component', async function(assert) {
    await visit('/');

    assert.dom('div.clashing-name').hasText('hello');
  });
});
