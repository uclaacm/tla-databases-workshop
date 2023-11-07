import os
from flask import Flask, render_template, redirect, url_for
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import InputRequired, ValidationError

from db import get_db, add_row, delete_row

breed_choices = [
    'Beagle',
    'Bulldog',
    'Chihuahua',
    'Dachshund',
    'French Bulldog',
    'German Shepherd',
    'Golden Retriever',
    'Labrador Retriever',
    'Poodle',
    'Siberian Husky',
]

def validate_age(form, age):
    if age.data < 0:
        raise ValidationError("Age must be greater than 0.")

class AddForm(FlaskForm):
    name = StringField('name', [InputRequired()])
    age = IntegerField('age', [InputRequired(), validate_age])
    breed = SelectField('breed', [InputRequired()], choices=breed_choices)
    
class DeleteForm(FlaskForm):
    pk = IntegerField('pk')

app = Flask(__name__)
app.config.from_mapping(
    SECRET_KEY='dev',
)

@app.route('/')
def index():
    data = get_db()
    add_form = AddForm()
    delete_form = DeleteForm()
    return render_template("base.html", data=data, add_form=add_form, delete_form=delete_form)

@app.route('/add', methods=['POST'])
def add():
    data = get_db()
    add_form = AddForm()
    delete_form = DeleteForm()
    if add_form.validate_on_submit():
        name = add_form.name.data
        age = add_form.age.data
        breed = add_form.breed.data
        add_row(name, age, breed)
        return redirect(url_for("index"))
    return render_template("base.html", data=data, add_form=add_form, delete_form=delete_form)

@app.route('/delete', methods=['POST'])
def delete():
    data = get_db()
    add_form = AddForm()
    delete_form = DeleteForm()
    if delete_form.validate_on_submit():
        pk = delete_form.pk.data
        delete_row(pk)
        return redirect(url_for("index"))
    return render_template("base.html", data=data, add_form=add_form, delete_form=delete_form)

if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)