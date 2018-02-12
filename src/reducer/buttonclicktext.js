const initialState = { text: 'Hello' };
export default function clicktext(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text === 'Hello' ? 'world' : 'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'Hello world'
            }
        case "DIV_CLICK":
            return {
                text: "SmallRui"
            }
        case "DIV_CLICK_ONE":
            return {
                text: "red"
            }
        default:
            return initialState;
    }
}