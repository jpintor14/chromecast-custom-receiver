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
    this.backgroundColorFingerprint = "black";
    this.foregroundColorFingerprint = "white";
    this.borderColorFingerprint = "transparent";
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

  getFingerprintPeriod(){
    return this.periodFingerprint;
  }

  getFingerprintBackgroundColor() {
    return this.backgroundColorFingerprint;
  }

  getFingerprintForegroundColor() {
    return this.foregroundColorFingerprint;
  }

  getFingerprintBorderColor() {
    return this.borderColorFingerprint;
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
    window.print("params: " + params);
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

      //check if the new fingerprint color params are received 
      if(params.backgroundColorFingerprint != null){
        window.print("initSessionParams - back: " + params.backgroundColorFingerprint);
        this.fingerprintBackgroundColor = params.fingerprintBackgroundColor;
      }
      if(params.foregroundColorFingerprint != null){
        this.fingerprintForegroundColor = params.fingerprintForegroundColor;
      }
      if(params.borderColorFingerprint != null){
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