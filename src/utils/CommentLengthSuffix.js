export default (length) => {
    switch (true) {
        case length === 0:
            return 'У вас нет новых комментариев';
            break;
        case length === 1:
            return 'У вас 1 новый комментарий';
            break;
        case length < 5:
            return `У вас ${length} новых комментария`;
            break;
        default:
            return `У вас ${length} новых комментариев`;
    }
};
