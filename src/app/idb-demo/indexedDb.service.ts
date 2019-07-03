import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase, deleteDB } from 'idb';
@Injectable()
export class IndexedDbService {
    private dbConnection: Promise<IDBPDatabase<any>>;
    constructor() {
    }

    async wtireData(storeName, data) {
        console.log('store&data', storeName);
        const db = await this.dbConnection;
        console.log('connection', db);
        const tx = db.transaction(storeName, 'readwrite');
        console.log('tx', tx);
        const store = tx.objectStore(storeName);
        console.log('storename', store);
        store.put(data);
        console.log('storeput', store);
        return tx.done;
    }

    async readAllData(storeName) {
        try {
            const db = await this.dbConnection;
            const tx = db.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            return store.getAll();
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async openDb(name, ver, storeName, keyPath) {
        // this.storeName = storeName;
        // with this promise we can access the database with the object-
        this.dbConnection = openDB(name, ver, {
            upgrade(db) {
                // create objectStore only if not exists
                if (!db.objectStoreNames['contains'](storeName)) {
                    db.createObjectStore(storeName, { keyPath });
                }
                if (!db.objectStoreNames['contains']('books')) {
                    db.createObjectStore('books', { keyPath });
                }
            }
        });
        
    }

    async readData(storeName, id) {
        // read single data
        try {
            const db = await this.dbConnection;
            const tx = db.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            return store.get(id);
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async clearStore(storeName) {
        try {
            const db = await this.dbConnection;
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            store.clear();
            return tx.done;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async clearItemInStore(storeName, id) {
        try {
            const db = await this.dbConnection;
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            store.delete(id);
            return tx.done;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async dropDb(dbName) {
        try {
            await deleteDB(dbName);
        } catch (err) {
            console.log('Error while deleting DB ', err);
        }
    }


}
