//
//  WasABI.swift
//  Orange TV
//  WasABI ABI integrator (RTV, Compass, SB, DCS)
//  Created by Optiva Media on 13/04/2020.
//  Copyright © 2020 Orange. All rights reserved.
//
class WasABI {

  constructor() {
    this.channel = 'urn:x-cast:com.optm.anhplayer';
    this.licenseUrl = 'https://ios.orangetv.orange.es/mob/api/rtv/v1/drm';
    this.rightTvUrl = 'https://orangetv.orange.es/mob/api/rtv/v1';
    this.username = '';
    this.password = '';
  }

  // chromecast custom namespace
  get channel() {
    return this.channel;
  }
  
  // drm licenser url
  get licenseUrl() {
    return this.licenseUrl;
  }

  set licenseUrl(url) {
    this.licenseUrl = url;
  }


  // login
  login(params){
    this.username = params.username
    this.password = params.password

    console.log("wasabi login");
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", this.rightTvUrl + "/Login?client=json", true);
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


  get username() {
    return this.username;
  }



}