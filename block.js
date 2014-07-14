function Block(x, y, options) {
    this.x = x;
    this.y = y;
    
    this.set(options);
}

Block.prototype.set = function (options) {
    options = options || {}
    
    this.hill = options.hill || false;
    this.type = options.type || (this.hill ? null : "grass");
    this.modifier = options.modifier || null;
    this.shadow = options.shadow || false;
    this.gem = options.gem || false;
    
    this.clear();

    if (this.type == "lava" && this.modifier == "forest")
        this.modifier = null;

    if (this.hill) {
        this.img_hill = load_image('hill', this.x, this.y, l_hill);
        ground_layer = l_hill_ground;
        modifier_layer = l_hill_modifier;
        entities_layer = l_hill_entities;
        shadows_layer = l_hill_shadows;
    }
    else {
        this.img_hill = null;
        ground_layer = l_ground;
        modifier_layer = l_ground_modifier;
        entities_layer = l_ground_entities;
        shadows_layer = l_ground_shadows;
    }
  
    if (this.type)
        this.img_ground = load_image(this.type, this.x, this.y,
                                     ground_layer);
    else
        this.img_ground = null;
        
    
    if (this.modifier)
        this.img_modifier = load_image(this.modifier, this.x, this.y,
                                       modifier_layer);
    else
        this.img_modifier = null;
        
    
    if (this.shadow)
        this.img_shadow = load_image("shadow", this.x, this.y,
                                     shadows_layer);
    else
        this.img_shadow = null;
    
    if (this.gem)
        this.img_gem = load_image("gem", this.x, this.y,
                                  entities_layer);
    else
        this.img_gem = null;
}

Block.prototype.clear = function () {
    remove_from_dom(this.img_hill);
    remove_from_dom(this.img_ground);
    remove_from_dom(this.img_modifier);
    remove_from_dom(this.img_shadow);
    remove_from_dom(this.img_gem);
    
    this.img_hill = null;
    this.img_ground = null;
    this.img_modifier = null;
    this.img_shadow = null;
    this.img_gem = null;
}

Block.prototype.remove_gem = function () {
    remove_from_dom(this.img_gem);
	this.set({type: this.type, gem: false});
    this.img_gem = null;
}
