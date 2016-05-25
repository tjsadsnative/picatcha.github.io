(function(jwplayer) {


/** JW Player plugin that pings playback events back to server. **/
var template = function(_player, _options, _div) {


    /** Interval for sending progress events. **/
    var _interval = 30;
    /** Last time tick **/
    var _lastTime = -1;
    /** Page referrer. **/
    var _referrer = '';
    /** Start time **/
    var _startTime = -1;


    /** If moving from idle, the item is started. **/
    function _bufferHandler(event) {
        if(event.oldstate == "IDLE") {
            _sendPing('item');
            _startTime = -1;
            _lastTime = -1;
        }
    };


    /** Only send idle pings if the player indeed stopped. **/
    function _idleHandler(event) {
        if(_startTime > -1) {
            _sendPing('stop');
        }
    };


    /** Initialize the plugin on player ready. **/
    function _readyHandler() {
        _player.onBuffer(_bufferHandler);
        _player.onIdle(_idleHandler);
        _player.onTime(_timeHandler);
        if(window.addEventListener) {
            window.addEventListener('beforeunload',_unloadHandler);
        } else if (window.attachEvent) {
            window.attachEvent('onbeforeunload', _unloadHandler);
        } else {
            window.onbeforeunload = _unloadHandler;
        }
        if(window.top != window) {
            _referrer = document.referrer;
        } else { 
            _referrer = window.location.href;
        }
        _sendPing('ready');
    };
    _player.onReady(_readyHandler);


    /** No display elements, but function is required. **/
    this.resize = function(wid,hei) {};


    /** Wrap up the url generation and do the ping. **/
    function _sendPing(event) {
        var query = '?event='+event;
        var mediaid = _player.getPlaylistItem().mediaid;
        var file = _player.getPlaylistItem().file;
        if(!file) { file = _player.getPlaylistItem().sources[0].file; }
        switch(event) {
            case 'item':
                query += '&file='+encodeURIComponent(file);
                query += '&mediaid='+encodeURIComponent(mediaid);
                break;
            case 'ready':
                query += '&referrer=' + encodeURIComponent(_referrer);
                query += '&playerid='+encodeURIComponent(_player.id);
                break;
            case 'progress':
            case 'seek':
            case 'stop':
                query += '&file='+encodeURIComponent(file);
                query += '&mediaid='+encodeURIComponent(mediaid);
                query += '&start=' + Math.round(_startTime*10)/10;
                query += '&duration=' + Math.round((_lastTime-_startTime)*10)/10;
                break;
        }
        query += '&r='+Math.random();
        if(_options.pixel) {
            var image = new Image();
            image.src = _options.pixel + query;
        } else {
            try { console.log(query); } catch(error) {}
        }
    };


    /** User navigates away. **/
    function _unloadHandler(event) {
        if(_startTime > -1) {
            _sendPing('stop');
        }
    };


    /** Send the last playback after a seek. **/
    function _timeHandler(event) {
        if (_startTime == -1) {
            _startTime = _lastTime = event.position;
        } else if (Math.abs(event.position - _lastTime) > 1) {
            if(_lastTime - _startTime > 2) {
                _sendPing('seek');
            }
            _startTime = -1;
            _lastTime = -1;
        } else if(_lastTime - _startTime > _interval) {
            _sendPing('progress');
            _startTime = _lastTime = event.position;
        } else {
            _lastTime = event.position;
        }
    };


};


/** Register the plugin with JW Player. **/
jwplayer().registerPlugin('ping', '6.0', template);


})(jwplayer);