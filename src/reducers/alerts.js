import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../actions/action-types';

const defaultState = {
    alertList: {
        alerts: []
    }
};

export const updateAlerts = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                alerts: [
                    ...state.alertList.alerts,
                    action.payload
                ]
            };
        case HIDE_ALERT:
            const idx = state.alertList.alerts.findIndex((alert) => alert.id === action.payload.id);

            return {
                alerts: [
                    ...state.alertList.alerts.slice(0, idx),
                    ...state.alertList.alerts.slice(idx + 1)
                ]
            };
        default:
            return state.alertList;
    }
};