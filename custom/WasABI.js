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
    this.rightTvUrl = "https://orangetv.orange.es/mob/api/rtv/v1";
    this.loginUri = "login";

    //compass 
    this.compassUrl = "https://orangetv.orange.es/mob/api/reco/v1/";
    //session manager
    this.sessionManagerUrl = "https://orangetv.orange.es/mob/api/sm/v1/";
    this.openSessionUri = "openSession";
    this.closeSessionUri = "closeSession";
    this.sessionManagerId = "";
    this.sessionManagerInterval = "";

    this.username = "";
    this.password = "";
    this.liveChannel = "";
    this.contentId = "";
    this.contentType = "";
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
  }

  
  // login
  login(params){
    this.username = params.username;
    this.password = params.password;
    var postParams = "username=" + this.username +"&password=" + this.password;
    var url =  this.rightTvUrl + "/" + this.loginUri + "?client=json&" + postParams;

    console.log("wasabi login");


    /*
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.withCredentials = true;
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + this.username +"&password=" + this.password);

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            console.log("response: " + xhttp.responseText );
            var status = JSON.parse(xhttp.responseText)["response"]["status"];
            console.log("response: " + status );

            //send ok
            //sendMessageToSender()
        }
    }
    */
   this.request(url, "POST", postParams, null);

  }


  getUsername() {
    return this.username;
  }

  openSession(type, deviceId, contentId, sessionId){
    var params = "&type=" + type + "&deviceId= " + deviceId + "&contentId=" + contentId;
    if (sessionId != null){
      params += "&externalSessionId=" + sessionId;
    }
    var url = this.sessionManagerUrl + "/" + this.openSessionUri + "?client=json" + params;
    this.request(url, "GET", null, null);
  }

  closeSession(type, deviceId, contentId, sessionId){
    var params = "&type=" + type + "&deviceId= " + deviceId + "&contentId=" + contentId + "&externalSessionId=" + sessionId;
    var url = this.sessionManagerUrl + "/" + this.closeSession + "?client=json" + params;
    this.request(url, "GET", null, null);
  }


  request(url, method, postParams, okFunction){
    var xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.withCredentials = true
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    console.log("request postParams: " + postParams );
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