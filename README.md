# Projet_Angular – Event Management Web App (Angular + Firebase)

A web application built with **Angular** and **Firebase** for managing events, users, and related data. This project showcases a single‑page application (SPA) built with the Angular framework, including development, build, and test workflows.

---

## Project Purpose

This is an **Angular client‑side application** for managing events and associated user data. It was developed as part of a coursework assignment and demonstrates a working Angular frontend with routing, component interaction, and Firebase backend integration.

---

## Project Structure

```

Projet_Angular/
├─ .github/                 # GitHub workflows
├─ .vscode/                 # Editor configuration
├─ src/                     # Angular application source
├─ angular.json             # Angular CLI configuration
├─ firebase.json            # Firebase hosting config
├─ package.json             # Node & Angular dependencies
├─ tsconfig.json            # TypeScript config
├─ README.md
└─ .gitignore

````

---

## Prerequisites

Before running the project, ensure you have:

- **Node.js** (v14+)  
- **npm** (or Yarn)  
- **Angular CLI** installed globally:
```bash
npm install -g @angular/cli
````

---

## Local Deployment

### 1. Clone the Repository

```bash
git clone https://github.com/EmmaDjeufa/Projet_Angular.git
cd Projet_Angular
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Serve the Application

Run the Angular development server:

```bash
ng serve
```

Then open your browser and navigate to:

```
http://localhost:4200
```

### 4. Build for Production

To compile the app for production:

```bash
ng build --prod
```

Built files will be output to the `dist/` folder.

---

## Features

* **Angular SPA** with routing and component‑based architecture ([GitHub][1])
* **Firebase integration** (hosting, authentication/data) ([GitHub][1])
* **TypeScript + Angular CLI** development workflow ([GitHub][1])
* **Development & production builds** managed via Angular CLI ([GitHub][1])

---

## Testing

* **Unit tests:**

```bash
ng test
```

* **End‑to‑end tests (if configured):**

```bash
ng e2e
```

---

## Feedback & Contributions

* **Report issues:** Open a GitHub issue for bugs or suggestions
* **Contribute:** Fork the repository and submit a pull request
* **Contact:** Reach out via GitHub for questions or collaboration

