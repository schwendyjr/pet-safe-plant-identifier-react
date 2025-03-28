# Pet-Safe Plant Identifier - React Web Application

## Project Description

This web application allows users to identify plants by uploading an image or using their device's camera. It leverages the Plant.id API to provide plant identification suggestions. **Now enhanced with pet safety information**, the application indicates the potential toxicity of identified plants to pets, drawing upon a curated local database of plant toxicity data.

This project is built using React and is designed to be mobile-first and responsive, ensuring a good user experience across different devices.  Users can now also **capture a photo directly from their webcam** within the application to initiate plant identification.

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
│ ├── PetSafetyService.js (Service to provide plant toxicity information) <--- ADDED
│ ├── data.js (Local plant toxicity data) <--- ADDED
│ ├── config.js (Currently empty)
│ ├── index.css (Global CSS resets)
│ ├── index.js (Entry point for JavaScript, renders App component)
│ ├── reportWebVitals.js
│ └── setupTests.js
├── .env.local (Environment variables - API key should be placed here for local development)
├── package.json (Project dependencies and scripts)
├── package-lock.json (Dependency version lock file)
└── README.md

```

**Key Components and Files:**

*   **`src/App.js`:** The main container component that orchestrates the application, manages state, and handles API calls to Plant.id.  **It now also manages the camera stream lifecycle to optimize camera access and prevent repeated permission requests.**
*   **`src/CameraPreview.js`:** Manages camera access and displays the live camera feed. **Users can now capture a photo directly from the camera preview using a "Capture Photo & Identify" button to initiate plant identification.**
*   **`src/ImageUpload.js`:** Handles image file uploads and triggers plant identification.
*   **`src/IdentificationResults.js`:**  Displays the results from the Plant.id API, including plant suggestions and similar images. **Results are now filtered to show only suggestions with a probability greater than 20%. It also displays a message when no high-confidence suggestions are found.**
*   **`src/SuggestionItem.js`:**  A reusable component for rendering each plant suggestion in the results list. **It now displays plant suggestions with common names (when available) and includes pet toxicity indicators (icons and text) with tooltips providing detailed toxicity notes from a local plant data source.**
*   **`src/PetSafetyService.js`:** **A new service component responsible for loading and providing access to plant toxicity data from `data.js`. It offers functions to retrieve toxicity information based on plant names.**
*   **`src/data.js`:** **A new file containing a local database of plant toxicity information. This JavaScript module exports an array of plant data and utility functions for querying and filtering plant toxicity information.**
*   **`src/App.css`:** Contains global CSS styles, including mobile-first and desktop responsive styles using Flexbox and media queries.
*   **`.env.local`:**  This file is used to store environment variables locally. **For this project to run correctly, you need to set up the Plant.id API key in this file.**

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

*   **Expanding the Plant Toxicity Database:** Continuously adding more plant entries to `src/data.js` to increase the coverage of pet safety information.  Potentially explore more automated ways to update this data from reliable sources (while respecting website terms and data usage policies).
*   **Refining Plant Name Matching:** Further improve the plant name matching logic in `PetSafetyService` or `data.js` to handle more complex variations in scientific names and common names. Consider using fuzzy matching or a more sophisticated plant taxonomy database if needed for even greater accuracy.
*   **Pet Safety Information Display Enhancements:**
    *   **More detailed toxicity levels:** Instead of just "toxic" and "non-toxic", consider adding more granular levels (e.g., "highly toxic", "mildly toxic", "irritant").
    *   **Animal-specific toxicity:**  Display toxicity information specific to different types of pets (dogs, cats, etc.) more prominently.
    *   **Visual improvements for toxicity indicators:** Use more distinct icons or color-coding to clearly represent different toxicity levels.
    *   **Direct links to ASPCA or other reliable sources:** Provide links to the ASPCA website or other reputable sources for users to get more in-depth information about plant toxicity.
*   **Improved UI/UX:**  Continue to enhance the user interface and user experience, potentially with:
    *   Better error handling and user feedback for API errors or camera access issues.
    *   Loading indicators and progress bars for image upload and plant identification.
    *   More visually appealing presentation of identification results and pet safety information.
    *   Accessibility improvements.
