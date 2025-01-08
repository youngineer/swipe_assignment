# Automated Data Extraction and Invoice Management

A **React.js** application for automating data extraction, processing, and management of invoices, products, and customer details. This app uses **AI-powered solutions** to handle multiple file formats, ensures real-time updates with **Redux Toolkit**, and features a clean and modern UI built with **Material UI**.

## Features

- **File Upload**: Supports uploading files in various formats, including:
  - Excel files with transaction details.
  - PDF or image files containing invoice data.
- **AI-Powered Data Extraction**: Extracts data and organizes it into three main sections:
  - **Invoices**: Displays details like serial number, customer name, product, quantity, tax, and total amount.
  - **Products**: Lists products with columns for name, quantity, unit price, tax, and total price with tax.
  - **Customers**: Shows customer name, phone number, and total purchase amount.
- **Dynamic State Management**: Real-time synchronization of data across all tabs using **Redux Toolkit**.
- **Validation and Error Handling**:
  - Highlights missing fields in uploaded data.
  - Provides feedback for unsupported file formats or extraction errors.
- **Responsive Design**: Built with **Material UI** for a modern and accessible user interface.

## Tech Stack

- **Frontend**: React.js, Material UI
- **State Management**: Redux Toolkit
- **Deployment**: Vercel
- **AI Integration**: AI-powered data extraction for processing different file formats.

## Live Demo

Check out the deployed application here: [Live App](https://swipe-assignment-kartiks.vercel.app)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/youngineer/swipe_assignment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd swipe_assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:1234`.

## Screenshots

_Add screenshots of the app showcasing its features._

## Contributions

Feel free to fork this repository and submit pull requests for improvements.
