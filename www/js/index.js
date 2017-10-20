/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function selectSection(section) {
    section.appendChild(underline);
    section.style.fontWeight = "bold";
}

function showElement(elem) {
    elem.className = elem.className.replace(/[\s]+/g,' ').replace(/^[\s]/, '').replace(/\bhide\b/g, '');
}

function hideElement(elem) {
    elem.className += ' hide';
}

app.initialize();

let section = document.getElementById('section'), sectionList = section.getElementsByTagName('a'),
        underline = document.createElement('div'), buttonset = document.getElementById('buttonset'),
        resultList = document.getElementById('resultList');

underline.className = 'selected';

if(location.hash === '#search') {
    hideElement(section);
    hideElement(resultList);
} else {
    curSection = location.hash ? location.hash.substring(1) : 1;
    selectSection(sectionList[curSection - 1]);
}

// console.log("At load, in section " + curSection);
section.addEventListener('click',function (e) {
    // console.log("================================");
    // console.log(sectionList);

    let newURL = e.target.href;
    curSection = location.hash ? location.hash.substring(1) : 1;

    // console.log("Before click, in section " + curSection);
    sectionList[curSection - 1].style.fontWeight = "";
    selectSection(e.target);

    // console.log("Clicked, new section is " + newSection);
    // console.log("================================");
});

resultList.addEventListener('touchstart', function (e) {
    showElement(buttonset);
});

resultList.addEventListener('touchend', function (e) {
    setTimeout(function () {
        hideElement(buttonset);
    }, 5000);
});
