// This file should contain the minimal amount of code 
// necessary to initiate the login & signup modal.
// Any additional changes should go into another javascript class
var SD_Modern_LoginSignup = {
    startLogin: function(modalArgs) {
        var url = this.getLoginPageUrl(modalArgs);
        var iframe = this.getIframe(url);
        $.modal.close();
        $.modal(iframe, this.modalOptions);
    },

    startSignup: function(prefillUsername) {
        var url = this.getSignupPageUrl(prefillUsername);
        var iframe = this.getIframe(url);
        $.modal.close();
        $.modal(iframe, this.modalOptions);
    },

    // Everything below this line shouldn't be called or accessed directly

    // TODO: Clean up the overlayCss, shouldn't really be in the .js code
    modalOptions: {
        overlayClose: true,
        overlayCss: {
            background: '#000'
        },
        minWidth: 800,
        minHeight: 750,
        zIndex: 11000,
        onShow: function() {
            $('.simplemodal-wrap').css('overflow', 'visible');
        }
    },

    targetIframeId: 'loginsignup',
    loginPageUrl: '/forums/login.php?modal=1&modernview=1',
    signupPageUrl: '/forums/register.php?modal=1&modernview=1',

    getLoginPageUrl: function(modalArgs) {
        return this.loginPageUrl + (modalArgs ? '&' + $.param(modalArgs) : '');
    },

    getSignupPageUrl: function(prefillUsername) {
        var url = this.signupPageUrl;

        if (prefillUsername) {
            url += '&username=' + prefillUsername;
        }

        return url;
    },

    isIframeLoaded: function() {
        return (document.getElementById(this.targetIframeId) !== null);
    },

    isIframeUrl: function(url) {
        return (document.getElementById(this.targetIframeId).getAttribute('src') !== url);
    },

    getIframe: function(url) {
        if (this.isIframeLoaded() && this.isIframeUrl(url)) {
            return document.getElementById(this.targetIframeId);
        }

        return this.createIframe(url);
    },

    createIframe: function(url) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('id', 'loginsignup');
        iframe.setAttribute('src', url);

        iframe.setAttribute('frameborder', 0);
        iframe.setAttribute('scrolling', 'no');

        iframe.setAttribute('allowtransparency', true);
        iframe.style.background = 'none transparent';

        iframe.setAttribute('width', 800);
        iframe.setAttribute('height',750);

        return iframe;
    }
};