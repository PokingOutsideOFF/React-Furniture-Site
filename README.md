# 🛋️ Furniture E-Commerce Platform

A modern, full-stack furniture e-commerce web application built with React, featuring comprehensive shopping cart functionality, user authentication, and a seamless checkout experience.

![React](https://img.shields.io/badge/React-19.0.0-blue.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🌟 Features

### 🔐 User Management

- **User Authentication**: Secure login and registration system with form validation
- **Session Management**: Persistent user sessions using React Context API
- **Profile Management**: User profile page with account information
- **Protected Routes**: Route guards for authenticated content

### 🛒 Shopping Experience

- **Dynamic Product Catalog**: Browse 16+ furniture items across multiple categories (Sofas, Chairs, Beds, Tables)
- **Product Categories**: Organized product browsing with category filters
- **Responsive Product Cards**: Image galleries with hover effects and product details
- **Add to Cart**: Real-time cart updates with success notifications

### 🛍️ Cart Management

- **Live Cart Updates**: Real-time quantity adjustments with increment/decrement controls
- **Item Management**: Add, remove, and update product quantities
- **Price Calculations**: Automatic subtotal and total calculations
- **Cart Counter**: Persistent cart item count in header navigation

### 💳 Checkout System

- **Multi-Step Checkout**: Comprehensive billing details form
- **Form Validation**: Client-side validation for all input fields
- **Order Summary**: Detailed breakdown with subtotal, tax (15%), and total
- **Order Confirmation**: Order review before final submission

### 🎨 Design & UX

- **Fully Responsive**: Mobile-first design with Bootstrap 5
- **Modern UI**: Clean, professional interface with custom CSS
- **Smooth Navigation**: React Router v6 for seamless page transitions
- **Alert Notifications**: User feedback for actions (add to cart, errors, etc.)
- **FontAwesome Icons**: Professional iconography throughout

## 🚀 Tech Stack

### Frontend

- **React 19.0.0** - UI library for building component-based interfaces
- **React Router v6** - Client-side routing and navigation
- **React Context API** - Global state management for user and cart data
- **Bootstrap 5.3.3** - Responsive CSS framework
- **FontAwesome** - Icon library
- **Custom CSS** - Additional styling and animations

### Backend

- **JSON Server** - Mock REST API for rapid development
- **RESTful API** - CRUD operations for users, products, and orders

### Development Tools

- **Create React App** - Project bootstrapping and build tooling
- **React Scripts 5.0.1** - Build and development scripts
- **Web Vitals** - Performance monitoring

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/PokingOutsideOFF/React-Furniture-Site.git
cd React-Furniture-Site
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the JSON Server (Backend)**

```bash
npx json-server --watch ecommerce.json --port 5000
```

4. **Start the React App (Frontend)**
   Open a new terminal and run:

```bash
npm start
```

5. **Access the application**

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

## 📁 Project Structure

```
React-Furniture-Site/
├── public/
│   ├── assets/
│   │   ├── img/           # UI images and icons
│   │   └── products/      # Product images
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── Components/
│   │   ├── Header.js      # Navigation header
│   │   ├── Footer.js      # Footer component
│   │   ├── Login.js       # Login page
│   │   ├── Register.js    # Registration page
│   │   ├── Dash.js        # Dashboard/Home page
│   │   ├── Shop.js        # Shop page with filters
│   │   ├── Products.js    # Product grid component
│   │   ├── cart.js        # Shopping cart page
│   │   ├── Checkout.js    # Checkout page
│   │   ├── Profile.js     # User profile page
│   │   └── Contact.js     # Contact/About page
│   ├── Context/
│   │   ├── UserContext.js # User authentication context
│   │   └── CartContext.js # Shopping cart context
│   ├── css/               # Component-specific styles
│   ├── App.js             # Main app component with routing
│   └── index.js           # App entry point
├── ecommerce.json         # Mock database (products, users, orders)
├── package.json
└── README.md
```

## 🎯 Usage

### User Registration & Login

1. Navigate to the home page (Login screen)
2. Click "Register" to create a new account
3. Fill in the registration form with valid credentials
4. Login with your email and password

### Shopping

1. Browse products on the Dashboard or Shop page
2. Click "Add to Cart" on any product
3. View your cart by clicking the cart icon in the header
4. Adjust quantities using +/- buttons
5. Remove items if needed

### Checkout

1. Navigate to cart and review items
2. Click "Proceed to Checkout"
3. Fill in billing details
4. Review order summary with tax calculations
5. Place your order

## 🔌 API Endpoints

The JSON Server provides the following endpoints:

- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch single product
- `GET /users` - Fetch all users
- `GET /users?email=&password=` - User authentication
- `GET /orders` - Fetch all orders
- `GET /orders?userId=:id` - Fetch user-specific orders
- `POST /orders` - Create new order
- `DELETE /orders/:id` - Delete order

## 🛠️ Available Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`

Launches the test runner in interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder

### `npx json-server --watch ecommerce.json --port 5000`

Starts the JSON Server backend at port 5000

## 🎨 Features Deep Dive

### State Management

- **UserContext**: Manages authentication state (isLoggedIn, currentUserId, currentUserName)
- **CartContext**: Manages cart state (item count, add/remove operations)

### Form Validation

- Email validation with regex patterns
- Password strength requirements (6-15 chars, uppercase, lowercase, digit)
- Real-time validation feedback
- Dirty field tracking

### Responsive Design

- Mobile-first approach
- Bootstrap grid system
- Custom breakpoints for optimal viewing
- Touch-friendly UI elements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Sudhanshu Sabale**

- GitHub: [@PokingOutsideOFF](https://github.com/PokingOutsideOFF)
- LinkedIn: [Sudhanshu Sabale](https://www.linkedin.com/in/sudhanshu-sabale-28ab4520a/)
- Email: sudhanshussable2@gmail.com

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- UI components from [Bootstrap](https://getbootstrap.com/)
- Icons from [FontAwesome](https://fontawesome.com/)
- Mock backend using [JSON Server](https://github.com/typicode/json-server)

---

⭐ Star this repository if you found it helpful!
