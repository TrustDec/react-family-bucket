export default function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                text: '加',
                state:state + 1
            }
        case 'DECREMENT':
            return {
                text: '减',
                state: state - 1
            }
        default:
            return {
                text: 'default',
                state 
            }
    }
}