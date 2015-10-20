      define(function () {
        var images = ["/assets/images/clear.png","/assets/images/logos/dataaddict.png","/assets/images/search.png","/assets/images/spinner.gif"];
        cached_images = [];
        for(var i = 0; i < images.length; i++) {
          var img = new Image()
          img.onload = function() {
            this.loaded = true;
          };
          img.onerror = function() {
            this.loadError = true;
          };
          img.src = images[i];
          if (img.complete) {
            img.loaded = true;
          }
          cached_images.push(img);
        }
        return cached_images;
      });
