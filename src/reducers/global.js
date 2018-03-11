const initState = {
	animateCls: 'normal'
}
export const global = (state = initState, action) => {
	switch (action.type) {
		case 'CURRENT_ANIMATE':
			return {
				...state,
				animateCls: action.cls
			}
		default:
			return state	
	}
}