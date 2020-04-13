//
//  WasABI.swift
//  Orange TV
//  WasABI ABI integrator (RTV, Compass, SB, DCS)
//  Created by Optiva Media on 13/04/2020.
//  Copyright © 2020 Orange. All rights reserved.
//
class WasABI {
  static CHANNEL = 'urn:x-cast:com.optm.anhplayer';
  
  licenseUrl = 'https://ios.orangetv.orange.es/mob/api/rtv/v1/drm';
  rightTvUrl = 'https://orangetv.orange.es/mob/api/rtv/v1';
  username = '';
  password = '';

  constructor() {
    
  }

  // chromecast custom namespace
  getChannel() {
    return this.CHANNEL;
  }

  /*
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


  getUsername() {
    return this.username;
  }
*/


}