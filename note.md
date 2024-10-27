- React
 -> Dom (Web App)
 -> Native (Mobile App)


"HTML" inside "JAVASCRIPT"
 -> Create Function and Return the HTML code
 -> Component only can return 1 Component
 -> use "div" to return mulitple components

Hooks - useState(), etc
 -> Use to Re-render the DOM

React - Fibre (Heart of React)
 -> Virtual DOM is use to Re-Create the DOM
 -> Ability to pause, abort, and reuse work for new updates
 -> Priority to diff types of updates
 -> "Reconcilation" - Algorithm use to diff one with other tree.
 - - - It popularly known as "Virtual-DOM" - - - 
 - - - React Not attempt to diff them, but replace old tree completely rather
 -> Update - A change in react-app used to render a react-app (hooks).
 -> Diffing of Lists is performed using keys, should be unique, stable

 -> Are Much Lower Level Abstraction 
 -> Functionality :-
                Pause Work 
                assign Priority to diff works
                Reuse previously completed work
                abort work if no needed

Tailwind CSS - 
 -> Go through the documentation
 -> Install Dependancies
 -> config Tailwind.config.js = content []
 -> add plugins in index.css
 -> - - -  bas and tailwind use kro - - -

Props - 
 -> Makes Components re-use-able
 -> 


Hook - useCallback(fn, dependncies)
 -> React Hook that lets you cache a function definition between re-renders.
 -> Basically Stores the previous data in cache and then use when needed.
 -> Memoization effect is done by this
 
 -> "this hook tells about Optimizations"

Hook - useEffect()
 -> used to handle side effects in function components
 -> effects are operations that affect something outside the component
 -> as updating the DOM, fetching data from an API, setting up subscriptions, or manually changing states
 
 -> "this hook tells it updates dom if any side effect happens "
 
 it takes (callback , [changing Parameters(dependncies)])

 -> Funtion Load hoga to usko lee aaao, API call ko


Hook - useRef
 -> it use to return mutable ref object
 -> whoes current prop. is initialize by passed attribute(arguments)


Keys in React
 -> Keys do lots of optimization in React Loopings
 -> Key is use to optimization

Hook - useId
 -> Generate unique IDs that can be passed to accesible attributes
 -> 


npm i - React Router Dom
 -> as we get hooks from React, same somethings we get from "react-router-dom".
 -> 

RRD - Hook - Link
 -> we use "Link" tag in place of a(anchor tag).
 -> (a)anchor tag refresh full page, Link in react just re-render the DOM tree.
 -> We Get `to=` instead of `href=`

RRD - Hook - NavLink
 -> We get access to dynamic variable
 -> gives ability to inject Variable in callbacks
    isActive - 
        -> Dynamic ClassName tailwind changes
        -> 


RouterProvider (as Wrapper)
 -> it takes prop , either it can't work
 -> it takes router as props, and we have to create the router


HOW TO ASSEMBLE COMPONENTS
 -> We use <RouterProvider/> instead of rendering the <App/> 
 -> RouterProvider - takes the prop either it will not work
 -> the prop it takes is "router={}"
 -> pass the router in "{router}" - we have to create this router(inside the {}).

HOW TO CREATE ROUTER for RouterProvider
1st Method - `([{}])`
 -> it uses method called as - createBrowserRouter()
 -> this methods take Array as input
 -> in this Array we give all list of objects 
 -> 1st Oject takes path: '/', element: 'Root', children: '[]'
 -> children: [] also take objects includes path & elements.

2nd Method - `Nesting inside self-closing`
 -> use method createBrowserRouter() and createRoutesFromElements() method.
 -> inside that method add `<Route/>` inside self-closing tag
 -> then pass {path, element} inside the `<Route/>`
 -> then nest `<Route/>` inside `<Route/>` and pass {path & elements}



RRD - Outlet (used for Nesting components path wise)
 --+  Basically, Header and Footer remains same and Things inside it always stays dynamic.
 -> Create "Root.jsx" file and inside that file put Header, Outlet and Footer
 -> To Use Outlet we have to tell the Routing to main file



HOW TO GET PARAMETERS
 ->  use `useParams` Hook/library to access the parameters 
 -> store the params in some variable, then 


RRD - Loader (Use for Optimizations)
 -> we directly fire the API call in side this Loader prop
 -> it fetches the data before this hook works
 ->>> when you drag a mouse on that element, it start fetching the data without clicking
