import './style.css'

const COLOR_PALETTE = {
  '#DCD6F7' : 'Languid Lavender',
  '#A6B1E1' : 'Maximun Blue Purple',
  '#B4869F' : 'English Lavender',
  '#985F6F' : 'Rose Dust',
  '#4E4C67' : 'Independence'
};

const addOptionsToColorPicker = () =>{
const colorPickerSelect = document.querySelector("#color-picker");
Object.keys(COLOR_PALETTE).forEach((color) =>{
  const option = document.createElement("option");
  option.value = color;
  option.innerText = COLOR_PALETTE[color];
  colorPickerSelect.append(option);
});
};

const addEventListenerToColorPicker = () =>{

  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("change", (ev) =>{
    const newColor = /* ev.target.value; */colorPickerSelect.value;

    document.body.style.backgroundColor = newColor;
    const colorNameText = `${COLOR_PALETTE[newColor]} || ${newColor}`
    colorName.innerText = COLOR_PALETTE[newColor]? colorNameText : '-';
  })

};
const selectColorByInputColor = () => {
const inputColor = document.querySelector("#inputColor");
inputColor.addEventListener("input", (ev) => {
  document.body.style.backgroundColor = inputColor.value;
  const colorName = document.querySelector("#color-name");
  colorName.innerText= `${inputColor.value}`;
});
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
selectColorByInputColor ();

