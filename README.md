# Postmetria Challenge 

## Description
This project consists in web application who allows you to get some basic infos searching by a Github usernames. It was made using Vue in front, PHP, JS, jQuery, AJAX in back and MySQL database. Consists in sending a request to Github API, saving the results in database and finally fetching the data to show in page.

## How to install
* Download and install XAMPP (includes MySQL, Apache, PHP and PHPMyAdmin)
* Download this project and put on folder "htdocs", usually located in directory: `computer/opt/lampp/htdocs` (on Linux)
* Start MySQL and Apache using XAMPP interface or using command line `sudo /opt/lampp/lampp start` (use your XAMPP directory)
* Open "localhost/phpmyadmin" on browser and create a new database with name "postdb" and import file "dump-postdb.sql" located in project folder "db"
* Finally go to "localhost" on browser and open the project directory 

## How to use
After everything started and website open, you just need to search by some Github username and you will get the result.

## Common issues (on Linux)
* Problem to start Apache, try using these commands: `sudo /etc/init.d/apache2 stop` and `sudo /opt/lampp/lampp start`
* Problem to start MySQL, try using: `service mysql stop` then `sudo /opt/lampp/lampp start`
