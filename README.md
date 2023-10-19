# BurgerNest

## (An e-commerce online food-ordering system for selling burgers and various other food items.)

### ...........Implementation overview:-

**Used Stack**
MEAN (MongoDB, Express, Angular, Node)

**_Environment tools-:_**

- git
- github
- VScode
- Angular CLI
- nodeJS
- npm
- RapidAPI Client
- required VScode extensions for this project

---

**_Client side creation Phase-:_**

- npm i -g @angular/cli
- ng version
- ng n frontend
- ng serve -o

1=> **_designing the header part of the app_**

1. g component (ng g c components/partials/header) (note-: header is Global component)
2. structuring HTML and CSS

2=> **_Food List_**

1. Food Model
2. data.ts (sample foods)
3. assests
4. Food Service
   functionality-:
   - getAll()
5. generate Home Component (ts + html + css)

3=> **_Search_**

1. Food Service (need Search method)
2. Route (need Search route)
3. show search result in home component ((listen to the route))
4. generate search Component
   1. add to Home component
   2. add ts
   3. add html
   4. add css

4=> **_Tags Bar_**

1. Tag Model
2. sample tags to data.ts
3. Food Service
   1. Add get All tags method
   2. Add get all foods by tag method
4. Add tags route
5. Show tag result in Home Component
6. Generate tags component
   1. Add to Home component
   2. Add ts
   3. Add html
   4. Add css

5=> **_Adding Food Page_**

1. food Service ()
2. g Food-page Component
   1. add route
   2. add ts
   3. add html
   4. add css

6=> **_Cart Page_**

1. cart-item model
2. cart model
3. cart service
4. add cart button to food page
5. cart page component
   1. add route
   2. add ts
   3. add html
   4. add css

7=> **_Not Found! functionality_**

1. cretae NF Component
   1. ts
   2. html
   3. css
2. add to pages
   1. Home page
   2. Food Page
   3. Cart Page

---

**_Server side creation Phase-:_**

1=> Connect to backend

1. create backend folder
2. npm init
3. npm i typescript
4. tsconfig.json
5. .gitignore
6. sample data.ts
7. npm i express cors
8. server.ts
   1. i @types
   2. add Api's
9. npm i nodemon ts-node --save-dev
10. add urls.ts to frontend
11. add HttpClient module
12. Update food Service

---

**_Login Page_**

1. generate component
   1. add to routers
   2. add ts
   3. add html
      1. import reactive forms module
   4. add css
2. add login api

   1. use json
   2. add json-web-token
   3. test using rapid api client

3. connecting com --> api by User service
   1. user model
   2. user subject
   3. login method
      1. user urls
      2. IUserLogin interface
      3. add ngx-toastr
         1. import module
         2. import BrowserAnimationsModule
         3. add styles in angular.json
      4. add to Header
   4. add local storage methods
   5. add logout method
      1. add to Header
