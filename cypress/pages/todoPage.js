import NewTodoPage from "./newTodoPage";

class TodoPage{
//Elements
     get welcomeMessage () {
        return cy.get('[data-testid="welcome"]');
    }
    get plusButton () {
        return cy.get('[data-testid="add"]');
    }
    get FirstTodoItem (){
        return cy.get('[data-testid="todo-item"]').eq(0)
    }

    get firstTodoCheckbox () {
        return cy.get('[data-testid="complete-task"]').eq(0)
    }




    //Methods

    load(){
        cy.visit("/todo")
        return this;
    }
    welcomeMessageShouldBeVisible(){
        this.welcomeMessage.should('be.visible');
        return this;
    }
    clickOnPlusButton(){
        this.plusButton.click()
        return new NewTodoPage;
    }

  firstItemShouldHaveText (text){
    this.FirstTodoItem.should('have.text',text)
    return this;
  }

  markFirstTodoAsCompleted () {
    this.firstTodoCheckbox.click()
    return this;
  }
  firstItemShouldHaveBackgroundColor(color){
    this.FirstTodoItem.should('have.css','background-color',color);
    return this;
  }
 
}

export default TodoPage;