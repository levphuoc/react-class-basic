import React, { useState, useEffect } from 'react';

function getRandomColor() {
const letter = "0123456789ABCDEF";
let color = '#';
for(let i = 0; i < 6; i++){
    color += letter[Math.floor(Math.random() * 16)];
}
return color;
}
const ColorWrapper = (WrappedComponent) => {
    return (props) => {
    const color = getRandomColor();
    return <WrappedComponent {...props} color={color} />;
  };
};

export default ColorWrapper;