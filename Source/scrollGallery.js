/*
--- 
description: scrollGallery

authors: 
- Benedikt Morschheuser (http://software.bmo-design.de)

license:
- MIT-style license

requires:
- core/1.3.1: '*'
- more/1.3.1: 'Fx.Scroll, Scroller'

provides: [scrollGallery]

...
*/

var scrollGallery = new Class({
	
	Implements: [Events, Options],
  
	options: {
		'start': 1,
        'area': 200,
		'thumbarea': 'thumbarea',
		'imagearea': 'imagearea',
		'speed': 0.1
        /* Events...*/
	},
  
	initialize: function(options){
		this.setOptions(options);		
		Scroller.implement(new Events, new Options);
		
		this.tumbObjs=null;
		this.imgObjs=null;
		
		//FX
		this.scrollimageareaFx = new Fx.Scroll(this.options.imagearea, {
			offset: {
				'x': 0,
				'y': 0
			} 
		});
        //init Thumb-Images
		if($(this.options.thumbarea)){
			this.scrollthumbareaFx = new Scroller($(this.options.thumbarea), {area: this.options.area, velocity: this.options.speed, direction: "x"});
			$(this.options.thumbarea).setStyle('overflow-x', 'hidden')
			// Thumb Events
			$(this.options.thumbarea).addEvent('mouseenter', this.scrollthumbareaFx.start.bind(this.scrollthumbareaFx));
			$(this.options.thumbarea).addEvent('mouseleave', this.scrollthumbareaFx.stop.bind(this.scrollthumbareaFx));

			// init tumbObjs
			this.tumbObjs = $(this.options.thumbarea).getElements('img');
			Array.each(this.tumbObjs, function(imgObjekt, index){
				imgObjekt.addEvent('click', function(index){	
					this.scrollimageareaFx.toElement(this.imgObjs[index]);
				}.bind(this).pass(index));
			
				if(index==this.options.start){
                    imgObjekt.fireEvent('click',this,10);//delay for safari
                }
			}.bind(this));
		}else{
			alert('Missing thumbarea');
		}
		//init Images
		if($(this.options.imagearea)){
			$(this.options.imagearea).setStyle('overflow', 'hidden');
			$(this.options.imagearea).setStyle('overflow-x', 'hidden');
			// init imgObjs
			this.imgObjs=$(this.options.imagearea).getElements('img');
        }else{
			alert('Missing imagearea');
		}
		
		
		//check
		if(this.imgObjs.length!=this.tumbObjs.length) alert("Error: The number of images do not match!");
	}
    
});

