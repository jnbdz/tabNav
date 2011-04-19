/*
---
description: This plugin create's a simple tab navigation.

license: MIT-style

authors:
- Jean-Nicolas Boulay Desjardins (http://jean-nicolas.name/)

requires:
-  
- externalPackage1/tag: component4

provides: [tabNav, urlFriendly]

...
*/

var tabNav = new Class({

                Implements: [Options, Events],

                options: {
                        namespace: 'tabnav',
                        tabs: []
                },

                initialize: function(el, options){
                        this.element = document.id(el);
                        this.setOptions(options);
                        this.build();
                },

                build: function(){
                        var list = new Element('ul').inject();

                        var name;
                        Array.each(this.tabs, function(val){
                                name = new urlFriendly().humanReadable(val);

                                list.grab(new Element('li').grab(new Element('a', {
                                        'href': this.options.namespace + '-' + name,
                                        'text': val
                                })));
                        });
                        
                }

        });
