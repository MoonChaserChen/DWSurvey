function isEmail(sId) {
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (!reg.test(sId)) return false;
    return true;
}
function isMobile(sId) {
    var isMobile = /^(?:13\d|14\d|15\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/;
    if (!isMobile.test(sId)) return false;
    return true;
}
