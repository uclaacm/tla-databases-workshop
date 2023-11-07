# Relational Databases
__Tech Stack__
* Flask
* SQLite

Flask is a micro web-framework written in Python. WTForms and Flask-WTForms are used to implement the forms in this app. 

SQLite is a small disk-based relational database engine often used in mobile apps. In this app, it's used to prototype the features of relational databases.

### Run the App
In the `relational` directory:
1. Create a virtual environment `.venv`
  ```
  python -m venv .venv
  ```
2. Add execute permissions so we can activate the virtual environment
  ```
  chmod +x .venv/bin/activate
  ```
3. Activate the virtual environment (don't forget the `.`!)
  ```
  . .venv/bin/activate
  ```
4. Install the necessary packages from `requirements.text`
  ```
  pip3 install -r requirements.txt
  ```
5. Run the app
  ```
  python app.py
  ```
5. Stop the app with `^C` and end the virtual environment
  ```
  deactivate
  ```