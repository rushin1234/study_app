import { Client, Storage, Databases, Account } from 'appwrite';
export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('665040000023dc72190e');


export const appwriteConfig = {
    bucketId: '665041d70010542918ac',
    dbId: '6650420700116ea2be92',
    collectionId: '66505e84001bbe34db87'
}

export const storage = new Storage(client)
export const database = new Databases(client)
export const account = new Account(client)
