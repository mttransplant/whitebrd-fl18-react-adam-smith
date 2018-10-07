export const CREATE_WIDGET = "CREATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const FIND_WIDGET = "FIND_WIDGET"
export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC"
export const FIND_ALL_WIDGETS = "FIND_ALL_WIDGETS"

export const createWidget = () => {
    return {type: CREATE_WIDGET}
}

export const deleteWidget = () => {
    return {type: DELETE_WIDGET}
}

export const updateWidget = () => {
    return {type: UPDATE_WIDGET}
}

export const findWidget = () => {
    return {type: FIND_WIDGET}
}

export const findAllWidgetsForTopic = () => {
    return {type: FIND_ALL_WIDGETS_FOR_TOPIC}
}

export const findAllWidgets = () => {
    return {type: FIND_ALL_WIDGETS}
}