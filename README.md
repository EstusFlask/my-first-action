# my-first-action

Just my first action, for learning purposes.

## Explained

### Use case
https://github.com/EstusFlask/my-first-action/blob/5a170f084c332a7da0bfca297fa1b76099c27087/.github/workflows/test-action.yaml#L1-L14
        

#### 1. This action runs when a push is made over the repository.
https://github.com/EstusFlask/my-first-action/blob/5a170f084c332a7da0bfca297fa1b76099c27087/.github/workflows/test-action.yaml#L1

#### 2. I call the action in the workflow jobs, with the key ```my_first_action_job``` and the id ```firstaction``` .
https://github.com/EstusFlask/my-first-action/blob/5a170f084c332a7da0bfca297fa1b76099c27087/.github/workflows/test-action.yaml#L3-L9

#### 3. To use an specific version, I tagged the action. 
https://github.com/EstusFlask/my-first-action/releases/tag/v1.0.1

https://github.com/EstusFlask/my-first-action/blob/5a170f084c332a7da0bfca297fa1b76099c27087/.github/workflows/test-action.yaml#L10

#### 4. Then we have to pass the input value, called ```name```.
https://github.com/EstusFlask/my-first-action/blob/5a170f084c332a7da0bfca297fa1b76099c27087/.github/workflows/test-action.yaml#L11-L12

  Then I recover it in the javascript code
https://github.com/EstusFlask/my-first-action/blob/5a170f084c332a7da0bfca297fa1b76099c27087/index.js#L1-L5

#### 5. After that, I set an output that you can recover in the actions steps and use it.
https://github.com/EstusFlask/my-first-action/blob/5a170f084c332a7da0bfca297fa1b76099c27087/index.js#L11
  
  In this case I use it to print the datetime.
  https://github.com/EstusFlask/my-first-action/blob/5a170f084c332a7da0bfca297fa1b76099c27087/.github/workflows/test-action.yaml#L13-L14
