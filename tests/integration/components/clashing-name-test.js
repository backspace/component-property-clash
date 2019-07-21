import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | clashing-name', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('text', 'hey');

    await render(hbs`{{clashing-name text=text}}`);

    assert.equal(this.element.textContent.trim(), 'hey');
  });
});
