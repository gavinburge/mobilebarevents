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


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-86413900-1', 'auto');
  ga('send', 'pageview');
