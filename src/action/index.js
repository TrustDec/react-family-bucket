//action  
const changeTextAction = {
    type: 'CHANGE_TEXT'
}
const buttonClickAction = {
    type: 'BUTTON_CLICK'
}
const divClick = {
    type: 'DIV_CLICK'
}
const divClickOne = {
    type: 'DIV_CLICK_ONE'
}

//映射Redux state到组件的属性  
export function mapStateToProps(state) {
    return { text: state.text }
}
export function mapStateToPropsOne(state) {
    return { text: state.color }
}

//映射Redux actions到组件的属性  
export function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: () => dispatch(buttonClickAction),
        onChangeText: () => dispatch(changeTextAction),
        onDivClick: () => dispatch(divClick)
    }
}
export function mapDispatchToPropsOne(dispatch) {
    return {
        onButtonClick: () => dispatch(divClickOne),
    }
}