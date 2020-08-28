import EventBus from './EventBus';

export default {
    toggle() {
        EventBus.$emit('@sidebar/toggle');
    },
};
