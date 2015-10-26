/**
 * Created by max on 25.10.15.
 */

takePicture = function (input) {
    var options = {
        quality: 45,
        targetWidth: 1000,
        targetHeight: 1000,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        sourceType: Camera.PictureSourceType.CAMERA
    };

    navigator.camera.getPicture(
        function (image) {
            var div = input.parent();
            div.find('img').attr('src', 'data:image/jpeg;base64,' + image);
            div.find('input').val(image);
        },
        function (message) {
            alert(message);
        }, options);
    return false;
};

