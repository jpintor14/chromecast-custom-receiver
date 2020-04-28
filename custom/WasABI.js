//
//  WasABI.swift
//  Orange TV
//  WasABI ABI integrator (RTV, Compass, SM, DCS)
//  Created by Optiva Media on 13/04/2020.
//  Copyright © 2020 Orange. All rights reserved.
//
class WasABI {
 
  constructor() {
    var self = this;
    this.chromecastChannel = "urn:x-cast:com.optm.anhplayer";
    this.licenseUrl = "https://ios.orangetv.orange.es/mob/api/rtv/v1/drm";

    //right tv
    this.rightTvUrl = "https://orangetv.orange.es/mob/api/rtv/v1";
    this.loginUri = "Login";

    //compass 
    this.compassUrl = "https://orangetv.orange.es/mob/api/reco/v1/";
    //session manager
    this.sessionManagerUrl = "https://orangetv.orange.es/mob/api/sm/v1/";
    this.openSessionUri = "OpenSession";
    this.closeSessionUri = "CloseSession";
    this.sessionManagerId = "";
    this.sessionManagerInterval = "";
    this.sessionManagerTimer = null;

    this.chromecastSerialId = "";
    this.username = "";
    this.password = "";
    this.liveChannel = "";
    this.contentId = "";
    this.contentType = "";


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

  setLicenseUrl(url) {
    this.licenseUrl = url;
  }

  initSessionParams(params){
    this.contentId = params.contentId;
    this.contentType = params.contentType;
    this.sessionManagerId = params.sessionManagerId;
    this.sessionManagerInterval = params.sessionManagerInterval;
    this.chromecastSerialId = params.chromecastSerialId;
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

  scheduleOpenSession(){
    if (this.contentType != this.trailerContentType){
      //this.sessionManagerTimer = setInterval( openSession(self), 10000);
    }
  }

  openSession(instance){
    var params = "&type=" + instance.contentType + "&deviceId= " + instance.chromecastSerialId + "&contentId=" + instance.contentId;
    if (instance.sessionManagerId != null){
      params += "&externalSessionId=" + instance.sessionManagerId;
    }
    var url = instance.sessionManagerUrl + "/" + instance.openSessionUri + "?client=json" + params;
    instance.request(url, "GET", null, null);
  }

  closeSession(){
    clearInterval(this.sessionManagerTimer);
    var params = "&type=" + this.contentType + "&deviceId= " + this.chromecastSerialId + "&contentId=" + this.contentId + "&externalSessionId=" + this.sessionManagerId;
    var url = this.sessionManagerUrl + "/" + this.closeSession + "?client=json" + params;
    this.request(url, "GET", null, null);
  }


  request(url, method, postParams, okFunction){
    var xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.withCredentials = true
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    if (postParams != null){
      xhttp.send(postParams);
    }

    xhttp.onreadystatechange = function() {
        console.log("url: " + url );
        if (this.readyState == 4 && this.status == 200) {
            console.log("response: " + xhttp.responseText );
            var status = JSON.parse(xhttp.responseText)["response"]["status"];
            console.log("response: " + status );

            if (okFunction!=null){
              okFunction()
            }
        }
    }
  }



}