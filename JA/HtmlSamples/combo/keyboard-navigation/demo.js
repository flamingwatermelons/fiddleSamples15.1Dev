$(function () {
var alreadyDoneCtrlHome = false;
        var alreadyDoneCtrlEnd = false;

        $(function () {
            var index = 0;

            $("#tryAgaintBtn")
                .button()
                .click(function (event, sender) {
                    startExample();
                    $(this).hide();
                })
                .hide();

            $("#combo").igCombo({
                width: "270px",
                textKey: "MountainName",
                valueKey: "ID",
                dataSource: mountainTops,
                multiSelection: {
                    enabled: true
                },
                dropDownOpened: function (evt, ui) {
                    if ((evt.keyCode == 40) && (index == 1)) {
                        showWellDoneMessage(true);
                    }
                },
                dropDownClosed: function (evt, ui) {
                    if ((evt.keyCode == 38) && (index == 2)) {
                        showWellDoneMessage(true);
                    }
                },
                selectionChanged: function (evt, ui) {
                    if (evt.keyCode == 16 && (index == 5)) {
                        //stop examles and restart index
                        showWellDoneMessage(false);
                        index = 0;
                    }
                }
            });

            $("#tooltip").tooltip({
                position: { of: ".ui-igcombo-field", my: "left+55 center", at: "right center" },
                open: function (event, ui) {
                    $("#tooltip").tooltip("option", "content", getTip(index++));
                },
                tooltipClass: "tooltipStyle"
            });

            setTimeout(function () {
                startExample();
            }, 1500);
        });

        $(document).keydown(function (e) {
            if (e.keyCode == 36 && e.ctrlKey && !alreadyDoneCtrlHome) {
                debugger;
                var ddOpened = false; //$("#combo").igCombo("dropDownOpened");

                if (true) {
                    showWellDoneMessage(true);
                    alreadyDoneCtrlHome = true;
                } else {
                    showMessage("Open the Drop Down first!");
                }
            }

            if (e.keyCode == 35 && e.ctrlKey && !alreadyDoneCtrlEnd) {
                var ddOpened = false; //$("#combo").igCombo("dropDownOpened");

                if (true) {
                    showWellDoneMessage(true);
                    alreadyDoneCtrlEnd = true;
                } else {
                    showMessage("Open the Drop Down first!");
                }
            }
        });

        function startExample() {
            alreadyDoneCtrlHome = false;
            alreadyDoneCtrlEnd = false;

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

        function showWellDoneMessage(toContinue) {
            $("div[role='tooltip']").addClass("glowing-border");
            $("#tooltip").tooltip("option", "content", "Well done!!!");

            setTimeout(function () {
                $("#tooltip").tooltip("close");

                setTimeout(function () {
                    if (toContinue) {
                        $("#tooltip").tooltip("open");
                    } else {
                        //show Try again button
                        $("#tryAgaintBtn").show();
                    }
                }, 1000);
            }, 1500);
        }

        function getTip(idx) {
            var tips = [
                "Press <b>Down arrow</b> to Open drop down if closed or Move to next item if opened",
                "Press <b>Up arrow</b> to Close drop down if opened or Move to previous item",
                "Press <b>Ctrl</b> + <b>Home</b> to Move to very first item in drop down when Drop down is opened",
                "Press <b>Ctrl</b> + <b>End</b> to Move to very last item when Drop down is opened",
                "Press of <b>Shift</b> + <b>Up/Down arrows</b> will change the active (highlighted) items and if you release <b>Shift key</b> the active items will be selected",
            ];

            return tips[idx];
        }
});