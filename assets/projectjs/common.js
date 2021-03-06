/*Common functions*/

/* Function to change the icon in the collapsible menu*/
function changeIcon(itemID,folderIcon)
{
    var icon=$("#"+itemID);
    var folder=$("#"+folderIcon);

    if (icon.hasClass("glyphicon-plus-sign"))
    {
        icon.removeClass("glyphicon-plus-sign unclickedColor").addClass("glyphicon-minus-sign clickedColor");

        if(folder.hasClass("fa fa-folder-o"))
        {
            folder.removeClass("fa fa-folder-o unclickedColor").addClass("fa fa-folder-open clickedColor");
        }
        else
        {
            folder.removeClass("fa fa-folder-open clicked").addClass("fa fa-folder-o unclickedColor");
        } 
    }
    else if (icon.hasClass("glyphicon-minus-sign"))
    {
        icon.removeClass("glyphicon-minus-sign clickedColor").addClass("glyphicon-plus-sign unclickedColor");

        if(folder.hasClass("fa fa-folder-o"))
        {
            folder.removeClass("fa fa-folder-o unclickedColor").addClass("fa fa-folder-open clickedColor");
        }
        else
        {
            folder.removeClass("fa fa-folder-open clickedColor").addClass("fa fa-folder-o unclickedColor");
        } 
    }           

}
/*--------------------------------------------------------------------------------------------------------------------------------*/

/*Function to change the icon in the collapsible menu*/
function removeIcon(itemID,folderIcon)
{
    var icon=$("#"+itemID);
    var folder=$("#"+folderIcon);

    if (icon.hasClass("glyphicon-plus-sign"))
    {
        icon.removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign");

        if(folder.hasClass("fa fa-folder-o"))
        {
            folder.removeClass("fa fa-folder-o").addClass("fa fa-folder-open");
        }
        else
        {
            folder.removeClass("fa fa-folder-open clicked").addClass("fa fa-folder-o");
        } 
    }
    else if (icon.hasClass("glyphicon-minus-sign"))
    {
        icon.removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign");

        if(folder.hasClass("fa fa-folder-o"))
        {
            folder.removeClass("fa fa-folder-o").addClass("fa fa-folder-open");
        }
        else
        {
            folder.removeClass("fa fa-folder-open").addClass("fa fa-folder-o");
        } 
    }           

}
/*--------------------------------------------------------------------------------------------------------------------------------*/

/*Function to change the icon in the collapsible menu*/
function datasetReportIcon(itemID,folderIcon)
{
    var icon=$("#"+itemID);
    var folder=$("#"+folderIcon);

    if (icon.hasClass("fa fa-plus-square-o"))
    {
        icon.removeClass("fa fa-plus-square-o").addClass("fa fa-minus-square-o");

        if(folder.hasClass("fa fa-folder-o"))
        {
            folder.removeClass("fa fa-folder-o").addClass("fa fa-folder-open");
        }
        else
        {
            folder.removeClass("fa fa-folder-open clicked").addClass("fa fa-folder-o");
        } 
    }
    else if (icon.hasClass("fa fa-minus-square-o"))
    {
        icon.removeClass("fa fa-minus-square-o").addClass("fa fa-plus-square-o");

        if(folder.hasClass("fa fa-folder-o"))
        {
            folder.removeClass("fa fa-folder-o").addClass("fa fa-folder-open");
        }
        else
        {
            folder.removeClass("fa fa-folder-open").addClass("fa fa-folder-o");
        } 
    }           

}
/*--------------------------------------------------------------------------------------------------------------------------------*/
/*Function to select a facility for analytics*/
function selectFacility(facilityID)
{ 
    var any = $(".color");
    var facility=$("#"+facilityID);

    if (any.hasClass("clickedColor selectedFacility"))
    {

        if (facility.hasClass("unclickedColor"))
        {
            any.removeClass("clickedColor selectedFacility").addClass("unclickedColor");
            facility.removeClass("unclickedColor").addClass("clickedColor selectedFacility");
        }
        else
        {
            facility.removeClass("clickedColor selectedFacility").addClass("unclickedColor");
        }
    }
    
    else
    {
        if (facility.hasClass("unclickedColor"))
        {
            facility.removeClass("unclickedColor").addClass("clickedColor selectedFacility");
        }
        else
        {
            facility.removeClass("clickedColor selectedFacility").addClass("unclickedColor");
        }

    }
    
}
/*--------------------------------------------------------------------------------------------------------------------------------*/
/*Function to change the color of the clicked item*/
function changeColor(type)
{
    var color=$(".color");
    if (color.hasClass("unclickedColor"))
    {
        color.removeClass("unclickedColor").addClass("clickedColor");
    } 

    else if (color.hasClass("clickedColor"))
    {
        color.removeClass("clickedColor").addClass("unclickedColor");
    }
}
/*--------------------------------------------------------------------------------------------------------------------------------*/

// Function maximizeView()
function maximizeView()
{
    var contentDiv = $("div#col_body");
    var maximizeIcon = "<span id = 'maximize_icon' class = 'unclickedColor' title = 'Full Screen' onclick = 'javascript:maximizeView();'>"+
                            "<img src='assets/img/full-screen.png' style = 'height:;width:;'>"+
                        "</span>";
    var minimizeIcon = "<span id = 'maximize_icon' class = 'unclickedColor' title = 'Normal View' onclick = 'javascript:maximizeView();'>"+
                            "<img src='assets/img/icon-restore.png' style = 'height:100%;width:3%;'>"+
                        "</span>";
    ;


    if (contentDiv.hasClass("col-md-9"))
    {
        $("div#navigation_div").hide();
        $("div#supply_pipeline_heading").hide();
        $("span#maximize_icon").replaceWith(minimizeIcon);
        contentDiv.removeClass("col-md-9").addClass("col-md-12");
    } 

    else if (contentDiv.hasClass("col-md-12"))
    {
        $("div#navigation_div").show();
        $("div#supply_pipeline_heading").show();
        $("span#maximize_icon").replaceWith(maximizeIcon);
        contentDiv.removeClass("col-md-12").addClass("col-md-9");
    }

}
/*-------------------------------------------------------------------------------------------------------------------------------- */