$(function () {
            var tipIndex = 0;

            $("#combo").igCombo({
                width: "270px",
                textKey: "MountainName",
                valueKey: "ID",
                dataSource: mountainTops,
                multiSelection: {
                    enabled: true
                },
                dropDownOpened: function (evt, ui) {
                    if ((evt.keyCode == 40) && (tipIndex == 1)) {
                        showWellDoneMessage();
                    }
                },
                dropDownClosed: function (evt, ui) {
                    if ((evt.keyCode == 38) && (tipIndex == 4)) {
                        showWellDoneMessage();
                    }

                    //Close the drop down when there are selected items
                    if (evt.keyCode == 27 && tipIndex == 7 && $("#combo").igCombo("selectedItems")) {
                        showWellDoneMessage();
                    }
                },
                selectionChanged: function (evt, ui) {
                    if (evt.keyCode == 16 && (tipIndex == 6)) {
                        showWellDoneMessage();
                    }
                }
            });

            $("#tooltip").tooltip({
                position: { of: ".ui-igcombo-buttonicon", my: "left+55 center", at: "right center" },
                open: function (event, ui) {
                    $("#tooltip").tooltip("option", "content", getTip(tipIndex++));
                },
                tooltipClass: "tooltipStyle"
            });

            setTimeout(function () {
                startExample();
            }, 1500);


            $(document).keydown(function (e) {
                if (e.keyCode == 36 && e.ctrlKey && tipIndex == 3) {
                    var ddOpened = $("#combo").igCombo("dropDownOpened");

                    if (ddOpened) {
                        showWellDoneMessage();
                    } else {
                        showMessage("Open the Drop Down first!");
                    }
                }

                if (e.keyCode == 35 && e.ctrlKey && tipIndex == 2) {
                    var ddOpened = $("#combo").igCombo("dropDownOpened");

                    if (ddOpened) {
                        showWellDoneMessage();
                    } else {
                        showMessage("Open the Drop Down first!");
                    }
                }

                //Clear the input when Esc is pressed
                if (e.keyCode == 27 && tipIndex == 5) {
                    showWellDoneMessage();
                }
            });

            function startExample() {
                $("#combo").igCombo("clearInput");
                $("#combo").igCombo("closeDropDown");
                $('#tooltip').tooltip('open');
                $(".ui-igcombo-field").focus();
            }

            function showMessage(message) {
                var currentContent = $("#tooltip").tooltip("option", "content");
                $("#tooltip").tooltip("option", "content", currentContent + "<br /><b>" + message + "</b>");

                setTimeout(function () {
                    $("#tooltip").tooltip("option", "content", currentContent);
                }, 2000);
            }

            function showWellDoneMessage() {
                var content = $("#tooltip").tooltip("option", "content");
                $("div[role='tooltip']").switchClass("normal", "glowing-border", 1000);
                $("#tooltip").tooltip("option", "content", content + " <span style='display: inline-block' class='ui-icon ui-icon-check'></span>");

                setTimeout(function () {
                    $("#tooltip").tooltip("close");

                    setTimeout(function () {
                        if (tipIndex == 7) $("#tooltip").tooltip("close");
                        else {
                            $("#tooltip").tooltip("open");
                            $("#tooltip").tooltip("option", "position", { of: ".ui-igcombo-buttonicon", my: "left+55 center", at: "right center" });
                        }
                    }, 500);
                }, 1500);
            }

            function getTip(idx) {
                var tips = [
	"Press <b>Down arrow</b> to Open drop down if closed or Move to next item if opened",
	"Press <b>Ctrl</b> + <b>End</b> to Move to very last item when Drop down is opened",
	"Press <b>Ctrl</b> + <b>Home</b> to Move to very first item in drop down when Drop down is opened",
	"Press <b>Up arrow</b> to Close drop down if opened or Move to previous item",
	"Type some value, for example 'text' and Press <b>Esc key</b> to clear the content when there isn't selected item",
	"While holding <b>Shift</b> + <b>Up/Down arrows</b> the active (highlighted) items will be changed, if you wamt to select them, just release <b>Shift key</b>",
    "Press <b>Esc key</b> in order to close the drop down when item/items are selected",
                ];

                return tips[idx];
            }

        });