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
    this.licenseUrl = "https://ios.orangetv.orange.es/mob/api/rtv/v1/drm";

    //right tv
    this.rightTvUrl = "https://ios.orangetv.orange.es/mob/api/rtv/v1";
    this.loginUri = "Login";
    this.markPositionUri = "MarkPosition";
    this.markRecordingPositionUri = "MarkRecordingPosition";

    //compass 
    this.compassUrl = "https://ios.orangetv.orange.es/mob/api/reco/v1";
    //session manager
    this.sessionManagerUrl = "https://ios.orangetv.orange.es/mob/api/sm/v1";
    this.openSessionUri = "openSession";
    this.closeSessionUri = "closeSession";
    this.sessionManagerId = "";
    this.sessionManagerInterval = 5000;

    this.chromecastSerialId = "";
    this.username = "";
    this.password = "";
    this.channelId = "";
    this.programId = "";
    this.recordingId = "";
    this.contentId = "";
    this.contentType = "";
    this.customData = "";
    this.playingUrl = "";
    this.contentImage = "";
    this.contentTitle = "";

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
    console.log("CUSTOM LOG: openSession getContentInfo " + this.contentType);
    var info = { "id": this.contentId,
                "type": this.contentType,
                "licenseUrl": this.licenseUrl,
                "customData": this.customData,
                "channelId": this.channelId,
                "programId": this.programId,
                "recordingId": this.recordingId,
                "sessionManagerId": this.sessionManagerId,
                "contentImage": this.contentImage ,
                "contentTitle": this.contentTitle };
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

  initSessionParams(params){
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


    console.log("CUSTOM LOG: initSessionParams contentId " + this.contentId);
    console.log("CUSTOM LOG: initSessionParams contentType " + this.contentType);
  }

  
  // login
  login(params){
    this.username = params.username;
    this.password = params.password;
    var url =  this.rightTvUrl + "/" + this.loginUri + "?client=json";
    var postParams = "username=" + this.username +"&password=" + this.password;

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

  openSession(wasAbi){
    console.log("CUSTOM LOG: openSession: " );
    console.log("CUSTOM LOG: openSession contentId " + wasAbi.contentId)
    console.log("CUSTOM LOG: openSession contentType " + wasAbi.contentType)

    if (!this.isPlayingTrailer()) {


      console.log("CUSTOM LOG: openSession: is not a trailer" );

      var params = "&type=" + wasAbi.contentType + "&deviceId=" + wasAbi.chromecastSerialId + "&contentId=" + wasAbi.contentId;
      if (wasAbi.sessionManagerId != null){
        params += "&externalSessionId=" + wasAbi.sessionManagerId;
      }
      var url = wasAbi.sessionManagerUrl + "/" + wasAbi.openSessionUri + "?client=json" + params;


      console.log("CUSTOM LOG: openSession: call GET " );
      wasAbi.request(url, "GET", null, null);

   }

  }

  closeSession(wasAbi){
    var params = "&type=" + wasAbi.contentType + "&deviceId= " + wasAbi.chromecastSerialId + "&contentId=" + wasAbi.contentId + "&externalSessionId=" + wasAbi.sessionManagerId;
    var url = wasAbi.sessionManagerUrl + "/" + wasAbi.closeSession + "?client=json" + params;
    wasAbi.request(url, "GET", null, null);
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


  getLanguageName(language){
    var response = launguage;
    var found = false;
    var spa_langs = ["es", "spa", "ES"];
    var en_langs = ["en", "uk", "usa", "UK", "USA"];

    console.log("on PLAYER_LOAD_COMPLETE: getLanguageName 0");

    spa_langs.forEach(function(item){

      console.log("on PLAYER_LOAD_COMPLETE: spa_langs " + item);

      /*
      if (launguage.includes(item)) {
        console.log("on PLAYER_LOAD_COMPLETE: getLanguageName Español" + language);
        found = true;
        response = "Español";
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

    console.log("on PLAYER_LOAD_COMPLETE: getLanguageName lang" + response);

    return response;
  

  }



}