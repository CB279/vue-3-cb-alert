import { h } from 'vue'

export default {
    props: {
        textBody: [String, Object]
    },
    render() {
        return h('div', this.$props.textBody)
    }
}
