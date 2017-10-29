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
let app = {
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

let selectSection = section=> {
    section.appendChild(underline);
    section.style.fontWeight = "bold";
}, showElement = elem => {
    elem.className = elem.className.replace(/[\s]+/g,' ').replace(/^[\s]/, '').replace(/\bhide\b/g, '');
}, hideElement = elem => {
    elem.className = undefined ? 'hide' : elem.className + ' hide';
}, getCriteriaEventHandler = criteria => {
    return function () {
        backdrop.activeChild = (criteria === filterCriteria ? filterCriteria : sortCriteria);
        showElement(backdrop);
        showElement(backdrop.activeChild);
    }
}, buttonSetShow = () => {
    showElement(buttonset);
    filterButton.addEventListener('touchstart', getCriteriaEventHandler(filterCriteria));
    sortButton.addEventListener('touchstart', getCriteriaEventHandler(sortCriteria));
}, buttonSetHide = () => {
    hideElement(buttonset);
    filterButton.removeEventListener('touchstart', getCriteriaEventHandler(filterCriteria));
    sortButton.removeEventListener('touchstart', getCriteriaEventHandler(sortCriteria));
};

app.initialize();

let [
        section, sectionList, underline, buttonset, resultList, filterButton, sortButton,
        backdrop, filterCriteria, sortCriteria
    ] = [
        document.getElementById('section'),
        document.getElementById('section').getElementsByTagName('a'),
        document.createElement('div'), document.getElementById('buttonset'),
        document.getElementById('resultList'), document.getElementById('filter'), document.getElementById('sort'),
        document.getElementById('backdrop'), document.getElementById('filterCriteria'),
        document.getElementById('sortCriteria')
    ];

underline.className = 'selected';

curSection = 1;
selectSection(sectionList[curSection - 1]);

section.addEventListener('click',function (e) {
    let newURL = e.target.href;
    curSection = location.hash ? location.hash.substring(1) : 1;

    sectionList[curSection - 1].style.fontWeight = "";
    selectSection(e.target);
});

resultList.addEventListener('scroll', function (e) {
    let self = arguments.callee;
    buttonSetShow();
    setTimeout(function () {
        this.removeEventListener('scroll', self);
        buttonSetHide();
    }, 3000);
});

backdrop.addEventListener('click', function (e) {
    if(e.target.id === 'backdrop'){
        hideElement(backdrop);
        hideElement(backdrop.activeChild);
        buttonSetHide();
    }
});
