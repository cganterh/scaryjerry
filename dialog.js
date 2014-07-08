var dialog = document.getElementById("dialog");
dialog.buttons = [];

function create_button(textContent, x, y, func) {
    var btn = clone_to("dialog-button-model", dialog)
    var rect = btn.children[0];
    var text = btn.children[1];
    
    btn.addEventListener("click", function(){exec_and_close(func)});
    
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    
    text.setAttribute("x", 300/2+x);
    text.setAttribute("y", y+20);
    text.textContent = textContent;
    
    return btn;
}

function show_fear_dialog() {
    var fears = 
        [[jerry.fears.water , "Agua"     ,
          function(){
          jerry.fears.water =false
          }],
          
         [jerry.fears.forest, "Bosque"   ,
          function(){jerry.fears.forest=false}],
          
         [jerry.fears.hill  , "Alturas"  ,
          function(){jerry.fears.hill  =false}],
          
         [jerry.fears.lava  , "Lava"     ,
          function(){jerry.fears.lava  =false}],
          
         [jerry.fears.shadow, "Oscuridad",
          function(){jerry.fears.shadow=false}],
          
         [jerry.fears.spider, "Araña"    ,
          function(){jerry.fears.spider=false}],];
    
    var col1 = 50 + (700-600)/3;
    var col2 = col1 + 300 + (700-600)/3;
    var row = 130;
    var row_offset = 60;
    var toggle = 0;
    var i;
    
    for (i in fears) {
        if (fears[i][0])
            dialog.buttons.push(create_button(fears[i][1],
                                              toggle?col2:col1, row,
                                              fears[i][2]));
        row += toggle ? row_offset : 0;
        toggle = (++toggle)%2;
    }
    
    dialog.setAttribute("visibility", "visible");
}
jerry.gem_event = show_fear_dialog;

function exec_and_close(func) {
    func();
    close_fear_dialog();
}

function close_fear_dialog() {
    var i;
    for (i in dialog.buttons)
        remove_from_dom(dialog.buttons[i]);
    dialog.buttons = [];
        
    dialog.setAttribute("visibility", "hidden");
}
