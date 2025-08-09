import React from "react";
import "../styles/article.css";
import AdSenseAd from "../components/AdSenseAd";

const PythonPage = () => {
  return (
    <div className="article">
      <h1>Python: A Versatile Programming Language</h1>

      <p>
        Python is an interpreted, high-level and general-purpose programming
        language. Python's design philosophy emphasizes code readability with
        its notable use of significant whitespace.
      </p>

      <h2>Basic Syntax</h2>

      <div className="code-example">
        <div className="code-example-title">Variables and Data Types</div>
        <pre>{`# Variables
name = "John"
age = 25
is_student = True

# Lists
fruits = ["apple", "banana", "cherry"]

# Dictionaries
person = {"name": "John", "age": 25}`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Functions</div>
        <pre>{`# Function definition
def greet(name):
    return f"Hello, {name}!"

# Function call
print(greet("John"))`}</pre>
      </div>

      <h2>Control Structures</h2>

      <pre>{`# If-else
if age >= 18:
    print("Adult")
else:
    print("Minor")

# For loop
for fruit in fruits:
    print(fruit)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1`}</pre>

      <h2>Object-Oriented Programming</h2>

      <pre>{`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"My name is {self.name} and I am {self.age} years old."

# Create object
person = Person("John", 30)
print(person.greet())`}</pre>

      <h2>Popular Python Frameworks</h2>

      <div className="code-example">
        <div className="code-example-title">Django (Web Framework)</div>
        <pre>{`# views.py
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world!")`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Flask (Micro Web Framework)</div>
        <pre>{`from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Pandas (Data Analysis)</div>
        <pre>{`import pandas as pd

# Create DataFrame
data = {'Name': ['John', 'Jane'], 'Age': [25, 30]}
df = pd.DataFrame(data)

# Display DataFrame
print(df)`}</pre>
      </div>

      <AdSenseAd
        adSlot="7952094241"
        adFormat="auto"
        adStyle={{
          display: "block",
          margin: "30px auto",
          maxWidth: "336px",
          height: "280px"
        }}
      />
    </div>
  );
};

export default PythonPage;
