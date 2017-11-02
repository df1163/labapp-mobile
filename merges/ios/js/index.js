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
        alert('This is IOS!');
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: () => {
        var getDeviceBtn = document.getElementById("getDeviceMore");

        getDeviceBtn.addEventListener('click', getDeviceMore);

        function getDeviceMore() {
            try {

                var center = cordova.require('com.liki.plugins.testMyPlugin.TestPlugin');

                center.getDeviceMore(onSucceed, onFailed);
            } catch (e) {
                alert('Cordova Error!');
            }

        }

        function onSucceed(deviceAbout) {
            var deviceStr = JSON.stringify(deviceAbout);
            alert(deviceStr);
        }

        function onFailed() {
            alert("获取失败");
        }

        // let xhr = new XMLHttpRequest();
        //
        // document.cookie = 'FedAuth=77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U2VjdXJpdHlDb250ZXh0VG9rZW4gcDE6SWQ9Il9hM2NhNmY5YS05YzkyLTQ0ZjQtYTRhOS1jNjdhODFlNmMxY2EtQkNGMTEzQzNFRkI1QjY0MzM3N0Y3MURGQTQxRUQyMkQiIHhtbG5zOnAxPSJodHRwOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy93c3MvMjAwNC8wMS9vYXNpcy0yMDA0MDEtd3NzLXdzc2VjdXJpdHktdXRpbGl0eS0xLjAueHNkIiB4bWxucz0iaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcvd3Mtc3gvd3Mtc2VjdXJlY29udmVyc2F0aW9uLzIwMDUxMiI+PElkZW50aWZpZXI+dXJuOnV1aWQ6MGEwM2JhYTEtZDdiNi00Zjk2LWIxZTItNmVkYTgzODM1ZmQ2PC9JZGVudGlmaWVyPjxDb29raWUgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwNi8wNS9zZWN1cml0eSI+Z0RKczVjOXc0QXgwczBjMDcycW9HSjlZMTJCVVhvWFJseE56VDNYODZGMFJGS3hCeVJhaWtOVW5yTU1qK01KZThSNzZpSGhYWm5wVzRJRzI1NVdBbWwzc0tiRzJJRVVDKzlqSTNYYWhrTlNpWWJYMUIxUlprSmVxNXNCZzA3ZXJWWEVSMi9aK1l1WTVjcGdWU2ozQ3hyTHl6TU80WHVjMUY1QTVtZ2lzM3I4eVF0UWFuNVdjcW0vSlhTS0pMSDZPY0dCdGNsRytURlNPNDFEZUtOdS9tMUdGd3RYMkFIMzhwSzVoVjVqVGJSblVGQlhLRk1zdUNmbk5UYkI5L1BHbkYzQk45SzhnK0plS3RsenZhcnkrMnpyL0lyekxERmhkMCs0dmJ0ZzRubEtZYVlrbnRZelU1QVE3T2xraTg3WFl0c0tXNTJVb2pBYmx4SFlhTnpLVEloVFJ4ZndENDdFZlR3VG1mMDNROUN4NnNDcHFwdzZyVGlmZCtpQUNEN3pZV2Q0dlgxRGNydUFuUWZjZ3ltSE9OY1dsUGI2L2pCTkJEOFU3ZVdWZjVkWlFvSVZiaVZwZHJ3VW9mM2J6aEp3WlpQVVpaOUJqYklwa1JqYUptaXhtNlFuUTMyYVc0VTdUdGNEU1dCaGk2M0pMRmJ6MDVKWUFpVjRtT21LdC9USysrdDNIR0dDY0FDOG53WjA5cmQvc2RZaTk3dEhucE01UEJpR2dsaEYrUnAzeHNsc0hYU2x6RW16RndwZzZUM3ZXMVRXdHBYYzdJVzRDS0FLVkUwMi9pR2FQWWwwcEhGbjl1R2dCWm9ZNEV3bGtZaUdFSnFXck5CaTBiNEgrNTRGY2k3UFVxUEs5TjhmSDZnbDNkcHFGclhXcGZ3RkxXSEZIV3N1NTdTMldFMFpoRzFKbk8xa3JsWnNmQXNiVXJybnlGZE1lODJZbmc0WVdsSXR2NjNzMU9rNWJNT01HTTZNN2tLb2lpdExLME9wWDV1R2FOSXFEODl2OVp3cUpYZHN6RG1pWVFYS3ZhNTNTR0hUcXVyekExUW5lOHY3NU1qSkhIRTZyL0pHUXFIdHlDSnlNc2NNUjdHcmlzU1hVNkZTSklubmYwOUc4MVJoMEovSW8vTmVNaG9idnpLZmdHN1RwVzBVQTNCR21zNmZXTG5IUy82eERyeTEyWkdScENKaVY1bndUbVZ1bFQ0L1JkMDlKblhleW1sNFFvSUtwY0VnMFBXWDd0S3pWdDZ6MnJjK1gxVTh1QzZBRmtHcXVqWnNmQTlXcHhhayt4TmtScVZJbDlEMUVyQmUwSzNWcFZLWEJQZzdDRFl4eUROd3FNaW5xOUZjS0JYOURZSVViZlRMdnJaUFA2ZG01UU5uR3Y0OVJjR2IyMVVVWHlaVTEyVDlrN1Q5; FedAuth1=MGN4Rnh2aVphUGtoSUltNzY3TVJJZmJ3MVVyajZoSWtqeGFRM1JvdVRFUEw1c2R2Q0lETTQ5TWtCOHNoSjlTNnFHclphYW5DRGFwYjZWNFNCSFE0ejNIM2dGYnZSK1hSdUlpOWo4a292dHYrN1poOU00dmlPSnZQZ1VTTENqN2x3clNUdlNmZW13bDhMU2JvZlorYzdpNXBTMlFoc3pmSG1kS2FwVHdEbGFvQnRvN0x5NVoyeWl2S0UxMnM5SHZyTyt4ZmpWRUVDRlhoVXRyUGRnU1NwOVJ3Z2FGdk9KNnk0NmJnK3ZGVmRRVmlBMldJNFhJTGtVQVhlcE9ib0xsMm9TMGZjYWpkVE5WaGczc3JBSzdhSGFyOHI3MSt1bXZ5RDNIYXo4dzRQR3NzZDNuNm9QOVRjbWhWbWp3bTgwVkNlNWFEOGRHbGc1RVJtaHp2TVJnZytZY0JiWXFiRGdKTVA4OHQ0VmpyOGxEZnZTREQ3Z2NKMjJOY3JBNWJJclhHcEh1K05ZMU5GaE1HNkhKM2p5T016akpZQ3NsWVI1dFJabTY2M1RBdWZQYVZYc2ozQWxCa1NPU3ZxbWdERTFKcjlMWGlvMjVnMmVKcFRiZ3ZadjR3SFFzckZWR3RMd0NOcVBwRGZVNUFzQUZCaXZvTzBzTjZ2eVdIc2E5NEUxMlRRWFNqbmdmc3F4YWhRajRzeFljRzMvV05yTnZlSjgyOXVId0NvMWMxV3N6RnYxa1hPMElxa0FNcTZaYm1ONnZwM1RpNkVlYnB3cEJCSFRHRDBZTjZBNG1yTkpuRHZMU040VHJjeXUwd3dRcXhXdzJNSVZOU3RqRW5CVVBHNXAza1BBbkhmZTl0UEdOK2dUeC90OVFiU3MrYzF4eE9MUjVPWHhWcHRiazdxTzkvTFljaTBPdGdBUlY3VHdXQkpWMXBKanJnM3ZBOXhHajNQPC9Db29raWU+PC9TZWN1cml0eUNvbnRleHRUb2tlbj4=; Hm_lvt_d39e67062f2c834c707b85a43e564cd4=1508494882,1509423194,1509438649,1509438668; Hm_lpvt_d39e67062f2c834c707b85a43e564cd4=1509438668';
        //
        // xhr.onreadystatechange =  () => {
        //     console.log('Current Phase is: ' + xhr.readyState);
        //     if(xhr.readyState === 4){
        //         if(xhr.status === 200){
        //             alert('Yes! ' + xhr.responseText);
        //         }
        //         else
        //             alert('Error! ' + xhr.status);
        //     }
        // }
        //
        // xhr.open('post', 'https://www.baidu.com', true);
        // xhr.withCredentials = true;
        // xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://www.baidu.com');
        // xhr.send();

        let [
            user, panel, section, sectionList, buttonset, resultList, filterButton, sortButton,
            backdrop, filterCriteria, sortCriteria, appDetail, returnIcons,
            cancelButton, submitButton, buttonContainer, searchIcon, underline, checked
        ] = [
            document.getElementById('user'),
            document.getElementById('panel'),
            document.getElementById('section'),
            document.getElementById('section').getElementsByTagName('a'),
            document.getElementById('buttonset'),
            document.getElementById('resultList'),
            document.getElementById('filter'),
            document.getElementById('sort'),
            document.getElementById('backdrop'),
            document.getElementById('filterCriteria'),
            document.getElementById('sortCriteria'),
            document.getElementById('appDetail'),
            document.querySelectorAll('i.iconfont.icon-back'),
            document.querySelectorAll('#filterCriteria .cancel, #sortCriteria .cancel'),
            document.querySelectorAll('#filterCriteria .submit, #sortCriteria .submit'),
            document.querySelectorAll('.button-container'),
            document.getElementById('searchIcon'),
            document.createElement('div'),
            document.createElement('i')
        ];

        let [filterClass, filterPlatform, sort] = ['all', 'all', 'default'];

        let selectSection = section => {

            section.appendChild(underline);
            section.style.fontWeight = "bold";

        }, buttonClicked = elem => {

            elem.className = ("" || undefined) ? 'selected-button' : elem.className += ' selected-button'

        }, buttonUnclicked = elem => {

            elem.className = elem.className.replace(/[\s]+/g, ' ').replace(/^[\s]/, '').replace(/\bselected-button\b/g, '');

        }, showElement = elem => {

            elem.className = elem.className.replace(/[\s]+/g, ' ').replace(/^[\s]/, '').replace(/\bhide\b/g, '');

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
            filterButton.addEventListener('click', getCriteriaEventHandler(filterCriteria));
            sortButton.addEventListener('click', getCriteriaEventHandler(sortCriteria));

        }, buttonSetHide = () => {

            hideElement(buttonset);
            filterButton.removeEventListener('click', getCriteriaEventHandler(filterCriteria));
            sortButton.removeEventListener('click', getCriteriaEventHandler(sortCriteria));

        };
        let curSection = (location.hash === '#search' || location.hash === "") ? 1 : location.hash.substring(1);

        underline.className = 'selected';
        checked.className = 'float-right iconfont icon-selected';
        sortCriteria.children[1].appendChild(checked);

        selectSection(sectionList[curSection - 1]);

        searchIcon.addEventListener('click', e => {
            console.log('Clicked! now url is: ' + location.hash);
            if (location.hash !== '#search')
                curSection = location.hash.substring(1);
            else
                console.log('Jumped from ' + curSection + ' to search');
            selectSection(sectionList[curSection - 1]);
            hideElement(user);
            hideElement(section);
            hideElement(resultList);
            showElement(search);
        });

        returnIcons.forEach(function (returnIcon) {
            returnIcon.addEventListener('click', e => {
                // alert('Back to section: ' + curSection);
                selectSection(sectionList[curSection - 1]);
                showElement(user);
                showElement(panel);
                showElement(section);
                showElement(resultList);
                if (returnIcon.dataset.anchor) hideElement(appDetail);
                else hideElement(search);
            });
        });

        section.addEventListener('click', e => {
            if (location.hash !== '#search') {
                curSection = location.hash ? location.hash.substring(1) : 1;
                sectionList[curSection - 1].style.fontWeight = "";
            }
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

        backdrop.addEventListener('click', e => {
            if (e.target.id === 'backdrop') {
                hideElement(backdrop);
                hideElement(backdrop.activeChild);
                buttonSetHide();
            }
        });

        cancelButton.forEach(elem => {
            elem.addEventListener('click', () => {
                hideElement(backdrop);
                hideElement(backdrop.activeChild);
                buttonSetHide();
            });
        })

        submitButton.forEach(elem => {
            elem.addEventListener('click', () => {
                hideElement(backdrop);
                hideElement(backdrop.activeChild);
                buttonSetHide();
            });
        })

        buttonContainer.forEach(elem => {
            elem.addEventListener('click', e => {
                if (elem.selected && elem.selected === e.target) {
                    elem.criteria = 'all';
                    elem.selected = null;
                    buttonUnclicked(e.target);
                }
                else {
                    if (elem.selected) buttonUnclicked(elem.selected);
                    let criteria = e.target.dataset.class ? e.target.dataset.class : e.target.dataset.platform;
                    elem.criteria = criteria;
                    elem.selected = e.target;
                    buttonClicked(e.target);
                }
                if (elem.id === 'platform-criteria') filterPlatform = elem.criteria;
                else filterClass = elem.criteria;
            })
        });

        sortCriteria.addEventListener('click', function (e) {
            if (e.target.dataset.sort) {
                sort = e.target.dataset.sort;
                e.target.appendChild(checked);
            }
        });

        function test() {
            alert('Function run!');
            var options = {quality: "200"};
            cordova.exec(
                function (result) {
                    alert("Success!");
                    alert(result);
                },
                function (error) {
                    alert("error");
                    alert(error);
                },
                'HelloWorld', 'sayHello', [options]);
            alert('Done!');
        };

        test();
    }
};

app.initialize();
