scrollGallery 
==========

Awesome free JavaScript gallery with mootools. The gallery scrolling the pictures horizontally. Test it. The gallery can be easily integrated.

![Screenshot](http://software.bmo-design.de/demo/images/scrollGallery.png)

How to Use
----------

Get started by copy this in your head :

    #JS
    <link rel="stylesheet" href="yourGalleryStyle.css" type="text/css" />
    <script type="text/javascript" src="mootools-core-1.3.1-full-nocompat.js"></script>
    <script type="text/javascript" src="mootools-1.3.1.1-more.js"></script>
    <script type="text/javascript" src="scrollGallery.js"></script>
    
    <script type="text/javascript">
    window.addEvent('domready', function() {
        var myscrollGallery = new scrollGallery();
    });
    </script>



Use this structure in the body :

    #HTML
    <div id="gallery">
       <div id="scrollGalleryHead">		
		<div id="thumbarea">
			<div id="thumbareaContent">
                            <img  src="fotos/small_image1.jpg" width="120" height="80" alt="" />
                            <img  src="fotos/small_image2.jpg" width="120" height="80" alt="" />
                            <img  src="fotos/small_image3.jpg" width="120" height="80" alt="" />
				...
                     </div> 
		</div> 
	 </div>
	 <div id="scrollGalleryFoot">
		<div id="imagearea">
			<div id="imageareaContent">
                            <img  src="fotos/image1.jpg" alt="" />
                            <img  src="fotos/image2.jpg" alt="" />
                            <img  src="fotos/image3.jpg" alt="" />
   				...
                     </div> 
		</div> 
	</div>
     </div>

It is important, that you have the same number of images in thumbareaContent and imageareaContent.
Current, it only works with images in landscape mode. If you want to use pictures in portrait mode, you can use a landscape png with transparent background.

New feature!!! AUTO SCROLL, now you can set the option 'autoScroll':true and the thumbs will scroll automatically.
The ScrollGallery now is also available as Wordpress Plugin! (http://wordpress.org/extend/plugins/nextgen-scrollgallery/)
 
Syntax
----------

  new scrollGallery([options])
  
Arguments
----------

- no Arguments

Options
----------

* 'start': (number) start at Picture ...
* 'area': (number) width of the area to scroll left or right 
* 'thumbarea': (string) div id name for the thumbs
* 'imagearea': (string) div id name for the images 
* 'speed': (number) 0<=speed<=1 thumb scroll speed
* 'clickable': (boolean) default = true
* 'autoScroll': (boolean) default = false 

e.g.

	#JS
	<script type="text/javascript">
		window.addEvent('domready', function() {
    		var myscrollGallery = new scrollGallery({
				start:0,
				speed:0.5
			});
		});
	</script>

Events
----------

- no Events

Contact
----------
Please contact me (info@BMo-design.de) if you have any suggestions or comments.


Captions
----------

If you want to add a caption below your images, you can do this very easily.
First you have to set up the HTML-structure in this way.

	#HTML
	<div id="imagearea">
	  <div id="imageareaContent">
            <div class="caption_container"><div>A nice picture</div><img  src="fotos/image1.jpg" alt="" /></div>
            <div class="caption_container"><div>My caption</div><img  src="fotos/image2.jpg" alt="" /></div>
            <div class="caption_container"><div>Me</div><img  src="fotos/image3.jpg" alt="" /></div>
            <div class="caption_container"><div>Paul</div><img  src="fotos/image4.jpg" alt="" /></div>
            <div class="caption_container"><div>...</div><img  src="fotos/image5.jpg" alt="" /></div>
            <div class="caption_container"><div>A nice picture</div><img  src="fotos/image6.jpg" alt="" /></div>
            <div class="caption_container"><div>A nice picture</div><img  src="fotos/image7.jpg" alt="" /></div>
            <div class="caption_container"><div>A nice picture</div><img  src="fotos/image8.jpg" alt="" /></div>
            <div class="caption_container"><div>A nice picture</div><img  src="fotos/image9.jpg" alt="" /></div>
            <div class="caption_container"><div>A nice picture</div><img  src="fotos/image10.jpg" alt="" /></div>
            <div class="caption_container"><div>A nice picture</div><img  src="fotos/image11.jpg" alt="" /></div>
            <div class="caption_container"><div>A nice picture</div><img  src="fotos/image12.jpg" alt="" /></div>
            <div class="caption_container"><div>A nice picture</div><img  src="fotos/image13.jpg" alt="" /></div>
            <div class="caption_container"><div>A nice picture</div><img  src="fotos/image14.jpg" alt="" /></div>   
      </div> 
	</div>

Then you need to add some CSS:

	#CSS
	/*Caption Version*/
	#imageareaContent .caption_container{
		position:relative;
		display:inline;
	}
	#imageareaContent .caption_container div{
		position:absolute;
		display:inline;
		padding:5px 10px 5px 10px;
		background-color:#fff;
		margin-top:-15px;
		z-index:auto;
		top:0px;
		left:0px;
		font-family:"Arial";
		font-size:14px;
		line-height:14px;
	}
	

