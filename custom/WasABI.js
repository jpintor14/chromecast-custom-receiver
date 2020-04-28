//
//  WasABI.swift
//  Orange TV
//  WasABI ABI integrator (RTV, Compass, SM, DCS)
//  Created by Optiva Media on 13/04/2020.
//  Copyright © 2020 Orange. All rights reserved.
//
class WasABI {
  /*
  chromecastChannel = 'urn:x-cast:com.optm.anhplayer';
  licenseUrl = 'https://ios.orangetv.orange.es/mob/api/rtv/v1/drm';

  //right tv
  rightTvUrl = 'https://orangetv.orange.es/mob/api/rtv/v1';
  loginUri = "login";

  //compass 
  compassUrl = 'https://orangetv.orange.es/mob/api/reco/v1/';
  //session manager
  sessionManagerUrl = 'https://orangetv.orange.es/mob/api/sm/v1/';
  openSessionUri = "openSession";
  closeSessionUri = "closeSession";

  username = '';
  password = '';
  liveChannel = '';
  */

  constructor() {
    this.chromecastChannel = 'urn:x-cast:com.optm.anhplayer';
    this.licenseUrl = 'https://ios.orangetv.orange.es/mob/api/rtv/v1/drm';

    //right tv
    this.rightTvUrl = 'https://orangetv.orange.es/mob/api/rtv/v1';
    this.loginUri = "login";

    //compass 
    this.compassUrl = 'https://orangetv.orange.es/mob/api/reco/v1/';
    //session manager
    this.sessionManagerUrl = 'https://orangetv.orange.es/mob/api/sm/v1/';
    this.openSessionUri = "openSession";
    this.closeSessionUri = "closeSession";

    this.username = '';
    this.password = '';
    this.liveChannel = '';
  }

  /*
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


  
  // login
  login(params){
    this.username = params.username;
    this.password = params.password;
    var url =  this.rightTvUrl + "/" + this.loginUri + "?client=json";

    console.log("wasabi login");
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.withCredentials = true
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

  }


  getUsername() {
    return this.username;
  }

  /*
  openSession(type, deviceId, contentId, sessionId){
    var params = "&type=" + type + "&deviceId= " + deviceId + "&contentId=" + contentId;
    if (sessionId != null){
      params += "&externalSessionId=" + sessionId;
    }
    var url = this.sessionManagerUrl + "/" + this.openSessionUri + "?client=json" + params;

    console.log("session manager open session");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.withCredentials = true
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            console.log("response: " + xhttp.responseText );
            var status = JSON.parse(xhttp.responseText)["response"]["status"];
            console.log("response: " + status );

            //send ok
            //sendMessageToSender()
        }
    }
  }

  closeSession(type, deviceId, contentId, sessionId){
    var params = "&type=" + type + "&deviceId= " + deviceId + "&contentId=" + contentId + "&externalSessionId=" + sessionId;
    var url = this.sessionManagerUrl + "/" + this.closeSession + "?client=json" + params;

    console.log("session manager close session");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.withCredentials = true
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            console.log("response: " + xhttp.responseText );
            var status = JSON.parse(xhttp.responseText)["response"]["status"];
            console.log("response: " + status );

            //send ok
            //sendMessageToSender()
        }
    }

  }

  */



}