# demo-blog
DEMO BLOG for test


COMMANDS to run both Frontend and backend project:


TO Setup and run the backend (django) project 
run these commands :

1 . cd demo


2. pip install -r requirements.txt


3. python manage.py makemigrations
python manage.py migrate


4. python manage.py loaddata admin_data.json
—-> This will seed superadmin data into sql database 

Here are the credentials to login into admin page later to create CompanyInfo data from admin side.
    USERNAME: admin
    PASSWORD : demoPassword

5 .python manage.py runserver 
to run the server

To run reactjs project :
change directory into 

cd demo-frontend/
then run

$ npm install 

$ npm start



