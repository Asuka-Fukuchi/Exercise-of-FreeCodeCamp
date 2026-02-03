// Scaled Image
// Given a string representing the width and height of an image, and a number to scale the image, return the scaled width and height.
// The input string is in the format "WxH". For example, "800x600".
// The scale is a number to multiply the width and height by.
// Return the scaled dimensions in the same "WxH" format.

function scaleImage(size, scale) {
    const splitNumber = size.split("x");
    const width = splitNumber[0] * scale;
    const height = splitNumber[1] * scale;
    return `${width}x${height}`
}

console.log(scaleImage("800x600", 2));
console.log(scaleImage("100x100", 10));
console.log(scaleImage("1024x768", 0.5));
console.log(scaleImage("300x200", 1.5));