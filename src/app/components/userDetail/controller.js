/* @ngInject */
export default class UserDetail {

    constructor(usersService) {
        this.usersService = usersService 
        this.user = '';
    }

    $onInit() {
        this.fetchUsers();
    }

    fetchUsers() {
        this.usersService.getData({}).then(response=> {
            this.users = response.data;
        });
    }

    showUser(){
        var id = window.localStorage.getItem('user');        
        return this.users.find(user => user.id == id);
    }

}
