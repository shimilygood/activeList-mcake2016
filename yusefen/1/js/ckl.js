// +----------------------------------------------------------------------
// | sunqiang
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2020
// +----------------------------------------------------------------------
// | Author: sunqiang <sqqsun@mcakeg.com>
// +----------------------------------------------------------------------



    var E = {


        /**
         * 设置COOKIE
         * @param cookieName
         * @param cookieValue
         * @param cookieTime
         * @param cookieDomain
         */
        setCookie: function(cookieName, cookieValue ,cookieTime, cookieDomain) {
            var exp = new Date();
            exp.setTime(exp.getTime() + cookieTime * 1000);
            if (cookieTime == 0)
                document.cookie = cookieName + "=" + encodeURI(cookieValue) + ";path=/;domain=" + cookieDomain + ";";
            else
                document.cookie = cookieName + "=" + encodeURI(cookieValue) + ";expires=" + exp.toGMTString() + ";path=/;domain=" + cookieDomain + ";";
        },

        /**
         * 获得cookie
         * @param cookieName
         * @returns {null}
         */
        getCookie: function(cookieName) {
            var strCookie = D.cookie;
            var arrCookie = strCookie.split("; ");
            var arrCookieCount = arrCookie.length;
            var arr,identifyContent = null;
            for(var i = 0; i < arrCookie.length ; i++){
                arr = arrCookie[i].split("=");
                if(cookieName == arr[0]){
                    var arrStr = D.cookie.split("; ");
                    identifyContent = decodeURIComponent(decodeURIComponent(arr[1]));
                    break;
                }
            }
            arrCookie = null;
            if (identifyContent == null)
                return null;
            else
                return identifyContent;
        },

        createGuid: function() {
            var guid = "";
            for (var i = 1; i <= 32; i++){
                var n = Math.floor(Math.random()*16.0).toString(16);
                guid +=   n;
            }
            return guid;
        },

        /**
         *   判断在数组中是否含有给定的一个变量值
         *   参数：
         *   needle：需要查询的值
         *   haystack：被查询的数组
         *   在haystack中查询needle是否存在，如果找到返回true，否则返回false。
         *   此函数只能对字符和数字有效
         *
         */
        inArray: function(needle, haystack) {
            var t = false;
            $.each(haystack, function(k, v) {
                if (v == needle) {
                    t = true;
                    return false;
                }
            });
            return t;
        },

        /**
         * 检查参数是否为空
         * @param val
         * @returns {boolean}
         */
        empty: function( val ) {
            switch (typeof(val)){
                case "string":
                    return this.trim(val).length == 0 ? true : false;
                    break;
                case "number":
                    return val == 0;
                    break;
                case "object":
                    return val == null;
                    break;
                case "array":
                    return val.length == 0;
                    break;
                default:
                    return true;
            }
        },

        isEmpty: function( val ) {
            return this.empty( val );
        },

        /**
         * 检查日期获取日期+时间或时间格式
         * @param s
         * @returns {Array|{index: number, input: string}}
         */
        isDate: function(s) {
            var   reg=  /^\d{4}-\d{2}-\d{2}$|^\d{4}-\d{2}-\d{2} \d{1,2}:\d{1,2}:\d{1,2}$|\d{1,2}:\d{1,2}:\d{1,2}$/;
            return reg.exec(s);
        },

        /**
         * 匹配email
         * @param s
         * @returns {Array|{index: number, input: string}}
         */
        isEmail: function(s) {
            var   reg=  /^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9_\-\.]*)(\.[a-z]{2,3}(\.[a-z]{2}){0,2})$/i;
            return reg.exec(s);
        },

        /**
         * 匹配数字（整数）
         * @param s
         * @returns {Array|{index: number, input: string}}
         */
        isDigital: function(s) {
            var reg = /^\d+$/;
            return reg.exec(s);
        },

        /**
         * 匹配数字（整数或小数）
         * @param s
         * @returns {Array|{index: number, input: string}}
         */
        isNum: function(s) {
            var reg = /^\d+$|^\d+\.\d+$/;
            return reg.exec(s);
        },

        /**
         * 匹配非负整数（正整数+0）
         * @param s
         * @returns {Array|{index: number, input: string}}
         */
        isInt: function(s) {
            var reg = /^[0-9]\d*$/;
            return reg.exec(s);
        },

        /**
         * 匹配小数
         * @param s
         * @returns {Array|{index: number, input: string}}
         */
        isFloat: function(s) {
            var reg = /^(\d+)(\.(\d{1,2}))$/;
            return reg.exec(s);
        },

        /**
         * 匹配金额
         * @param s
         * @returns {Array|{index: number, input: string}}
         */
        isMoney: function(s) {
            var reg = /^(([1-9]\d*(,\d{3})*)|([0-9]\d*))(\.(\d{1,2}))?$/;
            return reg.exec(s);
        },

        /**
         * 从字符串的两端删除空白字符和其他预定义字符
         * @param s
         * @returns {*}
         */
        trim: function(s) {
            return s.replace(/(^\s*)|(\s*$)/g, "");
        },

        /**
         * 匹配手机号码
         * @param s
         * @returns {Array|{index: number, input: string}}
         */
        isMobile: function(s) {
            var reg = /^(1[34578][0-9]{1})[0-9]{8}$/;
            return reg.exec(s);
        },

        /**
         * 匹配电话号码
         * @param s
         * @returns {Array|{index: number, input: string}}
         */
        isPhone: function(s) {
            var reg = /^(0[0-9]{2,3}-)?([2-9][0-9]{6,7})+(-[0-9]{1,6})?$/;
            return reg.exec(s);
        },

        /**
         * 匹配汉字
         * @param s
         * @returns {Array|{index: number, input: string}}
         */
        isChinese: function( s ) {
            var reg = /^[\u4e00-\u9fa5]+$/;
            return reg.exec(s) ;
        },

        /**
         * 检查变量是否定义
         * @param variable
         * @returns {boolean}
         */
        isDefined: function( variable ) {
            if (typeof(variable) == 'undefined'){
                return false;
            } else {
                return true;
            }
        },


        /**
         * 比较日期先后
         * @param startDate     开始日期
         * @param endDate       结束日期
         * @returns {boolean}
         */
        dateCompare : function(sDate, eDate){
            s = sDate.replace(/-/g,"/");
            e = eDate.replace(/-/g,"/");
            if (Date.parse(s) - Date.parse(e) > 0){
                return false;
            }
            return true;
        },

        /**
         * 检查参数长度
         * @param val
         * @returns {number}
         */
        len: function( val ) {
            var l = 0;
            var a = val.split("");
            for (var i=0;i<a.length;i++) {
                if (a[i].charCodeAt(0)<299) {
                    l++;
                } else {
                    l+=2;
                }
            }
            return l;
        },


        /**
         * ajax的post请求
         * @param args
         */
        ajax_post: function( args ) {
            var request_url = "http://218.244.146.56/api/" + args.action;
            if(args.access_token != undefined &&  args.access_token != null && args.access_token != "" )
            {
                request_url = request_url + "/"+args.access_token;
            }
            $.ajax({
                type: "POST",
                url: request_url,
                dataType: "JSON",
                data: args.params,
                success: function( o ) {
                    eval(args.call + "(o)");
                }
            });
        }
    };

