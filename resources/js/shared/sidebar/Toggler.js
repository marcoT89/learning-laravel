import EventBus from './EventBus.js';

export default {
    toggle() {
        EventBus.$emit('@sidebar/toggle');
    },
};
