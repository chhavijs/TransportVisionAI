from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400
    
    image_file = request.files['image']
    
    # Process the image (e.g., save it to a folder or perform object detection)
    # Example:
    # image_file.save('uploads/' + image_file.filename)
    
    return jsonify({'message': 'Image uploaded successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)

