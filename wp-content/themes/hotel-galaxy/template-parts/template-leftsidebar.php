<?php

 if ( ! defined( 'ABSPATH' ) ) { exit; }

/*
	Template Name: Left Sidebar
*/
	get_header();	

	?>

	<div class="container">

		<main class="content-area">

			<?php do_action( 'hotelgalaxy_page_featured_image' ); ?>

			<div class="row">

				<div class="col-md-4">

					<?php get_sidebar('left'); ?>

				</div>

				<div class="col-md-8">	

					<?php				
					
					while ( have_posts() ): the_post();
						
						get_template_part( 'content','page');

						if ( comments_open() || '0' != get_comments_number() ) :

							comments_template();

					endif;

				endwhile;			

				?>		

			</div>			

		</div>

	</main>

</div>

<?php

get_footer(); 

?>