<p  align="center">
    <img src="https://github.com/KrzysiekKuczma/Toastmasters_Site/blob/master/readme_screenshots/react_wordpress.png?raw=true" alt="react_wordpress">
</p>

React Wordpress Theme
===

This project is used as a Wordpress template made with React and Wordpress REST API
---

This is my website template made for toastmasters club in Warsaw.
[Toastmasters ASBIRO](http://toastmasters.asbiro.pl/)

To Work properly on Your wordpress site You need to install plugins:
* [WP RESt API](https://wordpress.org/plugins/rest-api/)
* [WP REST API Frontpage](https://wordpress.org/plugins/wp-rest-api-frontpage/)
* [WP REST API MENUS](https://wordpress.org/plugins/wp-rest-api-v2-menus/)

Both are free and add new endpoints to REST API

## Confirguration

### Start Page 

* First You need to install and activate [WP REST API Frontpage](https://wordpress.org/plugins/wp-rest-api-frontpage/) plugin.
* Next Setup your frontpage in ```Dashbord``` -> ```Settings``` -> ```Reading```
* You should also setup your blog page as well

![setup frontpage](./readme_screenshots/frontpage_config.png?raw=true "frontpage config")

### Menu

* First You need to install and activate [WP REST API MENUS](https://wordpress.org/plugins/wp-rest-api-v2-menus/) plugin.
* Next Go to Your ```Dashboard``` and choose Your menu in ```Appearence``` -> ```Menus```
* Set Your menu name to ```top``` and check ```Display location``` as ```Main Menu```

![setup menu](./readme_screenshots/menu_config.png?raw=true "logo config")

### Carousel

To choose images which will appear in slideshow You need to fill field *caption* with name *carousel* 

in `Your_wordpress_site_dashbord` -> `Media` -> `Library` -> `Your_image`

The `Alt Text` is also a slogan of a slide

![Choose slide images](./readme_screenshots/carousel_config.png?raw=true "carousel config")


### Logo
To setup Your website logo is similar to carousel:

Write `main_logo` in `caption` field to Your logo image

![Choose logo image](./readme_screenshots/logo_config.png?raw=true "logo config")


### Colors

All colors used in website are written in *src/styles/partials/variables*

### Blog
The **Blog** page route is setup to *yourdomain.name/blog*. To change route You should check **MainTemplate** component in *src/compoonents* and change `<Route>` 

from 
```
<Route exact path='/blog' component={Posts}/>
<Route exact path='/blog/create_post' component={CreatePost} />
<Route path='/blog/:id' component={Post} />
```

to

```
<Route exact path='/yourblogpage' component={Posts}/>
<Route exact path='/yourblogpage/create_post' component={CreatePost} />
<Route path='/yourblogpage/:id' component={Post} />
```

### Stay In Touch

If you have a question just send me an [email](mailto:kuczma.krzysiek@gmail.com) 

### License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 Krzysztof Kuczma