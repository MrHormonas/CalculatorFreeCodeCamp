$( document ).ready(function() {
  var text = "";
  $( ".clearButton" ).click(function()
  {
    var elem = this.innerHTML.replace(" ", "");
    var screen = document.getElementById("realTimeScreen");

    if (elem == 'AC') //clear all
    {
      text = "";
      screen.innerHTML = "";
    }
    else if (elem == 'CE') //clear last char
    {
      text = text.substring(0, text.length-1);
      if (text.length > 19)
        screen.innerHTML = text.substring(text.length-19, text.length);
      else {
        screen.innerHTML = text;
      }
    }
  });

  $( ".normalButton" ).click(function()
  {
    var elem = this.innerHTML.replace(/ /g, "");
    var screen = document.getElementById("realTimeScreen");

    text += elem;
    if (text.length > 19)
      screen.innerHTML = text.substring(text.length-19, text.length);
    else {
      screen.innerHTML = text;
    }
  });

  $( ".symbButton" ).click(function()
  {
    var screen = document.getElementById("realTimeScreen");
    text = text.replace("x", "*");
    text = eval(text);

    if (text.length > 19)
      screen.innerHTML = text.substring(text.length-19, text.length);
    else {
      screen.innerHTML = text;
    }
  });
});
