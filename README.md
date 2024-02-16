# autocomplete-search-box

## API:

In this project I'm using the "Fake Store API" for fetching product data. Because this API provides mock data for an e-commerce store, including products with various categories, titles, descriptions, prices, and images. It's commonly used for testing and prototyping purposes when building applications that require product data.

## Implementation Strategy:

### Setting Up the Environment: 
I set up my development environment with the necessary tools and libraries for building a React application. This includes installing Node.js, creating a new React project using Create React App, and setting up any additional dependencies I might need.
### Component Structure: 
I used to design the structure of my application by identifying the different components needed to build my e-commerce search feature. In this case, I have at least three main components: <b>App, SearchBox, and ProductDetails.</b>
### Search Functionality: 
I implement the search functionality using the SearchBox component. As the user types in the search input field, the application sends requests to the Fake Store API with the entered search query. The API responds with a list of products matching the query, which is then displayed to the user as suggestions.
### Displaying Product Details: 
When a user selects a product from the search suggestions, the application retrieves detailed information about that product using its unique identifier. This information is then displayed using the ProductDetails component, showing the product title, image, description, and price.
### Styling: 
Finally, I used to apply styling to my components to enhance the visual presentation of my application. This includes adding CSS rules to control the layout, colors, and other visual aspects of my components, making the application more appealing and user-friendly.

## How to run the project?

First, make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from Node.js website.<br>
In your VS code terminal run --> git clone repository-url <br>
then Navigate to the Project Directory --> cd project-directory <br>
then run command --> npm start

