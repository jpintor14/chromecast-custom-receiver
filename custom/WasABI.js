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
    this.licenseUrl = "https://orangetv.orange.es/mob/api/rtv/v1/drm";

    //right tv
    this.rightTvUrl = "https://orangetv.orange.es/mob/api/rtv/v1";
    this.loginUri = "Login";
    this.markPositionUri = "MarkPosition";
    this.markRecordingPositionUri = "MarkRecordingPosition";

    //compass 
    this.compassUrl = "https://orangetv.orange.es/mob/api/reco/v1";
    //session manager
    this.sessionManagerUrl = "https://orangetv.orange.es/mob/api/sm/v1";
    this.openSessionUri = "openSession";
    this.closeSessionUri = "closeSession";
    this.sessionManagerId = "";
    this.sessionManagerInterval = 60000;

    this.chromecastSerialId = "";
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
                "householdId": this.householdId };
    console.log("CUSTOM LOG: getContentInfo " + JSON.stringify(info));
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

  getRandomFingerprintPosition(){
    console.log("CUSTOM LOG: getRandomFingerPrintPosition");
    console.log("CUSTOM LOG: getRandomFingerPrintPosition" + this.coordinatesFingerprint.length);
    if (this.coordinatesFingerprint.length > 0){

      var randomPosition = Math.floor(Math.random() * this.coordinatesFingerprint.length); 
      console.log("CUSTOM LOG: getRandomFingerPrintPosition randomPosition");
      return coordinatesFingerprint[randomPosition];
  
    }else{
      return { horizontal: 0, vertical: 0 };
    }
  }


  getHouseholdId() {
    return this.householdId;
  }

  initSessionParams(params){
    this.householdId = params.householdId;
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
    this.sessionManagerInterval = params.sessionManagerInterval;

    //fingerprint
    this.channelFingerprint = params.channelFingerprint;
    if (this.channelFingerprint){
      //this.durationFingerprint = params.durationFingerprint * 1000;
      this.durationFingerprint = 30 * 1000;
      this.periodFingerprint = params.periodFingerprint * 1000;

      if (params.positionsFingerprint != null){

        console.log("CUSTOM LOG: positionsFingerprint ");

        var positionsArray = params.positionsFingerprint.split(";");
        console.log("CUSTOM LOG: positionsFingerprint positionsArray " + positionsArray.length);

        for (var i = 0; i < positionsArray.length; i++) {
          var coordinates = positionsArray[i].split("|");

          console.log("CUSTOM LOG: positionsFingerprint coordinates " + coordinates.length);
          if (coordinates.length > 1){
            var coordinate = { horizontal: coordinates[0], vertical: coordinates[1] }
            console.log("CUSTOM LOG: positionsFingerprint coordinate ");
            this.coordinatesFingerprint.push(coordinate)
            console.log("CUSTOM LOG: positionsFingerprint push ok ");
          }
        }


        console.log("CUSTOM LOG: positionsFingerprint" + this.coordinatesFingerprint);

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


    console.log("CUSTOM LOG: initSessionParams contentId " + this.contentId);
    console.log("CUSTOM LOG: initSessionParams contentType " + this.contentType);


    console.log("CUSTOM LOG: initSessionParams " + JSON.stringify(params));
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
        params = "program_external_id=" + this.programId + "&channel_external_id=" + this.channelId + "&position=" + postion;
        url =  this.rightTvUrl + "/" + this.markRecordingPositionUri + "?client=json&" + params;
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

  openSession(){
    console.log("CUSTOM LOG: openSession: " );
    console.log("CUSTOM LOG: openSession contentId " + this.contentId)
    console.log("CUSTOM LOG: openSession contentType " + this.contentType)

    if (!this.isPlayingTrailer()) {


      console.log("CUSTOM LOG: openSession: is not a trailer" );

      var params = "&type=" + this.contentType + "&deviceId=" + this.chromecastSerialId + "&contentId=" + this.contentId;
      if (this.sessionManagerId != null){
        params += "&externalSessionId=" + this.sessionManagerId;
      }
      var url = this.sessionManagerUrl + "/" + this.openSessionUri + "?client=json" + params;


      console.log("CUSTOM LOG: openSession: call GET " );
      this.request(url, "GET", null, null);

   }

  }

  closeSession(){
    var params = "&type=" + this.contentType + "&deviceId=" + this.chromecastSerialId + "&contentId=" + this.contentId + "&externalSessionId=" + this.sessionManagerId;
    var url = this.sessionManagerUrl + "/" + this.closeSessionUri + "?client=json" + params;
    this.request(url, "GET", null, null);
  }


  request(url, method, postParams, okFunction){
    console.log("CUSTOM LOG: request url: " + url );
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

    
    console.log("CUSTOM LOG: start onreadystatechange: " + url );
    xhttp.onreadystatechange = function() {
        console.log("CUSTOM LOG: url:  ONREADY " + url );
        if (this.readyState == 4) {
        
          if (this.status == 200) {
            console.log("CUSTOM LOG: response: " + xhttp.responseText );
            var status = JSON.parse(xhttp.responseText)["response"]["status"];
            console.log("CUSTOM LOG: response: " + status );

            if (okFunction!=null){
              okFunction()
            }

          }else{
            console.log("CUSTOM LOG: else status: " + this.status );
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



  //TEST:

  getLanguageName(language){
    console.log("on PLAYER_LOAD_COMPLETE: getLanguageName 0" + language);
    var languageResponse = "";
    console.log("on PLAYER_LOAD_COMPLETE: getLanguageName 0.1" + languageResponse);
    var found = false;
    console.log("on PLAYER_LOAD_COMPLETE: getLanguageName 0.2" + languageResponse);
    var spa_langs = ["es", "spa", "ES"];
    console.log("on PLAYER_LOAD_COMPLETE: getLanguageName 0.3" + languageResponse);
    var en_langs = ["en", "uk", "usa", "UK", "USA"];

    console.log("on PLAYER_LOAD_COMPLETE: getLanguageName 0.4");

    
    spa_langs.forEach(function(item){

      console.log("on PLAYER_LOAD_COMPLETE: spa_langs " + item);

      if (item.indexOf(language)){
        console.log("on PLAYER_LOAD_COMPLETE: getLanguageName Español" + language);
        found = true;
        languageResponse = "Español";
      }
      /*
      if (launguage.includes(item)) {
        console.log("on PLAYER_LOAD_COMPLETE: getLanguageName Español" + language);
        found = true;
        languageResponse = "Español";
      }
      */
      
      
    });

    console.log("on PLAYER_LOAD_COMPLETE: getLanguageName 1");

    /*
    if (!found){
      en_langs.forEach(function(item){

        console.log("on PLAYER_LOAD_COMPLETE: en_langs " + item);
        
        if (launguage.includes(item)) {
          console.log("on PLAYER_LOAD_COMPLETE: getLanguageName Inglés" + language);
          found = true;
          language = "Inglés";
        }
        
      });  
    }
    */

    console.log("on PLAYER_LOAD_COMPLETE: getLanguageName lang" + languageResponse);

    return languageResponse;
  

  }

  isDefaultLanguage(trackName, defaultLanguage){
    var found = false;
    var spa_langs = ["es", "spa", "ES"];
    var en_langs = ["en", "uk", "usa", "UK", "USA"];

    console.log("on PLAYER_LOAD_COMPLETE: isDefaultLanguage defaultLanguage " + defaultLanguage);
    console.log("on PLAYER_LOAD_COMPLETE: isDefaultLanguage trackName " + trackName);

    spa_langs.forEach(function(esItem){
      if (esItem == defaultLanguage && esItem.indexOf(trackName)){
        console.log("on PLAYER_LOAD_COMPLETE: isDefaultLanguage found " + esItem);
        found = true;
      }
    });

    if (!found){
      en_langs.forEach(function(enItem){
        if (enItem == defaultLanguage && enItem.indexOf(trackName)){
          console.log("on PLAYER_LOAD_COMPLETE: isDefaultLanguage found " + enItem);
          found = true;
        }
      });
    }

    return found;
  }



}