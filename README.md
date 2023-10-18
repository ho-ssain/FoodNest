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
