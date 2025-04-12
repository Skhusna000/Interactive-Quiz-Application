# Interactive-Quiz-Application

COMPANY: CODTECH IT SOLUTIONS
NAME:  SHAIKH HUSNA RASHID 
DOMAIN:  FRONT-END DEVELOPMENT 
INTERN ID: CT12WPGC
DURATION : 12 WEEKS 
MENTOR: NEELA SANTHOSH KUMAR

DESCRIPTION: 

Project Title: Interactive Quiz Application Using HTML, CSS, and JavaScript

Overview: The Interactive Quiz Application is a web-based tool developed using HTML, CSS, and JavaScript. It provides users with a multiple-choice quiz that includes a countdown timer, real-time feedback, and a final score summary. This lightweight, client-side quiz system is ideal for beginners in web development and educators looking to create a quick assessment platform without using a backend server.

Purpose: The purpose of this project is to build a fully functional quiz application that tests a user’s knowledge through a series of timed questions. It uses core JavaScript logic and DOM manipulation to dynamically render questions, track scores, handle time limits, and respond to user interactions. The system enhances learning by providing immediate feedback on each selection.

Technology Stack:
    HTML5: Structures the layout and content of the quiz.
    CSS3: Styles the interface to ensure a clean, responsive, and user-friendly design.
    JavaScript: Powers the quiz logic including question rendering, timer, score calculation, and event handling.

Application Flow: On loading the page, users are greeted with a Start Screen. Clicking the Start button initializes the quiz, and the first question is displayed along with a 10-second countdown. Each question is randomly selected and offers four options. Users must answer before the time runs out. After a selection or timeout, the quiz proceeds to the next question.

Initialization:
The initial() function:
    Resets quiz state (score, timer, question index).
    Randomizes question and option order.
    Starts the countdown.
    Displays the first question using quizDisplay().

Question Display and Answer Checking:
The quizCreator() function creates question cards dynamically:
    Each card contains a question and four shuffled options.
    On clicking an option, the checker() function verifies if the answer is correct.
        If correct: highlights the option in green and increases the score.
        If incorrect: highlights the wrong choice in red and shows the correct one.
    All options are then disabled to prevent multiple answers.

Timer:
Each question has a 10-second countdown:
    Handled by timerDisplay() using setInterval().
    If the time runs out before an answer is selected, it automatically moves to the next question.
    Timer resets with each new question.

Navigation and Completion: The Next button triggers displayNext() to move to the next question.
    At the end of the quiz, the score screen appears, showing the user’s total score.
    The Restart button resets the quiz and returns the user to the beginning.

Design and User Experience: 
The user interface includes:
    A start screen with a clear call-to-action.
    A quiz screen showing the question, options, and a visible countdown.
    A final score screen with feedback.
The application is styled with CSS for clarity and responsiveness, ensuring a good experience across devices. Correct and incorrect answers are highlighted visually to reinforce learning.

Key Features: Randomized Question & Option Order: Each session feels new.
    Timer for Each Question: Promotes quick thinking.
    Instant Feedback: Correct/incorrect responses shown immediately.
    Score Display: Users can review their performance.
    Restart Option: Encourages replayability and learning.

Conclusion: The Interactive Quiz Application is a clean, responsive, and effective tool built entirely with front-end technologies. It’s ideal for self-assessment, educational websites, or as a learning project for JavaScript beginners. The structure allows for easy customization and future enhancements, such as category selection, high-score tracking, or integration with databases for user analytics.
