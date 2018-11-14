const one = {
	template: `<div class="text-center">
	<h1> In Love With Lime Bouquet
	Price $50.99</h1>
	<p>They'll fall in love with this pretty, playful bouquet! Pink roses and lilies look oh-so-lovely with elegant bells of ireland and presented in our exclusive vibrant green Color Splash cube! It's a fresh mix they'll adore for any occasion.
This refreshing arrangement features dark pink roses, pink asiatic lilies, pink miniature carnations, bells of ireland, green button spray chrysanthemums, and huckleberry.
Delivered in Teleflora's Color Splash cube.
Orientation: All-Around</p>
	<img src='img/lillies.png' alt= 'lillies'>
	
	 </div> `
}

const two = {
	template: `<div class="text-center">
	<h1>Your Sweet Smile
	Price $63.74</h1>
	<p>Let us deliver the glorious gift of sunshine to someone you love. They'll adore the yellow and white roses beautifully presented in a sparkling glass vase. The bouquet is called "Your Sweet Smile." You're sure to get a big one in return.
This charming bouquet includes white roses, yellow spray roses, green carnations, green button spray chrysanthemums and white waxflower accented with assorted greenery.
Delivered in a glass cylinder vase.
Orientation: All-Around</p>
	<img src='img/roses.png' alt= 'roses'>
	
	</div`
}

const three = {
	template: `<div class="text-center">
	<h1>Wondrous Wishes
	Price $63.74</h1>
	<p>Featuring a wide, wondrous assortment of blooms in one bouquet, this colorful arrangement is always a favorite! Hydrangea, roses, lilies, alstroemeria, gerberas, daisies - they're all here in stunning variety.
This versatile mix includes blue hydrangea, orange roses, light pink asiatic lilies, pink alstroemeria, hot pink gerberas and purple daisies with a bit of rich green salal.
Delivered in Teleflora's gorgeous Couture Vase.
Orientation: All-Around</p>
	<img src='img/wishes.png' alt= 'wishes'>
	</div>
	
	`
}

const four = {
	template: `<div class="text-center">
	<h1>Sweet as Sugar
	Price $63.74 </h1>
	<p>
Surprise her with a beautiful bunch of love - a cute, compact bouquet of lavender flowers in a silver mirrored cube. She'll be dazzled by this classic, yet contemporary gift - and impressed by your impeccable taste.
Robust roses, delicate hydrangea and feminine stock make a cool collection inside an icy, clear glass cube vase.
Orientation: One-Sided</p>
	<img src='img/spring.png' alt= 'spring'>
	</div>`
}

const five = {
	template: `<div class="text-center">
	<h1>Exquisite Beauty
	Price $63.74</h1>
	<p>
This exquisite mix of feminine blooms is like a breath of fresh air! Sweet pinks and purples are contrasted with a modern burst of fresh green hydrangea, and finished off with a pretty lavender cube vase lined with a tropical aspidistra leaf. It's a fun pick-me-up to send anytime, anywhere!
A wide variety of blooms - roses, alstroemeria, hydrangea, stock, freesia, statice and heather.
Presented in Teleflora's lavender glass cube lined with aspidistra.
Orientation: One-Sided</p>
	<img src='img/equsite.png' alt= 'equsite'>
	
	</div> `
}

const router = new VueRouter({


	routes: [
{

			path: '/one',
  			component: one
  },


  {

			path: '/two',
  			component: two
  },
  {

			path: '/three',
  			component: three
  },
  {

			path: '/four',
  			component: four
  },
  {

			path: '/five',
  			component: five
  }
    ]

})

 new Vue ({
	router,
	el:"#app",
    


	data: {

	},
	methods: {

	}
}).$mount('#app')

