<?php
class My_Plugin {
    public function run(): void {
        add_action( 'admin_menu', [ $this, 'add_admin_menu' ] );
        add_action( 'rest_api_init', [ $this, 'register_rest_routes' ] );
        add_shortcode( 'my_plugin', [ $this, 'shortcode_output' ] );
    }

    public function add_admin_menu(): void {
        add_menu_page(
            __( 'My Plugin', 'my-plugin' ),
            __( 'My Plugin', 'my-plugin' ),
            'manage_options',
            'my-plugin',
            [ $this, 'admin_page' ],
            'dashicons-admin-generic',
            80
        );
    }

    public function admin_page(): void {
        echo '<div class="wrap"><h1>' . esc_html__( 'My Plugin Settings', 'my-plugin' ) . '</h1></div>';
    }

    public function register_rest_routes(): void {
        register_rest_route( 'my-plugin/v1', '/hello', [
            'methods'             => 'GET',
            'callback'            => fn() => rest_ensure_response( [ 'message' => 'Hello from plugin REST API!' ] ),
            'permission_callback' => '__return_true',
        ] );
    }

    public function shortcode_output( array $atts ): string {
        $atts = shortcode_atts( [ 'message' => 'Hello from shortcode!' ], $atts );
        return '<p>' . esc_html( $atts['message'] ) . '</p>';
    }
}
