import { PermanentBrowserStorage } from './browserStorage';

const storage = PermanentBrowserStorage;

test("Query storage for user key", () => {
    let userId = storage.getUserById("cus-0201");
    expect(userId).toBe(null);
});

test("Retrive valid user", () => {
    storage.putIntoStore("cus-0202", "Jhon Smith Chalas");

    let _uid = storage.getUserById("cus-0202");
    expect(_uid).toEqual("Jhon Smith Chalas");
});