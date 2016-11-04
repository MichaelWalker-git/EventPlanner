# EventPlanner
Event Planning using Google Forms Best Practices
 

Completion of Required PRoject Specs/ Features:

Account Creation
  Name
  Email address
  Secure password (with character and length requirements)
  Optional fields:
  Public biographical information (such as employer, job title, birthday, etc). This field can be optional to the user submitting the form.

Event Creation: Create a new event.
  Required fields:
    Name of the event
    Type of the event (birthday party, conference talk, wedding, etc.)
    Event host (could be an individual’s name or an organization)
    Event start date and time
    Event end date and time
    Guest list
    Location
  Optional fields:
    Optional message to the guests with additional information about the event

Event Display
  The app should display events that have been created.

User Experience
  Mobile Experience
    On mobile, the form is fully functional and reacts to touches naturally.

  Screen Reader Compatibility
    The form is understandable while using a screen reader.

  Logical Order of Form
    Form prompts appear in a logical order.

Responsiveness: Responsive Design
  Content is responsive and presents all information clearly on a variety of devices (including desktop, tablet, and mobile).
  
Prompts
  Most form prompts (including labels, placeholders, etc) are designed for users and their goals - they are phrased in friendly, human language.

Simplified Design
  There are as few inputs as possible.

Validation
  Users cannot submit a form with invalid information. Validation occurs no later than immediately after user focus leaves the input and is obvious.

Input Design
  Auto-Fill Compatible
    Users can pre-fill inputs with existing data.

  Appropriate Input Types
    All inputs (whether or not as actual <input> elements) have appropriate types.

  Input Labeling
    All inputs are labeled (even if a placeholder replaces an actual <label>, the label should still exist for screen readers).

  Auto-Focus
    The autofocus attribute is applied to the first input above-the-fold.

  Required Attribute
    The required attribute is applied to inputs that are vital to the form’s goal and only to those vital elements.

App Delivery
  Build Process
  App includes a build process (such as Grunt or Gulp). Assets are minimized and concatenated as appropriate.
