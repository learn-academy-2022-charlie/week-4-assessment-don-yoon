# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

### 1. What are props in React?

  Your answer:
  > Props are the properties of the parent component. In order for the child component to utilize the data from the state object in the parent, we need to pass it down as props. This allows the child component to call methods that are within the parent component. This makes it really easy to keep all different parts of a web app well organized. When creating all the necessary components for our tic tac toe project, I was able to keep all data in the app component and use it as more of a manager rather than creating a cluster of methods all in a single component. We first learned that communication only happens in one direction from parent to child, but with the addition with functional props, we were introduced to passing data back up to the parent component from the child.
  Researched answer:
  > Props are arguments passed down to the child component. Props are read only. All react components must behave like pure functions in regards to their props. This means that components should never modify the props directly. Any component that does so would behave like an impure function. The benefits of using props is that we can create many instances of the child component that can all act independently of one another. Functional props may seem like we are changing props, however this is not the case. The state is being changed within the parent component, just that it is happening as a response to what occurred in the child component.

  > https://reactjs.org/docs/components-and-props.html



### 2. What is a DOM event?

  Your answer:
  >The DOM event is an object that tracks the interaction between the user and the app. The event is used in event handlers which coordinate the execution of various method calls, such as a button click.

  Researched answer:
  >There are many different types of DOM events. Each event is tied to a different aspect, such as UI events, Animations Events, Mouse Events, etc... These events occur when a specific interaction happens with the HTML document that belongs to the pertaining object. Just like any other OOP language, the EVENT OBJECT is the parent of all other types of event objects, therefore these child objects have access to whatever properties and methods within the Event Object.

  >https://www.w3schools.com/jsref/dom_obj_event.asp
  >https://www.w3schools.com/jsref/obj_event.asp



### 3. What is object-oriented programming? How is it different than functional programming?

  Your answer:
  > OOP is the idea that everything we work with is an instance of classes where all properties are inherited from. This allows us to inherit methods from the parent class and use them on different instances of them. We get to use many wonderful built in methods on different data types because they are all instances of their parent class. Primitive data types such as strings in JavaScript get instantiated with a special object wrapper that allows us to use methods upon them. Functional programming as the name suggests, is based around the logic rather than object which holds its own internal data.

  Researched answer:
  > Functional programming follows a declarative model, whereas Object oriented programming follows and imperative model. Declarative programming describes what the program does and imperative programming describes how the program should complete a task. Declarative programming is like giving us a list of instructions before doing the actual task. Imperative programming is like having a guide each step of the way as we complete each step. I was able to give some examples and repeat what I had heard, but I didn't fully understand until I researched the differences. Functional programming avoids changing state. The output must always be the same for a given input. This means that each function does only its part. This allows for avery modular, efficient, clean code. OOP is all about using objects to represent what it is that we are programming about. The data within these objects are changing and the methods within are what interact with the it. An important aspect of OOP is its ability to encapsulate the data from outsiders. It is able to hide sensitive information from outside access.

>https://dev.to/ruizb/declarative-vs-imperative-4a7l#:~:text=Declarative%20programming%20is%20a%20paradigm,which%20mutate%20the%20program's%20state.
>https://www.educba.com/functional-programming-vs-oop/
>https://www.geeksforgeeks.org/difference-between-compiled-and-interpreted-language/
>https://medium.com/@shaistha24/functional-programming-vs-object-oriented-programming-oop-which-is-better-82172e53a526


### 4. What is the difference between a Float and an Integer in Ruby?

  Your answer:
  >They are different classes. Their instances inherit different properties and thus are treated differently. Unlike JavaScript, there is no type coercion in Ruby and we need to take that into consideration when using them together. When we were learning how to utilize the irb, I noticed that when we divide an integer by a float, we get back float. Same goes for a float divided by an integer, I got back a float. This is the closest thing to type coercion I have seen so far.

  Researched answer:
  >Floats are inherently imprecise, when doing simple evaluations such as 0.1 + 0.3 == 0.4, we would get back false. Floats offer a degree of precision greater than what integers can provide however when a much greater precision is required, BigDecimal should be used. Unless there is a specific use for such precision, Floats are much faster in terms of performing operations on them than BigDecimal.

  > https://www.rubyguides.com/2016/07/numbers-in-ruby/


### 5. Ruby has an implicit return. What does that mean?

  Your answer:
  >It means that even without the use of keywords, code that is executed within methods will still give us a return. Unlike JavaScript functions that require the use of the keyword "return" in multi line codes, Ruby will just return the last line of a given code in a method. JavaScript now has implicit returns as well when dealing with a single line of code within its function body.

  Researched answer:
  > With the use of implicit returns, we can let Ruby handle the flow of code execution. Letting Ruby handle the flow of execution is better than explicitly stating the return. This could cause some problems down the line when other people have to work on Ruby code. Without explicit returns, we run into the possibility of confusing what it is that we intended to return with the method. 

  >http://ruby-for-beginners.rubymonstas.org/writing_methods/control_flow.html
  >https://franzejr.github.io/best-ruby/idiomatic_ruby/implicit_return.html



## Looking Ahead: Terms for Next Week

1. Instance Variable:
>Instance variables in ruby are the equivalent of state objects in React. These are the variables that will always be the same when an object is initialized from the given class. Instance variables have the "@" symbol in front. These variables are encapsulated and cannot be accessed from outside of the class.
>https://www.rubyguides.com/2019/07/ruby-instance-variables/

2. PostgreSQL:
> PostgreSQL, aka Postgres, is an open source object-relational database system. Relational database helps manage how information and its related data points are accessed.

>https://www.postgresql.org/

3. Ruby on Rails:
> Rails is the web application development framework. The difference between React and Rails, is that React is a library and Rails is a framework. Libraries come with predefined function that will speed up the process whereas framework, as the name suggests, is where we will customize our application.
>https://rubyonrails.org/
>https://www.interviewbit.com/blog/framework-vs-library/#:~:text=Libraries%20provide%20developers%20with%20predefined,build%20applications%20for%20specific%20platforms.
>https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/

4. ORM:
>Object-Relational Mapping is a technique that lets you request data or information from a database and manipulate it. ORM these days are referring to a library that already has all the necessary functions to use the ORM technique

>https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one
>https://www.techopedia.com/definition/5736/query#:~:text=A%20query%20is%20a%20request,analyses%20from%20data%2Dmining%20tools.


5. Active Record:
> The active record is the model part of the MVC. The mvc is the model-view-controller software architectural pattern. There is a diagram on wikipedia  that shows the flow of how the displayed information is changed with the user interaction.

><img src="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller#/media/File:MVC-Process.svg"/>

>https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
>https://guides.rubyonrails.org/active_record_basics.html
