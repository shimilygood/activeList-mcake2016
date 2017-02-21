function loadImg(imgObj, index, complete, loadCallback){
	var img = new Image(),
		len = imgObj.length,
		url = imgObj.eq(index).data('url');
	 
    if (index != len) {
    	if(url){
    		img.src = url;
    	}
    } else {
    	if(loadCallback) {
    		loadCallback();
    	}
    	return;
    }

    if (img.complete) {
    	imgObj.eq(index).attr('src', url);
        index ++
        if (complete) {
        	complete(index);
        }
        loadImg(imgObj, index, complete, loadCallback);
    } else {
        img.onload = function () {
        	imgObj.eq(index).attr('src', url);
	        index ++
	        if (complete) {
	        	complete(index);
	        }
	        loadImg(imgObj, index, complete, loadCallback);
            img.onload = null;
        };
    };
}





