 // 1. Navigation - done
// 2. Add event listener - done
// 3. Get info about each image - done
// 4. Create data structure - done
// 5. Save in localstorage - done
// 6. Display images - done

var uploader = document.getElementById('uploader');
var imagesList = document.querySelector('.images');
var images = JSON.parse(localStorage.getItem('images')) || [];

function uploadImages() {
    var files = this.files, i, image, fileLength = files.length;
    if(FileReader) {
        for(i = 0; i < fileLength; i += 1) {
            var fileReader = new FileReader(), file = files[i];
            fileReader.addEventListener('load', function (event) {
                image = {};
                image['name'] = file.name;
                image['size'] = file.size;
                image['url'] = event.target.result;
                images.push(image);
                displayImages(images, imagesList);
                localStorage.setItem('images', JSON.stringify(images));
            });

            fileReader.readAsDataURL(file);
        }
    } else {
        alert('FileReader API does not support by your browser!');
    }
}

displayImages(images, imagesList);

uploader.addEventListener('change', uploadImages);



var modal = document.getElementById("mymodal");
var close = document.getElementByClassName("close_modal_window");

    close.onclick = function(){
        modal.style.display = "none";
    }
    //если нажали на задний фон окно тоже закрывается
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";
        }
    }
