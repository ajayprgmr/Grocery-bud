React fundamentals

How to create react app
- npm install -g create-react-app
- npx create-react-app my-app
- cd my-app
- npm start

Folder Structure
node_modules
  Contains all dependencies required by the app. Main dependencies also listed in package.json
public
  Contains static assets including index.html (page template)
Index.html
Title
Fonts
CSS
Favicon
id=’root’ → out entire app
src
In simplest  form it’s the brain of our app. This is where we will do all of our work. src/index.js is the javascript entry point.
.gitignore
Specifies which files source control(Git) should ignore
package.json
Every node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts
package-lock.json
A snapshot of the entire dependency tree. And we should push this file to git
README
The markdown file where you can share more info about the project for example build instructions and summary

Remove boilerplate
Remove src folder
Create src folder
Create index.js inside src folder
Create root of id=’root’ and render the created component inside this root
      Example:
```js
import React from 'react'
import ReactDOM from 'react-dom/client' // react-dom/client gives access to the whole html document.


function Greeting() {
  return <h2>My First Component</h2>
}


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(<Greeting />)
```


CTRL + C ( stop the server ) 
‘npm start’  (start the dev server)

Extensions and settings.json
- Auto Rename Tag
- Highlight Matching Tag
  - customise in settings.json
- Prettier
  - format on save
  - format on paste
  - Default Formatter (Prettier - Code formatter)


settings.json


```json
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.singleQuote": true,
    "prettier.semi": false,
```


- Emmet


settings.json


```json
"emmet.includeLanguages": {
    "javascript": "javascript react"
  },
```


ES7 Snippets
shortcuts
rafce ( arrow function with export )
rfce ( regular functions with export )
Export would be same as the file name
React auto import
Uncheck
React snippets → settings : import react on top
First Component in Detail
Should start name of the component in capital letter for each compound word
E.g. →       const   MyComponent = () => { ………….}
Must return something
JSX syntax ( return html)
To make our lives easier
Calling function under the hood



    ```js
    const Greeting = () => {
      return React.createElement('h2', {}, 'hello world')
    }
    ```


    ```js
    function Greeting() {
      return (
        <div>
          <h2>hello world</h2>
        </div>
      )
    }


    const Greeting = () => {
      return React.createElement(
        'div',
        {},
        React.createElement('h2', {}, 'hello world')
      )
    }


JSX Rules
Return single element ( one parent element strictly ) 
Semantics section / article
Fragment - let ‘s us group elements without adding extra nodes
```js
  return <React.Fragment>...rest of the return</React.Fragment>


  // shorthand
  return <>...rest of the return</>
  ```




camelCase property naming convention


```js
  return (
    <div tabIndex={1}> // camelCase
      <button onClick={myFunction}>click me</button>
      <label htmlFor='name'>Name</label>
      <input readOnly={true} id='name' />
    </div>
  )
  // in html
  <div tabindex="1">
      <button onclick="myFunction()">click me</button>
      <label for='name'>Name</label>
      <input readonly id='name' />
  </div>
```



className instead of class


  ```js
  return <div className='someValue'>hello</div>
  ```

Close every element
  ```js
  return <img />
  // or
  return <input />
  ```

Formatting : opening tag  should be in the same line as return or  return (<>.....</>);
  ```js
      function Greeting() {
        return (
          <>
            <div className='someValue'>
              <h3>hello people</h3>
              <ul>
                <li>
                  <a href='#'>hello world</a>
                </li>
              </ul>
            </div>
            <h2>hello world</h2>
            <input type='text' name='' id='' />
          </>
        )
      }
      ```


Nest Components
    ```js
    function Greeting() {
      return (
        <div>
          <Person />
          <Message />
        </div>
      )
    }


    const Person = () => <h2>john doe</h2>
    const Message = () => {
      return <p>this is my message</p>
    }
    ```

React Developer Tools
Top right corner
More tools / extensions
Open chrome web store
Project-1 : Showing booklist grid like amazon website
Mode - 1


    ```js
    import React from 'react'
    import ReactDOM from 'react-dom/client'


    function BookList() {
      return (
        <section>
          <Book />
          <Book />
          <Book />
          <Book />
        </section>
      )
    }


    const Book = () => {
      return (
        <article>
          <Image />
          <Title />
          <Author />
        </article>
      )
    }


    const Image = () => <h2>image placeholder</h2>
    const Title = () => {
      return <h2>Book Title</h2>
    }
    const Author = () => <h4>Author</h4>


    const root = ReactDOM.createRoot(document.getElementById('root'))


    root.render(<BookList />)
    ```

Model -2


    ```js
    const author = 'Jordan Moore'
    const title = 'Interesting Facts For Curious Minds'
    const img = './images/book-1.jpg'


    function BookList() {
      return (
        <section className='booklist'>
          <Book />
          <Book />
        </section>
      )
    }
    const Book = () => {
      return (
        <article className='book'>
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <h4>{author} </h4>
        </article>
      )
    }
    ```

Model - 3 : using props and booklist as array of objects
Props 
Props, short for ‘properties’ , fundamental concept in react
Way to pass information from one react component to another
Think props as means of communication between parts of your app
Why do we need props?
props allow you to pass data down this component tree
making it possible to build complex UI by combining simple
reusable components, props help you to achieve two goals
Reusability | Data Flow
    ```js
    function ParentComponent() {
      return (
        <div>
          <ChildComponent name='Alice' />
          <ChildComponent name='Bob' />
        </div>
      )
    }


    //  Create child component
    function ChildComponent(props) {
      return (
        <div>
          <p>Hello, {props.name}!</p>
        </div>
      )
    }
    ```

  ```js
      function BookList() {
        return (
          <section className='booklist'>
            <Book job='developer' />
            <Book title='random title' number={22} />
          </section>
        )
      }
      const Book = (props) => {
        console.log(props)
        return (
          <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author} </h4>
            <p>{props.job}</p>
            <p>{props.title}</p>
            <p>{props.number}</p>
          </article>
        )
      }
      `

Children prop
everything we render between component tags
during the course we will mostly use it Context API
special prop, has to be "children"
can place anywhere in JSX
Map creates a new array from calling a function for every array element.

    ```js
    function BookList() {
      return (
        <section className='booklist'>
          <Book
            author={firstBook.author}
            title={firstBook.title}
            img={firstBook.img}
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipiscing elit. It
              repudiandae inventore eos qui animi sed iusto alias eius 
            </p>
            <button>click me</button>
          </Book>
          <Book
            author={secondBook.author}
            title={secondBook.title}
            img={secondBook.img}
          />
        </section>
      )
    }


    const Book = ({ img, title, author, children }) => {
      // rest of the logic
    }
    const Book = (props) => {
      const { img, title, author, children } = props
      console.log(props)
      return (
        <article className='book'>
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <h4>{author} </h4>
          {children}
        </article>
      )
    }
    ```

Props dynamic setup for our BookList  project

    ```js
    const books = [
        {
          author: 'Jordan Moore',
          title: 'Interesting Facts For Curious Minds',
          img: './images/book-1.jpg',
          id: 1,
        },
        {
          author: 'James Clear',
          title: 'Atomic Habits',
          img:`url`
          id: 2,
        },
      ]




    function BookList() {
      return (
        <section className='booklist'>
          {books.map((book) => {
            return <Book {...book} key={book.id} />
          })}
        </section>
      )
    }


    const Book = (props) => {
      const { img, title, author } = props
      return (
        <article className='book'>
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <h4>{author} </h4>
        </article>
      )
    }
    const Book = ({ img, title, author }) => {
      // rest of the code
    }
    ```

Destructuring
Destructuring in vanilla JS
Saves time/typing
Pull out the properties
Don’t need to reference objects anymore.
Note : Can’t render objects in React
Spread operator in vanilla JS
Local images in public folder
External images ( hosted on different server ) - just need an url
Local images ( public folder ) - less performant
Local images ( src folder ) - better solution for assets, since under the hood they get optimised.
Whatever asset we place in the public folder - instantly available.
Domain (localhost) / asset
JSX - CSS ( inline styles )
Style prop
{......} in JSX means going back to javascript land
Value is an object with key/value pairs - capitalised and with ‘ ‘ 


    ```js
    const Author = () => (
      <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop:              '0.5rem' }}>
        Jordan Moore
      </h4>
    )
    ```

      ```js
      const Author = () => {
        const inlineHeadingStyles = {
          color: '#617d98',
          fontSize: '0.75rem',
          marginTop: '0.5rem',
        }
        return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>
      }
      ```


Css rules still apply ( inline vs external css )
External libraries use inline css, so if you want to make some changes, reference the library docs and elements tab.
AS THE MOST PART, MULTIPLE APPROACHES AVAILABLE!!!   -  AS LONG AS RESULT IS SAME, REALLY COMES DOWN TO YOUR PREFERENCE!
In the most of the cases we don’t use inline css


 ```


      - {} in JSX means going back to JS Land
      - value inside JSX must be an expression (return value),
        can't be a statement


      ```js


Event fundamentals
Vanilla JS
    ```js
    const btn = document.getElementById('btn')


    btn.addEventListener('click', function (e) {
      // access event object
      // do something when event fires
    })
    ```


Similar approach
Element, event, function
Again camelCase
     ```js
    const EventExamples = () => {
      const handleButtonClick = () => {
        alert('handle button click')
      }
      return (
        <section>
          <button onClick={handleButtonClick}>click me</button>
        </section>
      )
    }
    ```

onClick ( click events )
onSubmit ( submit form )
onChange ( input change )
  ```js
  function BookList() {
    return (
      <section className='booklist'>
        <EventExamples />
        {books.map((book) => {
          return <Book {...book} key={book.id} />
        })}
      </section>
    )
  }


  const EventExamples = () => {
    const handleFormInput = () => {
      console.log('handle form input')
    }
    const handleButtonClick = () => {
      alert('handle button click')
    }
    return (
      <section>
        <form>
          <h2>Typical Form</h2>
          <input
            type='text'
            name='example'
            onChange={handleFormInput}
            style={{ margin: '1rem 0' }}
          />
        </form>
        <button onClick={handleButtonClick}>click me</button>
      </section>
    )
  }
  ```

Event Object and Form Submission


    ```js
    const EventExamples = () => {
      const handleFormInput = (e) => {
        console.log(e)
        // e.target - element
        console.log(`Input Name : ${e.target.name}`)
        console.log(`Input Value : ${e.target.value}`)
        // console.log('handle form input');
      }
      const handleButtonClick = () => {
        alert('handle button click')
      }
      const handleFormSubmission = (e) => {
        e.preventDefault()
        console.log('form submitted')
      }
      return (
        <section>
          {/* add onSubmit Event Handler */}
          <form onSubmit={handleFormSubmission}>
            <h2>Typical Form</h2>
            <input
              type='text'
              name='example'
              onChange={handleFormInput}
              style={{ margin: '1rem 0' }}
            />
            {/* add button with type='submit' */}
            <button type='submit'>submit form</button>
          </form>
          <button onClick={handleButtonClick}>click me</button>
        </section>
      )
    }
    ```


Mind Grenade
Alternative approach
Pass anonymous function ( in this case arrow function )
One liner - less code
    ```js
    const EventExamples = () => {
      return (
       <section>
      <button onClick={() => console.log('hello there')}>click me</button>
        </section>
      )
    }
    ```


Also can access event object
  ```js
  const EventExamples = () => {
    return (
      <section>
        <form>
          <h2>Typical Form</h2>
          <input
            type='text'
            name='example'
            onChange={(e) => console.log(e.target.value)}
            style={{ margin: '1rem 0' }}
          />
   </form>
     <button onClick={() => console.log('you clicked me')}>click me</button>
      </section>
    )
  }
  ```


Mind grenade -2
Remove EventExamples
Components are independent by default.
            
  ```js
  function BookList() {
    return (
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} />
        })}
      </section>
    )
  }


  const Book = (props) => {
    const { img, title, author } = props
    const displayTitle = () => {
      console.log(title)
    }


    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <button onClick={displayTitle}>display title</button>
        <h4>{author} </h4>
      </article>
    )
  }
  ```




Remove button

Prop Drilling
passing functions / values from parent to child → grandchild
           and son on even though mid component don't use still forwarding
           to the child( child) components i.e what the Prop drilling is
react data flow - can only pass props down
alternatives Context API, redux, other state libraries



  ```js
  function BookList() {
    const someValue = 'shakeAndBake'
    const displayValue = () => {
      console.log(someValue)
    }
    return (
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} displayValue={displayValue} />
        })}
      </section>
    )
  }


  const Book = (props) => {
    const { img, title, author, displayValue } = props


    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <button onClick={displayValue}>click me</button>
        <h4>{author} </h4>
      </article>
    )
  }
  ```



More complex example
Initials setup
Create getBook function in booklist
Accepts id as an argument and finds the book.
Pass the function down to book component and invoke on the button click
In the Book component destructure id and function
Invoke the function when user clicks the button, pass the id 
The goal : you should see the same book in the console.
  ```js
  const BookList = () => {
    const getBook = (id) => {
      const book = books.find((book) => book.id === id)
      console.log(book)
    }


    return (
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} getBook={getBook} />
        })}
      </section>
    )
  }


  const Book = (props) => {
    const { img, title, author, getBook, id } = props
    // console.log(props);


    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        {/* this is not going to work */}
        <button onClick={getBook(id)}>display title</button>
        <h4>{author}</h4>
      </article>
    )
  }
  ```


Two fixes
First option - setup wrapper
  ```js
  const Book = (props) => {
    const { img, title, author, getBook, id } = props
    // console.log(props);
    const getSingleBook = () => {
      getBook(id)
    }
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <button onClick={getSingleBook}>display title</button>
        <h4>{author}</h4>
      </article>
    )
  }
  ```


Second - wrap in the anonymous arrow function
  ```js
  const Book = (props) => {
    const { img, title, author, getBook, id } = props
    // console.log(props);
    const getSingleBook = () => {
      getBook(id)
    }
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>


        <button onClick={() => getBook(id)}>display title</button>
        <h4>{author}</h4>
      </article>
    )
  }
  ```


Import and Export statements
Two flavours named and default exports
With named exports names MUST match
With default export, can rename but only one per file.
Named export


  ```js
  export const books = [
    {
      author: 'Jordan Moore',
      title: 'Interesting Facts For Curious Minds',
      img: './images/book-1.jpg',
      id: 1,
    },
    {
      author: 'James Clear',
      title: 'Atomic Habits',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
      id: 2,
    },
  ]
  ```


  index.js


  ```js
  import { books } from './books'
  ```



Default export
  ```js
  const Book = (props) => {
    const { img, title, author } = props


    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>


        <h4>{author} </h4>
      </article>
    )
  }


  export default Book
  ```


  index.js


  ```js
  import Book from './Book'
  ```


Local images ( src folder )
better performance because optimised under the hood


  ```js
  import img1 from './images/book-1.jpg'
  import img2 from './images/book-2.jpg'
  import img3 from './images/book-3.jpg'


  export const books = [
    {
      author: 'Jordan Moore',
      title: 'Interesting Facts For Curious Minds',
      img: img1,
      id: 1,
    },
    {
      author: 'James Clear',
      title: 'Atomic Habits',
      img: img2,
      id: 2,
    },
    {
      author: 'Stephen King',
      title: 'Fairy Tale',
      img: img3,
      id: 3,
    },
  ]
  ```


Build Production Application
stop the dev server "ctrl + c"
run "npm run build"
build folder gets created
Create-React-App Boilerplate ( src )
index.js
  ```js
  import React from 'react'
  import ReactDOM from 'react-dom/client'


  // styles (typically global)
  import './index.css'


  // convention to name it App and setup in a separate file
  import App from './App'
  // import report web vitals
  import reportWebVitals from './reportWebVitals'


  // StrictMode


  // StrictMode is a tool for highlighting potential problems in an application.Activates additional checks and warnings for its descendants.Runs only in Development, does not impact the production build. RENDERS TWICE !!! Possible to remove.


  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )


  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals()
  ```


Remove in src folder
setupTest.js
reportWbVitals.js
App.test.js
Be careful with multiple css files



VITE + REACT SETUP
Vite Install


  ```sh
  npm create vite@latest app-name -- --template react
  npm install
  npm run dev
  ```
Vite Setup
Need to use .jsx extension
Index.html in the source instead of public
Assets still in public folder
Instead of index.js, need to use main.jsx
To spin up dev server - ‘ npm run dev ‘
Rest the same  - imports/exports, deployment, assets, etc……….
Remove <StrictMode>, so it’s less logs → two times in the console.
ADVANCED REACT
Hooks
useState, useEffect, useRef, useContext, useReducer,etc
useState Basics
 Problem -1 : Making Counter using useState().

 const ErrorExample = () => {
    let count = 0;


    const handleClick = () => {
      count = count + 1;
      console.log(count);
    };
    return (
      <div>
        <h2>{count}</h2>
        <button type='button' className='btn' onClick={handleClick}>
          increment
        </button>
      </div>
    );
  };


  export default ErrorExample;



Above logic is correct but it will not increase on the browser, it will increase only in the console. Basically we have to change the state and remember the previous state. To solve problem -1.
In other words RE-RENDER
Problem-1 Solution :using → useState hook
useStae() is a function in React hook, which returns an array of two elements.
1st is current value 
2nd one is a function which can set the current value, whenever the current value is updated it triggers re-render.

 
 
 import { useState } from 'react';


  const UseStateBasics = () => {
    // console.log(useState()); →  [ undefined, f ]
    // console.log(useState('jo koy')); → [ ‘joy koy’, f ] 
    // const value = useState()[0]; → → undefined
    // const handler = useState()[1]; → it prints about setFunctioin info
    // console.log(value, handler); → 


    const [count, setCount] = useState(0);
    const sayHello= () => {
      // console.log(count)
      setCount(count + 1); // this will cause infinite loop
      // be careful, we can set any value
      // setCount('pants');
    };
    sayHello();
    return (
      <div>
        <h4>You clicked {count} times</h4>
        <button className='btn' onClick={sayHello}>
          Click me
        </button>
      </div>
    );
  };


  export default UseStateBasics;



Initial render and re-render
Ina React application, the initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first time rendered. This is also known as ‘mounting’ the components.

Re-renders, on the other hand, happen when the component’ s state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimise the process of updating actual DOM, so that only the necessary changes are made.

There are few ways that you can trigger a re-render in a React component.
By changing the component’s state or props. When a component's state or props change, React will re-render the component to reflect these changes.
When the parent element re-renders, even if the component’s state or props have not changed.

General Rules of Hooks
starts with "use" (both -react and custom hooks)
component must be uppercase
invoke inside function/component body
don't call hooks conditionally (cover later)
set functions don't update state immediately (cover later)

useState with Array
Setup Challenge
Import data
Setup a state value
people - default value equals to data
Display list(people) in the browser.
Create two functions
one that removes single item from the list
one that clears the entire list.


Render the list


  ```js
  import React from 'react'
  import { data } from '../../../data'
  const UseStateArray = () => {
    const [people, setPeople] = React.useState(data)


    return (
      <div>
        {people.map((person) => {
          const { id, name } = person
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
            </div>
          )
        })}
      </div>
    )
  }


  export default UseStateArray
  ```



Remove items


  ```js
  import React from 'react'
  import { data } from '../../../data'
  const UseStateArray = () => {
    const [people, setPeople] = React.useState(data)


    const removeItem = (id) => {
      let newPeople = people.filter((person) => person.id !== id)
      setPeople(newPeople)
    }
    return (
      <div>
        {people.map((person) => {
          const { id, name } = person
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          )
        })}
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={() => setPeople([])}
        >
          clear items
        </button>
      </div>
    )
  }


  export default UseStateArray
  ```


useState with Objects

useEffect hook : conditional useState
Accepts two arguments (second optional)
First argument → cb ( callback) function
Second argument → dependency array
By default runs on render ( initial and re-render)
Cb can’t return promise ( so can’t make it async)
If the dependency array is  empty  [ ] runs only on initial render.
We can create any number of useEffect in the component.
Async function return promise

    import { useEffect, useState} from 'react';
    import './App.css'
    import './assets/components/FormInput'
    function App() {
      const [ val, setVal]=useState(0);
      const sayHello = ()=> {
        console.log('hello from sayhello fun());
      }
      sayHello();
      // this will render only at time of mounting unless we provide some
     //  Extra condition
      useEffect(()=> {
        console.log('hello from useEffect');
      }, []);
      return (
        <>
        <h1>{val}</h1>
        <button onClick={()=>setVal(val+1)}>Click me</button>
        </>
      )
    }


    export default App



Dependency array [ second argument of useEffect ] 
We can pass multiple values inside this and whenever any value gets changed then useEffect will be triggered.

Multiple useEffects
  
 const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);


  useEffect(() => {
    console.log('hello from first useEffect');
  }, [value]);


  useEffect(() => {
    console.log('hello from second useEffect');
  }, [secondValue]);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};


useEffect( ) Important point


  useEffect(() => {
    // Any side effect logic can go here if needed
    // If you return a cleanup function, it will be executed when the    
    // component unmounts
    return () => {
      // Cleanup logic here if needed
    }
  }, [val])



Clean-up Functions
If you want to change the UI, or clear the UI then you can write in the below fashion.
useEffect(() => {
  // Effect code


  return () => {
    // Cleanup code
  };
}, [dependency]);


Fetch Data
  import { useState, useEffect } from 'react';
  const url = 'https://api.github.com/users';


  const FetchData = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const users = await response.json();
          setUsers(users);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
    return (
      <section>
        <h3>github users</h3>
        <ul className='users'>
          {users.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h5>{login}</h5>
                  <a href={html_url}>profile</a>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };
  export default FetchData;



Async Effects
If you need to perform any asynchronous operations inside ‘ useEffect’ , you can define an asynchronous function and call it within the effect.



useEffect(() => {
  const fetchData = async () => {
    try {
      // Async code
      const result = await someAsyncOperation();
      // Update state or perform other actions based on the result
    } catch (error) {
      // Handle errors
    }
  };


  fetchData();
}, [dependency]);




Using ‘useEffect’ for Mount and Unmount
useEffect(() => {
  // Mount logic
  return () => {
    // Unmount logic or cleanup
  };
}, []);

Fetch API


  import React, { useState, useEffect } from 'react';


  function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Replace with your API endpoint
  const apiUrl = 'https://api.example.com/data'; 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);


        if (!response.ok) {
          throw new Error('Network response was not ok');
        }


        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };


    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount


  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <>
          <h1>Data from API:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </div>
  );
}
export default App;


Npm install react-router-dom
We don’t use <a> tag in react because it causes a whole page refresh.
Forms
controlled/uncontrolled inputs,value, onChange, FormData API 
Controlled Inputs
import { useState } from 'react'
import './App.scss'


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')


  const handleNameChange = (e) => {
    setName(e.target.value)
  }


  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email)


    // here you can do anything for values obtained from input.
  }


  return (
    <form id='form' className='form' onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-level'>
          Name
        </label>
        <input
          type='text'
          id='name'
          className='form-input'
          value={name}
          onChange={handleNameChange}
          autoComplete='name' // Add autocomplete attribute
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-level'>
          Email
        </label>
        <input
          id='email'
          className='form-input'
          value={email}
          onChange={handleEmailChange}
          autoComplete='email' // Add autocomplete attribute
        />
      </div>
      <button type='submit' className='btn btn-block'>
        Submit
      </button>
    </form>
  )
}


export default App



Example : 
import React, { useState } from 'react'
import './App.scss'
import data from '../data.js'


function App() {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)


  const handleSubmit = (e) => {
    e.preventDefault()
    const newUsers = users.filter((user) => user.name !== name)
    setUsers(newUsers)
    setName('')
  }


  return (
    <div>
      {users.map((user) => (
        <div className='user' key={user.id}>
          <h4>{user.name}</h4>
        </div>
      ))}


      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-level'>
            Name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            autoComplete='name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
    </div>
  )
}


export default App





Form Data API









Fundamentals of Projects

Reviews

Code link: - Review
useRef hook
It is a lot like useState [ it preserves the values b/w the renders ]. But the difference is that updating useRef does not trigger  re-render. 
Very often useRef is used to access DOM nodes, but there are some nifty use cases as well.

useRef returns a mutable ref object whose .current property is initialised to the passed argument ( initialValue). The returned object will persist for the full lifetime of the component.

Note - useRef( ) is useful more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

import './App.scss'
import { useRef } from 'react'


function App() {
  const varUsef = useRef(0)


  const handleClick = () => {
    varUsef.current =     varUsef.current + 1;
    console.log(varUsef.current)
  }


  return (
    <section>
      <h4>value: {varUsef.current}</h4>
      <button onClick={handleClick}>increase</button>
    </section>
  )
}


export default App



In the above e.g. the value of varUsef  will update at the h4 but on the console. It will increase when one clicks on the increase button.

Dom Manipulation using useRef e.g.
import './App.scss'
import { useRef, useEffect } from 'react'


function App() {
  // Create a ref to hold the reference to the DOM node
  const myDivRef = useRef()


  // useEffect to run some code after the component has rendered
  useEffect(() => {
    // Accessing the DOM node using the current property of the ref
    const divNode = myDivRef.current


    // You can now manipulate the DOM node as needed
    divNode.style.backgroundColor = 'lightblue'
    divNode.textContent = 'DOM Manipulation Example'


    // Add an event listener to the DOM node
    const handleMouseOver = () => {
      divNode.style.color = 'red'
    }


    divNode.addEventListener('mouseover', handleMouseOver)


    // Cleanup the event listener when the component is unmounted
    return () => {
      divNode.removeEventListener('mouseover', handleMouseOver)
    }
  }, []) // Empty dependency array means this useEffect runs once after the initial render


  return (
    <div
      ref={myDivRef}
      style={{ padding: '20px', border: '1px solid black' }}
    ></div>
  )
}
export default App



Styling Div using useRef  [ full code Reference ]
 const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }


custom hooks
Basically in such hooks we can create a module, for a particular type.. Like useToggle( ),  useFetch( )
useToggle( ) 


import { useState } from 'react';


const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);


  const toggle = () => {
    setShow(!show);
  };


  return { show, toggle };
};


export default useToggle;




                                                                   


import useToggle from './useToggle'


const ToggleExample = () => {
  const { show, toggle } = useToggle(true)
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  )
}
export default ToggleExample




useFetch( )


import { useState, useEffect } from 'react';


const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // change state value
  const [data, setData] = useState(null);


  useEffect(() => {
    // change name
    const fetchData = async () => {
      try {
        const resp = await fetch(url);


        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        // change to response
        const response = await resp.json();
        setData(response);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    // invoke fetch data
    fetchData();
  }, []);


  return { isLoading, isError, data };
};


export default useFetch;


                        
                                                                              

import useFetch from './useFetch'
const url = 'https://api.github.com/users/QuincyLarson'


const FetchData = () => {
  const { isLoading, isError, data: user } = useFetch(url)


  // order matters
  // don't place user JSX before loading or error


  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }
  const { avatar_url, name, company, bio } = user
  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>{`works at ${company}`}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default FetchData




Context API

The React Context API is a way to share values like themes, user authentication status, or any other data that needs to be accessible by many components at different nesting levels. It's an alternative way of passing props down through multiple levels of components.

Example -1 : Prop Drilling


 
```js
Challenge


- create three components and nest them in such way :


- Navbar.jsx


  - NavLinks.jsx (nested in Navbar)
    - UserContainer.jsx (nested in NavLinks)


- import Navbar.jsx in App.jsx (remove container - CSS)
- in Navbar.jsx setup
  - user state value
    - default value {name:'something'}
  - logout function
    - set user back to null
- pass both of them down to UserContainer.jsx
- display user and button
- on button click set user back to null


- extra challenge
- if user null, in UserContainer display <p>please login</p>


Navbar.jsx


```js

import Starter from './tutorial/09-context-api/starter/Navbar.jsx'


function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}


export default App



                                                                         

import React, { useState } from 'react'
import Navlinks from './Navlinks'
function Navbar() {
  const [user, setUser] = useState({ name: 'bob' })
  const logout = () => {
    setUser(null)
  }
  const login = () => {
    setUser({ name: 'bob' })
  }
  return (
    <nav className='navbar'>
      <h5>CONTEXT-API</h5>
      <Navlinks user={user} logout={logout} login={login} />
    </nav>
  )
}


export default Navbar




import React from 'react'
import UserContainer from './User-container'


function Navlinks({ user, logout, login }) {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} login={login} />
    </div>
  )
}


export default Navlinks



						
						
import React from 'react'


function UserContainer({ user, logout, login }) {
  return (
    <div className='user-container'>
      {user ? (
        <>
          {' '}
          <p>Hello, There, {user?.name?.toUpperCase()}</p>
          <button className='btn' onClick={logout} style={{ width: '100px' }}>
            logout
          </button>
        </>
      ) : (
        <button className='btn' onClick={login} style={{ width: '100px' }}>
          Login
        </button>
      )}
    </div>
  )
}


export default UserContainer




Example -1 : Context API - Solution

import Starter from './tutorial/09-context-api/starter/Navbar.jsx'


function App() {
  return (
    <div className='container'>
      <Starter />
    </div>
  )
}


export default App




import React, { useState, createContext } from 'react'
import Navlinks from './Navlinks'


export const NavbarContext = createContext()
// Custom hook
// export const useAppContext = () => { createContext(NavbarContext) }
// you can use this custom hook anywhere in the Dom tree. w/o import navbar
// And NavContext
function Navbar() {
  const [user, setUser] = useState({ name: 'bob' })
  const logout = () => {
    setUser(null)
  }
  const login = () => {
    setUser({ name: 'bob' })
  }
  return (
    <NavbarContext.Provider className='navbar' value={{ user, logout, login }}>
      <h5>CONTEXT-API</h5>
      <Navlinks />
    </NavbarContext.Provider>
  )
}


export default Navbar



import UserContainer from './User-container'
function Navlinks() {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  )
}


export default Navlinks



import React from 'react'
import { useContext } from 'react'
import { NavbarContext } from './Navbar'


function UserContainer() {
  const { user, logout, login } = useContext(NavbarContext)
  return (
    <div className='user-container'>
      {user ? (
        <>
          {' '}
          <p>Hello, There, {user?.name?.toUpperCase()}</p>
          <button className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <button className='btn' onClick={login}>
          Login
        </button>
      )}
    </div>
  )
}


export default UserContainer



Context API - Customhook
Note: if you don’t want to import NavbarContext and useContext again and again you can a hook in the mentioned in the Navbar Comment
Context API global Setup
HMR - Hot Module Replacement
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalContext from './GlobalContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext>
      {' '}
      <App />
    </GlobalContext>
  </React.StrictMode>
)



import { createContext, useContext, useState } from 'react'


const GlobalAppContext = createContext()


export const useGlobalAppContext = () => {
  return useContext(GlobalAppContext)
}


function GlobalContext(props) {
  const [user, setUser] = useState({ name: 'bob' })
  const logout = () => {
    setUser(null)
  }
  const login = () => {
    setUser({ name: 'bob' })
  }


  return (
    <GlobalAppContext.Provider value={{ user, logout, login }}>
      {props.children}
    </GlobalAppContext.Provider>
  )
}


export default GlobalContext





import Navbar from '../src/assets/components/Navbar.jsx'
import './App.css'
function App() {
  return <Navbar />
}
export default App



  
import Navlinks from '../components/Navlinks.jsx'
import '../../App.css'
function Navbar() {
  return (
    <div className='navlinks'>
      <h3>CONTEXT API </h3>
      <ul>
        <a href='#'>Home</a>
        <a href='#'>About</a>
      </ul>
      <Navlinks />
    </div>
  )
}


export default Navbar



import UserContainer from '../components/Usercontainer.jsx'


function Navlinks() {
  return (
    <div>
      <UserContainer />
    </div>
  )
}


export default Navlinks




import { useGlobalAppContext } from '../../GlobalContext'
import '../../App.css'
function Usercontainer() {
  const { user, logout, login } = useGlobalAppContext()
  const handleClick = () => {
    if (user === null) {
      login()
    } else {
      logout()
    }
  }
  return (
    <section className='usercontainer'>
      <p>
        {user ? ` Hello There ${user?.name?.toUpperCase()}` : 'Please login'}
      </p>
      <button className='btn' onClick={handleClick}>
        {user ? 'Logout' : 'Login'}
      </button>
    </section>
  )
}


export default Usercontainer





Fundamentals of Project :  Sidebar-Model
Repo → GitHub

Accordion
Repo → GitHub    | Host link → Netlify

Menu-Bar Setup
Repo →  GitHub    | Host link  →
Slider-Setup
Repo → GitHub    | Host link → 

Slider-Library ( React -Slick )
-------------------------------------------------------------------------------------------------------------------------------------------
Color Generator [ Project ]
React Toastify → 

Nanoid  →



--------------------------------------------------------------------------------------------------------------------------------------------
Grocery bud
Repo → GitHub
Live →Netlify


localStorage: localStorage is a built-in object in browsers that allows web applications to store key-value pairs locally within the user’s browser.

To store data in localStorage, you can use the localStorage. setItem(key, value) method, where key is a unique identifier for the data being stored and value is the data you want to store, Note that the value parameter needs to be string.

Example- 
import React, { useState, useEffect } from 'react';


const MyComponent = () => {
  // State to manage the data in your component
  const [myData, setMyData] = useState('');


  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    const savedData = localStorage.getItem('myData');
   
    // Update the state with the retrieved data
    if (savedData) {
      setMyData(savedData);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount


  const handleInputChange = (event) => {
    // Update the state as the user types
    setMyData(event.target.value);
  };


  const saveData = () => {
    // Save data to localStorage when the user clicks a button or some other event
    localStorage.setItem('myData', myData);
  };


  return (
    <div>
      <input type="text" value={myData} onChange={handleInputChange} />
      <button onClick={saveData}>Save Data</button>
      <p>Saved Data: {myData}</p>
    </div>
  );
};

export default MyComponent;



