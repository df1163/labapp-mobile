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
        document.addEventListener('DOMContentLoaded', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: () => {

        let [
            user, panel, section, keyword, buttonset, nullResult, resultList, filterButton, sortButton,
            backdrop, filterCriteria, sortCriteria, appDetail, returnIcons,
            cancelButton, submitButton, buttonContainer, appCells, searchIcon, underline, checked
        ] = [
            document.getElementById('user'),
            document.getElementById('panel'),
            document.getElementById('section'),
            document.getElementById('keyword'),
            document.getElementById('buttonset'),
            document.getElementById('nullResult'),
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
            document.querySelectorAll('#resultList div.cell'),
            document.getElementById('searchIcon'),
            document.createElement('div'),
            document.createElement('i')
        ];

        let [
                filterClass, filterPlatform, sort, pageURL, pathname, selecteSectionIndex
            ] = [
                'all', 'all', 'default',['Recommend', 'Index', 'DownHistory'], location.pathname.split('/')[location.pathname.split('/').length - 1]
            ];

        let sectionList = pathname !== 'AppDetail' ? document.getElementById('section').getElementsByTagName('a') : [];

        let selectSection = section => {
            if(section){
                section.appendChild(underline);
                section.style.fontWeight = "bold";
            }

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

        if(sortCriteria !== null) {
            sortCriteria.children[1].appendChild(checked);
            sortCriteria.addEventListener('click', function (e) {
                if (e.target.dataset.sort) {
                    sort = e.target.dataset.sort;
                    e.target.appendChild(checked);
                }
            });
        }

        underline.className = 'selected';
        checked.className = 'float-right iconfont icon-selected';
        selecteSectionIndex = pageURL.indexOf(pathname) < 0 ? 1 : pageURL.indexOf(pathname);

        selectSection(sectionList[selecteSectionIndex]);

        if(searchIcon){
            searchIcon.addEventListener('click', function(e){
                //alert(document.querySelectorAll('[data-toggle|=false]').length);
                if(!keyword.value || keyword.value == undefined){
                    hideElement(user);
                    hideElement(section);
                    hideElement(resultList);
                    showElement(search);
                }
                else {
                    //toDo: 输入关键词搜索
                    showElement(nullResult);
                }
            });
        }

        appCells.forEach(function (cell) {
            cell.addEventListener('click', e=>{
                if(e.target.innerText !== '下载'){
                    location.href = "/AppShop/AppHome/AppDetail?appId=" + cell.dataset.appid;
                }
                else{
                    //toDo: 点击app列表中app的下载按钮触发下载事件
                    alert("下载！");
            }});
        });

        returnIcons.forEach(function (returnIcon) {
            returnIcon.addEventListener('click', e => {
                if(!returnIcon.dataset.anchor) {
                    hideElement(nullResult);
                    showElement(user);
                    showElement(section);
                    showElement(resultList);
                    hideElement(search);
                } else {
                    location.href = '/AppShop/AppHome/Index';
                }
            });
        });

        if(resultList) {
            resultList.addEventListener('scroll', function (e) {
                let self = arguments.callee;
                buttonSetShow();
                setTimeout(function () {
                    this.removeEventListener('scroll', self);
                    buttonSetHide();
                }, 3000);
            });
        }
        if(backdrop) {
            backdrop.addEventListener('click', e => {
                if (e.target.id === 'backdrop')
                {
                    hideElement(backdrop);
                    hideElement(backdrop.activeChild);
                    buttonSetHide();
                }
            })
        }

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

                //toDo: 这里添加点击排序之后的逻辑函数，包括调取后台APP排序、过滤等
                alert('filter by class: ' + filterClass + ", filter by platform: " + filterPlatform + ", sort by: " + sort);
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
    }
};

app.initialize();
