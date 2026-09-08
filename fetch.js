async function fetchUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
        });

        if(!res.ok) throw new Error(res)

        const data = await res.json();
        console.log(data)

    } catch (error) {
        console.log('error:')
        console.log(error)
    }
}

fetchUsers()