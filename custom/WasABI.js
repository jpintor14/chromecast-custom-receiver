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
    this.loginUri = "Login";

    //compass 
    this.compassUrl = "https://orangetv.orange.es/mob/api/reco/v1/";
    //session manager
    this.sessionManagerUrl = "https://orangetv.orange.es/mob/api/sm/v1/";
    this.openSessionUri = "OpenSession";
    this.closeSessionUri = "CloseSession";
    this.sessionManagerId = "";
    this.sessionManagerInterval = "";

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

    console.log("CUSTOM LOG: openSession contentId " + this.contentId)
    console.log("CUSTOM LOG: openSession contentType " + this.contentType)
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

      var params = "&type=" + wasAbi.contentType + "&deviceId= " + wasAbi.chromecastSerialId + "&contentId=" + wasAbi.contentId;
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
    console.log("url: " + url );
    var xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.withCredentials = true
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    if (postParams != null){
      xhttp.send(postParams);
    }

    xhttp.onreadystatechange = function() {
        console.log("CUSTOM LOG: url:  ONREADY " + url );
        if (this.readyState == 4 && this.status == 200) {
            console.log("CUSTOM LOG: response: " + xhttp.responseText );
            var status = JSON.parse(xhttp.responseText)["response"]["status"];
            console.log("CUSTOM LOG: response: " + status );

            if (okFunction!=null){
              okFunction()
            }
        }
    }
  }



}