define(function () {
    var cacheObj = window.sessionStorage || {
        getItem: function (key) {
            return this[key];
        },
        setItem: function (key, value) {
            this[key] = value;
        }
    };

    return {
        /* just for test link */
        get: function (key) {
            return this.isFresh(key);
        },
        set: function (key, value, minutes) {
            var exprDate = new Date();
            exprDate.setMinutes(exprDate.getMinutes() + (minutes || 0));
            try {
                cacheObj.setItem(key, JSON.stringify({
                    value: value,
                    expires: expDate.getTime()
                }));
            } catch (e) {}
        },
        isFresh: function (key) {
            var item;
            try {
                item = JSON.parse(cacheObj.getItem(key));
            } catch (e) {}
            if (!item) return false;
            return (new Date()).getTime() > item.expires ? false : item.value;
        }
    };
});
