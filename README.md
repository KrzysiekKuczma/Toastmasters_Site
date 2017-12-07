React Wordpress Theme
===

This project is used as a Wordpress template made with React and Wordpress REST API
---

This is my website template made for toastmasters club in Warsaw.
[Toastmasters ASBIRO](http://toastmasters.asbiro.pl/)

To Work properly on Your wordpress site You need to install two plugins:
* [WP REST API Frontpage](https://wordpress.org/plugins/wp-rest-api-frontpage/)
* [WP REST API MENUS](https://wordpress.org/plugins/wp-rest-api-v2-menus/)

Both are free and add new endpoints to REST API

## Confirguration

### Menu

* First You need to install and activate [WP REST API MENUS](https://wordpress.org/plugins/wp-rest-api-v2-menus/) plugin.
* Next Go to Your *Dashboard* and choose Your menu in *Appearence -> Menus*
* Set Your menu name to *top* and check *Display location* as *Main Menu*

### Start Page 

 First You need to install and activate [WP REST API Frontpage](https://wordpress.org/plugins/wp-rest-api-frontpage/) plugin.



![setup menu](./readme_screenshots/menu_config.png?raw=true "logo config")
### Carousel

To choose images which will appear in slideshow You need to fill field *caption* with name *carousel* 

in *Your_wordpress_site_dashbord* -> *Media* -> *Library* -> *Your_image*

The *Alt Text* is also a slogan of a slide

![Choose slide images](./readme_screenshots/carousel_config.png?raw=true "carousel config")

---

### Logo
To setup Your website logo is similar to carousel:

Write *main_logo* in *caption* field to Your logo image

![Choose logo image](./readme_screenshots/logo_config.png?raw=true "logo config")

---

### Colors

All colors used in website are written in *src/styles/partials/variables*

### Blog
The **Blog** page route is setup to *yourdomain.name/blog*. To change route You should check **MainTemplate** component in *src/compoonents* and change "<Route>" from to *yourdomain.name/yourblogpage*

'''
<Route exact path='/blog' component={Posts}/>
<Route exact path='/blog/create_post' component={CreatePost} />
<Route path='/blog/:id' component={Post} />
'''

to

'''
<Route exact path='/yourblogpage' component={Posts}/>
<Route exact path='/yourblogpage/create_post' component={CreatePost} />
<Route path='/yourblogpage/:id' component={Post} />
'''