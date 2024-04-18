import UserApi from "../api/userApi";

class TodoApi {
    static addNewTodo(token){
       return cy.request({
            url: "/api/v1/tasks",
            method : "POST",
            auth : {
                bearer : token,
            },
            body : {
                isCompleted : false,
                item : "Learn Cypress",
            },
    });
    }
}
export default TodoApi;