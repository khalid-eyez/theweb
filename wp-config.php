<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ps_web_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'PTTZN}Er=l.4O!F**$nqq!?8b0$hG%H>5UR#8^pknMEgoRMgD4sYOmXvg54z5$>v' );
define( 'SECURE_AUTH_KEY',  '0%GE{1bNOk5_iF}}xgp|H9KZ^HC/zgE2s0?>ppCv}4]o`)77dQ| 9Ko(^ImY+Z96' );
define( 'LOGGED_IN_KEY',    'aKg<Pb-5nfr4TYj!4hr`*4!4iz8}9#JZ^e!fK6Zm&`Dznc){8A;hDXud``g_Hiz2' );
define( 'NONCE_KEY',        'dg76Nn5qK3!4uyS4{$[?6v7Pi4@?4TP@k%Ei;SujAkeOYLVSb6cwZ:yQK!}[Fn:R' );
define( 'AUTH_SALT',        'vCPSne[3}W%,Y8%L0xPafI@s?uOCf7a*fE}=v5xb#y5P!*#tZyLCTKlk %b-0()]' );
define( 'SECURE_AUTH_SALT', 'Y|@u.#{4w5%q`U7w V/O[0O`-:-YIhGFcD*!%XOBC!4yCo}[/9?4SpNkZX!xta#y' );
define( 'LOGGED_IN_SALT',   'A+N,z=w>fMOI`v.6,**~-biwHMo2hCbiQEc*BZjwu{eBbu`ZeRme=>g}3-(/mnI@' );
define( 'NONCE_SALT',       '+W{LA273;Z=W$nO/13FT4yDx(e?3)LKVtl&7)ymM5T@auqaas,2 (B4v;g0L7R{2' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ps_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
