import * as dayjs from 'dayjs';
import 'dayjs/locale/ru';

export default (date) => {
    const relativeTime = require('dayjs/plugin/relativeTime');
    dayjs.extend(relativeTime);

    const dateNow = dayjs();
    const diffInMinutes = dayjs(dateNow).diff(date, 'm');
    const interval = Math.floor(diffInMinutes / 60);

    if (interval < 24) {
        return dayjs(date).fromNow(false);
    } else {
        return dayjs(date).format('DD.MM.YYYY');
    }
}
