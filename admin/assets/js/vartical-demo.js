$(document).ready(function () {
    $("#pcoded").pcodedmenu({
        themelayout: 'vertical',
        verticalMenuplacement: 'left', // value should be left/right
        verticalMenulayout: 'wide', // value should be wide/box
        MenuTrigger: 'click', // click / hover
        SubMenuTrigger: 'click', // click / hover
        activeMenuClass: 'active',
        ThemeBackgroundPattern: 'pattern6',  // pattern1, pattern2, pattern3, pattern4, pattern5, pattern6
        HeaderBackground: 'theme5',  // theme1, theme2, theme3, theme4, theme5  header color
        LHeaderBackground: 'theme1', // theme1, theme2, theme3, theme4, theme5, theme6   brand color
        NavbarBackground: 'themelight1', // themelight1, theme1  // light  and dark sidebar
        ActiveItemBackground: 'theme4', // theme1, theme2, theme3, theme4, theme5, theme6, theme7, theme8, theme9, theme10, theme11, theme12  mennu active item color
        SubItemBackground: 'theme2',
        ActiveItemStyle: 'style0',
        ItemBorder: true,
        ItemBorderStyle: 'none',
        NavbarImage:'false',
        ActiveNavbarImage:'img1',
        SubItemBorder: true,
        DropDownIconStyle: 'style3', // Value should be style1,style2,style3
        menutype: 'st2', // Value should be st1, st2, st3, st4, st5 menu icon style
        layouttype:'light', // Value should be light / dark
        FixedNavbarPosition: true,  // Value should be true / false  header postion
        FixedHeaderPosition: true,  // Value should be true / false  sidebar menu postion
        collapseVerticalLeftHeader: true,
        VerticalSubMenuItemIconStyle: 'style7', // value should be style1, style2, style3, style4, style5, style6
        VerticalNavigationView: 'view1',
        verticalMenueffect: {
            desktop: "shrink",
            tablet: "overlay",
            phone: "overlay",
        },
        defaultVerticalMenu: {
            desktop: "expanded", // value should be offcanvas/collapsed/expanded/compact/compact-acc/fullpage/ex-popover/sub-expanded
            tablet: "offcanvas", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
            phone: "offcanvas", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
        },
        onToggleVerticalMenu: {
            desktop: "offcanvas", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
            tablet: "expanded", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
            phone: "expanded", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
        },

    });
});
