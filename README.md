# React Native Medicine Tracker App  

This React Native application allows users to effectively track their medicine usage.  

## About the Project  

This project idea is inspired by a tutorial from **TubeGuruji** on YouTube.  
- **TubeGuruji YouTube Channel**: [Link](https://www.youtube.com/@tubeguruji)  
- **Original Project Tutorial**: [Watch Here](https://youtu.be/2ua_Eu0LhcI?si=mlsOL7cr-CQDNhZA)  

### Differences Between My Project and TubeGuruji's Project  

| Feature/Aspect                    | My Project                                      | TubeGuruji's Project                       |
|-----------------------------------|------------------------------------------------|-------------------------------------------|
| **Styling**                       | NativeWind for modern, utility-first styling   | Vanilla CSS                               |
| **Code Reusability & Structure**  | Well-structured and reusable components        | Not reusable or well-structured           |
| **Routing**                       | Follows Expo guide for protected routes        | Basic routing implementation              |
| **Authentication Logic**          | Centralized using Context API                  | Decentralized                             |
| **Persistence**                   | Firebase native feature for user persistence   | `asyncStorage` for user persistence       |
| **Language**                      | TypeScript for type safety                     | JavaScript                                |
| **Source Code Availability**      | Available in this repository                   | Source code is not provided               |

## Features  

### Authentication  
- **Firebase Integration**:  
  - User authentication for sign-up and login.  
  - Persistent user sessions to keep users logged in even after app reload or close.  

### Medicine Management  
- Users can add new medicines with relevant details.  
- Update medicine status:  
  - **Taken**  
  - **Missed**  

### Routing  
- **Public and Private Routes**:  
  - Public routes for general access.  
  - Private routes for authenticated users.  

### History Page  
- View a detailed history of medicine intake, including statuses and timestamps.  

## Technologies Used  
- **React Native**: For building the mobile application.  
- **NativeWind**: For modern, utility-first styling.  
- **Firebase**:  
  - Authentication for user login and registration.  
  - Firestore database for storing and managing medicine data.  
  - Native user persistence feature.  
- **TypeScript**: For type safety and better development experience.  


## Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/emondewan00/medi-tracker 
   ```
2. Navigate to the project directory:
    ```bash 
    cd medicine-tracker-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the app
    ```bash 
    npx expo start
     ```



## User Experience  
- **Session Persistence**:  
  - Users stay logged in after app reload or reopening.  
- Clean and user-friendly interface for tracking and managing medicines.  

---

Feel free to contribute or report any issues! 😊  