import {NotificationManager } from 'react-notifications';

export const notificationsApi = (type, message) => {
        switch (type) {
            case 'info':
                return NotificationManager.info(message, 'Información', 2000);

            case 'success':
                return NotificationManager.success(message, 'Sucess', 2000);

            case 'warning':
                return NotificationManager.warning(message, 'Advertencia', 3000);

            case 'error':
                return NotificationManager.error(message, 'Error', 3000);
                
            default:
                return type;
        }

}

