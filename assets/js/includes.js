function loadHeader(heading, subheading) {
    $.get("includes/header.html", function(data){
        $("body").prepend(data);

        //Navigation Menu
        //===================
        $('.toggle-menu').jPushMenu({
            closeOnClickLink: false
        });

        // Dropdown expands
        $('.expander').simpleexpand();

        $('#heading').text(heading);
        $('#subheading').text(subheading);
    })
}

function loadFooter() {
    $.get("includes/footer.html", function(data){
        $("body").append(data);
    })
}