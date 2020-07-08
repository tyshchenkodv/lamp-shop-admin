export default (date) => {
    if (typeof date !== 'object') {
        date = new Date(date);
    }

    let seconds = Math.floor((new Date() - date) / 1000);
    let intervalType;

    let interval = Math.floor(seconds / 31536000);

    if (interval === 1) {
        intervalType = 'год назад';
    } else if (interval > 1 && interval < 5) {
        intervalType = 'года назад';
    } else if (interval >= 5) {
        intervalType = 'лет назад';
    } else {
        interval = Math.floor(seconds / 2592000);
        if (interval === 1) {
            intervalType = 'месяц назад';
        } else if (interval > 1 && interval < 5) {
            intervalType = 'месяца назад';
        } else if (interval >= 5) {
            intervalType = 'месяцев назад';
        } else {
            interval = Math.floor(seconds / 86400);
            if (interval === 1) {
                intervalType = 'день назад';
            } else if (interval > 1 && interval < 5) {
                intervalType = 'дня назад';
            } else if (interval >= 5) {
                intervalType = 'дней назад';
            } else {
                interval = Math.floor(seconds / 3600);
                if (interval === 1) {
                    intervalType = 'час назад';
                } else if (interval > 1 && interval < 5) {
                    intervalType = 'часа назад';
                } else if (interval >= 5) {
                    intervalType = 'часов назад';
                } else {
                    interval = Math.floor(seconds / 60);
                    if (interval === 1) {
                        intervalType = 'минута назад';
                    } else if (interval > 1 && interval < 5) {
                        intervalType = 'минуты назад';
                    } else if (interval >= 5) {
                        intervalType = 'минут назад';
                    } else {
                        interval = seconds;

                        if (interval === 1) {
                            intervalType = 'секунда назад';
                        } else if (interval > 1 && interval < 5) {
                            intervalType = 'секунды назад';
                        } else if (interval >= 5) {
                            intervalType = 'секунд назад';
                        }
                    }
                }
            }
        }
    }

    return interval !== 0 ? interval + ' ' + intervalType : 'Только что';
}