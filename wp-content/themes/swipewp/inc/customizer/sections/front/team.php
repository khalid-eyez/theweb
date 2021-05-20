<?php
/**
 * Front Page Team section
 * 
 * @package SwipeWP
 */

add_action( 'customize_register', 'swipewp_customize_register_section_front_team' );

if ( ! function_exists( 'swipewp_customize_register_section_front_team' ) ) :

    function swipewp_customize_register_section_front_team( $wp_customize ) {

        /**
         * Team section
         */
        $wp_customize->add_section( 'swipewp_front_team_section',
            array(
                'priority'       => 20,
                'panel'          => 'swipewp_front_page_settings_panel',
                'capability'     => 'edit_theme_options',
                'theme_supports' => '',
                'title'          => __( 'Team Section', 'swipewp' )
            )
        );

        /**
         * Toggle for show hide section
         */
        $wp_customize->add_setting( 'swipewp_front_team_option',
            array(
                'capability'        => 'edit_theme_options',
                'default'           => true,
                'sanitize_callback' => 'swipewp_sanitize_checkbox'
            )
        );

        $wp_customize->add_control( new Swipewp_Control_Toggle(
            $wp_customize, 'swipewp_front_team_option',
                array(
                    'label'         => __( 'Enable Section', 'swipewp' ),
                    'description'   => __( 'Enable/disable front team section.', 'swipewp' ),
                    'section'       => 'swipewp_front_team_section',
                    'settings'      => 'swipewp_front_team_option',
                    'priority'      => 5
                )
            )
        );

        /**
         * Text field for section title
         */
        $wp_customize->add_setting( 'swipewp_team_section_title',
            array(
                'capability'        => 'edit_theme_options',
                'default'           => '',
                'sanitize_callback' => 'sanitize_text_field',
            )
        );
        $wp_customize->add_control( 'swipewp_team_section_title',
            array(
                'label'             => __( 'Section Title', 'swipewp' ),
                'section'           => 'swipewp_front_team_section',
                'settings'          => 'swipewp_team_section_title',
                'type'			    => 'text',
                'priority'          => 10,
                'active_callback'   => 'swipewp_front_team_option_active_callback'
            )
        );

        /**
         * Select field for team category
         */
        $wp_customize->add_setting( 'swipewp_team_cat',
            array(
                'capability'        => 'edit_theme_options',
                'default'           => '',
                'sanitize_callback' => 'swipewp_sanitize_select',
            )
        );
        $wp_customize->add_control( 'swipewp_team_cat',
            array(
                'label'             => __( 'Team Category', 'swipewp' ),
                'section'           => 'swipewp_front_team_section',
                'settings'          => 'swipewp_team_cat',
                'type'			    => 'select',
                'choices'           => swipewp_get_categories_dropdown(),
                'priority'          => 15,
                'active_callback'   => 'swipewp_front_team_option_active_callback'
            )
        );
    
    }

endif;