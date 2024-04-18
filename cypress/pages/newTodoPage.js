import TodoPage from "../pages/todoPage";

class NewTodoPage {
//Elements
get addNewTodoField () {
    return cy.get('[data-testid="new-todo"]');
}
get addNewTodoButton () {
    return cy.get('[data-testid="submit-newTask"]');
}





//Methods

load(){
    cy.visit("/todo/new")
    return this;
}
addNewTodo(todoName){
    this.addNewTodoField.type(todoName)
    this.addNewTodoButton.click()
    return new TodoPage()

}
}

export default NewTodoPage;