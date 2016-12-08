# Backbone ToDo application

Simple Backbone.js application

## Installation

1. Create database:
```
CREATE TABLE `message` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `message` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
```

2. Create `src/settings.php` file with DB configuration

3. Execute `composer install`

4. Run PHP server `php -S 0.0.0.0:8080 -t public public/index.php`

