## Component communication

This lesson is a recap to things we already know about component and we will exercise this recap using a simple component communication pyramid.

### Syllabus

- Styles
- @Input
- @Output
- Service
- Template Reference Variable
- ViewChild
- Transclusion
- ContentChild

# EX.

- Create the following pyramid of components
    - App
    - Child1
    - Child2
    - GrandChild1
    - GrandChild2
- You will have to communicate between all these components by passing messages from one to the other and displaying those message.
- GrandChild2 will send a message to GrandChild1 via a Service, the message will be sent via a form with a text input
- Child2 will transfer an @Input to GrandChild2 that will display a message on GrandChild2
- Use the same form in GrandChild2 and place another button that will send the text to @Output and to the parent
- Child2 will grab the instance of GrandChild2 and will call a function that returns a string in the AfterViewInit and will print that string in his template.
- App will transfer ng-content to Child1