import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  clashingName: computed('text', function() {
    return this.text;
  }),
});
