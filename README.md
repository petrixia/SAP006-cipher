# Crypticwm 

Crypticwm is a simple encryption tool targeting young people who seek greater security for their personal records. The application integrates access links to support networks and mental health information, aiming to support youth whose mental health has been severely impacted during the COVID-19 pandemic.

Using Crypticwm, users can securely register phrases, thoughts, and insights, making psychotherapeutic or psychoanalytic processes more effective without "forgetting to talk" about important topics during sessions.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Planning and Research](#planning-and-research)
- [Technical Overview](#technical-overview)
- [User Profile & Product Decisions](#user-profile--product-decisions)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## About

Crypticwm Mind leverages the classic [Caesar Cipher](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) encryption algorithm to help users keep their thoughts private. Inspired by the increase in youth mental health challenges during the pandemic, this tool also provides informational links and resources for mental well-being.

---

## Features

- **Encrypt and decrypt messages** using Caesar Cipher with a user-defined offset
- **Easy-to-use web interface** (HTML, CSS, JavaScript)
- **Direct links to mental health resources**
- **Offline functionality** (runs locally in your browser)
- **Support for uppercase, lowercase, and special characters**
- **Unit tests for core encryption logic**

---

## Installation

1. **Download or Clone the Repository:**
   - [Download ZIP](https://github.com/petrixia/SAP006-cipher/archive/refs/heads/main.zip) or run:
     ```sh
     git clone https://github.com/petrixia/SAP006-cipher.git
     ```
2. **Extract Files:**
   - Use [7-zip](https://www.7-zip.org/) or any archive tool to extract the files.

3. **Open the App:**
   - Navigate to the `/src` folder.
   - Double-click `index.html` or right-click and open it in your preferred browser.

---

## Usage

1. Follow the on-screen instructions to input your message and select the desired offset.
2. Encrypt or decrypt your text using the provided options.
3. Explore the embedded links for mental health resources and support.

---

## Planning and Research

- **Research Base:** [Youth Mental Health Report 2020 - World Economic Forum](http://www3.weforum.org/docs/WEF_Youth_Mental_Health_2020.pdf)
- **Planning Board:** [Notion Planning](https://www.notion.so/fd31be2894a14187b7a99f64de07a9cb?v=7de7b1e0efdb48d7b11ca039d871d06e)

---

## Technical Overview

- **Languages:** JavaScript, HTML, CSS
- **Project Structure:**
  ```
  .
  ├── src
  │   ├── cipher.js      # Caesar cipher logic
  │   ├── index.html     # Main HTML file
  │   ├── index.js       # App logic and DOM manipulation
  │   └── style.css      # Styling
  └── test
      └── cipher.spec.js # Unit tests
  ```
- **No frameworks required:** Pure JavaScript (VanillaJS)
- **Testing:** Run with `npm test` (requires Node.js and npm)

---

## User Profile & Product Decisions

- **Primary users:** Young people seeking privacy for personal thoughts and mental health notes.
- **User goals:** To safely encrypt and store sensitive messages, and access mental health resources.
- **Product value:** Provides a simple, private journaling tool that encourages mental well-being and offers immediate access to support links.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or suggestions.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- Laboratoria Bootcamp SAP006
- World Economic Forum – Youth Mental Health Research
- [Original README project instructions](#)
- [Caesar Cipher - Wikipedia](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)

---

> Let's help make mental health support more accessible and private for everyone!
