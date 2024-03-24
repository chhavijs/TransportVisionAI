$(document).ready(function () {
    $('#uploadForm').submit(function (event) {
       event.preventDefault(); // Prevent the default form submission
       var formData = new FormData(this);
       $.ajax({
          url: '/upload', // Replace with your Flask backend endpoint for image processing
          type: 'POST',
          data: formData,
          processData: false,
          contentType: false,
          success: function (response) {
             $('#originalImage').attr('src', response.originalImageUrl); // Update with actual URL
             $('#processedImage').attr('src', response.processedImageUrl); // Update with actual URL
          },
          error: function () {
             alert('Error uploading image');
          }
       });
    });
 });
 