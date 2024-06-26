/// <reference types="cypress" />
import UserApi from "../api/userApi";
import TodoApi from "../api/todoApi";
import TodoPage from "../pages/todoPage"
import NewTodoPage from "../pages/newTodoPage";


describe ("Todo test cases", () => {
    let token;
    beforeEach  (() => {
    UserApi.register().then((response) => {
        token = response.body.access_token;
    })

    })
    it("should be able to add new todo" , () => {
        new TodoPage ()
        .load()
        .clickOnPlusButton()
        .addNewTodo(("Learn Cypress"))
        .firstItemShouldHaveText("Learn Cypress");
    
    });
    
    it("should be able to mark a todo as completed", () => {
        TodoApi.addNewTodo(token);
        new TodoPage ()
        .load()
        .markFirstTodoAsCompleted()
        .firstItemShouldHaveBackgroundColor("rgb(33, 76, 97)") 

    })
}
)
