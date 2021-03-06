const wasAbi = new WasABI();
const channel = wasAbi.getChannel();
const licenseServerUrl = wasAbi.getLicenseUrl();
const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();
var username = "";
var password = "";
var senderId = "";
var startTime = 0;
var sessionManagerTimer = null;
var markPositionTimer = null;
var showFingerPrintTimeout = null;
var hideFingerPrintTimeout = null;
var secondaryQaaLanguage = "eng";
var notQaaLanguage = "spa";


const options = new cast.framework.CastReceiverOptions();

options.customNamespaces = {
    [channel]: cast.framework.system.MessageType.JSON
};


// Update playback config licenseUrl according to provided value in load request.
playerManager.setMediaPlaybackInfoHandler((loadRequest, playbackConfig) => {



    if (loadRequest.media.startAbsoluteTime) {
        console.log("startAbsoluteTime:" + loadRequest.media.startAbsoluteTime);
        startTime = loadRequest.media.startAbsoluteTime;
    }

    if (loadRequest.media.customData) {
        if (loadRequest.media.customData.token) {
            playbackConfig.licenseCustomData = loadRequest.media.customData.token;
        }else{
            playbackConfig.licenseCustomData = loadRequest.media.customData;
        }
    }

    return playbackConfig;
});


playerManager.addEventListener(cast.framework.events.EventType.PLAYER_LOAD_COMPLETE,
    event => {

        playerManager.play();
        scheduleTimerMarkPosition();
        scheduleTimerOpenSession();

        setDefaultLanguage(event.media.tracks);
        setDefaultSubtitles(event.media.tracks);
        setAudioLanguageLabels();
        setSubtitlesLanguageLabels();

        if (event.media.startAbsoluteTime){
            playerManager.seek(event.media.startAbsoluteTime);
        }

        sendMessageToSender();
        adjustPlayAfterLoad();
    }
);

playerManager.addEventListener(cast.framework.events.EventType.SEEKED,
    event => {
        updateMarkPosition();
    }
);

playerManager.addEventListener(cast.framework.events.EventType.ENDED,
    event => {
        playEnded();
    }
);

playerManager.addEventListener(cast.framework.events.EventType.REQUEST_STOP,
    event => {
        playEnded();
    }
);

playerManager.addEventListener(cast.framework.events.EventType.LIVE_ENDED,
    event => {
        playerManager.stop()
        playEnded();
    }
);

playerManager.setMessageInterceptor(cast.framework.messages.MessageType.EDIT_AUDIO_TRACKS, request => {
    
    for (var i = 0; i < request.tracks; i++) {
        if (request.tracks[i].type == "AUDIO"){
            request.tracks[i].name = wasAbi.getLanguageName(request.tracks[i].name);
        }
    }
});


context.addEventListener(cast.framework.system.EventType.SENDER_CONNECTED, event => {
    senderId = event.senderId;
    sendMessageToSender();
});

const playbackConfig = new cast.framework.PlaybackConfig();
playbackConfig.autoResumeDuration = 5;
playbackConfig.licenseUrl = licenseServerUrl;




/* For error code description */
/* event.detailedErrorCode: https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.events#.DetailedErrorCode */
/* mpl errors: https://developers.google.com/cast/docs/mpl_error_codes */
/* shaka errors: https://shaka-player-demo.appspot.com/docs/api/shaka.util.Error.html */
playerManager.addEventListener(cast.framework.events.EventType.ERROR,
    event => {
        var errorCodeAsStr = "";
        var errorCodeExtentionAsStr = "";

        console.error("Error " + cast.framework.events.EventType.ERROR)

        switch (event.detailedErrorCode) {
            case cast.framework.events.DetailedErrorCode.MEDIA_UNKNOWN:
                errorCodeAsStr = "MEDIA_UNKNOWN";
                if ( (event.error !== undefined) && (event.error.shakaErrorCode !== undefined) )
                    errorCodeExtentionAsStr = "ShakaPlayer error code = " + event.error.shakaErrorCode +
                                            " MediaError code from the video element = " + event.error.shakaErrorData[0] +
                                            " Description is " + event.error.shakaErrorData[2];

                break;
            case cast.framework.events.DetailedErrorCode.MEDIA_ABORTED:
                errorCodeAsStr = "MEDIA_ABORTED";
                break;
            case cast.framework.events.DetailedErrorCode.MEDIA_DECODE:
                errorCodeAsStr = "MEDIA_DECODE";
                break;
            case cast.framework.events.DetailedErrorCode.MEDIA_NETWORK:
                errorCodeAsStr = "MEDIA_NETWORK";
                break;
            case cast.framework.events.DetailedErrorCode.MEDIA_SRC_NOT_SUPPORTED:
                errorCodeAsStr = "MEDIA_SRC_NOT_SUPPORTED";
                break;
            case cast.framework.events.DetailedErrorCode.SOURCE_BUFFER_FAILURE:
                errorCodeAsStr = "SOURCE_BUFFER_FAILURE";
                break;
            case cast.framework.events.DetailedErrorCode.MEDIAKEYS_UNKNOWN:
                errorCodeAsStr = "MEDIAKEYS_UNKNOWN";
                if ( (event.error !== undefined) && (event.error.shakaErrorCode !== undefined) )
                    errorCodeExtentionAsStr = "ShakaPlayer error code = " + event.error.shakaErrorCode;
                break;
            case cast.framework.events.DetailedErrorCode.MEDIAKEYS_NETWORK:
                errorCodeAsStr = "MEDIAKEYS_NETWORK";
                break;
            case cast.framework.events.DetailedErrorCode.MEDIAKEYS_UNSUPPORTED:
                errorCodeAsStr = "MEDIAKEYS_UNSUPPORTED";
                break;
            case cast.framework.events.DetailedErrorCode.MEDIAKEYS_WEBCRYPTO:
                errorCodeAsStr = "MEDIAKEYS_WEBCRYPTO";
                break;
            case cast.framework.events.DetailedErrorCode.NETWORK_UNKNOWN:
                errorCodeAsStr = "NETWORK_UNKNOWN";
                break;
            case cast.framework.events.DetailedErrorCode.SEGMENT_NETWORK:
                errorCodeAsStr = "SEGMENT_NETWORK";
                break;
            case cast.framework.events.DetailedErrorCode.HLS_NETWORK_MASTER_PLAYLIST:
                errorCodeAsStr = "HLS_NETWORK_MASTER_PLAYLIST";
                break;
            case cast.framework.events.DetailedErrorCode.HLS_NETWORK_PLAYLIST:
                errorCodeAsStr = "HLS_NETWORK_PLAYLIST";
                break;
            case cast.framework.events.DetailedErrorCode.HLS_NETWORK_NO_KEY_RESPONSE:
                errorCodeAsStr = "HLS_NETWORK_NO_KEY_RESPONSE";
                break;
            case cast.framework.events.DetailedErrorCode.HLS_NETWORK_KEY_LOAD:
                errorCodeAsStr = "HLS_NETWORK_KEY_LOAD";
                break;
            case cast.framework.events.DetailedErrorCode.HLS_NETWORK_INVALID_SEGMENT:
                errorCodeAsStr = "HLS_NETWORK_INVALID_SEGMENT";
                break;
            case cast.framework.events.DetailedErrorCode.HLS_SEGMENT_PARSING:
                errorCodeAsStr = "HLS_SEGMENT_PARSING";
                break;
            case cast.framework.events.DetailedErrorCode.DASH_NETWORK:
                errorCodeAsStr = "DASH_NETWORK";
                if ( (event.error !== undefined) && (event.error.shakaErrorCode !== undefined) )
                    errorCodeExtentionAsStr = "ShakaPlayer error code = " + event.error.shakaErrorCode +
                        " url = " + event.error.shakaErrorData[0];
                break;
            case cast.framework.events.DetailedErrorCode.DASH_NO_INIT:
                errorCodeAsStr = "DASH_NO_INIT";
                break;
            case cast.framework.events.DetailedErrorCode.SMOOTH_NETWORK:
                errorCodeAsStr = "SMOOTH_NETWORK";
                break;
            case cast.framework.events.DetailedErrorCode.SMOOTH_NO_MEDIA_DATA:
                errorCodeAsStr = "SMOOTH_NO_MEDIA_DATA";
                break;
            case cast.framework.events.DetailedErrorCode.MANIFEST_UNKNOWN:
                errorCodeAsStr = "MANIFEST_UNKNOWN";
                break;
            case cast.framework.events.DetailedErrorCode.HLS_MANIFEST_MASTER:
                errorCodeAsStr = "HLS_MANIFEST_MASTER";
                break;
            case cast.framework.events.DetailedErrorCode.HLS_MANIFEST_PLAYLIST:
                errorCodeAsStr = "HLS_MANIFEST_PLAYLIST";
                break;
            case cast.framework.events.DetailedErrorCode.DASH_MANIFEST_UNKNOWN:
                errorCodeAsStr = "DASH_MANIFEST_UNKNOWN";
                if ( (event.error !== undefined) && (event.error.shakaErrorCode !== undefined) )
                    errorCodeExtentionAsStr = "ShakaPlayer error code = " + event.error.shakaErrorCode;
                break;
            case cast.framework.events.DetailedErrorCode.DASH_MANIFEST_NO_PERIODS:
                errorCodeAsStr = "MEDIA_UNKNOWN";
                break;
            case cast.framework.events.DetailedErrorCode.MEDIA_UNKNOWN:
                errorCodeAsStr = "DASH_MANIFEST_NO_PERIODS";
                break;
            case cast.framework.events.DetailedErrorCode.DASH_MANIFEST_NO_MIMETYPE:
                errorCodeAsStr = "DASH_MANIFEST_NO_MIMETYPE";
                break;
            case cast.framework.events.DetailedErrorCode.DASH_INVALID_SEGMENT_INFO:
                errorCodeAsStr = "DASH_INVALID_SEGMENT_INFO";
                break;
            case cast.framework.events.DetailedErrorCode.SMOOTH_MANIFEST:
                errorCodeAsStr = "SMOOTH_MANIFEST";
                break;
            case cast.framework.events.DetailedErrorCode.SEGMENT_UNKNOWN:
                errorCodeAsStr = "SEGMENT_UNKNOWN";
                break;
            case cast.framework.events.DetailedErrorCode.TEXT_UNKNOWN:
                errorCodeAsStr = "TEXT_UNKNOWN";
                break;
            case cast.framework.events.DetailedErrorCode.APP:
                errorCodeAsStr = "APP";
                break;
            case cast.framework.events.DetailedErrorCode.BREAK_CLIP_LOADING_ERROR:
                errorCodeAsStr = "BREAK_CLIP_LOADING_ERROR";
                break;
            case cast.framework.events.DetailedErrorCode.BREAK_SEEK_INTERCEPTOR_ERROR:
                errorCodeAsStr = "BREAK_SEEK_INTERCEPTOR_ERROR";
                break;
            case cast.framework.events.DetailedErrorCode.IMAGE_ERROR:
                errorCodeAsStr = "IMAGE_ERROR";
                break;
            case cast.framework.events.DetailedErrorCode.LOAD_INTERRUPTED:
                errorCodeAsStr = "LOAD_INTERRUPTED";
                break;
            case cast.framework.events.DetailedErrorCode.LOAD_FAILED:
                errorCodeAsStr = "LOAD_FAILED";
                break;
            case cast.framework.events.DetailedErrorCode.MEDIA_ERROR_MESSAGE:
                errorCodeAsStr = "MEDIA_ERROR_MESSAGE";
                if (event.error.requestId !== undefined)
                    console.log("error.requestId: " + event.error.requestId);
                if (event.error.type !== undefined)
                    console.log("error.type: " + event.error.type);
                break;
            case cast.framework.events.DetailedErrorCode.GENERIC:
                errorCodeAsStr = "GENERIC";
                break;
            default:
                errorCodeAsStr = "Unexpected error code" ;
                break;

        }
        console.log("on ERROR: " + errorCodeAsStr + "(" + errorCodeExtentionAsStr + ")");

        // report the error to the device
        var errorMsg = {type: 'playbackerror'};
        errorMsg.errorCode = event.detailedErrorCode;
        errorMsg.errorCodeAsStr = errorCodeAsStr + ". " + errorCodeExtentionAsStr;
        context.sendCustomMessage(channel, undefined, errorMsg);

        // stop the player
        if ( playerManager.getPlayerState() !== cast.framework.messages.PlayerState.IDLE ) {
            playerManager.stop();
        }

        // stop the session
        context.stop();
        wasAbi.closeSession()
    }
);


context.addCustomMessageListener(channel, function(customEvent) {
    var message = customEvent.data;
    var command = message.command;
    var params = message.params;

    switch (command) {
        case "slideshow":
            loadSlideshow(params);
            break;
        case "login":
            wasAbi.login(params);
            break;
        case "sessionParams":

            //force to close session manager with old info before to init session params
            var  sessionManagerId = wasAbi.getSessionManagerId();
            if (sessionManagerId != "" && sessionManagerId != params.sessionManagerId){
                closeSession();
            }

            wasAbi.initSessionParams(params);
            checkFingerPrint();
            break;
        case "requestSessionParams":
            sendSessionParams();
            break;
        default:
            customMessageReceiver(params, command);
            break;
    }

    });


options.playbackConfig = playbackConfig;
context.start(options);

function customMessageReceiver(params, senderId){
    var command = message.command;
    var text = params.text;
    var log = "Message received from " + 
                "[" +  senderId +  "],  " +
                " command: " + command + 
                " text: " + text;
    console.log(log);
}


function sendMessageToSender(){
    var message = "test";
    context.sendCustomMessage(channel, senderId, message);
}

function adjustPlayAfterLoad(){
    var contentInfo = wasAbi.getContentInfo()
    if (contentInfo.type == "stov")
    {
        playerManager.seek(0)
    }
}


function sendSessionParams(){
    var contentInfo = wasAbi.getContentInfo();

    var message = { "command": "sessionParams",
                    "data": contentInfo };

    context.sendCustomMessage(channel, senderId, message);
}


function scheduleTimerOpenSession(){
    if (sessionManagerTimer != null){
        closeSession();
    }

    openSession();
    sessionManagerTimer = setInterval(openSession, wasAbi.getSessionManagerInterval());
}

function openSession(){
    wasAbi.openSession(wasAbi);
}

function closeSession(){
    wasAbi.closeSession();
    clearInterval(sessionManagerTimer);
}


function scheduleTimerMarkPosition(){
    if (markPositionTimer != null){
        clearInterval(markPositionTimer);
    }

    // live and trailer will not send mark position
    if (!wasAbi.isPlayingLive() && !wasAbi.isPlayingTrailer()){
        //execute first time now
        updateMarkPosition();
        markPositionTimer = setInterval(updateMarkPosition, wasAbi.getMarkPositionInterval());
    }
}

function updateMarkPosition() {
    // live and trailer will not send mark position
    if (!wasAbi.isPlayingLive() && !wasAbi.isPlayingTrailer()){
        var position = parseInt(playerManager.getCurrentTimeSec()) * 1000;
        wasAbi.markPosition(position)
    }
}

//set default audio language (updated from the server)
function setDefaultLanguage(tracks){
    if (wasAbi.getDefaultAudioLanguage() == "qaa"){
        var qaaFound = false;

        //search qaa
        for (var i = 0; i < tracks.length; i++) {
            if (tracks[i].type == "AUDIO" && tracks[i].language == wasAbi.getDefaultAudioLanguage()){
                playerManager.getAudioTracksManager().setActiveByLanguage(tracks[i].language);
                qaaFound = true;
            }
        }

        //search secondary qaa language (eng)
        if (!qaaFound){
            for (var i = 0; i < tracks.length; i++) {
                if (tracks[i].type == "AUDIO" && tracks[i].language == secondaryQaaLanguage){
                    playerManager.getAudioTracksManager().setActiveByLanguage(tracks[i].language);
                    qaaFound = true;
                }
            }
        }

        //set first language except spanish
        if (!qaaFound){
            for (var i = 0; i < tracks.length; i++) {
                if (!qaaFound && tracks[i].type == "AUDIO" && tracks[i].language != notQaaLanguage){
                    playerManager.getAudioTracksManager().setActiveByLanguage(tracks[i].language);
                    qaaFound = true;
                }
            }
        }

    }else{
        //if  selected language is not qaa try to set automatically
        for (var i = 0; i < tracks.length; i++) {
            if (tracks[i].type == "AUDIO" && tracks[i].language == wasAbi.getDefaultAudioLanguage()){
                playerManager.getAudioTracksManager().setActiveByLanguage(tracks[i].language);
            }
        }
    }
}

//set default subtitles language (updated from the server)
function setDefaultSubtitles(tracks){

    if (wasAbi.getDefaultSubtitlesLanguage() == "qaa"){
        var qaaFound = false;

        //search qaa
        for (var i = 0; i < tracks.length; i++) {
            if (tracks[i].type == "TEXT" && tracks[i].language == wasAbi.getDefaultSubtitlesLanguage()){
                playerManager.getTextTracksManager().setActiveByLanguage(tracks[i].language);
                qaaFound = true;
            }
        }

        //search secondary qaa language (eng)
        if (!qaaFound){
            for (var i = 0; i < tracks.length; i++) {
                if (tracks[i].type == "TEXT" && tracks[i].language == secondaryQaaLanguage){
                    playerManager.getTextTracksManager().setActiveByLanguage(tracks[i].language);
                    qaaFound = true;
                }
            }
        }

        //set first language except spanish
        if (!qaaFound){
            for (var i = 0; i < tracks.length; i++) {
                if (!qaaFound && tracks[i].type == "TEXT" && tracks[i].language != notQaaLanguage){
                playerManager.getTextTracksManager().setActiveByLanguage(tracks[i].language);
                    qaaFound = true;
                }
            }
        }

    }else{
        //if  selected language is not qaa try to set automatically
        for (var i = 0; i < tracks.length; i++) {
            if (tracks[i].type == "TEXT" && tracks[i].language == wasAbi.getDefaultSubtitlesLanguage()){
                playerManager.getTextTracksManager().setActiveByLanguage(tracks[i].language);
            }
        }
    }

}

function setAudioLanguageLabels(){
    const audioTracksManager = playerManager.getAudioTracksManager();
    var tracks = audioTracksManager.getTracks()
    
    for (var i = 0; i < tracks.length; i++) {
        tracks[i].name = wasAbi.getLanguageLabel(tracks[i].language);
    }
}

function setSubtitlesLanguageLabels(){
    const textTracksManager = playerManager.getTextTracksManager();
    var tracks = textTracksManager.getTracks()
    
    for (var i = 0; i < tracks.length; i++) {
        tracks[i].name = wasAbi.getLanguageLabel(tracks[i].language);
    }
}


function playEnded(){
    closeSession();
    if (markPositionTimer != null){
        clearInterval(markPositionTimer);
    }
    hideFingerprint();

    var message = { "command": "playEnded"};
    context.sendCustomMessage(channel, senderId, message);

}

function checkFingerPrint(){
    
    clearTimeout(hideFingerPrintTimeout);
    clearTimeout(showFingerPrintTimeout);
    
    if(wasAbi.hasFingerprint()){
        changeFingerprintLayout()
        showFingerprint();
    }else{
        hideFingerprint();
    }
}

function showFingerprint(){
    if(wasAbi.hasFingerprint()) {
        changeFingerprintPosition()
        changeFingerprintLayout()
        changeFingerprintValue()
        document.getElementById("fingerprint").style.visibility = "visible";
        scheduleHideFingerprint();
    }else{
        document.getElementById("fingerprint").style.visibility = "hidden";
    }
}

function hideFingerprint(){
    document.getElementById("fingerprint").style.visibility = "hidden";
    if(wasAbi.hasFingerprint()){
        scheduleShowFingerprint();
    }
}

function changeFingerprintLayout(){
    document.getElementById("fingerprint").style.backgroundColor = wasAbi.getFingerprintBackgroundColor();
    document.getElementById("fingerprint").style.color = wasAbi.getFingerprintForegroundColor();
    document.getElementById("fingerprint").style.border = "thin solid " + wasAbi.getFingerprintBorderColor();
}

function changeFingerprintValue(){
    document.getElementById("fingerprint").innerHTML = wasAbi.getHouseholdId();
}

function changeFingerprintPosition(){
    var position = wasAbi.getRandomFingerprintPosition();

    var marginLeft = screen.width * (position.horizontal / 100);
    var marginTop = screen.height * (position.vertical / 100);
    if (position.horizontal > 50){
        marginLeft -= document.getElementById("fingerprint").offsetWidth;
    }
    if (position.vertical > 50){
        marginTop -= document.getElementById("fingerprint").offsetHeight;
    }
    document.getElementById("fingerprint").style.marginLeft = marginLeft + "px";
    document.getElementById("fingerprint").style.marginTop = marginTop + "px";
}

function scheduleHideFingerprint(){
    hideFingerPrintTimeout = setTimeout(hideFingerprint, wasAbi.getFingerprintDuration());
}

function scheduleShowFingerprint(){
    showFingerPrintTimeout = setTimeout(showFingerprint, wasAbi.getFingerprintPeriod());
}

function loadSlideshow(params){
    let playerElement = document.getElementsByTagName("cast-media-player")[0];
    if (params.slideshow_1 != null){
        playerElement.style.setProperty('--slideshow-image-1', 'url(' + params.slideshow_1 + ')');
    }
    if (params.slideshow_2 != null){
        playerElement.style.setProperty('--slideshow-image-2', 'url(' + params.slideshow_2 + ')');
    }
    if (params.slideshow_3 != null){
        playerElement.style.setProperty('--slideshow-image-3', 'url(' + params.slideshow_3 + ')');
    }
    if (params.slideshow_4 != null){
        playerElement.style.setProperty('--slideshow-image-4', 'url(' + params.slideshow_4 + ')');
    }
    if (params.slideshow_5 != null){
        playerElement.style.setProperty('--slideshow-image-5', 'url(' + params.slideshow_5 + ')');
    }
    if (params.slideshow_6 != null){
        playerElement.style.setProperty('--slideshow-image-6', 'url(' + params.slideshow_6 + ')');
    }
    if (params.slideshow_7 != null){
        playerElement.style.setProperty('--slideshow-image-7', 'url(' + params.slideshow_7 + ')');
    }
    if (params.slideshow_8 != null){
        playerElement.style.setProperty('--slideshow-image-8', 'url(' + params.slideshow_8 + ')');
    }
    if (params.slideshow_9 != null){
        playerElement.style.setProperty('--slideshow-image-9', 'url(' + params.slideshow_9 + ')');
    }
    if (params.slideshow_10 != null){
        playerElement.style.setProperty('--slideshow-image-10', 'url(' + params.slideshow_10 + ')');
    }

}

