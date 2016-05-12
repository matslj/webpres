/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function fetchAjaxContent() {
	request('content.txt', function (o) {
			document.getElementsByTagName("article")[0].innerHTML = o.responseText;
		}
	);
}

var ajaxTriggerEl = document.getElementById("extra");
ajaxTriggerEl.addEventListener("click", fetchAjaxContent);

function request(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (function (myxhr) {
        return function () {
            if (myxhr.readyState === 4 && myxhr.status === 200) {
                callback(myxhr);
            }
        };
    }(xhr));
    xhr.open('GET', url, true);
    xhr.send('');
}