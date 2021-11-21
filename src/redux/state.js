let posts = [
    {id: 1, message: 'Hi brosky, how\'s it going?', likes: 2},
    {id: 2, message: 'It\'s my first post', likes: 5}
]

let dialogsData = [
    {id: 1, name: 'Misha'},
    {id: 2, name: 'Katya'},
    {id: 3, name: 'Vanya'},
    {id: 4, name: 'Magomed'},
    {id: 5, name: 'Natali'},
    {id: 6, name: 'Eduard'},
    {id: 7, name: 'Sergey'}
]

let messages = [
    {id: 1, message: 'Hello Katya'},
    {id: 2, message: 'Hi Andrey'},
    {id: 3, message: 'How is it going?'},
    {id: 4, message: 'Nice and you?'}
]

let descrription = [
    {id: 1, question: 'Name: David'},
    {id: 2, question: 'Surname: Arakelyan'},
    {id: 3, question: 'Owner: Bitcoin, ETH, Dogecoin ...'},
    {id: 4, question: 'Balance: 23647326723 $'},
    {id: 5, question: 'City: Saratov, Russia'},
    {id: 6, question: 'Years Old: 17'},
    {id: 7, question: 'Gender: Walmart Backpack 132P'}
]

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi brosky, how\'s it going?', likes: 2},
            {id: 2, message: 'It\'s my first post', likes: 5}
        ],
        descrription: [
            {id: 1, question: 'Name: David'},
            {id: 2, question: 'Surname: Arakelyan'},
            {id: 3, question: 'Owner: Bitcoin, ETH, Dogecoin ...'},
            {id: 4, question: 'Balance: 23647326723 $'},
            {id: 5, question: 'City: Saratov, Russia'},
            {id: 6, question: 'Years Old: 17'},
            {id: 7, question: 'Gender: Walmart Backpack 132P'}
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Misha'},
            {id: 2, name: 'Katya'},
            {id: 3, name: 'Vanya'},
            {id: 4, name: 'Magomed'},
            {id: 5, name: 'Natali'},
            {id: 6, name: 'Eduard'},
            {id: 7, name: 'Sergey'}
        ],
        messages: [
            {id: 1, message: 'Hello Katya'},
            {id: 2, message: 'Hi Andrey'},
            {id: 3, message: 'How is it going?'},
            {id: 4, message: 'Nice and you?'}
        ]
    }
}

export default state;