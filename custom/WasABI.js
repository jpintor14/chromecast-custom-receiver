//
//  WasABI.swift
//  Orange TV
//  WasABI ABI integrator (RTV, Compass, SB, DCS)
//  Created by Optiva Media on 13/04/2020.
//  Copyright © 2020 Orange. All rights reserved.
//
class WasABI {
  channel = 'urn:x-cast:com.optm.anhplayer';
  licenseUrl = 'https://ios.orangetv.orange.es/mob/api/rtv/v1/drm';
  rightTvUrl = 'https://orangetv.orange.es/mob/api/rtv/v1';
  username = '';
  password = '';
  liveChannel = '';

  constructor() {
    
  }

  // chromecast custom namespace
  getChannel() {
    return this.channel;
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

  /*
  getLivePlayingInfo(params, playerManager){
    this.liveChannel = this.liveChannel
    var xhttpLivePlaying = new XMLHttpRequest();
    xhttpLivePlaying.open("GET", this.rightTvUrl + "/GetLivePlayingInfo?client=json&include_cas_token=true&channel_external_id=" + this.liveChannel +"&serial_number=FD0DADFF0D46E7D656500EDAA91C264E", true);
    xhttpLivePlaying.withCredentials = true
    xhttpLivePlaying.send();


    xhttpLivePlaying.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            addToLog("getLivePlayingInfo");
            var response = JSON.parse(xhttpLivePlaying.responseText)["response"];
            var casToken = response["casToken"]
            var playingUrl = response["playingUrl"]
            addToLog("response " + xhttpLivePlaying.responseText );
            
            playerManager.load()
        }
    }
}
*/



}