//
//  WasABI.swift
//  Orange TV
//  WasABI ABI integrator (RTV, Compass, SM, DCS)
//  Created by Optiva Media on 13/04/2020.
//  Copyright © 2020 Orange. All rights reserved.
//
class WasABI {
 
  constructor() {
    this.chromecastChannel = "urn:x-cast:com.optm.anhplayer";
    this.licenseUrl = "https://cc.orangetv.orange.es/mob/api/rtv/v1/drm";

    //right tv
    this.rightTvUrl = "https://cc.orangetv.orange.es/mob/api/rtv/v1";
    this.loginUri = "Login";
    this.markPositionUri = "MarkPosition";
    this.markRecordingPositionUri = "MarkRecordingPosition";

    //compass 
    this.compassUrl = "https://cc.orangetv.orange.es/mob/api/reco/v1";
    //session manager
    this.sessionManagerUrl = "https://cc.orangetv.orange.es/mob/api/sm/v1";
    this.openSessionUri = "openSession";
    this.closeSessionUri = "closeSession";
    this.sessionManagerId = "";
    this.sessionManagerInterval = 60000;

    this.markPositionInterval = 60000;

    this.chromecastSerialId = "";
    this.terminalId = "";
    this.username = "";
    //this.password = "";
    this.householdId = "";
    this.channelId = "";
    this.programId = "";
    this.recordingId = "";
    this.contentId = "";
    this.contentType = "";
    this.customData = "";
    this.playingUrl = "";
    this.contentImage = "";
    this.contentTitle = "";

    this.defaultAudio = "spa";
    this.defaultSubtitles = "";

    this.channelFingerprint = false;
    this.periodFingerprint = 0;
    this.durationFingerprint = 0;
    this.coordinatesFingerprint = [];
    this.fingerprintBackgroundColor = "";
    this.fingerprintForegroundColor = "";
    this.fingerprintBorderColor = "";

  }

  
  // chromecast custom namespace
  getChannel() {
    return this.chromecastChannel;
  }

  
  // drm licenser url
  getLicenseUrl() {
    return this.licenseUrl;
  }
  
  // get current content info
  getContentInfo() {
    var info = { "id": this.contentId,
                "type": this.contentType,
                "licenseUrl": this.licenseUrl,
                "customData": this.customData,
                "channelId": this.channelId,
                "programId": this.programId,
                "recordingId": this.recordingId,
                "sessionManagerId": this.sessionManagerId,
                "contentImage": this.contentImage,
                "contentTitle": this.contentTitle,
                "deafultAudio": this.defaultAudio,
                "defaultSubtitles": this.defaultSubtitles,
                "householdId": this.householdId,
                "terminalId": this.terminalId };
    return info;
  }

  setLicenseUrl(url) {
    this.licenseUrl = url;
  }


  isPlayingLive() {
    return (this.contentType == "live");
  }

  isPlayingCatchup() {
    return (this.contentType == "catchup");
  }

  isPlayingNpvr() {
    return (this.contentType == "npvr");
  }

  isPlayingTrailer() {
    return (this.contentType == "TRAILER");
  }

  hasFingerprint() {
    return this.channelFingerprint;
  }

  getFingerprintDuration() {
    return this.durationFingerprint;
  }

  getFingerprintBackgroundColor(){
    return this.fingerprintBackgroundColor
  }

  getFingerprintForegroundColor(){
    return this.fingerprintForegroundColor
  }

  getFingerprintBorderColor(){
    return this.fingerprintBorderColor
  }

  getFingerprintPeriod(){
    return this.periodFingerprint;
  }

  getRandomFingerprintPosition(){
    if (this.coordinatesFingerprint.length > 0){
      var randomPosition = Math.floor(Math.random() * this.coordinatesFingerprint.length); 
      return this.coordinatesFingerprint[randomPosition];
    }else{
      return { horizontal: 0, vertical: 0 };
    }
  }


  getHouseholdId() {
    return this.householdId;
  }

  initSessionParams(params){
    this.householdId = params.householdId;
    this.terminalId = params.terminalId;
    this.contentId = params.contentId;
    this.channelId = params.channelId;
    this.programId = params.programId;
    this.recordingId = params.recordingId;
    this.contentType = params.contentType;
    this.sessionManagerId = params.sessionManagerId;
    this.sessionManagerInterval = params.sessionManagerInterval;
    this.chromecastSerialId = params.chromecastSerialId;
    this.customData = params.customData;
    this.playingUrl = params.playingUrl;
    this.contentImage = params.contentImage;
    this.contentTitle = params.contentTitle;
    this.markPositionInterval = params.markPositionInterval;

    //fingerprint
    this.channelFingerprint = params.channelFingerprint;
    if (this.channelFingerprint){
      this.durationFingerprint = params.durationFingerprint * 1000;
      this.periodFingerprint = params.periodFingerprint * 1000;

      //check if the new fingerprint color params are recived 
      if(params.fingerprintBackgroundColor != null){
        this.fingerprintBackgroundColor = params.fingerprintBackgroundColor;
      }
      if(params.fingerprintForegroundColor != null){
        this.fingerprintForegroundColor = params.fingerprintForegroundColor;
      }
      if(params.fingerprintBorderColor != null){
        this.fingerprintBorderColor = params.fingerprintBorderColor;
      }

      if (params.positionsFingerprint != null){
        this.coordinatesFingerprint = [];


        var positionsArray = params.positionsFingerprint.split(";");

        for (var i = 0; i < positionsArray.length; i++) {
          var coordinates = positionsArray[i].split("|");

          if (coordinates.length > 1){
            var coordinate = { horizontal: coordinates[0], vertical: coordinates[1] }
            this.coordinatesFingerprint.push(coordinate)
          }
        }

      }
    }else{
      this.durationFingerprint = 0;
      this.periodFingerprint = 0;
      this.coordinatesFingerprint = 0;
    }

    if (params.defaultAudio != null && params.defaultAudio != ""){
      this.defaultAudio = params.defaultAudio;
    }
    if (params.defaultSubtitles != null && params.defaultSubtitles != ""){
      this.defaultSubtitles = params.defaultSubtitles;
    }

  }

  
  // login
  login(params){
    this.username = params.username;
    //this.password = params.password;
    var url =  this.rightTvUrl + "/" + this.loginUri + "?client=json";
    var postParams = "username=" + this.username +"&password=" + params.password;

    this.request(url, "POST", postParams, null);
  }

  // playing mark position (position in miliseconds)
  markPosition(postion){
    console.log("CUSTOM LOG: wasabi markPosition: " + postion);

    console.log("CUSTOM LOG: isPlayingLive: " + this.isPlayingLive());
    if (!this.isPlayingLive() && !this.isPlayingTrailer()){

      var params = "";
      var url = "";

      if (this.isPlayingNpvr()){
        //npvr
        params = "recording_id=" + this.recordingId +"&position=" + postion;
        url =  this.rightTvUrl + "/" + this.markRecordingPositionUri + "?client=json&" + params;
      }else if (this.isPlayingCatchup()){
        //catchup
        if ((this.contentId != null && this.contentId != "") && (this.contentId != this.channelId) /*//android old versions*/ ){
          //u7d
          params = "video_external_id=" + this.contentId +"&position=" + postion;
          url =  this.rightTvUrl + "/" + this.markPositionUri + "?client=json&" + params;
        }else{
          //epg 
          params = "program_external_id=" + this.programId + "&channel_external_id=" + this.channelId + "&position=" + postion;
          url =  this.rightTvUrl + "/" + this.markRecordingPositionUri + "?client=json&" + params;
        }
      }else{
        // vod / svod
        params = "video_external_id=" + this.contentId +"&position=" + postion;
        url =  this.rightTvUrl + "/" + this.markPositionUri + "?client=json&" + params;
      }

      this.request(url, "GET", null, null);
    }

  }


  getUsername() {
    return this.username;
  }


  getSessionManagerInterval() {
    return this.sessionManagerInterval;
  }

  getMarkPositionInterval() {
    return this.markPositionInterval;
  }

  openSession(){
    if (!this.isPlayingTrailer()) {

      var params = "&type=" + this.contentType + "&deviceId=" + this.terminalId + "&contentId=" + this.contentId;
      if (this.sessionManagerId != null){
        params += "&externalSessionId=" + this.sessionManagerId;
      }
      var url = this.sessionManagerUrl + "/" + this.openSessionUri + "?client=json" + params;

      this.request(url, "GET", null, null);

   }

  }

  closeSession(){
    var params = "&type=" + this.contentType + "&deviceId=" + this.terminalId + "&contentId=" + this.contentId + "&externalSessionId=" + this.sessionManagerId;
    var url = this.sessionManagerUrl + "/" + this.closeSessionUri + "?client=json" + params;
    this.request(url, "GET", null, null);
  }


  request(url, method, postParams, okFunction){
    var xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.withCredentials = true;
    //xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

    if (postParams != null){
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send(postParams);
    }else{
      xhttp.send();
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
        
          if (this.status == 200) {
            //var status = JSON.parse(xhttp.responseText)["response"]["status"];

            if (okFunction!=null){
              okFunction()
            }

          }else{
            console.log("CUSTOM LOG: else response: " + xhttp.responseText );
          }

        }
    }
  }

  getDefaultAudioLanguage() {
    return this.defaultAudio;
  }

  getDefaultSubtitlesLanguage() {
    return this.defaultSubtitles;
  }


  getLanguageLabel(language){
    if (language != null && language != ""){
      var label = "lang." + language;
      if (languages[label] != null){
        return languages[label];
      }
    }

    return language;
    
  }

}
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
        document.getElementById("fingerprint").style.visibility = "visible";
        document.getElementById("fingerprint").innerHTML = wasAbi.getHouseholdId();
        scheduleHideFingerprint();
    }
}

function hideFingerprint(){
    document.getElementById("fingerprint").style.visibility = "hidden";
    if(wasAbi.hasFingerprint()){
        scheduleShowFingerprint();
    }
}

function changeFingerprintLayout(){
    document.getElementById("fingerprint").style.backgroundColor ="magenta";//wasAbi.fingerprintBackgroundColor;
    document.getElementById("fingerprint").style.color = wasAbi.fingerprintForegroundColor;
    document.getElementById("fingerprint").style.border = "thin solid " + wasAbi.fingerprintBorderColor
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

