import {UsersService as Service} from '../users';

describe('UsersService', () => {
    let service;

    const $http = {};

    beforeEach(() => {
        service = new Service($http);
    });

    describe('constructor', () => {
        it('should have default properties set', () => {
            expect(service.$http).toBe($http);
        });
    });

    describe('getData', () => {
        //...
    });
});

