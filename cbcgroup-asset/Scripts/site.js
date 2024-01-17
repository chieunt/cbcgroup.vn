var OnActionSuccess = function (data) {
    console.log(data);
    $('.loading').hide();
}

var OnActionFailure = function (data) {
    console.log(data);
    $('.loading').hide();
}
var AjaxBegin = function () {
    console.log('vô');
    $('.loading').show();
}
$(document).ready(function () {
    loadNotifi();
});

$(".non-uppercase").attr("onkeyup", "capLock(event);");
function capLock(t) {
    try {
        t.getModifierState("CapsLock") ? $(".capslock").show() : $(".capslock").hide()
    } catch (err) { }
}

jQuery.fn.extend({
    renameAttr: function (name, newName, removeData) {
        var val;
        return this.each(function () {
            val = jQuery.attr(this, name);
            jQuery.attr(this, newName, val);
            jQuery.removeAttr(this, name);
            // remove original data
            if (removeData !== false) {
                jQuery.removeData(this, name.replace('data-', ''));
            }
        });
    }
});

$(function () {
    jQuery.fn.extend({
        renameAttr: function (name, newName, removeData) {
            var val;
            return this.each(function () {
                val = jQuery.attr(this, name);
                jQuery.attr(this, newName, val);
                jQuery.removeAttr(this, name);
                // remove original data
                if (removeData !== false) {
                    jQuery.removeData(this, name.replace('data-', ''));
                }
            });
        }
    });
    $('[data-toggle="tooltip"]').renameAttr('data-original-title', 'data-content');
    $('[data-toggle="tooltip"]').attr("data-original-title", "<button type='button' class='close'>×</button>");
    $('[data-toggle="tooltip"]').attr("data-html", "true");
    $('[data-toggle="popover"]').attr("data-toggle", "tooltip");
    const $tooltip = $('[data-toggle="tooltip"]');
    $tooltip.popover({
        position: {
            at: "bottom center",
            my: "top center",
            viewport: $(window)
        }
    });
    $('.cleaninput').keyup(function (e) {
        var value = $(this).val();
        if (value != "") {
            $(this).parent().children(".clearinput").show();
        }
        else {
            $(this).parent().children(".clearinput").hide();
        }
    });
    $(document).mouseup(function (e) {
        e.preventDefault();
        var container = $(".custom-selected");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.children("ul").removeClass("op");
        }
        else {
            var ulCheck = container.children("ul").attr("class");
            if (ulCheck == undefined || ulCheck == "" || !ulCheck.indexOf("op")) {
                container.children("ul").addClass("op");
            }
            else {
                container.children("ul").removeClass("op");
            }
        }
    });
    var iOS1 = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    var EventClick1 = "click";
    if (iOS1 == true) { EventClick1 = "click touchstart"; }
    $(".taiApp").click(function () {
        $("body").append("<div id='isPopupQR' style='position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: #0000004f;z-index: 20000000000;text-align:center;display:none;'><div style='width:468px;padding:56px 90px 20px;border-radius: 8px;background:#FFFFFF;display: block;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);z-index: 20;max-width: calc(100vw - 30px);max-height: calc(100vh - 30px);overflow: auto;'><a class='close' style='width: 16px;height: 16px;opacity: 1;position: absolute;right: 16px;top: 16px;background: url(/Content/images/closeQR.svg) center no-repeat;background-size: contain;'></a><img alt='qr-code-co-dinh' src='/Content/images/QR_downApp.svg' style='width:240px;height:240px;display:block;margin: 0 auto 42px;' /><strong style='display:block;color:#1E74E8;margin-bottom:16px;font-family: Inter;font-size: 28px;font-style: normal;font-weight: 700;line-height: 36px;'>Quét để tải ứng dụng</strong><span style='display:block;font-family: Inter;font-size: 12px;font-style: normal;font-weight: 400;line-height: 16px;'>Quản lý dịch vụ dễ dàng dàng hơn với ID MATBAO</span></div></div>");
        $("#isPopupQR").fadeIn();
    });
    $("body").on(EventClick1, "#isPopupQR", function () {
        $("#isPopupQR").fadeOut();
        $("#isPopupQR").remove();
    });
    $(".custom-selected ul li").click(function () {
        var forctrl = $("#" + $(this).parent("ul").parent(".custom-selected").attr("data-for"));
        var _data = $(this).attr("data-value");
        forctrl.val(_data);
        $(this).parent("ul").parent(".custom-selected").children("label").text($(this).text());
        $(this).parent("ul").parent(".custom-selected").children("label").attr("data-value", _data);
        $(this).parent("ul").removeClass("op");
        $('#drlCompany').trigger("change");
    });
    $('[data-toggle="tooltip"]').on('click', function (e) {
        $('[data-toggle="tooltip"]').not(this).popover('hide');
    });
    $('body').on('click', '.popover .close', function () {
        $('[data-toggle="tooltip"]').popover('hide');
    });
    $('html').on('click', function (e) {
        if (typeof $(e.target).data('original-title') == 'undefined' && !$(e.target).parents().is('.popover.in')) {
            $('[data-toggle="tooltip"]').popover('hide');
        }
    });
});

(function () {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    $('[data-toggle="tooltip"]').renameAttr('data-original-title', 'data-content');
    $('[data-toggle="tooltip"]').attr("data-original-title", "<button type='button' class='close'>×</button>");
    $('[data-toggle="tooltip"]').attr("data-html", "true");
    $('[data-toggle="popover"]').attr("data-toggle", "tooltip");
    const $tooltip = $('[data-toggle="tooltip"]');
    $tooltip.popover({
        position: {
            at: "bottom center",
            my: "top center",
            viewport: $(window)
        }
    });
    $('[data-toggle="tooltip"]').on('click', function (e) {
        $('[data-toggle="tooltip"]').not(this).popover('hide');
    });
    $('body').on('click', '.popover .close', function () {
        $("div[id*='popover']").removeClass("in");
        $("div[id*='popover']").remove();
        $("[aria-describedby*='popover']").removeAttr("aria-describedby");
    });
    $('html').on('click', function (e) {
        if (typeof $(e.target).data('original-title') == 'undefined' && !$(e.target).parents().is('.popover.in')) {
            $('[data-toggle="tooltip"]').popover('hide');
        }
    });
})();

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
        testAPI();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into Facebook.';
    }
}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function () {
    const fb_client_id = $("#fbClientID").val();
    FB.init({
        appId: fb_client_id,
        status: true,
        cookie: true,
        xfbml: true,
        oauth: false,
        version: 'v2.5'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function fb_login() {
    FB.login(function (response) {
        if (response.authResponse) {
            $.get('/users/FacebookCallback' + '?accessToken=' + response.authResponse.accessToken + '&IsLogin=true', function (result) {
                if (result.status) {
                    if (result.returnurl != "" && result.returnurl != undefined) {
                        window.location.href = result.returnurl;
                    }
                    else {
                        window.location.href = '/users/another-login'
                    }
                } else {
                    var msg = "Đăng nhập bằng Facebook thất bại!\nVui lòng sử dụng ID đăng nhập để tiếp tục.";
                    if (result.message != undefined && result.message.length > 0)
                        msg = result.message;

                    new PNotify({
                        title: 'Thông Báo',
                        text: msg,
                        type: 'custom',
                        addclass: 'notification-error',
                        icon: 'fa fa-exclamation'
                    });
                }
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, { scope: 'email,public_profile' });
}

//login with goolge
function google_login() {
    const gg_client_id = $("#googleClientID").val();
    var config = {
        client_id: gg_client_id,
        scope: "https://www.googleapis.com/auth/userinfo.email",
    };
    gapi.auth.authorize(config, userAuthed)
}

function userAuthed() {
    var token = gapi.auth.getToken();
    if (token == null) {
        new PNotify({
            title: 'Thông Báo',
            text: "Không thể kết nối với Google.\nVui lòng thử lại sau!",
            type: 'custom',
            addclass: 'notification-error',
            icon: 'fa fa-exclamation'
        });
    }
    else {
        fetch_google(token);
    }
}

function fetch_google(token) {
    $.get('/users/GoogleCallback' + '?accessToken=' + token.access_token + '&IsLogin=true', function (result) {
        if (result.status) {
            if (result.returnurl != "" && result.returnurl != undefined) {
                window.location.href = result.returnurl;
            }
            else {
                window.location.href = '/users/another-login'
            }
        } else {
            new PNotify({
                title: 'Thông Báo',
                text: "Đăng nhập bằng Google thất bại!\nVui lòng sử dụng ID đăng nhập để tiếp tục.",
                type: 'custom',
                addclass: 'notification-error',
                icon: 'fa fa-exclamation'
            });
        }
    });
};

function fetch_google_one_tab(credential) {
    $(".loading").show();
    $.get('/users/GoogleCallback' + '?credential=' + credential + '&IsLogin=true', function (result) {
        if (result.status) {
            if (result.returnurl != "" && result.returnurl != undefined) {
                window.location.href = result.returnurl;
            }
            else {
                window.location.href = '/users/another-login'
            }
        } else {
            new PNotify({
                title: 'Thông Báo',
                text: "Đăng nhập bằng Google thất bại!\nVui lòng sử dụng ID đăng nhập để tiếp tục.",
                type: 'custom',
                addclass: 'notification-error',
                icon: 'fa fa-exclamation'
            });
        }

        $(".loading").hide();
    });
};
function clearinput(t) {
    $(t).parent().children(".non-uppercase").val("");
    $(t).hide();
}
function showpassword(t) {
    if ("0" == $(t).children("img").attr("alt")) {
        $(t).children("img").attr("src", "/Content/images/eyex.svg");
        $(t).children("img").attr("alt", "1");
        $(t).parent().children(".non-uppercase").attr("type", "text");
    }
    else {
        $(t).children("img").attr("src", "/Content/images/eyes.svg");
        $(t).children("img").attr("alt", "0");
        $(t).parent().children(".non-uppercase").attr("type", "password");
    }
}

function loadNotifi() {
    $(".matbao-notifi").show("slow");
    setTimeout(function () {
        $(".matbao-notifi").hide("slow");
    }, 10000
    );
}