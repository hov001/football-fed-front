class Slider {
  constructor( element ) {
    this.el = document.querySelector( element );
  }

  init() {
    console.log(this)
		this.links = this.el.querySelectorAll( "#slider-nav li" );
		this.wrapper = this.el.querySelector( "#slider-wrapper" );
		this.navigate();
	}

	navigate() {
		for( var i = 0; i < this.links.length; ++i ) {
			var link = this.links[i];
			this.slide( link );	
		}
	}
	
	animate( slide ) {
		var parent = slide.parentNode;
		var caption = slide.querySelector( ".caption" );
		var captions = parent.querySelectorAll( ".caption" );
		for( var k = 0; k < captions.length; ++k ) {
			var cap = captions[k];
			if( cap !== caption ) {
				cap.classList.remove( "visible" );
			}
		}
		caption.classList.add( "visible" );	
	}

	slide( element ) {
		var self = this;
		element.addEventListener( "click", function( e ) {
			e.preventDefault();
			var a = this;
			self.setCurrentLink( a );
      console.log( a )
			var index = parseInt( a.getAttribute( "data-slide" ), 10 ) + 1;
			var currentSlide = self.el.querySelector( ".slide:nth-child(" + index + ")" );
			self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
			self.animate( currentSlide );
		}, false);
	}

	setCurrentLink ( link ) {
		var parent = link.parentNode;
		var a = parent.querySelectorAll( "li" );
		
		link.className = "current";
		
		for( var j = 0; j < a.length; ++j ) {
			var cur = a[j];
			if( cur !== link ) {
				cur.className = "";
			}
		}
	}
}

export default Slider