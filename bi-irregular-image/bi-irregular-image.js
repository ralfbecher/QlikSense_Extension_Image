define(['jquery', 'qlik'],
    function ($, qlik) {
        'use strict';

        return {
            initialProperties: {
                version: 1.0
            },
            definition: {
                type: "items",
                component: "accordion",
                items: {
                    settings: {
                        uses: "settings",
                        items: {
                            imageHeader: {
                                type: "items",
                                label: "Image Params",
                                items: {
                                    imagePath: {
                                        ref: "imagePath",
                                        label: "Image Path",
                                        type: "string",
                                        defaultValue: "/content/default/",
                                        expression: "optional"
                                    },
                                    imageFile: {
                                        ref: "imageFile",
                                        label: "Image File",
                                        type: "string",
                                        defaultValue: "logo.jpg",
                                        expression: "optional"
                                    },
                                    imageStyle: {
                                        ref: "imageStyle",
                                        label: "Image Style CSS",
                                        type: "string",
                                        defaultValue: "display: block;margin: auto;",
                                        expression: "optional"
                                    },
                                    imageTitle: {
                                        ref: "imageTitle",
                                        label: "Image Title",
                                        type: "string",
                                        defaultValue: "",
                                        expression: "optional"
                                    },
                                    imageLink: {
                                        ref: "imageLink",
                                        label: "Image Link",
                                        type: "string",
                                        defaultValue: "",
                                        expression: "optional"
                                    },
                                    hint: {
                                        component: "text",
                                        label: "Press F5 after change of these options:"
                                    },
                                    fullScreen: {
                                        ref: "fullScreen",
                                        type: "boolean",
                                        component: "checkbox",
                                        label: "Full Screen Option",
                                        defaultValue: false
                                    },
                                    removeHeader: {
                                        ref: "removeHeader",
                                        type: "boolean",
                                        component: "checkbox",
                                        label: "Remove Sheet Object Header",
                                        defaultValue: false
                                    },
                                    removePadding: {
                                        ref: "removePadding",
                                        type: "boolean",
                                        component: "checkbox",
                                        label: "Remove Sheet Object Padding",
                                        defaultValue: false
                                    }        
                                }
                            }
                        }
                    }
                }
            },
            support: {
                export: true
            },
            snapshot: {
                canTakeSnapshot: false
            },
            paint: function ($element, layout) {

                $element.empty();
                var img = $('<img />')
                    .attr({
                        src: layout.imagePath + layout.imageFile,
                        style: layout.imageStyle,
                        title: layout.imageTitle
                    });
                if (layout.imageLink != "" && !isEditMode(this)) {
                    var link = $('<a />').attr({
                        href: layout.imageLink,
                        target: "_blank"
                    });
                    img.appendTo(link);
                    $element.append(link);
                } else {
                    $element.empty().append(img);
                }
                // switch Full Screen option
                if (!layout.fullScreen) {
                    // prevent multiple style elements
                    if ($('#bi-irregular-image-fullscreen').length == 0) {
                        $("<style type='text/css' id='bi-irregular-image-fullscreen'>.qv-object-bi-irregular-image ~ .qv-object-nav .icon-zoom-in {display: none;}</style>").appendTo("head");
                    }
                }

                if (layout.hasOwnProperty('removeHeader') || layout.hasOwnProperty('removePadding')) {
                    var elem = $("[tid='" + layout.qInfo.qId + "']");

                    if (layout.hasOwnProperty('removeHeader') && layout.removeHeader) {
                        elem.find('.qv-object-header').remove();
                    }
                    if (layout.hasOwnProperty('removePadding') && layout.removePadding) {
                        elem.find('.qv-inner-object').css('padding', '0 0px 0px');
                    }
                }

                if (qlik.Promise) {
                    return qlik.Promise.resolve();
                }

                function isEditMode(obj) {
                    return (obj.inEditState()) || (window.location.pathname.substring(window.location.pathname.length - 10) == "state/edit");
                }

            }
        };

    });