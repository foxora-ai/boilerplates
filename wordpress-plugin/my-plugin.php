<?php
/**
 * Plugin Name: My Plugin
 * Plugin URI: https://foxora.ai
 * Description: A WordPress plugin boilerplate
 * Version: 0.1.0
 * Author: Foxora
 * License: GPL-2.0+
 * Text Domain: my-plugin
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'MY_PLUGIN_VERSION', '0.1.0' );
define( 'MY_PLUGIN_FILE', __FILE__ );
define( 'MY_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'MY_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

require_once MY_PLUGIN_DIR . 'includes/class-my-plugin.php';
require_once MY_PLUGIN_DIR . 'includes/class-activator.php';

register_activation_hook( __FILE__, [ 'My_Plugin_Activator', 'activate' ] );
register_deactivation_hook( __FILE__, [ 'My_Plugin_Activator', 'deactivate' ] );

function run_my_plugin(): void {
    $plugin = new My_Plugin();
    $plugin->run();
}
run_my_plugin();
