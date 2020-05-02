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

    //compass 
    this.compassUrl = "https://ios.orangetv.orange.es/mob/api/reco/v1";
    //session manager
    this.sessionManagerUrl = "https://ios.orangetv.orange.es/mob/api/sm/v1";
    this.openSessionUri = "openSession";
    this.closeSessionUri = "closeSession";
    this.sessionManagerId = "";
    this.sessionManagerInterval = "";

    this.chromecastSerialId = "";
    this.username = "";
    this.password = "";
    this.liveChannel = "";
    this.contentId = "";
    this.contentType = "";
    this.customData = "";
    this.playingUrl = "";

    this.trailerContentType = "TRAILER";
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
                "channelId": this.liveChannel,
                "sessionManagerId": this.sessionManagerId };
    return info;
  }

  setLicenseUrl(url) {
    this.licenseUrl = url;
  }

  initSessionParams(params){
    this.contentId = params.contentId;
    this.liveChannel = params.channelId;
    this.contentType = params.contentType;
    this.sessionManagerId = params.sessionManagerId;
    this.sessionManagerInterval = params.sessionManagerInterval;
    this.chromecastSerialId = params.chromecastSerialId;
    this.customData = params.customData;
    this.playingUrl = params.playingUrl;


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


  getUsername() {
    return this.username;
  }

  openSession(wasAbi){
    console.log("CUSTOM LOG: openSession: " );
    console.log("CUSTOM LOG: openSession contentId " + wasAbi.contentId)
    console.log("CUSTOM LOG: openSession contentType " + wasAbi.contentType)

    if (wasAbi.contentType != wasAbi.trailerContentType) {


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


  getLanguageName(launguage){
    var spa_langs = ["es", "spa", "ES"];
    var en_langs = ["en", "uk", "usa", "UK", "USA"];

    spa_langs.forEach(function(item){
      if (launguage.includes(item)) {
        console.log("on PLAYER_LOAD_COMPLETE: getLanguageName Español" + launguage);
        return "Español";
      }
    });


    en_langs.forEach(function(item){
      if (launguage.includes(item)) {
        console.log("on PLAYER_LOAD_COMPLETE: getLanguageName Inglés" + launguage);
        return "Inglés";
      }
    });


    console.log("on PLAYER_LOAD_COMPLETE: getLanguageName lang" + launguage);
    return launguage;

  }



}