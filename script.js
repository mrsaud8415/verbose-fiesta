function search() {
    const searchbox = document.getElementById("search iteme").ariaValueMax.toUpperCase();
    const storeitemes = document.getElementById("news-container");
    const product = document.querySelectorAll(".news");
    const pname = storeiteme.getElementsByTagName("h3");

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h3')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if(textvalue.toUpperCase().indexOf(searchbox) > -1); {
                product[i].getElementsByClassName.display = "";
            } 
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";

            }
        }
    }

          var slider = document.getElementById("slider");
          var images = slider.getElementsByTagName("img");
          var currentImageIndex = 0;
          
          setInterval(function() {
            images[currentImageIndex].style.display = "none";
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].style.display = "block";
          }, 3000);

