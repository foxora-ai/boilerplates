# WordPress Plugin Boilerplate

Standard WordPress plugin structure with REST API, shortcode, admin page, and DB table.

## Structure

```
my-plugin.php              # Plugin header + bootstrap
includes/
  class-my-plugin.php      # Core plugin class
  class-activator.php      # Activation + DB setup
admin/                     # Admin-specific JS/CSS
public/                    # Frontend-specific JS/CSS
```

## Features

- Admin menu page
- REST API endpoint: `GET /wp-json/my-plugin/v1/hello`
- Shortcode: `[my_plugin message="Hello!"]`
- Custom DB table on activation (via `dbDelta`)
- PSR-style class structure

## Getting Started

1. Copy folder to `wp-content/plugins/my-plugin/`
2. Activate in WordPress admin
3. Visit `/wp-json/my-plugin/v1/hello` to test REST API
