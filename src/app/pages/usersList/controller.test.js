import UsersList from './controller';

let ctrl;

describe('UsersList controller', () => {
    const usersService = {};

    beforeEach(() => {
        ctrl = new UsersList(usersService);
    });

    describe('constructor', () => {
        //...
    });

    describe('$onInit', () => {
        //...
    });

    describe('fetchUsers', () => {
        const response = {
            data: []
        };
        beforeEach(() => {
            usersService.getData = jasmine.createSpy('getData');
            usersService.getData.and.returnValue({
                then: ()=>{}
            })

        });

        it('should set users property with reponse.data', () => {
            ctrl.fetchUsers();

            expect(ctrl.users).toEqual(response.data);
        });
    });
});
