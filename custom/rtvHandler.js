class rtvHandler {

    constructor(){
        this.apiUrl = "https://orangetv.orange.es/mob/api/rtv/v1/";
        this.clientJson = "?client=json";
        this.loginUri = "\Login";
        this.liveUri = "\GetVideoPlayingInfo";
        this.videoUri = "\GetVideoPlayingInfo";
        this.channel_external_id = "";
        this.username = "";
        this.pass = "";
        this.profile = "";
        this.casToken = "";
        this.playingUrl = "";

        this.setUpAjax()
    }

    setUpAjax(){
        $.ajaxSetup({
            type: "GET",
            data: {},
            dataType: 'json',
            xhrFields: {
               withCredentials: true
            },
            crossDomain: true
        });

        $.ajaxSetup({
            type: "POST",
            data: {},
            dataType: 'json',
            xhrFields: {
               withCredentials: true
            },
            crossDomain: true
        });
    }


    setChannelExternalId(externalId){
        this.channel_external_id = externalId;
    }

    getChannelExternalId(){
        return this.channel_external_id;
    }

    getCasToken(){
        return this.casToken;
    }

    login(username, password, profile){
        this.username = username
        this.pass = password
        this.profile

        this.loginWithData(username, password, profile)
    }

    
  
    loginWithData(username, password, profile, logMethod){
        var url = this.apiUrl + this.loginUri + this.clientJson
        var params = { "username": username, "password": password}
        /*
        $.post(url, params, function(result){
            logMethod("response: " + JSON.stringify(result) )
            var status = result["response"]["status"] 
            if (status == "SUCCESS"){
                logMethod("SUCCESS")
            }
        }, "json").then((response) => { 
            this.loginWithProfile(profile, logMethod);
          });
          */

        $.ajax({
            url: url,
            method: "POST",
            data: params,
            dataType: "json",
            xhrFields: { withCredentials: true },
            success: function(result) {
                logMethod("response: " + JSON.stringify(result) )
                var status = result["response"]["status"] 
                if (status == "SUCCESS"){
                    logMethod("SUCCESS")
                };
            }
        }).then((response) => { 
            this.loginWithProfile(profile, logMethod);
        });
    }

    loginWithProfile(profileId, logMethod){
        var url = this.apiUrl + this.loginUri + this.clientJson + "&profile_id=" + profileId;
        logMethod("url: " + url);

        /*
        $.get(url, function(result){
            logMethod("response: " + JSON.stringify(result) )
        }, "json");
        */

        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            xhrFields: { withCredentials: true },
            success: function(result) {
                logMethod("response: " + JSON.stringify(result) )
            }
        });

    }
    

    /*
    loginWithProfile(){		
        var xhttpLoginProfile = new XMLHttpRequest();		
        xhttpLoginProfile.open("GET", "https://orangetv.orange.es/pc/api/reco/v1/Login?client=json&profile_id=2597776", true);		
        xhttpLoginProfile.withCredentials = true		
        xhttpLoginProfile.send();		


         xhttpLoginProfile.onreadystatechange = function() {		
            if (this.readyState == 4 && this.status == 200) {		
                addToLog("loginWithProfile")		
                addToLog("response " + xhttpLoginProfile.responseText )		
                addToLog("response " + JSON.parse(xhttpLoginProfile.responseText)["response"] )	
            }		
        }		

     }
     */


    getLivePlayingInfo(channel, logMethod, playingMethod){
        var url = this.apiUrl + this.liveUri + this.clientJson + "&include_cas_token=true&serial_number=FD0DADFF0D46E7D656500EDAA91C264E&channel_external_id=" + channel
        $.get(url, null, function(result){
            logMethod("response: " + JSON.stringify(result) )
            this.casToken = result["response"]["casToken"]
            this.playingUrl = result["response"]["playingUrl"]
            playingMethod()
        }, "json");
    }

    

}