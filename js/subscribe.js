(function () {
    "use strict";

    function openSubscribeModal(event){
        event.preventDefault();
        
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "/subscribe.html");
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        document.getElementById('subscribe-modal').appendChild(iframe);
        document.getElementById('subscribe-modal').classList.add('show');
    }

    var elements = document.querySelectorAll('.js-subscribe');
    for (var i = 0; i < elements.length; ++i) {
        elements[i].addEventListener('click', openSubscribeModal);
    }

})();