scrollGallery 
==========

Awesome free JavaScript gallery with mootools. The gallery scrolling the pictures horizontally. Test it. The gallery can be easily integrated.

![Screenshot](http://software.BMo-design.de/images/scrollGallery.png)

How to Use
----------

Get started by copy this in your head :

    #JS
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
                            <img  src="fotos/image1.jpg" width="120" height="80" alt="" />
                            <img  src="fotos/image2.jpg" width="120" height="80" alt="" />
                            <img  src="fotos/image3.jpg" width="120" height="80" alt="" />
				...
                     </div> 
		</div> 
	 </div>
	 <div id="scrollGalleryFoot">
		<div id="imagearea">
			<div id="imageareaContent">
                            <img  src="fotos/image1.jpg"  />
                            <img  src="fotos/image2.jpg"  />
                            <img  src="fotos/image3.jpg"  />
   				...
                     </div> 
		</div> 
	</div>
     </div>

In this version it is important that the thumbs and the images have the same src! 
  
Syntax
----------

  new scrollGallery([options])
  
Arguments
----------

- no Arguments

Options
----------

* 'start': (number) start at Picture ...
* 'notScrollWidth': (number) width of the area to select thumbs without scrolling
* 'thumbarea': (string) div id name for the thumbs
* 'imagearea': (string) div id name for the images 
* 'speed': (number) thumb scroll speed

Events
----------

- no Events

Contact
----------
Please contact me (info@BMo-design.de) if you have any suggestions or comments.
