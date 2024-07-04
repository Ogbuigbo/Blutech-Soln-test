# Bluetech-Solu-test

# Product Management Dashboard

This is a React-based product management dashboard that displays a table of products. The table allows users to view product details and manage the products efficiently.

## Features

- Display a list of products in a table format
- Pagination to view multiple products
- Search and filter form for finding specific products
- Responsive design for better user experience

## Project Structure

## Setup Instructions

Follow these steps to set up the project locally:

### Prerequisites

- Node.js v18.17.0
- npm 9.6.7

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/product-management-dashboard.git
    cd product-management-dashboard
    ```

2. **Install dependencies:**

    Using npm:
    ```bash
    npm install
    ```


3. **Start the development server:**

    Using npm:
    ```bash
    npm start
    ```

    The app should now be running on [http://localhost:3000](http://localhost:3000).

### API Context Setup

The `ApiContext` is used to fetch and manage product data from an external API. The API endpoint used in this project is: http://3.88.1.181:8000/products/public/catalog
You can update this endpoint in `ApiContext.js` if needed.

### Components

- **Header:** The header component of the application.
- **ProductTable:** The table component that displays the list of products.


## Customization

- **Styling:** You can update styles in `App.css`.
- **API Endpoint:** Update the API endpoint in `ApiContext.js` to fetch products from a different source.
- **Pagination & Filters:** Implement pagination and filtering logic in `ProductTable`.
- **Dropdown Menu:** Select different product catalogues in `Header`.



## Acknowledgements

- React for providing an excellent framework for building UIs.
- Tailwind CSS for utility-first CSS framework.

---

Feel free to contribute to the project by opening issues or submitting pull requests.