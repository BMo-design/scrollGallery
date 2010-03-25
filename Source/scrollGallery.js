/*
--- 
description: scrollGallery

authors: 
- Benedikt Morschheuser (http://software.bmo-design.de)

license:
- MIT-style license

requires: 
- core/1.2.4: '*'
- more/1.2.4: 'Fx.Scroll'

provides: [scrollGallery]

...
*/

var scrollGallery = new Class({
	
	Implements: [Events, Options],
  
	options: {
		'start': 1,
        'notScrollWidth': 400,
		'thumbarea': 'thumbarea',
		'imagearea': 'imagearea',
		'speed': 4
        /* Events...*/
	},
  
	initialize: function(element,options){
		this.setOptions(options);
		this.aktivesEvent = false;
		this.aktivesScrollEvent = null;
		this.interval = null;
		this.aktuellePositionX = 0;
        //FX
		this.scrollthumbareaFx = new Fx.Scroll(this.options.thumbarea, {
			offset: {
				'x': 0,
				'y': 0
			} 
		});
		this.scrollimageareaFx = new Fx.Scroll(this.options.imagearea, {
			offset: {
				'x': 0,
				'y': 0
			} 
		});
        //init Thumb-Images
		if($(this.options.thumbarea)){
			$(this.options.thumbarea).setStyle('overflow', 'hidden');
			$(this.options.thumbarea).setStyle('overflow-x', 'hidden');
			var allThumbs = $(this.options.thumbarea).getElements('img');
			$each(allThumbs, function(imgObjekt, index){
				imgObjekt.addEvent('click', function(){
					$clear(this.interval);
					this.aktivesEvent = true;
					var allImages = $(this.options.imagearea).getElements('img');
					$each(allImages, function(imgObjektimContent, index){														
						if(imgObjekt.get('src')==imgObjektimContent.get('src')){
							this.scrollimageareaFx.toElement(imgObjektimContent); // scrollt zu Bild im content
						}
					}.bind(this));
				}.bind(this));
				imgObjekt.addEvent('mouseleave', function(event){ 
					event.stop();
					this.aktivesEvent = false;  
				}.bind(this));
				if(index==this.options.start){
					this.scrollthumbareaFx.toElement(imgObjekt);
                    this.aktuellePositionX = imgObjekt.getPosition().x;
                    imgObjekt.fireEvent('click',this,10);//delay for safari
                }
			}.bind(this));
            //Thumb-Events
           $(this.options.thumbarea).addEvent('mouseenter', function(event){ 
				event.stop(); 
				if(this.aktivesEvent==false){
					this.aktivesScrollEvent = event;
					this.aktivesEvent = true;
					$clear(this.interval);//zur Sicherheit
					this.interval = this.scrollME.periodical(5,this);
				}
			}.bind(this));
			$(this.options.thumbarea).addEvent('mousemove', function(event){ 
				event.stop(); 
				this.aktivesScrollEvent = event; //update
				if(this.aktivesEvent==false){// falls gestopt wieder starten
					this.aktivesEvent = true;
					$clear(this.interval);//zur Sicherheit
					this.interval = this.scrollME.periodical(5,this);
				}
			}.bind(this));
			$(this.options.thumbarea).addEvent('mouseleave', function(event){ 
				event.stop(); 
				$clear(this.interval);
				this.aktivesEvent = false;
				this.aktivesScrollEvent = null;
			}.bind(this));
            $(this.options.thumbarea).addEvent('mouseout', function(event){ 
                 event.stop(); 
                 $clear(this.interval);
                this.aktivesScrollEvent = null;
                this.aktivesEvent = false;
            }.bind(this));
		}else{
			alert('Missing thumbarea');
		}
		//init Images
		if($(this.options.imagearea)){
			$(this.options.imagearea).setStyle('overflow', 'hidden');
			$(this.options.imagearea).setStyle('overflow-x', 'hidden');
        }else{
			alert('Missing imagearea');
		}
	},
	//animation
	scrollME:function(){
    
        //$('text').set('html',$time()+" "+$(this.options.imagearea).getPosition().x+" "+this.aktuellePositionX+" "+$(this.options.imagearea).getSize().x);
		if(this.aktivesScrollEvent){
			if(this.aktivesScrollEvent.client.x>$(this.options.thumbarea).getPosition().x+this.aktuellePositionX+$(this.options.thumbarea).getSize().x/2+this.options.notScrollWidth/2){//rechts von Mitte des Bildschirms + nichts mach Zone 200px = 2*100px
				this.aktuellePositionX+=this.options.speed;
				if(this.aktuellePositionX>=$(this.options.thumbarea).getScrollSize().x-$(this.options.thumbarea).getSize().x){
					this.aktuellePositionX=$(this.options.thumbarea).getScrollSize().x-$(this.options.thumbarea).getSize().x;
				}
				this.scrollthumbareaFx.set(this.aktuellePositionX, 0);
			}
			if(this.aktivesScrollEvent.client.x<$(this.options.thumbarea).getPosition().x+this.aktuellePositionX+$(this.options.thumbarea).getSize().x/2-this.options.notScrollWidth/2){//links von Mitte des Bildschirms  - nichts mach Zone 200px = 2*100px
				this.aktuellePositionX-=this.options.speed;
				if(this.aktuellePositionX<=0){
					this.aktuellePositionX=0;
				}
				this.scrollthumbareaFx.set(this.aktuellePositionX, 0);
			}
			
		}
	}
    
});

