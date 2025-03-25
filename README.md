# Pet-Safe Plant Identifier - React Web Application

## Project Description

This web application allows users to identify plants by uploading an image or using their device's camera. It leverages the Plant.id API to provide plant identification suggestions and information, focusing on pet-safe plants.

This project is built using React and is designed to be mobile-first and responsive, ensuring a good user experience across different devices.

## Project Structure

The project is structured as a standard Create React App (CRA) application. Here's a brief overview of the key directories and files:

```

pet-safe-plant-identifier-react/
├── node_modules/ (Project dependencies - automatically installed)
├── public/ (Public assets, including index.html)
│ └── index.html (Main HTML file)
├── src/ (Source code directory)
│ ├── App.js (Main application component)
│ ├── App.css (Global CSS styles)
│ ├── CameraPreview.js (Component for camera access and preview)
│ ├── ImageUpload.js (Component for image upload functionality)
│ ├── IdentificationResults.js (Component to display plant identification results)
│ ├── SuggestionItem.js (Component to display individual plant suggestions)
│ ├── index.js (Entry point for JavaScript, renders App component)
│ └── index.css (Global CSS resets)
├── .env.local (Environment variables - API key should be placed here for local development)
├── package.json (Project dependencies and scripts)
├── package-lock.json (Dependency version lock file)
└── README.md 

```

**Key Components and Files:**

*   **`src/App.js`:** The main container component that orchestrates the application, manages state, and handles API calls to Plant.id.
*   **`src/CameraPreview.js`:** Manages camera access and displays the live camera feed.
*   **`src/ImageUpload.js`:** Handles image file uploads and triggers plant identification.
*   **`src/IdentificationResults.js`:**  Displays the results from the Plant.id API, including plant suggestions and similar images.
*   **`src/SuggestionItem.js`:**  A reusable component for rendering each plant suggestion in the results list.
*   **`src/App.css`:** Contains global CSS styles, including mobile-first and desktop responsive styles using Flexbox and media queries.
*   **`.env.local`:**  This file is used to store environment variables locally. **For this project to run correctly, you need to set up the Plant.id API key in this file.**  See "API Key Setup" section below.

## Accessing and Testing the Project

To access and test this project, please follow these steps:

**1. Access the Repository on GitHub:**

*   Navigate to the GitHub repository for this project at: https://github.com/schwendyjr/pet-safe-plant-identifier-react

**2. Clone the Repository:**

*   Open a terminal or command prompt on your computer.
*   Navigate to the directory where you want to clone the project.
*   Run the following command, with the URL from GitHub:

    ```bash
    git clone https://github.com/schwendyjr/pet-safe-plant-identifier-react
    ```


**3. Navigate to the Project Directory:**

*   After cloning, navigate into the project directory:

    ```bash
    cd pet-safe-plant-identifier-react
    ```

**4. Install Dependencies:**

*   Run the following command to install all necessary Node.js packages and dependencies:

    ```bash
    npm install
    ```


**5. API Key Setup (Important):**

*   **You need a Plant.id API key to use the plant identification functionality.**
*   **If you already have a Plant.id API key:**
    1.  Create a file named `.env.local` in the **root** directory of the project (if it doesn't already exist).
    2.  Add the following line to `.env.local`, replacing `YOUR_API_KEY` with your actual Plant.id API key:

        ```
        REACT_APP_API_KEY=YOUR_API_KEY
        ```
    *   **If you need to obtain a Plant.id API key:**
        1.  Visit the [Plant.id website](https://plant.id/) and sign up for an account or explore their API offerings to obtain an API key. (Note: Free tiers may have usage limits).
        2.  Once you have the API key, follow the steps above to add it to your `.env.local` file.

**6. Start the Development Server:**

*   Run the following command to start the React development server:

    ```bash
    npm start
    ```

    or

*   This will typically open the application in your default web browser at `http://localhost:3000`.

**7. Testing the Application:**

*   **Camera Access (if available):** If you have a webcam, the application should request camera access. Allow camera access to see the live camera preview.
*   **Image Upload:**
    1.  Click on the "Choose File" button to select an image of a plant from your computer.
    2.  Click the "Identify Plant" button.
    3.  The "Identification Results" section will update with plant suggestions from the Plant.id API.
*   **Review Results:** Examine the identification results, which include:
    *   Scientific names of suggested plants.
    *   Probability percentages indicating the confidence level of the identification.
    *   Similar images of the suggested plants (if available from the API).
*   **Responsiveness:** Resize your browser window or test on different device emulators (using browser developer tools) to see how the layout adapts to different screen sizes.

**8. Stopping the Development Server:**

*   To stop the development server, press `Ctrl + C` in the terminal where it is running.

## Further Development Notes

This project can be further enhanced by:

*   **Pet Safety Information:** Integrating data on plant toxicity to pets to clearly indicate if a suggested plant is pet-safe or toxic.
*   **Improved UI/UX:**  Enhancing the user interface and user experience, potentially with better error handling, loading indicators, and result presentation.

