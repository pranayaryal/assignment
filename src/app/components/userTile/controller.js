
/* @ngInject */
export default class UserTile {

    constructor(usersService) {
        this.usersService = usersService;
    }

    $onInit() {
        this.fetchUsers();
    }

    fetchUsers() {
        this.usersService.getData({}).then(response=> {
            this.users = response.data;
        });
    }

    storeUser(user){
        var myStorage = window.localStorage;
        myStorage.setItem('user', user.id);
    }

}
