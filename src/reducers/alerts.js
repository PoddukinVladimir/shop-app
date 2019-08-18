export const updateAlerts = (state, action) => {
    if (state === undefined) {
        return {
            alerts: []
        }
    }

    switch (action.type) {
        case `SHOW_ALERT`:
            return {
                alerts: [
                    ...state.alertList.alerts,
                    action.payload
                ]
            };
        case `HIDE_ALERT`:
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