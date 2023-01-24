import './App.css';
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createUser } from './graphql/mutations'
import { listUsers } from './graphql/queries'
import { withAuthenticator, Button, Heading, Text, TextField, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: [] }

const App = ({ signOut, user }) => {

    const [formState, setFormState] = useState(initialState)
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function fetchUsers() {
        try {
            const userData = await API.graphql(graphqlOperation(listUsers))
            const users = userData.data.ListUsers.items
            setUsers(users)
        } catch (err) { console.log('error fetching users') }
    }

    async function addUser() {
        try {
            if (!formState.name || !formState.description) return
            const user = { ...formState }
            setUsers([...users, user])
            setFormState(initialState)
            await API.graphql(graphqlOperation(createUser, { input: user }))
        } catch (err) {
            console.log('error creating user:', err)
        }
    }

    return (
        <View style={styles.container}>
            <Heading level={1}>Hello {user.username}</Heading>
            <Button style={styles.button} onClick={signOut}>Sign out</Button>
            <Heading level={2}>Amplify Users</Heading>
            <TextField
                placeholder="Name"
                onChange={event => setInput('name', event.target.value)}
                style={styles.input}
                value={formState.name}
            />
            <TextField
                onChange={event => setInput('description', event.target.value)}
                style={styles.input}
                value={formState.description}
                placeholder="Description"
            />
            <Button style={styles.button} onClick={addUser}>Create User</Button>
            {
                users.map((user, index) => (
                    <View key={user.id ? user.id : index} style={styles.user}>
                        <p style={styles.userName}>{user.name}</p>
                        <p style={styles.userDescription}>{user.description}</p>
                    </View>
                ))
            }
        </View>
    )
}

const styles = {
    container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
    user: { marginBottom: 15 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    userName: { fontSize: 20, fontWeight: 'bold' },
    userDescription: { marginBottom: 0 },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App);