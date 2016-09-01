define([
  'jquery', 'qlik', 'css!./style.css'],
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
                canTakeSnapshot: true
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
                if (qlik.Promise) {
                    return qlik.Promise.resolve();
                }

                function isEditMode(obj) {
                    return (obj.inEditState()) || (window.location.pathname.substring(window.location.pathname.length - 10) == "state/edit");
                }

            }
        };

    });